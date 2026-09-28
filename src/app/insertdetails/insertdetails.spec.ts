import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Insertdetails } from './insertdetails';

describe('Insertdetails', () => {
  let component: Insertdetails;
  let fixture: ComponentFixture<Insertdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Insertdetails],
    }).compileComponents();

    fixture = TestBed.createComponent(Insertdetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
