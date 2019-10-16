import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingScreenComponent } from './setting-screen/setting-screen.component';
import { LoadScreenComponent } from './load-screen/load-screen.component';
import { AnnotationScreenComponent } from './annotation-screen/annotation-screen.component';
import { ModelUpdateScreenComponent } from './model-update-screen/model-update-screen.component';
import { ExtractScreenComponent } from './extract-screen/extract-screen.component';
import { TestPaperjsComponent } from './test-paperjs/test-paperjs.component';
import { HitTestingComponent } from './test-paperjs/hit-testing/hit-testing.component';
import { ChainExampleComponent } from './test-paperjs/chain-example/chain-example.component';
import { PaperImageComponent } from './paper-image/paper-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingScreenComponent,
    LoadScreenComponent,
    AnnotationScreenComponent,
    ModelUpdateScreenComponent,
    ExtractScreenComponent,
    TestPaperjsComponent,
    HitTestingComponent,
    ChainExampleComponent,
    PaperImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
