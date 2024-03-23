import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {

  constructor(
    private router : Router,
    private authService : AuthService,
    private _ngZone : NgZone
  ){}

  ngOnInit(): void {
      //this.authService.signOutExternal();
      this._ngZone.run(() => {
        this.router.navigate(['/']).then(() => window.location.reload());
      })
  }
}
