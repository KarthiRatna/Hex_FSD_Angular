import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent ,AboutComponent,DetailComponent,AddProductComponent,RegisterComponent ,LoginComponent,NotFoundComponent} from './components';
import { ImagesPipe,AvailabilityPipe } from './pipes';
import { HeaderInterceptor } from './interceptors/header.interceptor';
import { HighlightDirective } from './directive';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ImagesPipe,
    DetailComponent,
    AvailabilityPipe,
    AddProductComponent,
    RegisterComponent,
    LoginComponent,
    HighlightDirective,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HeaderInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
