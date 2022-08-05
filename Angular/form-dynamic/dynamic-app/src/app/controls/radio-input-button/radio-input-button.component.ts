import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RadioControl } from './radio-button-control';

@Component({
  selector: 'app-radio-input-button',
  templateUrl: './radio-input-button.component.html',
  styleUrls: ['./radio-input-button.component.scss'],
})
export class RadioInputButtonComponent implements OnInit {
  @Input() meta!: RadioControl;
  @Input() form!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
