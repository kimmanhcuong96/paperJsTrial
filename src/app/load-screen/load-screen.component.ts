import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-load-screen',
  templateUrl: './load-screen.component.html',
  styleUrls: ['./load-screen.component.scss']
})
export class LoadScreenComponent implements OnInit {

  @Output()
  selectedFilesExport: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();  

  constructor() { }

  ngOnInit() {
  }

  selectedFiles: Array<any>;

  // selectedFileNames = [
  //   "file 1.jpg",
  //   "file 2.jpg",
  //   "file 3.jpg",
  //   "file 1.jpg",
  //   "file 2.jpg",
  //   "file 3.jpg",
  //   "file 1.jpg",
  //   "file 2.jpg",
  //   "file 3.jpg",
  //   "file 1.jpg",
  //   "file 2.jpg",
  //   "file 3.jpg"
  // ]

  fileChanged = (event) => {
    this.selectedFiles = event.target.files;
    console.log('selected file: ', this.selectedFiles);
    this.selectedFilesExport.emit(this.selectedFiles);
  }
}
