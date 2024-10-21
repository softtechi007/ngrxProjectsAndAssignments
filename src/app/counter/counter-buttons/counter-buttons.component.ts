import { Component, EventEmitter, Output } from '@angular/core';
import { decrement, increment, reset } from '../state/counter.actions';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';


@Component({
  selector: 'app-counter-buttons',
  standalone: true,
  imports: [],
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.css'
})
export class CounterButtonsComponent {
  constructor(private store: Store<{counter: CounterState }>){}
  onIncrement(){
    this.store.dispatch(increment());
  }
  onDecrement(){
    this.store.dispatch(decrement());
  }
  onReset(){
    this.store.dispatch(reset());
  }
}
