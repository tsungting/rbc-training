import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AssetEditComponent } from './components/asset-edit/asset-edit.component';
import { AddAssetComponent } from './components/add-asset/add-asset.component';
import { AssetListComponent } from './components/asset-list/asset-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetEditComponent,
    AddAssetComponent,
    AssetListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
