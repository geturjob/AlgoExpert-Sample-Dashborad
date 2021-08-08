import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-systemdash',
  templateUrl: './systemdash.component.html',
  styleUrls: ['./systemdash.component.css']
})
export class SystemdashComponent implements OnInit {
  datalist:any[];
  
  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    dots:false,
    responsive: {
      0: {
       items: 1
     },
      220: {
       items: 3
     },
      500: {
       items: 3
     }
    },
   nav: false
  }
  constructor() { }

  ngOnInit(): void {
    this.datalist=[
      {name:'Identify a Service', url:'../../assets/Capture.PNG'},
      {name:'Define Mission', url:'../../assets/Capture1.PNG'},
      {name:'Analyze Sources', url:'../../assets/Capture2.PNG'},
      {name:'Identify Work Types', url:'../../assets/Capture3.PNG'},
      {name:'System Migration', url:'../../assets/Capture4.PNG'},
      {name:'Data Migration', url:'../../assets/Capture5.PNG'}
    ]
  }
}
