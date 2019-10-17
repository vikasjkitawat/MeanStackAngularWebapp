import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Tag Name
  templateUrl: './app.component.html', // Template (View)
  styleUrls: ['./app.component.css']
})
export class AppComponent { // View Model (TS > JS Objects)
  title = 'webapp';
}
