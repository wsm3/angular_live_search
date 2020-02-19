import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {GHRepositories, RepoSearchService} from '../../services/repo-search.service';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SearchListComponent implements OnInit {

  public list$: Observable<GHRepositories>;

  constructor(private readonly repoSearchService: RepoSearchService) {
    this.repoSearchService.getQuery().pipe(debounceTime(500)).subscribe(message => {
      this.list$ = this.repoSearchService.searchRepo(message);
    });
  }

  ngOnInit() {
  }


}
