import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'add-snippet', loadChildren: './pages/add-snippet/add-snippet.module#AddSnippetPageModule' },
  { path: 'categories', loadChildren: './pages/categories/categories.module#CategoriesPageModule' },
  { path: 'category-detail/:id', loadChildren: './pages/categories/category-detail/category-detail.module#CategoryDetailPageModule' },
  { path: 'my-favorites', loadChildren: './pages/my-favorites/my-favorites.module#MyFavoritesPageModule' },
  { path: 'snippet-detail/:id', loadChildren: './pages/snippet-detail/snippet-detail.module#SnippetDetailPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
