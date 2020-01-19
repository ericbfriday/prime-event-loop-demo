import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-callback-queue',
  templateUrl: './callback-queue.component.html',
  styleUrls: ['./callback-queue.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallbackQueueComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
