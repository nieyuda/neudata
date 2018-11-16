import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//main-component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { SidebarWrapperComponent } from './sidebar-wrapper/sidebar-wrapper.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { PreferenceComponent } from './preference/preference.component';
import { StartOneComponent } from './start-one/start-one.component';
import { StartTwoComponent } from './start-two/start-two.component';
import { StartThreeComponent } from './start-three/start-three.component';
import { StartFourComponent } from './start-four/start-four.component';
import { StartFiveComponent } from './start-five/start-five.component';
import { StartSixComponent } from './start-six/start-six.component';
import { Code404Component } from './code404/code404.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StockComponent } from './stock/stock.component';
//http-service
import { HttpClientModule } from '@angular/common/http';
//Ngx-chart
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material Design
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatRadioModule, MatSelectModule} from '@angular/material';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
//FireBase Config

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    MainHeaderComponent,
    SidebarWrapperComponent,
    ContentWrapperComponent,
    PreferenceComponent,
    StartOneComponent,
    StartTwoComponent,
    StartThreeComponent,
    StartFourComponent,
    StartFiveComponent,
    StartSixComponent,
    Code404Component,
    LoginComponent,
    RegisterComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    AngularFireModule.initializeApp(environment),
    AngularFirestoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
