import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSCategoriesComponent } from './list-scategories.component';

describe('ListSCategoriesComponent', () => {
  let component: ListSCategoriesComponent;
  let fixture: ComponentFixture<ListSCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListSCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
