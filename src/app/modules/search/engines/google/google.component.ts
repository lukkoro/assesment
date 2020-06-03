import { Component } from '@angular/core';
import { SearchEngineComponent } from '../search-engine.component';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent extends SearchEngineComponent {
  engineName = 'Google';
}
