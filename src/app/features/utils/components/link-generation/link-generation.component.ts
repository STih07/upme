import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-link-generation',
  templateUrl: './link-generation.component.html',
  styleUrls: ['./link-generation.component.scss']
})
export class LinkGenerationComponent implements OnInit {

  generationLinkCtrl = this.fb.control('');
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createLink(): void {
    this.generationLinkCtrl.patchValue('https://localhost:4200/url/activation-code');
  }

}
