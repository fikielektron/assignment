import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.scss']
})
export class AllFlightsComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

}
