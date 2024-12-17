import { inject, Injectable } from '@angular/core';
import { collection, Firestore, onSnapshot } from '@angular/fire/firestore';
import { Game } from '../interface/game.interface';

@Injectable({
  providedIn: 'root'
})
export class DataComService {

  firestore: Firestore = inject(Firestore);

  gamesList: Game[] = [];

  unsubGames;
  unsubChats;

  constructor() { }

  connectToDB() {

  }

  subGamesList() {
    return onSnapshot(this.getColRef('games'), (list) => {
      this.gamesList = [];
      list.forEach(element => {
        this.gamesList.push(this.getGameObject(element.data(), element.id));
      })
    })
  }

  getColRef(collectionName: string) {
    return collection(this.firestore, collectionName);
  }

  getGameObject(obj: any, id: string): Game {
    return {
      id: id,
      players: obj.players,
      stack: obj.stack,
      playedCards: obj.playedCards,
      currentPlayer: obj.currentPlayer,
      type: obj.type,
    }
  }

}
