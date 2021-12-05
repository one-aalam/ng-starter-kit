import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'


@Component({
  selector: 'lib-avatar',
  template: `<div class="avatar relative flex flex-col place-items-center">
  <button class="mb-8 w-36 h-36 mask mask-hexagon shadow-lg bg-gray-200" (click)="imageElm.click()">
      <img [src]="src" [alt]="title" />
  </button>
    <input #imageElm class="sr-only" type="file" accept="image/*" (change)="handleChange($event)" [disabled]="loading"/>
</div>`,
})
export class AvatarComponent implements OnInit {

    @Input() src: SafeUrl | string = ''
    @Input() title: string = ''
    @Input() loading: boolean = false

    @Output() change = new EventEmitter<Event>()

  constructor(protected sanitizer: DomSanitizer) {

   }

  ngOnInit(): void {
  }

  handleChange(evt: Event) {
      this.change.emit(evt)
  }

}
