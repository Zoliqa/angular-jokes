import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import Joke from '../joke';

@Component({
  selector: 'joke',
  template: `
    <div class="card card-block">
        <h4 class="card-title">
          <ng-content select=".setup"></ng-content>
        </h4>
        <p class="card-text" [hidden]="jokeData.hide">
          <ng-content select=".punchline"></ng-content>  
        </p>
        <a class="btn btn-primary" (click)="jokeData.toggle()">Tell me</a>
    </div>
    `
})
export class JokeComponent implements OnChanges {
    @Input('joke') jokeData: Joke

    constructor() {
      console.log(`new - data is ${ this.jokeData }`);
    }

    ngOnChanges(changes: SimpleChanges) {
      console.log(`ngOnChanges - data is ${ this.jokeData }`);

      for (let key in changes) {
        console.log(`${ key } changed. Current ${ changes[key].currentValue }. Previous ${ changes[key].previousValue }`);
      }
    }

    ngOnInit() {
      console.log(`ngOnInit - data is ${this.jokeData}`);
    }
      
    ngDoCheck() {
      console.log("ngDoCheck")
    }
    
    ngAfterContentInit() {
      console.log("ngAfterContentInit");
    }
    
    ngAfterContentChecked() {
      console.log("ngAfterContentChecked");
    }
    
    ngAfterViewInit() {
      console.log("ngAfterViewInit");
    }
    
    ngAfterViewChecked() {
      console.log("ngAfterViewChecked");
    }
    
    ngOnDestroy() {
      console.log('ngOnDestroy');
    }
}
