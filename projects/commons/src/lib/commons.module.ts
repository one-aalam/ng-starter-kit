import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { SafePipe } from './pipes/safe.pipe'

import { AvatarComponent } from './components/avatar/avatar.component';
import { ButtonComponent } from './components/button/button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavProgressComponent } from './components/nav-progress/nav-progress.component';
import { StarterKitComponent } from './components/starter-kit/starter-kit.component'

@NgModule({
  declarations: [
      ButtonComponent,
      SpinnerComponent,
      NavProgressComponent,
      AvatarComponent,
    StarterKitComponent,
    SafePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
      ButtonComponent,
      SpinnerComponent,
      NavProgressComponent,
      AvatarComponent,
    StarterKitComponent,
    SafePipe
  ]
})
export class CommonsModule { }
