import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSuporteComponent } from './tela-suporte.component';

describe('TelaSuporteComponent', () => {
  let component: TelaSuporteComponent;
  let fixture: ComponentFixture<TelaSuporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaSuporteComponent]
    });
    fixture = TestBed.createComponent(TelaSuporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
