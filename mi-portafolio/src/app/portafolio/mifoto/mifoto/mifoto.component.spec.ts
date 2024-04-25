import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MifotoComponent } from './mifoto.component';

describe('MifotoComponent', () => {
  let component: MifotoComponent;
  let fixture: ComponentFixture<MifotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MifotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MifotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
