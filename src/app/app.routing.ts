import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { DeleteComponent } from './users/delete/delete.component';
import { UpdateComponent } from './users/update/update.component';

import { UsersComponent } from './users/users.component';
import { UserscreateUserComponent } from './userscreate-user/userscreate-user.component';

const APP_ROUTES: Routes = [
   { path: 'users', component: UsersComponent },
   { path: 'create', component: UserscreateUserComponent},
   { path: 'users/update/:id', component: UpdateComponent },
   { path: 'users/delete/:id', component: DeleteComponent }
];

export const routing:  ModuleWithProviders<AppModule> = RouterModule.forRoot(APP_ROUTES);