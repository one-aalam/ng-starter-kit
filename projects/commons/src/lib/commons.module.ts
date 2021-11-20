import { NgModule } from '@angular/core';
import { CommonsComponent } from './commons.component';
import { AvatarComponent } from './avatar/avatar.component';



@NgModule({
  declarations: [
    CommonsComponent,
    AvatarComponent
  ],
  imports: [
  ],
  exports: [
    CommonsComponent,
    AvatarComponent
  ]
})
export class CommonsModule { }
