import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = 'http://localhost:3000/user'

  constructor(private http: HttpClient) { }

  addData(event, date, location, guestlist, snacksveg, snacksnonveg, lunchveg, lunchnonveg,
    dinnerveg, dinnernonveg, cakeegg, cakeeggless, photograph, florists, entertainment, fireworks, projectors,
    decor, limos, ballons, cocktail, games, theme, dance, cards, music){

      const obj = {event, date, location, guestlist, snacksveg, snacksnonveg, lunchveg, lunchnonveg,
        dinnerveg, dinnernonveg, cakeegg, cakeeggless, photograph, florists, entertainment, fireworks, projectors,
        decor, limos, ballons, cocktail, games, theme, dance, cards, music};

        this
            .http
            .post(`${this.url}/addData`, obj)
            .subscribe(res => console.log(res));
            console.log("Working")
    }

    getData(){
      return(
        this
            .http
            .get(`${this.url}/getData`)
      );
    }
    
}
