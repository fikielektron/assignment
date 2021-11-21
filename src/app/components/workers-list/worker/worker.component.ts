import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styles: [
    `
      .content{
        background-color: rgba(gray, 0.2);
        margin: 5px;
        user-select: none;
        display: flex;
        align-items: center;
        justify-content:center;
        padding: 8px 4px;
        border-radius: 4px;
        &:not(.active):hover{
          cursor:pointer;
          color: white;
          background-color: rgba(gray, 0.8);
        }
      }
      .content.active{
        background-color: gray;
        opacity: 1;
        border:1px solid black;
      }
    `
  ]
})
export class WorkerComponent implements OnInit {
  @Input() workerData!: User | null;
  @Input() active: boolean = false;
  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

}
