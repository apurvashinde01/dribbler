import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  constructor() { }

  /* Keyboard Event Listener */
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    // Call Scoring function here
  }

  ngOnInit() {
  }

}
