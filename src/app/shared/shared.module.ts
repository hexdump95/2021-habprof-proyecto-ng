import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class SharedModule { }
