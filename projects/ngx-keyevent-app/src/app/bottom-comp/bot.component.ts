import { Component, OnInit } from '@angular/core';
import { NgxKeyeventService } from 'ngx-keyevent';

@Component({
  selector: 'app-bottom-component',
  templateUrl: 'bot.component.html',
  styleUrls: ['./bot.component.scss']
})
export class BottomComponent implements OnInit {

  constructor(private ks: NgxKeyeventService) {
  }

  ngOnInit() {
    this.ks.keyEventChanges().subscribe((res) => console.log('Logged in another comp: ', res));
  }
}
