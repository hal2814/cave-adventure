import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers: [ CharacterService ]
})
export class CharacterComponent implements OnInit {
  characters: FirebaseListObservable<any[]>;
  characterToDisplay;
  characterIndex;
  objectObservable;

  constructor(private router: Router, private characterService: CharacterService) { }

  ngOnInit(){
    // this.characters = this.characterService.getCharacters();
    this.characterIndex = 2;
    this.characterToDisplay =
    this.characterService.getCharacterById(this.characterIndex);

    // this.objectObservable =
    // this.characterService.getCharacterById(this.characterIndex).subscribe(dataLastEmittedFromObserver=>{
    //   this.objectObservable = dataLastEmittedFromObserver;
    //   console.log(this.objectObservable);
    // });
  }

}
