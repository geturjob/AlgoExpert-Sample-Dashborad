import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showspinner:boolean = false;
  firstdiv:boolean = true;
  seconddiv:boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{                           
      this.showspinner = true;
 }, 2000);

 setTimeout(()=>{                           
  this.showspinner = false;
}, 3000);
  }

  submitCode():void{
    this.firstdiv = false;
    this.seconddiv = false;
    this.showspinner = true;
    setTimeout(()=>{                           
      this.showspinner = false;
    }, 3000);
    setTimeout(()=>{            
      this.firstdiv = true;
    }, 1000);
    setTimeout(()=>{            
      this.seconddiv = true;
    }, 1000);
  }
}

