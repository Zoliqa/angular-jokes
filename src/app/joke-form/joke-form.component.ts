import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Joke from '../joke';

@Component({
  selector: 'joke-form',
  template: `
      <div class="card card-block">
          <h4 class="card-title">Create joke</h4>
          <div class="form-group">
              <input type="text"
                      class="form-control"
                      placeholder="Enter the setup"
                      #setup>
          </div>
          <div class="form-group">
              <input type="text"
                      class="form-control"
                      placeholder="Enter the punchline"
                      #punchline>
          </div>
          <button class="btn btn-primary" (click)="createJoke(setup.value, punchline.value)">Create</button>
      </div>
  `,
  styles: [
    `
      .card {
        background-color: gray;
      }
    `
  ]
})
export class JokeFormComponent {
  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup, punchline) {
      this.jokeCreated.emit(new Joke(setup, punchline));
  }
}
