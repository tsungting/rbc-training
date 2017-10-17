import { Component } from '@angular/core';
import { IAssetObject, AssetObject, IAssetSaveObject } from '../models/AssetObject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assetList: IAssetObject[] = [];
  tempAsset: IAssetObject;

  addAsset(asset: IAssetObject) {
    this.assetList.push(asset);
  }

  deleteAssetList() {
    this.assetList = []
  }

  deleteItem(index: number) {
    this.assetList.splice(index, 1);
  }

  saveEdit(assetSaveObject: IAssetSaveObject) {

    this.assetList[assetSaveObject.index] = assetSaveObject.asset;
  }

}
