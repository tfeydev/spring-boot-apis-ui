import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksContinued } from './books-continued';

describe('BooksContinued', () => {
  let component: BooksContinued;
  let fixture: ComponentFixture<BooksContinued>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksContinued]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksContinued);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
