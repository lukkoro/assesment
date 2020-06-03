import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchEngines = ['google', 'bing'];
  searchEngine = 'google';

  query = '';

  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit() {
  }

  search() {
    this.searchService.setQuery(this.query);
    this.router.navigate([`search/${this.searchEngine}`]);
  }

}
