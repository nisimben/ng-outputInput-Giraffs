import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'label-span',
  templateUrl: './giraff-label-span.component.html',
  styleUrls: ['./giraff-label-span.component.css']
})
export class GiraffLabelspanComponent implements OnInit {

  @Input() label:string= ''
  @Input() val:string= ''

  constructor() { }

  ngOnInit(): void {
  }

}
