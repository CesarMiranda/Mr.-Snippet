import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../interfaces/menu.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menuOpts: Observable<Menu[]>;

  constructor(
    private menuService: MenuService
  ) {}

  ngOnInit() {
    this.getMenuOpts();
  }

  getMenuOpts() {
    this.menuOpts = this.menuService.getMenu();
  }

}
