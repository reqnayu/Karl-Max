import { Directive, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[link]',
  standalone: true,
})
export class LinkDirective {
  @Input('link') href: string = ''
  @HostListener('click', ['$event'])
  handleClick() {
    window.open(this.href, '_blank')
  }
}
