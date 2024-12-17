import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatframeComponent } from './chatframe.component';

describe('ChatframeComponent', () => {
  let component: ChatframeComponent;
  let fixture: ComponentFixture<ChatframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatframeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
