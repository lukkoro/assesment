import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GoogleComponent } from './engines/google/google.component';
import { BingComponent } from './engines/bing/bing.component';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [
    GoogleComponent,
    BingComponent,
    SearchComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    SearchRoutingModule,
  ]
})
export class SearchModule { }
