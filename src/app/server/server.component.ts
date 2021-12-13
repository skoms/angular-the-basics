import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  @Input() serverId: string = '0';
  @Input() name: string = 'Default';
  isOnline: boolean;

  constructor() {
    this.isOnline = Math.random() > 0.5;
  }

  ngOnInit(): void {}

  public toggleServerStatus() {
    this.isOnline = !this.isOnline;
  }

  public getColor(): 'green' | 'red' {
    return this.isOnline ? 'green' : 'red';
  }
}
