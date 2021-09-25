import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-motivation-step',
  templateUrl: './motivation-step.component.html',
  styleUrls: ['./motivation-step.component.scss']
})
export class MotivationStepComponent implements OnInit {

  @Output() next = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  nextStep(): void {
    this.next.emit();
  }
}
