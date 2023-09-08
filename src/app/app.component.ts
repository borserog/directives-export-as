import { AfterViewInit, Component, VERSION, ViewChild } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // Multiple ways to query for a Directive's reference
  @ViewChild('tplWithDirective')
  highlightDirectiveOne;

  @ViewChild(HighlightDirective)
  highlightDirectiveTwo;

  @ViewChild('tpl', { read: HighlightDirective })
  highlightDirectiveThree;

  // Selects only the NativeElement
  @ViewChild('tpl')
  tpl: any;

  name = 'Angular ' + VERSION.major;

  ngAfterViewInit() {
    console.log(this.highlightDirectiveOne);
    console.log(this.highlightDirectiveTwo);
    console.log(this.highlightDirectiveThree);
    console.log(this.tpl);
  }

  onParagraphClicked() {
    this.highlightDirectiveOne.toggle();
  }
}
