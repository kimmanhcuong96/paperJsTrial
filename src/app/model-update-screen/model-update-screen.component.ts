import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-model-update-screen',
  templateUrl: './model-update-screen.component.html',
  styleUrls: ['./model-update-screen.component.scss']
})
export class ModelUpdateScreenComponent implements OnInit {


  @Input()
  isShownImage: boolean;

  constructor() { }

  ngOnInit() {
  }

}
