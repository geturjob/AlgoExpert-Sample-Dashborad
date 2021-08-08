import { Component, OnInit } from '@angular/core';
import { onSideNavChange, onMainContentChange, animateText} from './animation';

@Component({
  selector: 'app-all-engineer',
  templateUrl: './all-engineer.component.html',
  styleUrls: ['./all-engineer.component.css'],
  animations:[onSideNavChange, onMainContentChange, animateText]
})
export class AllEngineerComponent implements OnInit {

  datalist:any[];
  previousActive:string = "dog";
  active:string = "cat";
  nextActive:string = "deer";
  sidenavChange:boolean = true;
  contentChange:boolean = true;
  textChange:boolean= true;

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
      480: {
       items: 2
     },
      940: {
       items: 3
     }
    },
   nav: true
  }

  constructor() { }

  ngOnInit(): void {
    this.datalist = [
      {name:"Tom", class:""},
      {name:"Ross", class:""},
      {name:"Crish", class:""},
      {name:"Sunny", class:""}
    ]
  }

  nextElement1(){
    const currentIndex = this.datalist.findIndex(data=>data.name === this.active);
    const previousIndex = currentIndex;
    const newIndex = currentIndex === this.datalist.length -1 ? 0 : currentIndex +1;
    const nextIndex = newIndex === this.datalist.length -1 ? 0 : newIndex + 1;
    this.previousActive = this.datalist[previousIndex].name;
    this.active = this.datalist[newIndex].name;
    this.nextActive = this.datalist[nextIndex].name;
  }

  previousElement(){
    // const currentIndex = this.datalist.findIndex(data=>data.name === this.active);
    // const newIndex = currentIndex === 0 ? this.datalist.length -1 : currentIndex -1;
    // this.active = this.datalist[newIndex].name;
    this.sidenavChange = false;

  }

  nextElement(){
    this.sidenavChange = true;
    this.contentChange = this.sidenavChange;

    setTimeout(()=>{
      this.textChange = this.sidenavChange;
    }, 100);

  }
}
