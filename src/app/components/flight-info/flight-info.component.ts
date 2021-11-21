import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss']
})
export class FlightInfoComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

}
