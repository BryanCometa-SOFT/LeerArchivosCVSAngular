//MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//COMPONENTS
import { FormCertificatesComponent } from './form-certificates/form-certificates.component';
import { TableCertificatesComponent } from './table-certificates/table-certificates.component';
import { DetailCertificateComponent } from './detail-certificate/detail-certificate.component';

//Routing
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [
    FormCertificatesComponent,
    TableCertificatesComponent,
    DetailCertificateComponent
  ],
  imports: [
    PagesRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
