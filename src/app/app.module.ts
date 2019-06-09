import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GithubService } from './github.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
// import { HomeComponent } from './home/home.component';
// import { GitsearchComponent } from './gitsearch/gitsearch.component';
// import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    PageNotFoundComponent,
    // HomeComponent,
    // GitsearchComponent,
    // ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
