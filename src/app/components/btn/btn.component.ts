import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() colorBtn: string = 'bg-success-600 hover:bg-success-700';

  constructor() { }

  ngOnInit(): void {
  }

}
