import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  selectedFile: Array<any>;

  isShownImage = false;

  ngOnInit() {
    let firstTabContent = document.getElementById('firstTabContent');
    let fifthTabContent = document.getElementById('fifthTabContent');
    if (fifthTabContent) {
      fifthTabContent.style.display = 'block';
    }
    let firstTab = document.getElementById('firstTab');
    let fifthTab = document.getElementById('fifthTab');
    if (fifthTab) {
      fifthTab.className += ' active';
    }

  }

  openTab = (evt, tabOrder) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabOrder).style.display = "block";
    if (tabOrder && tabOrder.trim() === 'fourthTabContent') {
      this.isShownImage = true;
    } else {
      this.isShownImage = false;
    }
    console.log('className: ', evt.target.className);
    evt.target.className += " active";
  }

}
