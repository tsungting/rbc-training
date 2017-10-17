import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AssetObject } from '../../../models/AssetObject';

@Component({
  selector: 'app-asset-edit',
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.css']
})
export class AssetEditComponent implements OnInit {
  @Input() asset: AssetObject;
  @Output() onAssetChange: EventEmitter<AssetObject> = new EventEmitter<AssetObject>();

  constructor() { }

  ngOnInit() {

  }

  onInputChange(nameInput: HTMLInputElement, valueInput: HTMLInputElement) {
    let newAsset = new AssetObject(nameInput.value, parseInt(valueInput.value));
    this.onAssetChange.emit(newAsset);
  }

}
