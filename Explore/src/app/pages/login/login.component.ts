import { Component, AfterViewInit, NgZone, OnInit } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component'
import { HeaderComponent } from '../../components/header/header.component'
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AuthService } from '../../../services/auth.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'login',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,ButtonModule, BadgeModule, CardModule, CheckboxModule, DialogModule, AvatarGroupModule, AvatarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  visible: boolean = false;
  login = 'false'
  private clientId = environment.clientId;
  
  constructor(
    private authService : AuthService,
    private _ngZone : NgZone,
    private router : Router
  ) {}
  
  ngOnInit() {
    // @ts-ignore
    google.accounts.id.initialize({
      client_id: this.clientId,
      callback: this.handleCredentialResponse.bind(this),
      auto_select: false,
      cancel_on_tap_outside: true,
    });
    //@ts-ignore
    google.accounts.id.renderButton(
      // @ts-ignore
      document.getElementById("google-button"),
      { theme: "outline", size: "large", width: "100%" }
    );
    //@ts-ignore
    google.accounts.id.prompt((notification: PromptMomentNotification) => {});
  }

  showDialog() {
    this.visible = true;
  }

  renderGoogleSignInButton() {
    const googleButtonContainer = document.getElementById("google-button");
    console.log(googleButtonContainer)
    if (googleButtonContainer) {
      // @ts-ignore
      google.accounts.id.renderButton(
        googleButtonContainer,
        // @ts-ignore
        { theme: "outline", size: "large", width: "100%" }
      );
    }
  }

  async handleCredentialResponse(credentialResponse: CredentialResponse) {
    console.log(credentialResponse)
    let decodedToken: any | null = null;
    try {
      decodedToken = JSON.parse(atob(credentialResponse?.credential.split('.')[1]));
    } catch (e) {
      console.error('Error while trying to decode token', e);
    }
    console.log('decodedToken', decodedToken);
    await this.authService.loginWithGoogle(credentialResponse.credential).subscribe((response) => {
      localStorage.setItem("token", response.rawData);
      this._ngZone.run(() => {
        this.router.navigate(['/home'])
      })
    })
  }  
}


