import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  backgroundLoaded: boolean = false;
  isOpen: boolean = false;
  @Output() visibilityChange = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  public onImageLoad() {
    this.backgroundLoaded = true;
  }

  public toggleMenu() {
    this.isOpen = !this.isOpen;
    this.visibilityChange.emit(this.isOpen);
  }

}
