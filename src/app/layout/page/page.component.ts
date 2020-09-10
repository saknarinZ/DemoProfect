import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClickedOutside(e: Event){
    console.log('Clicked outside:', e);
    document.getElementById("mySidenav").style.width = "0";
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events

   onScroll(event) {
    this.myFunction()
   }

  myFunction() {
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }

  }

}
