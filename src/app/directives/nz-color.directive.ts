import { Directive, ElementRef, Input, OnInit } from '@angular/core'

/**
 * This directive to a bit custom color for ant design.
 */

@Directive({
  selector: '[app-nz-color]',
  standalone: true
})
export class NzColorDirective implements OnInit {

  @Input() appNzType = 'default'
  @Input() appNzColor: Color = 'transparent'
  @Input() appNzShape = true

  initClasses: string[] = [
    'w-[94px]',
    'h-[32px]'
  ]

  defaultClasses: string[] = ['border-grey-217']
  primaryClasses: string[] = ['text-white', 'hover:text-white', 'focus:text-white']

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.analyzeColor()
    this.chooseType().forEach(x => {
      this.el.nativeElement.classList.add(x)
    })
  }

  analyzeColor(): void {
    switch (this.appNzColor) {
      case 'green':
        [
          'bg-green-500',
          'border-green-500',
          'hover:bg-green-400',
          'hover:border-green-400',
          'focus:bg-green-400',
          'focus:border-green-400',
          'active:bg-green-600',
          'active:border-green-600'
        ]
          .forEach((x) => this.primaryClasses.push(x));
        [
          'text-green-500',
          'hover:border-green-400',
          'hover:text-green-400',
          'focus:border-green-400',
          'focus:text-green-400',
          'active:border-green-600'
        ]
          .forEach((x) => this.defaultClasses.push(x))
        break
      case 'yellow':
        [
          'bg-yellow-500',
          'border-yellow-500',
          'hover:bg-yellow-400',
          'hover:border-yellow-400',
          'focus:bg-yellow-400',
          'focus:border-yellow-400',
          'active:bg-yellow-600',
          'active:border-yellow-600'
        ]
          .forEach((x) => this.primaryClasses.push(x));
        [
          'text-yellow-500',
          'hover:border-yellow-400',
          'hover:text-yellow-400',
          'focus:border-yellow-400',
          'focus:text-yellow-400',
          'active:border-yellow-600'
        ]
          .forEach((x) => this.defaultClasses.push(x))
        break
      case 'blue':
        [
          'bg-blue-500',
          'border-blue-500',
          'hover:bg-blue-400',
          'hover:border-blue-400',
          'focus:bg-blue-400',
          'focus:border-blue-400',
          'active:bg-blue-600',
          'active:border-blue-600'
        ]
          .forEach((x) => this.primaryClasses.push(x));
        [
          'text-blue-500',
          'hover:border-blue-400',
          'hover:text-blue-400',
          'focus:border-blue-400',
          'focus:text-blue-400',
          'active:border-blue-600'
        ]
          .forEach((x) => this.defaultClasses.push(x))
        break
    }
  }

  chooseType(): string[] {
    if (!this.appNzShape) {
      this.initClasses = []
    }
    let classes = [...this.initClasses]
    switch (this.appNzType) {
      case ButtonType.primary:
        classes = [...classes, ...this.primaryClasses]
        break
      case ButtonType.default:
        classes = [...classes, ...this.defaultClasses]
        break
    }
    return classes
  }
}

enum ButtonType {
  default = 'default',
  primary = 'primary'
}

type Color = 'transparent' | 'green' | 'blue' | 'yellow'
