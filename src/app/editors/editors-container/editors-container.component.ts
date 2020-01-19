import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-editors-container',
  templateUrl: './editors-container.component.html',
  styleUrls: ['./editors-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorsContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
