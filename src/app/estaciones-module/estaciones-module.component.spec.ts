import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionesModuleComponent } from './estaciones-module.component';

describe('EstacionesModuleComponent', () => {
  let component: EstacionesModuleComponent;
  let fixture: ComponentFixture<EstacionesModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstacionesModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstacionesModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
