import { Component, OnInit, Input } from '@angular/core';
import { Raster, PaperScope, Tool, Project, Size } from 'paper';

@Component({
  selector: 'app-paper-image',
  templateUrl: './paper-image.component.html',
  styleUrls: ['./paper-image.component.scss']
})
export class PaperImageComponent implements OnInit {

  _isShownImage = false;

  @Input()
  set isShownImage(isShownImage: boolean) {
    this._isShownImage = isShownImage;
    if (this.isLoadedimage && this._isShownImage) {
      const imageTag = document.getElementById('target-image');
      if (!this.storeImageSize) {
        this.targetImageHeight = imageTag.clientHeight;
        this.targetImageWidth = imageTag.clientWidth;
        this.currentImageHeight = this.targetImageHeight;
        this.currentImageWidth = this.targetImageWidth;
        this.storeImageSize = true;
      } else {
        this.currentImageHeight = this.targetImageHeight;
        this.currentImageWidth = this.targetImageWidth;
      }
      if(this.raster){
        this.raster.size = new Size(this.targetImageWidth, this.targetImageHeight);
      }
    }
  }

  BASE_URL = 'assets/';
  imageName = 'foreground.png';
  targetImageWidth: any;
  targetImageHeight: any;
  currentImageWidth: any;
  currentImageHeight: any;
  isLoadedimage = false;
  storeImageSize = false;

  scope: PaperScope;
  project: Project;
  raster : Raster;

  constructor() { }

  ngOnInit() {
    console.log('init');
    if (this.isLoadedimage) {
      const imageTag = document.getElementById('target-image');
      console.log('width, heigh when show: ', imageTag.clientWidth, imageTag.clientHeight);
    }
    this.scope = new PaperScope();
    let tool = new Tool();
    this.project = new Project('cv-image');
    this.raster = new Raster('target-image');
    this.raster.position = this.project.view.center;
    // raster.scale(0.5);
    // raster.rotate(45);
  }

  verifyLoadedImage = (img) => {
    this.isLoadedimage = true;
    console.log('in verifyLoadedImage: ', img);
    console.log('width, heigh when hide: ', img.clientWidth, img.clientHeight);
  }

  resizeDemo = () => {
    console.log('in resize Demo: ', this.currentImageWidth, this.targetImageWidth)
    // if (this.targetImageHeight && this.targetImageWidth) {
    //   this.currentImageHeight += this.currentImageHeight * 0.5;
    //   this.currentImageWidth += this.currentImageWidth * 0.5;
    // }
    if(this.raster){
      this.raster.size = new Size(this.raster.size.multiply(1.5));
    }
  }

}
