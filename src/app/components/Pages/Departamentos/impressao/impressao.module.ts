import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImpressaoRoutingModule } from './impressao-routing.module';
import { ImpressaoComponent } from './impressao.component';


@NgModule({
  declarations: [
    ImpressaoComponent,
  ],
  imports: [
    CommonModule,
    ImpressaoRoutingModule
  ]
})
export class ImpressaoModule { }
