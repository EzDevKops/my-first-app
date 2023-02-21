import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector:'[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: '' +
  //   '<app-server></app-server>' +
  //   '<app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus ='No server was created!';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }
  ngOnInit() {
    console.log('allowNewServer '+ this.allowNewServer);
  }

  onCreateServer () {
    this.serverCreationStatus = 'Server was created!';
    this.allowNewServer = true;
    console.log(this.allowNewServer)
  }

}
