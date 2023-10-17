import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedBooksComponent } from './listed-books.component';

describe('ListedBooksComponent', () => {
  let component: ListedBooksComponent;
  let fixture: ComponentFixture<ListedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
