import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  @Input() categories: Category[];

  constructor() {}

  ngOnInit() {}

}
