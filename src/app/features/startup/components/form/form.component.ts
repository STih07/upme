import { Component, OnInit } from '@angular/core';
import { StartupTabs } from '../../models/startup.tabs.enum';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  activeItem = StartupTabs.USER_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
