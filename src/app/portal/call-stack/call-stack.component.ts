import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-call-stack',
  templateUrl: './call-stack.component.html',
  styleUrls: ['./call-stack.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallStackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
