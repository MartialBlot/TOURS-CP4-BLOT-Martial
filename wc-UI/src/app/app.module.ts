import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { InfosComponent } from './infos/infos.component';
import { EditCircusComponent } from './edit-circus/edit-circus.component';
import { EditInfosComponent } from './edit-infos/edit-infos.component';
import { FormsModule } from '@angular/forms';
import { NewInfosComponent } from './new-infos/new-infos.component';
import { NewCircusComponent } from './new-circus/new-circus.component';
import { SendMessagesComponent } from './send-messages/send-messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfosComponent,
    EditCircusComponent,
    EditInfosComponent,
    NewInfosComponent,
    NewCircusComponent,
    SendMessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
