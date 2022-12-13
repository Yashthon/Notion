import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.component.html',
  styleUrls: ['./comedy.component.scss']
})
export class ComedyComponent implements OnInit {

  @Input() selected1!: boolean;
  @Output() selectedChange1 = new EventEmitter<boolean>();

  @Input() selected2!: boolean;
  @Output() selectedChange2 = new EventEmitter<boolean>();

  @Input() selected3!: boolean;
  @Output() selectedChange3 = new EventEmitter<boolean>();

  @Input() selected4!: boolean;
  @Output() selectedChange4 = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public toggleSelected1() {
    this.selected1 = !this.selected1;
    this.selectedChange1.emit(this.selected1);
  }
  public toggleSelected2() {
    this.selected2 = !this.selected2;
    this.selectedChange2.emit(this.selected2);
  }
  public toggleSelected3() {
    this.selected3 = !this.selected3;
    this.selectedChange2.emit(this.selected3);
  }
  public toggleSelected4() {
    this.selected4 = !this.selected4;
    this.selectedChange4.emit(this.selected4);
  }

}
