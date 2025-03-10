import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from '../../core/components/header/header.component';
import { SidebarComponent } from '../../core/components/sidebar/sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [MatSidenavModule, HeaderComponent, SidebarComponent, RouterModule, RouterOutlet, MatButtonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

  menuAberto = true; // Menu inicia fechado

  alternarMenu() {
    this.menuAberto = !this.menuAberto; // Alterna o estado do menu
  }

}
