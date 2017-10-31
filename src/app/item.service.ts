import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { ITEMS } from './mock-characters';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ItemService {
  items: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.items = database.list('items');
  }

  getItems() {
    return ITEMS;
  }

}
