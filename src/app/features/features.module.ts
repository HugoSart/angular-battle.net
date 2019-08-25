import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LauncherComponent } from './launcher/launcher.component';
import { NavComponent } from './launcher/nav/nav.component';
import { SnackComponent } from './launcher/tabs/games/snack/snack.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { GamesComponent } from './launcher/tabs/games/games.component';
import { AccountMenuComponent } from './launcher/nav/account-menu/account-menu.component';


@NgModule({
  declarations: [LauncherComponent, NavComponent, SnackComponent, GamesComponent, AccountMenuComponent],
  exports: [
    LauncherComponent
  ],
  imports: [
    CommonModule,
    AngularFontAwesomeModule
  ]
})
export class FeaturesModule {
  // empty
}
