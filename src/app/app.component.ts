import { Component } from '@angular/core';
import { IAssetObject, AssetObject } from '../models/AssetObject';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assetList: IAssetObject[] = [];
  tempAsset: IAssetObject;

  addAsset(nameInput: HTMLInputElement, valueInput: HTMLInputElement) {
    let newAsset = new AssetObject(nameInput.value, parseInt(valueInput.value));
    this.assetList.push(newAsset);

    // Clear inputs
    nameInput.value = '';
    valueInput.value = '';
    console.log(this.assetList);
  }

  deleteAll() {
    this.assetList = [];
  }

  deleteItem(index: number) {
    this.assetList.splice(index, 1);
  }

  toggleSold(index: number) {
    this.assetList[index].isSold = !this.assetList[index].isSold;
  }

  editItem(index: number) {
    this.assetList = this.assetList.map((item) => {
      item.isEdit = false;
      return item;
    });
    this.assetList[index].isEdit = true;
    this.tempAsset = null;
  }

  cancelEdit(index: number) {
    this.assetList[index].isEdit = false;
    this.tempAsset = null;
  }

  saveEdit(index: number) {
    this.assetList[index] = this.tempAsset;
  }

  onAssetEditChange(asset: AssetObject, hi) {
    debugger;
    this.tempAsset = asset;
  }
}
