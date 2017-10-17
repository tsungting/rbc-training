import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AssetObject, IAssetObject } from '../../../models/AssetObject';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent implements OnInit {
  @Output() onAssetAdded: EventEmitter<AssetObject> = new EventEmitter<AssetObject>();
  @Output() onAssetDeleted: EventEmitter<AssetObject> = new EventEmitter<AssetObject>();
  newAsset: IAssetObject;

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  assetAdded(asset: AssetObject) {
    this.newAsset = asset;
  }

  onAddAssetClick() {
    let _temp = new AssetObject();
    _temp = {
      ...this.newAsset
    };

    _temp = {
      name: this.newAsset.name,
      value: this.newAsset.value,
      isEdit: this.newAsset.isEdit,
      isSold: this.newAsset.isSold
    };

    this.store.dispatch({
      type: 'ON_ASSET_ITEM_ADD',
      payload: _temp
    });

    this.onAssetAdded.emit(_temp);
  }

  deleteAll() {
    this.store.dispatch({
      type: 'ON_ASSET_LIST_DELETE'
    });

    this.onAssetDeleted.emit();
  }

}
