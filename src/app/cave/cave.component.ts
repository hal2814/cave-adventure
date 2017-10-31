import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Cave } from '../cave.model';
import { CaveService } from '../cave.service';

@Component({
  selector: 'app-cave',
  templateUrl: './cave.component.html',
  styleUrls: ['./cave.component.css'],
  providers: [ CaveService ]
})

export class CaveComponent implements OnInit {
  caves: FirebaseListObservable<any[]>;
  caveToDisplay;
  count;

  constructor(private router: Router, private caveService: CaveService) { }


  ngOnInit(){
    // this.caves = this.caveService.getCaves();
    this.count = 0;
    this.caveToDisplay = this.caveService.getCaveById(this.count);
  };

  chooseDirection(number){
    this.caveToDisplay = this.caveService.getCaveById(this.count+=number);
  }


  // goToDetailPage(clickedCave: Cave) {
  //   this.router.navigate(['caves', clickedCave.$key]);
  // };

 // goToDetailPage(clickedCave: Cave) {
 //   this.router.navigate(['caves', clickedCave.id]);
 // };
 //
 // goToUserPage(clickedUser: User) {
 //   this.router.navigate(['users', clickedUser.username]);
 // };

}
