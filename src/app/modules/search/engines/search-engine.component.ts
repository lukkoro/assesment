import { forwardRef, Inject, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { skipWhile } from 'rxjs/operators';

export class SearchEngineComponent implements OnInit {
  engineName: string;
  query: string;

  constructor(@Inject(forwardRef(() => SearchService)) private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchService.getQuery().pipe(skipWhile(q => !q)).subscribe(query => {
      this.query = query;
    });
  }
}
