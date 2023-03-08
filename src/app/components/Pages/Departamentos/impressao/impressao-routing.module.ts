import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressaoComponent } from './impressao.component';

const routes: Routes = [
  {
    path: 'impressao',
    component: ImpressaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImpressaoRoutingModule { }
