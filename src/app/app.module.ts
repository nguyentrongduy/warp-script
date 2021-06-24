import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { ResultComponent } from './components/result/result.component';
import { TestingPageComponent } from './pages/testing-page/testing-page.component';
import { LogPageComponent } from './pages/log-page/log-page.component';
import { GvPageComponent } from './pages/gv-page/gv-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LogPageComponent,
    TestingPageComponent,
    HeaderComponent,
    QuestionCardComponent,
    ResultComponent,
    GvPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
