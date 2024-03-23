import { Component , Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { MenuItem, MessageService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'vex-header',
  standalone: true,
  imports: [AvatarModule,AvatarGroupModule,ButtonModule, MenuModule,  CommonModule],
  providers: [MessageService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  items: MenuItem[] | undefined;
  @Input() loggedIn = '';

  constructor(
    private messageService: MessageService
  ){}

  ngOnInit() {
    
    console.log(this.loggedIn);
    this.items = [
        { label: 'Options',
            items: [
                {
                    label: 'Settings',
                    command: () => { this.update();}
                }
            ]
        },
        { label: 'Navigate',
            items: [
                {
                    label: 'Logout',
                    routerLink: '/'
                }
            ]
        }
    ];
    }

    update() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
      this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    }
}
