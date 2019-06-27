import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/docs/introduce' },
  { path: 'docs', loadChildren: './docs/index.module#DmcDocsModule'},
  {path: 'components/avatar', loadChildren: './avatar/index.module#DmcDemoAvatarModule'},
  {path: 'components/grid', loadChildren: './grid/index.module#DmcDemoGridModule'},
  { path: '**', redirectTo: '/docs/introduce', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {
        useHash: environment.useHash,
        // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
        // Pls refer to https://ng-alain.com/components/reuse-tab
        scrollPositionRestoration: 'top',
      }
    )],
  exports: [RouterModule],
})
export class RouteRoutingModule { }
