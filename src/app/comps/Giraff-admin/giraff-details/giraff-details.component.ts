import { Component, OnInit, Input } from '@angular/core';
import { Giraff } from '../giraff-page/giraff-page.component';

@Component({
  selector: 'app-giraff-details',
  templateUrl: './giraff-details.component.html',
  styleUrls: ['./giraff-details.component.css']
})
export class GiraffDetailsComponent implements OnInit {

  @Input()G:Giraff;
  constructor() { }

  ngOnInit(): void {
  }

}
