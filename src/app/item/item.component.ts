import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Item } from '../item.model';
import { Character } from '../character.model';
import { Cave } from '../cave.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [ ItemService ]
})
export class ItemComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  caveToDisplay;
  characterToDisplay;
  itemToDisplay;
  caveItems = [];
  characterItems = [];
  caveObservable;
  characterObservable;
  itemObservable;
  caveIndex;
  dave;
  gram;
  timmy;
  larry;
  health;
  strength;
  armor;
  death = false;
  showChoice = false;
  show = true;
  itemShow = false;

  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit() {
    this.dave =
    this.itemService.getCharacterById(0);

    this.gram =
    this.itemService.getCharacterById(1);

    this.timmy =
    this.itemService.getCharacterById(2);

    this.larry =
    this.itemService.getCharacterById(3);

    this.caveIndex = 0;
    this.caveToDisplay =
    this.itemService.getCaveById(this.caveIndex);

    //IMPORTANT - in order to display as a raw object, .subscribe() must be called separately
    //from the object to display. async unwraps the firebase object ONLY.
    this.caveObservable =
    this.itemService.getCaveById(this.caveIndex).subscribe(dataLastEmittedFromObserver=>{
      this.caveObservable = dataLastEmittedFromObserver;
      console.log(this.caveObservable);
    });

  }

  selectCharacter(value){
    if(value==="dave"){
      this.characterToDisplay = this.dave;
    } else if(value==="gram"){
      this.characterToDisplay = this.gram;
    } else if(value === "timmy"){
      this.characterToDisplay = this.timmy;
    }else if(value === "larry"){
      this.characterToDisplay = this.larry;
    }
  }

  chooseLeft(){
    this.caveIndex = this.caveObservable.left;
    this.caveToDisplay = this.itemService.getCaveById(this.caveIndex);

    this.caveObservable =
    this.itemService.getCaveById(this.caveIndex).subscribe(dataLastEmittedFromObserver=>{
      this.caveObservable = dataLastEmittedFromObserver;
    });
    console.log(this.caveObservable);
  }

  chooseRight(){
    this.caveIndex = this.caveObservable.right;
    this.caveToDisplay = this.itemService.getCaveById(this.caveIndex);

    this.caveObservable =
    this.itemService.getCaveById(this.caveIndex).subscribe(dataLastEmittedFromObserver=>{
      this.caveObservable = dataLastEmittedFromObserver;
    });
    console.log(this.caveObservable);
  }


  findItem(){
    debugger;
    let item1 = this.caveObservable.items[0];
    let item2 = this.caveObservable.items[1];
    let rand = Math.floor((Math.random() * 4) + 1);
    let chosenItem;
    if(rand === 1){
      this.itemToDisplay = this.itemService.getItemById(item1);
      chosenItem = item1;
    }else{
      this.itemToDisplay = this.itemService.getItemById(item2);
      chosenItem = item2;
    }

    this.itemObservable =
    this.itemService.getItemById(chosenItem).subscribe(dataLastEmittedFromObserver=>{
      this.itemObservable = dataLastEmittedFromObserver;
    });
    console.log(this.itemObservable);

    if(this.itemObservable.type === "weapon"){
      this.strength += this.itemObservable.modifier;
    }else if(this.itemObservable.type === "food"){
      this.health += this.itemObservable.modifier;
    }else if(this.itemObservable.type === "armor"){
      this.armor += this.itemObservable.modifier;
    }

    this.itemShow = true;
  }

}
