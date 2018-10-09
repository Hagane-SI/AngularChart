import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { FiltersComponent } from './filters/filters.component';
import { GraphComponent } from './graph/graph.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableComponent } from './table/table.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    FiltersComponent,
    GraphComponent,
    HeaderComponent,
    InfoComponent,
    NavigationComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService, GraphComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
