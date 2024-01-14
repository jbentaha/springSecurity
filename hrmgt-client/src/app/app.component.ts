import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  
  constructor(
    private readonly authenticationService: AuthService
  ) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
  
}
