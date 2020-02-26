import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeStampComponent } from './timeStamp/timeStamp.component';
import { HttpClientModule } from '@angular/common/http';
import { AppServiceService } from './services/app-service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      TimeStampComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [AppServiceService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
