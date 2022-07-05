
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Components
import { TableCertificatesComponent } from './table-certificates/table-certificates.component';
import { DetailCertificateComponent } from './detail-certificate/detail-certificate.component';
import { FormCertificatesComponent } from './form-certificates/form-certificates.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'create', component: FormCertificatesComponent },
      { path: 'detail', component: DetailCertificateComponent },
      { path: 'table', component: TableCertificatesComponent },
      { path: '**', redirectTo: 'create' }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PagesRoutingModule { }
