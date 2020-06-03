import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatRippleModule,
  MatGridListModule,
  MatListModule,
  MatTreeModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatRadioModule,
  MatInputModule,
} from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatMenuModule } from '@angular/material/menu';

const matModules = [
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatRippleModule,
  MatGridListModule,
  MatListModule,
  MatTreeModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatRadioModule,
  MatInputModule,
  MatMenuModule
];

const ngModules = [
  FormsModule,
];

const modules = [
  ...matModules,
  ...ngModules,
  FontAwesomeModule,
]

@NgModule({
  declarations: [
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class SharedModule { }
