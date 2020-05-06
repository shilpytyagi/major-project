import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  event;
  date;
  location;
  guestlist;
  snacksveg;
  snacksnonveg; 
  lunchveg; 
  lunchnonveg;
  dinnerveg;
  dinnernonveg;
  cakeegg;
  cakeeggless;
  photograph;
  florists;
  entertainment;
  fireworks;
  projectors;
  decor;
  limos;
  ballons; 
  cocktail;
  games;
  theme;
  dance;
  cards;
  music;

  constructor(private us : OrderService) { }

  ngOnInit() {
  }

  addData(){
    this.us.addData(this.event, this.date, this.location, this.guestlist, this.snacksveg, 
      this.snacksnonveg, this.lunchveg, this.lunchnonveg, this.dinnerveg, this.dinnernonveg, this.cakeegg, this.cakeeggless, this.photograph, 
      this.florists, this.entertainment, this.fireworks, this.projectors, this.decor, this.limos, this.ballons, this.cocktail, this.games, 
      this.theme, this.dance, this.cards, this.music);
      console.log(this.event)
  }

}
