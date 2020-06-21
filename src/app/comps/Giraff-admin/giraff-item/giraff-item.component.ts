import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Giraff } from '../giraff-page/giraff-page.component'

@Component({
  selector: 'G-item',
  templateUrl: './giraff-item.component.html',
  styleUrls: ['./giraff-item.component.css']
})
export class GiraffItemComponent implements OnInit {

  @Input() G:Giraff;

  //notyfications

  @Output() clickNote = new EventEmitter<null>()
  @Output() dbclickNote = new EventEmitter<null>()
  @Output() deleteNote = new EventEmitter<number>()
  @Output() randomColor = new EventEmitter<string>()

  clickNoteFn(){
    // console.log(`${this.clickNote} clickNoteFn for Giraff`);
    this.clickNote.emit()
  }

  deleteNoteFn(){
    this.deleteNote.emit(this.G.id)
  }
 
  constructor() { }

  ngOnInit(): void {
    
   setTimeout(()=>{
     this.randomColor.emit(this.G.color)
    }, 1000*this.G.id)
    console.log(this.G.color);
  }

}
