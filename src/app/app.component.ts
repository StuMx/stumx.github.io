import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stumx.info';
  isMenuOpen: boolean = false;

  public updateMenuState(isMenuOpen: boolean) {
    this.isMenuOpen = isMenuOpen;
  }
}
