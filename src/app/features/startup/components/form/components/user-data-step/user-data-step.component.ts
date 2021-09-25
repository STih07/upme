import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-data-step',
  templateUrl: './user-data-step.component.html',
  styleUrls: ['./user-data-step.component.scss']
})
export class UserDataStepComponent implements OnInit {

  @Output() next = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  nextStep(): void {
    this.next.emit();
  }

}
