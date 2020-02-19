import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';


export interface GHRepositories {
  total_count: number;
  incomplete_results: boolean;
  items: [];
}

@Injectable({
  providedIn: 'root'
})
export class RepoSearchService {
  constructor(
    private readonly http: HttpClient,
    @Inject('GITHUB_API_URL') private GITHUB_API_URL: string
  ) { }

  private querySubject = new Subject<string>();

  setQuery(query: string) {
    this.querySubject.next(query);
  }
  cleaQuery() {
    this.querySubject.next();
  }
  getQuery(): Observable<any> {
    return this.querySubject.asObservable();
  }

  public searchRepo(q: string) {
    return this.http.get<GHRepositories>(`${this.GITHUB_API_URL}${q}`);
    // this.http.get<GHRepositories>('https://api.github.com/search/repositories?q=ff').pipe().subscribe(
    //       function(response) { console.log("Success Response" + typeof response)},
    //       function(error) { console.log("Error happened" + error)},
    //       function() { console.log("the subscription is completed")}
    //     );

  }

}
