import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  keyEvents: KeyboardEvent[] = [];

  constructor(public dialog: MatDialog) {
  }

  onKeyPress(event: KeyboardEvent) {
    console.log(event);
    this.keyEvents.push(event);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '450px',
      disableClose: true
    });
  }
}
