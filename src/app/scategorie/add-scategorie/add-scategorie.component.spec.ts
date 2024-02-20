import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSCategorieComponent } from './add-scategorie.component';

describe('AddSCategorieComponent', () => {
  let component: AddSCategorieComponent;
  let fixture: ComponentFixture<AddSCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSCategorieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
