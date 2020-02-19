import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Subject} from 'rxjs';
import { LoaderService } from '../../../services/loader.service';


@Component({
  selector: 'app-loader',
  template: '<div *ngIf="isLoading$ | async" class="center">\n' +
    '  <img src="./assets/preload.gif" alt="" style="width: 40px;">\n' +
    '</div>',
})
export class LoaderComponent implements OnInit {
  public isLoading$: Subject<boolean> = this.loaderService.isLoading;
  constructor(private readonly loaderService: LoaderService) { }
  ngOnInit() {
  }

}
