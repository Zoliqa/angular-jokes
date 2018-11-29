import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, ElementRef, ContentChild, ContentChildren, AfterContentInit } from '@angular/core';
import Joke from '../joke';
import { JokeComponent } from 'app/joke/joke.component';

@Component({
  selector: 'joke-list',
  template: `
    <joke-form (jokeCreated)="addJoke($event)">
    </joke-form>

    <h4 #header>View jokes</h4>

    <joke *ngFor="let i of jokes" [joke]="i">
      <span class="setup"> {{ i.setup }} </span>
      <h1 class="punchline">{{ i.punchline }} aaa</h1>
    </joke>
    
    <h4>Content jokes</h4>
    <ng-content></ng-content>

    <button type="button" class="btn btn-success" (click)="addFixedJoke()">Add joke</button>
    <button type="button" class="btn btn-danger" (click)="deleteJokes()">Delete jokes</button>
    `
})
export class JokeListComponent implements AfterViewInit, AfterContentInit {
    jokes: Array<Joke>;
    @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
    @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
    @ViewChild('header') headerEl: ElementRef;

    @ContentChild(JokeComponent) jokeContentChild: JokeComponent;

    constructor() {
        this.jokes = [
            new Joke('Joke1', 'P1'),
            new Joke('Joke2', 'P2')
        ];
        
        console.log(`new - jokeViewChild is ${ this.jokeViewChild }`);
    }

    addJoke(joke) {
      this.jokes.unshift(joke);
    }

    addFixedJoke() {
      this.jokes.unshift(new Joke('aa', 'bb'));
    }

    deleteJokes() {
      this.jokes = [];
    }

    ngAfterViewInit() {
      console.log(`ngAfterViewInit - jokeViewChild is ${ this.jokeViewChild }`);
      console.log(`ngAfterViewInit - jokeViewChildren is ${ this.jokeViewChildren.toArray() }`);

      console.log(`ngAfterViewInit - headerEl is ${ this.headerEl }`);

      this.headerEl.nativeElement.textContent = 'Best joke machine ever';
    }

    ngAfterContentInit() {
      console.log(`ngAfterContentInit - jokeContentChild is ${ this.jokeContentChild }`);
    }
}
