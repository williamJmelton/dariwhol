import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides = [
    {
      img: '/assets/items/fronto.png',
      text: 'Fronto Leaf 10pk $25.99'
    },
    {
      img: '/assets/items/HiHemp.png',
      text: 'Hi-Hemp non-tobacco wraps'
    },
    {
      img: '/assets/items/High_Voltage.png',
      text: 'High Voltage Detox Drink'
    },
    {
      img: '/assets/items/emojiAshtray.png',
      text: 'Emoji Ashtrays'
    },
    {
      img: '/assets/items/splitarillos.png',
      text: 'Splitarillos 6/.99¢ Cigarillos. 17 Flavors.'
    },
    {
      img: '/assets/items/kettleCorn.png',
      text: 'Kettlecorn Snacks'
    }
  ];
  slideConfig = {'slidesToShow': 4, 'slidesToScroll': 3};
  constructor(private _firebase: FirebaseService) {}
  ngOnInit() {}
}
