import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'hl'
})
export class HighlightDirective {
  isHighlighted = true;

  @HostBinding('class.highlight')
  get getClassValue() {
    return this.isHighlighted;
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
  }

}