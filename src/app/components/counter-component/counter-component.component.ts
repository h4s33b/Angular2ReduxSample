import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css']
})
export class CounterComponentComponent implements OnInit {

  @Input() counter;
  @Output() incrementCount = new EventEmitter<any>();
  @Output() decrementCount = new EventEmitter<any>();
  constructor() {

  }

  ngOnInit() {
  }

  incrementCounter() {
    this.incrementCount.emit()
  }

  decrementCounter() {
    this.decrementCount.emit()
  }



}
