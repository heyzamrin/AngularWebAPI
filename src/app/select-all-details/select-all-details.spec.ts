import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectAllDetails } from './select-all-details';

describe('SelectAllDetails', () => {
  let component: SelectAllDetails;
  let fixture: ComponentFixture<SelectAllDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectAllDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectAllDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
