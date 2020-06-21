import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giraff-page',
  templateUrl: './giraff-page.component.html',
  styleUrls: ['./giraff-page.component.css']
})
export class GiraffPageComponent implements OnInit {

  selctedG:Giraff;
  bgRnd:string;
  deleteGiraff(GId:number){
    for (let index = 0; index < this.GiraffsArry.length; index++) {
      if(GId == this.GiraffsArry[index].id){
        this.GiraffsArry.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  GiraffsArry :Giraff[]=[
   {id:1,name:'Soly',height:17.2,color:'brown',isBig:true},
   {id:2,name:'Roly',height:8.2,color:'black',isBig:false},
   {id:3,name:'Toly',height:7.2,color:'red',isBig:false},
   {id:4,name:'Koly',height:1.2,color:'green',isBig:false},
   {id:5,name:'Moly',height:15.2,color:'orange',isBig:true},
   {id:6,name:'Boly',height:3.2,color:'pink',isBig:false},
   {id:7,name:'Coly',height:7.2,color:'purple',isBig:false},
   {id:8,name:'Voly',height:17.2,color:'indigo',isBig:true},
   {id:9,name:'Loly',height:5.5,color:'violet',isBig:false},
   {id:10,name:'Poly',height:9.5,color:'levender',isBig:false}

  ]
}
export class Giraff {

  id:number;
  name:string;
  height:number;
  color:string;
  isBig:boolean;
}
