import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-call-stack',
  templateUrl: './call-stack.component.html',
  styleUrls: ['./call-stack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallStackComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
