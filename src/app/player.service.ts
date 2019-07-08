import { Injectable } from '@angular/core';
import { PlayerClass } from './players.';
import { PLAYERS, KEYCODES } from './player-stock';

declare var chroma: any;
import * as chroma from 'chroma-js';

@Injectable()
export class PlayerService {

  constructor() { }

  private players: PlayerClass[] = PLAYERS;
  getPlayers(): PlayerClass[] {
    return this.players;
  }
  addPlayer(name: string): void {
    /** Random KeyCode **/
    // Clean Key Codes
    this.cleanKeyCodes();
    // Generate random number capped to length of key codes available
    var randomNum = Math.floor(Math.random() * 100) % (this.keyCodes.length);
    // Assign the char at random number position
    var newKeyCode = this.keyCodes.charAt(randomNum);
    // Exit without creating a player, if unique keycode not available.
    if (this.keyCodes === '') return;
    var newPlayer = { name: name, keyCode: newKeyCode, color: chroma.random().hex(), score: 0, duration: '0s', dribbles_left: 0 };
    this.players.push(newPlayer);
  }
  private keyCodes: string = KEYCODES;
  cleanKeyCodes(): void {
    var t = this;
    t.players.forEach(function (element) {
      t.keyCodes = t.keyCodes.replace(element.keyCode, '');
    });
  }
  // Score player whenever he dribbles
  scorePlayers(event): void {
    var key = String.fromCharCode(event.keyCode);
    //Key codes for A = 65  and Z = 90
    if (event.keyCode > 64 && event.keyCode < 91) {
      //Find the player for pressed keyCode
      (this.players).forEach(function (player) {
        if (player.keyCode == key) {
          player.score += 10;
          player.dribbles_left += 1;
        }
      });
    }
  }
}
/*
Components  should not fetch or save data directly.
They should focus only on presenting the data. So, we make a service called playerservice.
In player.service.ts , you will find Injectable module is imported like how a Component module is imported  in Component files.
This Injectable class participates in dependancy injection system - by injecting it inside other components and services even.
Injection of a service inside a service is also possible , its like service-in-service.
*/
