import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { assetReducer } from '../store/asset-reducer';
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
    FormsModule,
    StoreModule.forRoot({
      assetList: assetReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
