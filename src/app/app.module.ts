import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserscreateUserComponent } from './userscreate-user/userscreate-user.component';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './users/update/update.component';
import { DeleteComponent } from './users/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UpdateComponent,
    DeleteComponent,
    
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
