import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  img = 'https://scontent.flpb1-2.fna.fbcdn.net/v/t39.30808-6/456452224_122098291190486750_2837043428787193988_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OjYmWqIoP4wQ7kNvgFE8T9M&_nc_ht=scontent.flpb1-2.fna&oh=00_AYD-qURGH3aZji84931nIp95l182q4fQaS_XMY6-02MHzA&oe=66CD318B';
}
