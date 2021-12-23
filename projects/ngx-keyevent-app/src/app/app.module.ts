import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxKeyeventModule } from 'ngx-keyevent';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { MaterialModuleBundle } from './shared/material-bundle';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DialogOverviewExampleDialog } from './dialog/dialog.component';
import { BottomComponent } from './bottom-comp/bot.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleDialog,
    BottomComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModuleBundle,
    FlexLayoutModule,
    NgxKeyeventModule
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
