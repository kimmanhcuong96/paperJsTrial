import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Project, Path, PointText, Group, View, Point, Color, Segment, PaperScope, Tool, Size } from 'paper';
import * as paper from 'paper';

@Component({
  selector: 'app-hit-testing',
  templateUrl: './hit-testing.component.html',
  styleUrls: ['./hit-testing.component.scss']
})
export class HitTestingComponent implements OnInit {

  @ViewChild('#cv2', { static: false })
  canvas: HTMLCanvasElement;

  constructor(
  ) { }

  scope: PaperScope;
  project: Project;

  ngOnInit() {
    this.scope = new PaperScope();
    let tool = new Tool();
    tool.onMouseDown = this.onMouseDown;
    tool.onMouseMove = this.onMouseMove;
    tool.onMouseDrag = this.onMouseDrag;
    this.project = new Project('cv2');
    this.createPaths();
  }

  values = {
    paths: 50,
    minPoints: 5,
    maxPoints: 15,
    minRadius: 30,
    maxRadius: 90
  };

  hitOptions = {
    segments: true,
    stroke: true,
    fill: true,
    tolerance: 5
  };

  segment: any;
  path: any;
  movePath = false;

  createPaths() {
    let radiusDelta = this.values.maxRadius - this.values.minRadius;
    let pointsDelta = this.values.maxPoints - this.values.minPoints;
    // let view = new View(project, this.canvas);
    console.log('test random point: ', Point.random());
    for (let i = 0; i < this.values.paths; i++) {
      let radius = this.values.minRadius + Math.random() * radiusDelta;
      let points = this.values.minPoints + Math.floor(Math.random() * pointsDelta);
      let path = this.createBlob(new Point(this.project.view.size).multiply(Point.random()), radius, points);
      let lightness = (Math.random() - 0.5) * 0.4 + 0.4;
      let hue = Math.random() * 360;
      path.fillColor = new Color({ hue: hue, saturation: 1, lightness: lightness });
      path.strokeColor = new Color('black');
    };
    console.log('create path done');
  }

  createBlob(center: Point, maxRadius: any, points: any) {
    let path = new Path();
    path.closed = true;
    for (let i = 0; i < points; i++) {
      let delta = new Point({
        length: (maxRadius * 0.5) + (Math.random() * maxRadius * 0.5),
        angle: (360 / points) * i
      });
      path.add(center.add(delta));
    }
    path.smooth();
    return path;
  }

  onMouseDown = (event) => {
    console.log('on mouse move: ', event.point);
    this.segment = this.path = null;
    let hitResult = this.project.hitTest(event.point, this.hitOptions);
    if (!hitResult)
      return;
    if (event.modifiers.shift) {
      if (hitResult.type == 'segment') {
        hitResult.segment.remove();
      };
      return;
    }
    if (hitResult) {
      this.path = hitResult.item;
      if (hitResult.type == 'segment') {
        this.segment = hitResult.segment;
      } else if (hitResult.type == 'stroke') {
        let location = hitResult.location;
        this.segment = this.path.insert(location.index + 1, event.point);
        this.path.smooth();
      }
    }
    this.movePath = hitResult.type == 'fill';
    if (this.movePath)
      this.project.activeLayer.addChild(hitResult.item);
  }

  onMouseMove = (event) => {
    this.project.activeLayer.selected = false;
    if (event.item)
      event.item.selected = true;
  }

  onMouseDrag = (event) => {
    if (this.segment) {
      this.segment.point = this.segment.point.add(event.delta);
      this.path.smooth();
    } else if (this.path) {
      this.path.position = this.path.position.add(event.delta);
    }
  }

}
