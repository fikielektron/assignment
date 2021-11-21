import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../models/flight.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getWorkers(): Promise<User[]>{
    const users: User[] = [];

    return new Promise(resolve => {
      this.http.get<Worker[]>('https://interview-mock.herokuapp.com/api/workers').subscribe(res=>{
      for(const worker of res){
        if(worker){
          users.push(new User(worker.id, worker.name))
        }
      }
      resolve(users);
    });
    })

  }

  getFlights(user: User): Promise<Flight[]>{
    /**
     * Checking for undefined because if user IDs start from 0,
     * !user?.id would result in false even though the user exists
     */
    if(user?.id === undefined){
      throw new Error("User undefined!");
    }
    return new Promise(resolve => {
      const flights: Flight[] = [];
      this.http.get<WorkerFlight[]>('https://interview-mock.herokuapp.com/api/workers/'+user.id).subscribe(allFlights => {
        for(const flight of allFlights){
          if(flight){
            flights.push(
              new Flight(
              flight?.num,
              flight?.from,
              flight?.to,
              flight?.from_date,
              flight?.to_date,
              flight?.plane,
              flight?.duration,
              flight?.from_gate,
              flight?.to_gate
            )
            )
          }
        }
        resolve(flights);
      })
    })

  }

  //END_API_SERVICE
}



interface Worker{
  id: number,
  name: string
}

interface WorkerFlight{
  num: string,
  from: string,
  to: string,
  from_date: string, // dd/mm/yyy
  to_date: string, // dd/mm/yyy
  plane: string,
  duration: number, // minutes
  from_gate: number,
  to_gate: number
}
