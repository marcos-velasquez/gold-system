import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
})
export class JumbotronComponent implements OnInit {
  @Input() showImage = true;
  constructor() {}

  ngOnInit(): void {}
}
