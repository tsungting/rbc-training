import { Store } from '@ngrx/store';

class Asset_HTTP {

    constructor(private store: Store<any>) {

    }

    assetTransformer(data) {
        return data; // transform
    }

    HTTP_Request() {
        // http.then((data) => {
        //  this.store.dispatch('ON_SERVER_ASSET_UPDATE', payload: assetTransfomer(data));
        // })
    }
}
