import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AssetObject, IAssetObject } from '../../../models/AssetObject';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent implements OnInit {
  @Output() onAssetAdded: EventEmitter<AssetObject> = new EventEmitter<AssetObject>();
  @Output() onAssetDeleted: EventEmitter<AssetObject> = new EventEmitter<AssetObject>();
  newAsset: IAssetObject;

  constructor() { }

  ngOnInit() {
  }

  assetAdded(asset: AssetObject) {
    this.newAsset = asset;
  }

  addAsset() {
    let _temp = new AssetObject();
    _temp = {
      ...this.newAsset
    };

    this.onAssetAdded.emit(_temp);
  }

  deleteAll() {
    this.onAssetDeleted.emit();
  }

}
