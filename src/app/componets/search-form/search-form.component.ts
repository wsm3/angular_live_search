import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RepoSearchService} from '../../services/repo-search.service';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SearchFormComponent implements OnInit {

  constructor(private readonly repoSearchService: RepoSearchService) { }

  ngOnInit() {
  }

  public searchRepo(svalue: string) {
      this.repoSearchService.setQuery(svalue);
  }
}
