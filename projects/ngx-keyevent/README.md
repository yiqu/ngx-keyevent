# ⌨️ ngx-keyevent

[![npm](https://img.shields.io/npm/v/ngx-keyevent.svg)](https://www.npmjs.com/package/ngx-keyevent)

`ngx-keyevent` is a simple Angular directive that can be used on any HTML element to listen for user's key press when the element in is view.

## Demo

The demo of the animations is available at [here](yiqu.github.io/ngx-keyevent/).

## Usage

```
npm install ngx-keyevent --save
```

Import NgxKeyeventModule in your app.module:

```javascript
import { NgxKeyeventModule } from 'ngx-keyevent';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    NgxKeyeventModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Example

Listen for key events in MyComponent:

```javascript
// my-component.component.ts
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';

@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
})
export class MyComponent {
  constructor() {}

  onKeyEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      // ... Do stuff when Enter key is pressed
    }
  }
}
```

```html
<!-- my-component.component.html -->
<div (ngxKeyEvent)="onKeyEvent($event)"></div>
```

That's it, done! You can listen to any keys. The output `type` is [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent).

## Dialogs example: Closing a Material Dialog 

We often use Material Dialog to request data from users. In the example below, we will use `ngx-keyevent` to close a Material dialog with no data
by `Escape` key, and grab the data with the `Enter` key. 


### Dialog component:
```javascript
import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.component.html',
})
export class DialogOverviewExampleDialog {

  userData: any; // Data collected from the user via form, or whatever.

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  closeDialog(hasData: boolean): void {
    this.dialogRef.close(hasData ? this.userData : undefined);
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeDialog(false);
    } else if (event.key === 'Enter') {
      this.closeDialog(true);
    }
  }
}
```

```html
<!-- dialog.component.html -->
<div (ngxKeyEvent)="onKeyPress($event)">
  <h1 mat-dialog-title>Hello, I am a dialog.</h1>
  <div mat-dialog-content>
    <!-- Get the use data via forms... -->
  </div>
</div>
```
### App component:
```javascript
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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '450px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((data) => {
      // Do whatever with the data
    })
  }
}
```
