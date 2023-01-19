import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculater',
  templateUrl: './calculater.component.html',
})
export class CalculaterComponent implements OnInit {
  toshow = '0';
  currvalue = '';
  constructor() {}

  ngOnInit(): void {}
  writetoinput(value: string) {
    this.currvalue = this.currvalue + value;

    this.toshow = this.currvalue;
  }
  eqals() {
    this.toshow = eval(this.currvalue);
    this.currvalue = this.toshow;
  }
  clear() {
    this.currvalue = '';
    this.toshow = '0';
  }
  back() {
    this.currvalue = this.currvalue.slice(0, -1);
    this.toshow = this.currvalue;
    if (this.toshow == '') {
      this.toshow = '0';
    }
  }
  calcvalue(solve: any) {
    if (solve.charAt(0) == '0') {
      solve = solve.slice(1);
    }
    this.toshow = eval(solve);
  }
}
