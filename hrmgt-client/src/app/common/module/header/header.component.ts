import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  
  @Input() userRole = '';

  menuItem1: string = '';
  menuItem2: string = '';
  menuItem3: string = '';
  
  ngOnInit(): void {
    
    if(this.userRole === 'amdin') {

    }
  
  }
  
}
