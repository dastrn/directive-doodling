import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';

import { ModFactorFormatter } from './services/modFactorFormatter.service';
import { ModFactorFormatter2 } from './services/modFactorFormatter2.service';

import { DecimalPipe } from '@angular/common';
import { DecimalFormatterDirective } from './directives/nic-decimalFormatter.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    DecimalFormatterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DecimalPipe, ModFactorFormatter, ModFactorFormatter2],
  bootstrap: [AppComponent]
})
export class AppModule { }
