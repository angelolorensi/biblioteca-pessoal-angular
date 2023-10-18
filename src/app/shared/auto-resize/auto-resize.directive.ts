import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoResize]'
})
export class AutoResizeDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event.target'])
  onInput(textArea: HTMLTextAreaElement): void {
    this.adjustTextAreaHeight(textArea);
  }

  ngAfterViewInit(): void {
    this.adjustTextAreaHeight(this.el.nativeElement);
  }

  private adjustTextAreaHeight(textArea: HTMLTextAreaElement): void {
    textArea.style.overflow = 'hidden';

    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
  }
}
