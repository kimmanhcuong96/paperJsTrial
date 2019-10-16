import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-screen',
  templateUrl: './setting-screen.component.html',
  styleUrls: ['./setting-screen.component.scss']
})
export class SettingScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (this.GPUOptions && this.GPUOptions.length > 0)
      this.selectedValue = this.GPUOptions[0].value;
  }

  GPUOptions = [
    { name: "On", value: 1 },
    { name: "Off", value: 2 }
  ]

  PreTrainedModeloptions = [
    { name: "MS-COCO", value: 1 }
  ]

  ModelOptions = [
    { name: "Mask R-CNN", value: 1 }
  ]
  selectedValue: any;

  epochValue = 8;
  batchSize = 4;

  doSave = () => {
    const configData = {
      gpu : 1,
      pretrainedModel: 'MS-COCO',
      model: 'Mask R-CNN',
      numberOfEpoch: this.epochValue,
      batchSize: this.batchSize
    }
    console.log('configData: ', configData);
  }

}
