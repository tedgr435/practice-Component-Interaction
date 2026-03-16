import { Component, input, output, signal, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  template: `
    <div class="child">
      <h3>Child Component</h3>
      <!-- <p>Message received from parent: {{message()}}</p> -->
       <p>Message received from parent: {{value()}}</p>
      <input type="text" [(ngModel)]="value">
      <!-- <input type="text" [(ngModel)]="childMessage" (input)="notify()"> -->
      <!-- <button (click)="notify()">Send Message!</button> -->
      <!-- <p>{{childMessage()}}</p> -->
    </div>
  `,
  styles: `.child{background-color: black ; color: white ; margin:2rem; padding:2rem}`
})
export class Child {
  value = model<string>();
  
  message = input<string>();
  childMessage = signal<string>('');
  Clicked = output<string>();
  
  notify(){
    this.Clicked.emit(this.childMessage());
  }
}
