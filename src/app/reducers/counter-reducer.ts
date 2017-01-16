/**
 * Counter Reducer
 */
import { Reducer, Action } from 'redux';
import { AppState } from '../interfaces/app-state';
import {
  INCREMENT,
  DECREMENT
} from '../actions/counter-action-creators';

let initialState: AppState = { counter: 0 };

// Create our reducer that will handle changes to the state
export const counterReducer: Reducer<AppState> =
  (state: AppState = initialState, action: Action): AppState => {
    switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { counter: state.counter + 2 });
    case DECREMENT:
      return Object.assign({}, state, { counter: state.counter - 1 });
    default:
      return state;
    }
  };