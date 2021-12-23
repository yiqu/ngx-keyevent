import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxKeyeventService } from 'ngx-keyevent';
import { DialogOverviewExampleDialog } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  keyEvents: KeyboardEvent[] = [];

  constructor(public dialog: MatDialog, private keyService: NgxKeyeventService) {
  }

  ngOnInit(): void {
    this.keyService.keyEventChanges().subscribe((keyEvent: KeyboardEvent) => {
      console.log(keyEvent);
      this.keyEvents.unshift(keyEvent);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '450px',
      disableClose: true
    });
  }
}
