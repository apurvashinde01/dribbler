import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  @Input('firstScreen') firstScreen: any = true;
  /* For a single player
   private player: PlayerClass = {
   keyCode : 'D',
   name : 'Kobe Bryant',
   color : '#BD10E0'
  };                      // Note  player variable type was changed from string to PlayerClass
  */
  constructor(private playerservice: PlayerService) {
  }
  ngOnInit() {
  }
}
