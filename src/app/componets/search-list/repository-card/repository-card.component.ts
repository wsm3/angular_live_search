import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
})
export class RepositoryCardComponent implements OnInit {

  @Input()
  repo:[];

  constructor() { }
  ngOnInit() {
  }

}
