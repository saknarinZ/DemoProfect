import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { PageComponent } from '../page/page.component';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [NavbarComponent,SidenavComponent,PageComponent],
  imports: [CommonModule,ClickOutsideModule],
  exports: [NavbarComponent,SidenavComponent,PageComponent],
})
export class SharedModule {}
