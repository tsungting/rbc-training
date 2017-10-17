import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAssetObject, AssetObject, IAssetSaveObject } from '../../../models/AssetObject';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {
  @Input() assetList: IAssetObject[];
  @Output() onAssetItemDeleted: EventEmitter<Number> = new EventEmitter<Number>();
  @Output() onAssetSoldToggle: EventEmitter<Number> = new EventEmitter<Number>();
  @Output() onAssetSave: EventEmitter<IAssetSaveObject> = new EventEmitter<IAssetSaveObject>();
  tempAsset: IAssetObject = new AssetObject();

  constructor() { }

  ngOnInit() {
  }

  onDeleteItemClick(index: number) {
    this.onAssetItemDeleted.emit(index);
  }

  onToggleSoldClick(index: number) {
    this.onAssetSoldToggle.emit(index);
  }

  onEditItemClick(index: number) {
    this.assetList.map((item) => {
      item.isEdit = false;
      return item;
    });
    this.assetList[index].isEdit = true;
    this.tempAsset = null;
  }

  onCancelEditClick(index: number) {
    this.assetList[index].isEdit = false;
    this.tempAsset = null;
  }

  onAssetEditChange(asset: AssetObject) {
    this.tempAsset = asset;
  }

  onSaveEditClick(index: number) {
    this.onAssetSave.emit({
      index: index,
      asset: this.tempAsset
    });

    this.assetList[index].isEdit = false;
  }

}
