import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-annotation-screen',
  templateUrl: './annotation-screen.component.html',
  styleUrls: ['./annotation-screen.component.scss']
})
export class AnnotationScreenComponent implements OnInit {

  _selectedFiles: Array<any>;

  @Input()
  set selectedFiles(selectedFiles: Array<any>) {
    this._selectedFiles = selectedFiles;
    if (selectedFiles && selectedFiles.length > 0) {
      this.selectedFile = selectedFiles[0];
    }
  }

  BASE_URL = 'assets/';
  url: String;
  TOOL_ICONS: Array<String>;

  selectedFile: any;
  constructor() { }

  ngOnInit() {
    if (this._selectedFiles && this._selectedFiles.length > 0) {
      this.selectedFile = this._selectedFiles[0];
    }
    this.TOOL_ICONS = [
      'foreground.png', 'background.png', 'remove.png', 'filter.png', 'save.png'
    ]
  }

  onImageNameClick = (imageName) => {
    this.url = this.BASE_URL + imageName;
  }

}
