import { Component, OnInit } from '@angular/core';

export interface Server {
  name?: string;
}

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverCreated = false;
  serverName = '';
  username = '';
  servers: Server[] = [{ name: 'Pittsburgh' }, { name: 'Paris' }];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  public onCreateServer() {
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
    this.serverCreated = true;
    this.servers.push({
      name: this.serverName.length > 0 ? this.serverName : 'Default',
    });
  }

  public onUpdateSeverName(e: Event) {
    this.serverName = (<HTMLInputElement>e.target).value;
  }

  public onClearUsername() {
    this.username = '';
  }
}
