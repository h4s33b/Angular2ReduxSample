import { Component, OnInit, Input } from '@angular/core';
import { CounterComponentComponent } from '../components/counter-component/counter-component.component';
import { createStore } from 'redux';
import { AppStore } from '../app-store';
import { AppState } from '../interfaces/app-state';
import * as CounterActions from '../actions/counter-action-creators';
import { counterReducer } from '../reducers/counter-reducer';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  counter: number;
  store;
  constructor() {
    this.store = createStore(counterReducer);
    this.store.subscribe(() => this.readState());
    this.readState();
  }

  ngOnInit() {
  }

  readState() {
    let state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
  }

  increment(ev) {
    this.store.dispatch(CounterActions.increment());
  }

  decrement(ev) {
    this.store.dispatch(CounterActions.decrement());
  }

}
