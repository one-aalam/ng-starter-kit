import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-nav-progress',
  template: `
      <div class="progress-container">
            <div class="progress" [style.width.%]="progress * 100"></div>
    </div>
    <div class="fade" *ngIf="progress >= 0.4" ></div>`,
  styles: [`
    .progress-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  z-index: 999;
}
.progress {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: #5cb85c;
  transition: width 0.4s;
}
.fade {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  pointer-events: none;
  z-index: 998;
  animation: fade 0.4s;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}`]
})
export class NavProgressComponent implements OnInit {

    progress: number = 0

  constructor() { }

  ngOnInit(): void {
    setTimeout(this.updateProgress, 250)
  }

  updateProgress() {
    this.progress += 0.1
    const remaining = 1 - this.progress
    if (remaining > 0.15) setTimeout(this.updateProgress, 500 / remaining)
    console.log(this.progress)
  }

}
