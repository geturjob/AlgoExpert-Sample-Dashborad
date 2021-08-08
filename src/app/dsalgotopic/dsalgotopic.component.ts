import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dsalgotopic',
  templateUrl: './dsalgotopic.component.html',
  styleUrls: ['./dsalgotopic.component.css']
})
export class DsalgotopicComponent implements OnInit {

  datalist:any;
  constructor() { }

  ngOnInit(): void {
    this.datalist = [
      {name:"React", value:"Love"},
      {name:"Angular", value:"Second Love"},
      {name:"JavaScript", value:"Heart"},
      {name:"TypeScript", value:"Need"},
      {name:"CSS", value:"Style"},
      {name:"HTML", value:"Look"},
      {name:"Redux", value:"Must for love"},
      {name:"Material UI", value:"Awesome"}
    ]
  }

}
