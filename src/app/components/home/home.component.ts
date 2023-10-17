import { Component, OnInit } from '@angular/core';
import { SlideInFromLeft, SlideInFromRight } from 'src/app/shared/animations/app-animations/slide-in.animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [SlideInFromLeft, SlideInFromRight]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.querySelector('.page-content')?.classList.add('active');
  }

}
