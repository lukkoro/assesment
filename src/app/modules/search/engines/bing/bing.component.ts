import { Component } from '@angular/core';
import { SearchEngineComponent } from '../search-engine.component';

@Component({
  selector: 'app-bing',
  templateUrl: './bing.component.html',
  styleUrls: ['./bing.component.scss']
})
export class BingComponent extends SearchEngineComponent{
  engineName = 'Bing';
}
