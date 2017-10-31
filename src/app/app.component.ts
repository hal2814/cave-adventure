import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Cave } from './cave.model';
import { CaveService } from './cave.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A Mega Super Spooky Cave';
}
