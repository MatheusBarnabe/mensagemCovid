import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMensagemComponent } from './lista-mensagem.component';

describe('ListaMensagemComponent', () => {
  let component: ListaMensagemComponent;
  let fixture: ComponentFixture<ListaMensagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMensagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
