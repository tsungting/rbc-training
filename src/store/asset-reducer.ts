import { IAssetObject, AssetObject } from '../models/AssetObject';

const defaultState: IAssetObject[] = [
  new AssetObject('Roman', 1000)
];

export function assetReducer(state: IAssetObject[] = defaultState, action) {
  switch (action.type) {
    case 'ON_ASSET_ITEM_ADD':
      return [
        ...state,
        action.payload,
      ];
    case 'ON_ASSET_ITEM_DELETE':
      return state.filter((item, i) => i !== action.payload);
    case 'ON_ASSET_LIST_DELETE':
      return [];
    default:
      return state;
  }
}