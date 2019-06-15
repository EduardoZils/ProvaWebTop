import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimalComponent } from './animal/animal/animal.component';
import { VacinaComponent } from './vacina/vacina/vacina.component';
import { DialogComponent } from './shared/dialog/dialog/dialog.component';
import { MatInputModule, MatDialogModule, MatRadioModule, MatButtonModule, MatTableModule, MatIconModule, MatPaginatorModule, MatSortModule, MatExpansionModule, MatSelectModule } from '@angular/material';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    VacinaComponent,
    DialogComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,

    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    MatButtonModule, 
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  providers: [HttpClient,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
