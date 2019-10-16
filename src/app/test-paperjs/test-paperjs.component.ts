import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Project, Path, PointText, Group, View, Point, Color, Tool } from 'paper';
import * as paper from 'paper';

@Component({
  selector: 'app-test-paperjs',
  templateUrl: './test-paperjs.component.html',
  styleUrls: ['./test-paperjs.component.scss']
})
export class TestPaperjsComponent implements OnInit {

  // @ViewChild('#cv1', {static : false})
  // canvas: ElementRef;

  constructor() { }
  // view: View;
  // The amount of points in the path:
  // points = 25;
  // // The distance between the points:
  // length = 3;

  // path: Path;

  // tool = new Tool();

  ngOnInit() {
    // this.tool = new Tool();
    // this.tool.onMouseMove  = this.testOnMouseMove;
    // window['paper'] = paper;

    // console.log('paper', paper.Project);

    // const project1 = new Project('cv1');
    // const path = new Path.Circle({
    //   center: [80, 50],
    //   radius: 30,
    //   strokeColor: 'blue'
    // });

    // const pathx = new Path.Circle({
    //   center: [80, 50],
    //   radius: 50,
    //   strokeColor: 'blue'
    // });
    // const project2 = new Project('cv2');
    // this.path = new Path({
    //   center: [150, 75],
    //   strokeColor: '#E4141B',
    //   strokeWidth: 20,
    //   strokeCap: 'round'
    // });
    // console.log('init path: ', this.path.center);
    // this.view = new View();

    // let start = new Point(150, 75).divide(new Point(10, 1));
    // console.log('start point: ')
    // for (let i = 0; i < this.points; i++) {
    //   console.log('add new point: Nth: ', i+1);
    //   this.path.add(start.add(new Point(i * this.length, 0)));
    // }
  }

  // testOnMouseMove = (event) => {
  //   console.log('event: mouse move test: ', event.point );
  // }

  // @HostListener('mousemove',  ['$event'])
  // onMouseMove = (event) => {
  //   console.log('mouse move: - >');
  //   const eventPoint = new Point(event.layerX, event.layerY);
  //   this.path.firstSegment.point = eventPoint;
  //   console.log('event pont: ', eventPoint);
  //   for (let i = 0; i < this.points - 1; i++) {
  //     let segment = this.path.segments[i];
  //     let nextSegment = segment.next;
  //     let vector = segment.point.subtract(nextSegment.point);
  //     vector.length = this.length;
  //     nextSegment.point = segment.point.subtract(vector);
  //   }
  //   this.path.smooth({ type: 'continuous' });
  // }

  // // @HostListener('mousdown',  ['$event'])
  // onMouseDown(event) {
  //   this.path.fullySelected = true;
  //   this.path.strokeColor = new Color('#e08285');
  // }

  // // @HostListener('mouseup',  ['$event'])
  // onMouseUp(event) {
  //   console.log('mouse up: + x coordinate: ', event.layerX, ' + y coordinate: ', event.layerY );
  //   this.path.fullySelected = false;
  //   this.path.strokeColor = new Color('#e4141b');
  // }

}
