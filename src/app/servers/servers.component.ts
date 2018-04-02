import { Component, OnInit, OnChanges, ApplicationRef, DoCheck } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ModFactorFormatter2 } from '../services/modFactorFormatter2.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit, OnChanges, DoCheck {

  allowNewServer = false;
  serverCreationStatus = 'No activity.';
  serverName = 'Test';
  servers = ['Testserver', 'Testserver 2'];
  public pipedNumber: string;
  constructor(private modFactorFormatter: ModFactorFormatter2) {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  ngDoCheck(): void {

  }

  onAddServer() {
    this.allowNewServer = false;
    console.log('added server');
    this.serverCreationStatus = 'Adding new server.';
    setTimeout(() => {
      this.serverAdded();
    }, 2000);
  }

  serverAdded() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Added! Named: ' + this.serverName;
    setTimeout(() => {
      this.serverCreationStatus = 'No Activity';
      this.allowNewServer = true;
      this.serverName = '';
    }, 2000);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }

  onPipedNumberInput() {
    // This regex removes any character that isn't 0-9 or a decimal point.
    const currentValue = this.pipedNumber;
    this.pipedNumber = '';

    // This timeout is required to make sure the property change notification informs the view that it has reverted the value to it's
    // original state. ~ PR 2018-04-02
    setTimeout(() => this.pipedNumber = currentValue.replace(/[^0-9.]/g, ''), 1);
  }
  onPipedNumberBlur() {
    this.pipedNumber = this.modFactorFormatter.formatMyStringForModFactor(this.pipedNumber);
  }

}
