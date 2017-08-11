import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  visible: boolean;
  side_visible: boolean;
  constructor() { this.visible = false; this.side_visible = false; }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  side_hide() { this.side_visible = false; }

  side_show() { this.side_visible = true; }

  side_toggle() { this.side_visible = !this.side_visible; }


}
