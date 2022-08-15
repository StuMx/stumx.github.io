import { AfterContentChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[stu-menu-item]',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit, AfterContentChecked {
  @Input() show:boolean = true;
  @Input() size:"large" | "small" = "large";

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterContentChecked(): void {
  }
}
