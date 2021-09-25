import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-password-step',
  templateUrl: './password-step.component.html',
  styleUrls: ['./password-step.component.scss']
})
export class PasswordStepComponent implements OnInit {

  @Output() next = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  nextStep(): void {
    this.next.emit();
  }
}
