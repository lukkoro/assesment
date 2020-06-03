import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private query: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() { }

  setQuery(query) {
    this.query.next(query);
  }

  getQuery(): Observable<string> {
    return this.query.asObservable();
  }
}
