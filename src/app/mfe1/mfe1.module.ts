import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mfe1Component } from './components/mfe1/mfe1.component';
import { Mfe1RoutingModule } from './mfe1.routing-module';
import { FlexModule } from '@angular/flex-layout';
import { MaterialModule, mfecommonModule } from 'mfecommon';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Mfe1Component
  ],
  imports: [
    CommonModule,
    Mfe1RoutingModule,
    MaterialModule,
    mfecommonModule.forRoot(environment),
    FlexModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class Mfe1Module { }
