import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../services/app-service.service';

@Component({
  selector: 'app-timeStamp',
  templateUrl: './timeStamp.component.html',
  styleUrls: ['./timeStamp.component.css']
})
export class TimeStampComponent implements OnInit {
  param = '';
  response = '';
  constructor(private service: AppServiceService) { }

  ngOnInit() {
  }

  sendReq(){
    console.log(this.param);
    this.service.timeStampRequest(this.param).subscribe((res: any) => {
      this.response = JSON.stringify(res);
    }, err => {
      this.response = JSON.stringify(err.error);
    });
  }

}
