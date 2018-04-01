import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { MainpageComponent } from './dashboard/mainpage/mainpage.component';
import { ExercisedataComponent } from './fitness/exercisedata/exercisedata.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { ChatComponent } from './message/chat/chat.component';
import { RecipefoodComponent } from './recipes/recipefood/recipefood.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { CoachmemberlistComponent } from './coachmemberlist/coachmemberlist.component';
import { CoachuserviewComponent } from './coachuserview/coachuserview.component';

// import { UserProfileComponent } from './user-profile/user-profile.component';
// import { TableListComponent } from './table-list/table-list.component';
// import { TypographyComponent } from './typography/typography.component';
// import { IconsComponent } from './icons/icons.component';
// import { MapsComponent } from './maps/maps.component';
// import { NotificationsComponent } from './notifications/notifications.component';
// import { UpgradeComponent } from './upgrade/upgrade.component';

const routes: Routes = [
  { path: 'dashboard', component: MainpageComponent },
  { path: 'fitness-exercise', component: ExercisedataComponent },
  { path: 'nutrition-data', component: NutritionComponent },
  { path: 'message',   component: ChatComponent },
  { path: 'recipes',   component: RecipefoodComponent },
  { path: 'create-recipe',   component: CreateRecipeComponent },
  { path: 'coach-memberlist',     component: CoachmemberlistComponent },
  { path: 'coach-user-view',     component: CoachuserviewComponent },

  // { path: 'typography',     component: TypographyComponent },
  // { path: 'icons',          component: IconsComponent },
  // { path: 'maps',           component: MapsComponent },
  // { path: 'notifications',  component: NotificationsComponent },
  // { path: 'upgrade',        component: UpgradeComponent },
    { path: '',          redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
