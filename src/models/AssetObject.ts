export interface IAssetObject {
    name: string;
    value: number;
    isSold: boolean;
    isEdit: boolean;
}

export class AssetObject implements IAssetObject {
    name: string;
    value: number;
    isSold: boolean;
    isEdit: boolean;

    constructor(
        name: string = '',
        value: number = 0,
        isSold: boolean = false,
        isEdit: boolean = false
    ) {
        this.name = name;
        this.value = value;
        this.isSold = isSold;
        this.isEdit = isEdit;
    }
}