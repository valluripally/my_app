import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationstatus = "No server was created";
  serverName = 'Test server';
  userName = '';
  serverCreated = false;
  datePipe: DatePipe = new DatePipe('en-US');
  timestampList=[''];
  openText = false;
  servers = ['Server1', 'Server2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)

  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationstatus = "Server was created. Name is " + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);

  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUserName() {
    this.userName = '';
  }

  addTimeStamp(openText) {
    this.openText = !openText;
    let date = new Date();
    let formatedDate = this.datePipe.transform(date, 'MMM d, y, h:mm:ss a');
    this.timestampList.push(formatedDate);

  }

}
