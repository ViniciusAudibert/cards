import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'

import { CardComponent } from './generics/card/card.component'
import { HeaderComponent } from './generics/header/header.component'
import { PersonDetailsComponent } from './generics/personDetails/personDetails.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    PersonDetailsComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
