import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectDetails } from './select-details';

describe('SelectDetails', () => {
  let component: SelectDetails;
  let fixture: ComponentFixture<SelectDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
