import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmGenreComponent } from './film-genre.component';

describe('FilmGenreComponent', () => {
  let component: FilmGenreComponent;
  let fixture: ComponentFixture<FilmGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmGenreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
