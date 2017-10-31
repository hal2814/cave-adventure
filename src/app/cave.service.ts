import { Injectable } from '@angular/core';
import { Cave } from './cave.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class CaveService {
  caves: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.caves = database.list('caves');
  }

  getCaves() {
    return this.caves;
  }

  getCaveById(caveId: number) {
    return this.database.object('caves/'+ caveId);
  }
}
