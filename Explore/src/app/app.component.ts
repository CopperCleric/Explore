import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
  
  title = 'Explore';
}
