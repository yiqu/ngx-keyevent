import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[ngxKeyEvent]'
})
export class NgxKeyEventDirective {

  @HostListener('document:keyup', ['$event'])
  onKeyup(keyEvent: KeyboardEvent) {
    if (keyEvent) {
      this.pressUpEvent.emit(keyEvent);
    }
  }

  @Output('ngxKeyEvent')
  pressUpEvent: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

  constructor() {
  }
}

