import { Component, OnInit } from '@angular/core';
import { Project, Path, PointText, Group, View, Point, Color, Tool, PaperScope } from 'paper';

@Component({
  selector: 'app-chain-example',
  templateUrl: './chain-example.component.html',
  styleUrls: ['./chain-example.component.scss']
})
export class ChainExampleComponent implements OnInit {
  scope: PaperScope;
  project: Project;
  path: Path;

  constructor() { }

  ngOnInit() {
    // The amount of points in the path:
    const points = 25;
    // The distance between the points:
    const length = 35;

    this.scope = new PaperScope();
    let tool = new Tool();
    tool.onMouseMove = (event) => {
      this.onMouseMove(event, this.path, points, length);
    }
    // tool.onMouseMove = this.testTool;
    tool.onMouseDown = (event) => {
      this.onMouseDown(event, this.path);
    }
    tool.onMouseUp = (event) => {
      this.onMouseUp(event, this.path);
    }
    this.project = new Project('cv1');
    this.path = new Path({
      strokeColor: '#E4141B',
      strokeWidth: 20,
      strokeCap: 'round'
    });
    let start = this.project.view.center.divide(new Point(10, 1));
    for (let i = 0; i < points; i++)
      this.path.add(start.add(new Point(i * length, 0)));
  }

  testTool = (event) => {
    console.log('run test tool');
  }

  onMouseMove = (event: any, path: Path, points: any, length: any) => {
    path.firstSegment.point = event.point;
    for (let i = 0; i < points - 1; i++) {
      let segment = path.segments[i];
      let nextSegment = segment.next;
      let vector = segment.point.subtract(nextSegment.point);
      vector.length = length;
      nextSegment.point = segment.point.subtract(vector);
    }
    path.smooth({ type: 'continuous' });
  }

  onMouseDown = (event: any, path: Path) => {
    console.log('on mouse down: ', event);
    path.fullySelected = true;
    path.strokeColor = new Color('#e08285');
  }

  onMouseUp = (event: any, path: Path) => {
    console.log('on mouse up: ', event);
    path.fullySelected = false;
    path.strokeColor = new Color('#e4141b');
  }

}
