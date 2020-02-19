import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './componets/search-form/search-form.component';
import { SearchListComponent } from './componets/search-list/search-list.component';

import {RepoSearchService} from './services/repo-search.service';
import {LoaderService} from './services/loader.service';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './componets/search-list/loader/loader.component';
import {LoaderInterceptor} from './services/loader.interceptor';
import { RepositoryCardComponent } from './componets/search-list/repository-card/repository-card.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    SearchListComponent,
    LoaderComponent,
    RepositoryCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: RepoSearchService,
      useClass: RepoSearchService
    },
    {
      provide: LoaderService,
      useClass: LoaderService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    {
      provide: 'GITHUB_API_URL',
      useValue: environment.GITHUB_API_URL
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
