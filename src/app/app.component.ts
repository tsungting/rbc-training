import { Component } from '@angular/core';
import { IAssetObject, AssetObject, IAssetSaveObject } from '../models/AssetObject';

import { AddAssetComponent } from './components/add-asset/add-asset.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assetList: IAssetObject[] = [];

  addAsset(asset: IAssetObject) {
    this.assetList.push(asset);
  }

  deleteAssetList() {
    this.assetList = [];
  }

  toggleSold(index: number) {
    this.assetList[index].isSold = !this.assetList[index].isSold;
  }

  deleteItem(index: number) {
    this.assetList.splice(index, 1);
  }

  saveEdit(assetSaveObject: IAssetSaveObject) {
    this.assetList[assetSaveObject.index] = assetSaveObject.asset;
  }

}
