import { Injectable } from '@angular/core';
import { Cave } from './cave.model';
import { CAVES } from './mock-characters';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class CaveService {
  caves: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.caves = database.list('caves');
  }

  getCaves() {
    return CAVES;
  }

  getCaveById(caveId: number){
    for (var i = 0; i <= CAVES.length - 1; i++) {
      if (CAVES[i].id === caveId) {
        return CAVES[i];
      }
    }
  }

}
