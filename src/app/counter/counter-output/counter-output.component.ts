import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent {
  counter: number = 0; // Initialized with default value

  constructor(private store: Store<{counter: {counter: number}}>) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.select('counter').subscribe((data: any) => { // Explicit 'any' type
      this.counter = data.counter;
    });
    
  }
}
