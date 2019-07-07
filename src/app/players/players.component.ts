import { Component, OnInit } from '@angular/core';
import {PlayerClass} from '../players.';
import {PLAYERS} from '../player-stock';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
 /* For a single player
  private player: PlayerClass = {
  keyCode : 'D',
  name : 'Kobe Bryant',
  color : '#BD10E0'
 };                      // Note  player variable type was changed from string to PlayerClass
 */

private players: PlayerClass[] = PLAYERS;

 constructor() { }

 ngOnInit() {
 }
}
