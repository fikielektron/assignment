import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SubSink } from 'subsink';
import { Flight } from '../models/flight.model';
import { User } from '../models/user.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})


export class DataService implements OnDestroy{

  //Subscriptions
  subs = new SubSink();
  ngOnDestroy(){
    this.subs.unsubscribe();
  }


  public allUsers$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public selectedUser$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  public allFlights$: BehaviorSubject<Flight[]> = new BehaviorSubject<Flight[]>([]);
  public selectedFlight$: BehaviorSubject<Flight | null> = new BehaviorSubject<Flight | null>(null);
  constructor(private _api: ApiService) {
    this._initSubs();
  }


  public async fetchData(){
    const allUsers = await this._api.getWorkers();
    if(allUsers){
      this.allUsers$.next(allUsers);
    }

    // this.allUsers$.next();
  }

  private _initSubs(){
    /**
     * Auto-select first user
     */
    this.subs.sink = this.allUsers$.subscribe(newUsers => {
      if(newUsers?.length){
        //If we're here then there's at least one item in this array
        this.selectedUser$.next(newUsers[0]);
      }
    })

    this.subs.sink = this.selectedUser$.subscribe(async newUser => {
      if(newUser){
        const allFlights = await this._api.getFlights(newUser);
        if(allFlights){
          this.allFlights$.next(allFlights);
        }
      }
    })

    this.subs.sink = this.allFlights$.subscribe(newFlights => {
      if(newFlights.length){
        //At least one flight
        this.selectedFlight$.next(newFlights[0]);
      }
    })


    //END INIT_SUBS
  }
}
