import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-activity-display',
  templateUrl: './activity-display.component.html',
  styleUrls: ['./activity-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
