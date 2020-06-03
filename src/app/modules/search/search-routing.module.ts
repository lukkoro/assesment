import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { GoogleComponent } from './engines/google/google.component';
import { BingComponent } from './engines/bing/bing.component';

const routes: Routes = [
  {
    path: '', component: SearchComponent, children: [
      {path: 'google', component: GoogleComponent},
      {path: 'bing', component: BingComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
