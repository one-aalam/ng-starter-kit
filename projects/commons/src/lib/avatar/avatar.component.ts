import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-avatar',
  template: `<div class="avatar relative flex flex-col place-items-center">
  <label class="mb-8 w-36 h-36 mask mask-hexagon shadow-lg bg-gray-200" for="single">
      <img src="src" alt="title" />
  </label>
</div>`,
})
export class AvatarComponent implements OnInit {
    @Input()
    src: string = ''

    @Input()
    title: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
