import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-popup-container',
  templateUrl: './popup-container.component.html',
  styleUrls: ['./popup-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
