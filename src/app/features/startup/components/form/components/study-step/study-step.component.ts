import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-study-step',
  templateUrl: './study-step.component.html',
  styleUrls: ['./study-step.component.scss']
})
export class StudyStepComponent implements OnInit {

  @Output() next = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  nextStep(): void {
    this.next.emit();
  }
}
