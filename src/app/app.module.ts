import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialNavComponent } from './my-material-nav/my-material-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { RouterModule, Routes } from '@angular/router'; 
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { DearPuppyComponentComponent } from './dear-puppy-component/dear-puppy-component.component';

const appRoutes: Routes = [
  { path: 'first-page', component: FirstComponentComponent },
  { path: 'second-page', component: SecondComponentComponent },
  { path: 'dear-puppy', component: DearPuppyComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyMaterialNavComponent,  
    FirstComponentComponent,
    SecondComponentComponent,
    DearPuppyComponentComponent

  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes) ,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
