import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCategoriesComponent } from './save-categories.component';

describe('SaveCategoriesComponent', () => {
  let component: SaveCategoriesComponent;
  let fixture: ComponentFixture<SaveCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
