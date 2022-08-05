import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../control-base';

@Component({
  selector: 'app-input-address',
  templateUrl: './input-address.component.html',
  styleUrls: ['./input-address.component.scss'],
})
export class InputAddressComponent implements OnInit {
  @Input() meta!: ControlBase;
  @Input() form!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
