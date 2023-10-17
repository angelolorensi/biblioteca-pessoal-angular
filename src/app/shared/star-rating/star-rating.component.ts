import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Output() ratingChanged = new EventEmitter<number>();

  stars = [1, 2, 3, 4, 5];

  rate(rating: number): void {
    this.rating = rating;
    this.ratingChanged.emit(this.rating);
  }
}
