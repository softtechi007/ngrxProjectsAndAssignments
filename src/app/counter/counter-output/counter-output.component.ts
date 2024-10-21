import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent implements OnInit{ // Initialized with default value
  counter$: Observable<{counter: number}> | undefined;

  constructor(private store: Store<{counter: CounterState}>) {}
  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
    }   
  }
   
