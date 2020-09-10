import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { ClickOutsideModule } from 'ng-click-outside';
import { SharedModule } from 'src/app/layout/shared/shared.module';
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule,ClickOutsideModule],
})
export class HomeModule {}
