import { Component, Input, OnInit } from '@angular/core';

type ButtonType = 'submit' | 'button' | 'reset'
type ButtonVariant = 'primary' | 'secondary' | 'accent'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'

@Component({
  selector: 'lib-button',
  template: `
    <button
    type="type"
    class="btn"
    [ngClass]="getBtnCls()"
    [disabled]="disabled"
  >
    <ng-content></ng-content>
  </button>
  `,
})
export class ButtonComponent implements OnInit {
    @Input() type: ButtonType = 'button'
    @Input() variant: ButtonVariant = 'primary'
    @Input() size: ButtonSize = 'md'

    @Input() disabled: boolean = false
    @Input() loading: boolean = false
    @Input() wide: boolean = false
    @Input() circle: boolean = false
    @Input() outline: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  getBtnCls() {
      return {
          [`btn-${this.variant}`]: true,
          [`btn-${this.size}`]: true,
        'loading': this.loading,
        'btn-wide': this.wide,
        'btn-circle': this.circle,
        'btn-outline': this.outline,
    }
  }

}
