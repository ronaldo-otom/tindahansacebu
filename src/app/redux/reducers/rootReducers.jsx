import {combineReducers} from 'redux';
import { ProductsThumbnailViewReducer } from '../reducers/productsReducers/productsThumbnailViewReducer';
import { ProductListViewReducer } from '../reducers/productsReducers/productListViewReducer';
import {ViewProductReducers} from './viewProductReducers/viewProductReducers';
import { SpecificationsReducer } from './specifications/specificationsReducer';
import { CategoryReducer } from './categoryReducers/categoryReducer';
import { SidenavReducers } from './designs/body/sideNavReducers';
import { StoreProfileReducer } from './storeProfileReducers/storeProfileReducer';

export const RootReducers = combineReducers({
    data: ProductsThumbnailViewReducer, ProductListViewReducer, ViewProductReducers, SpecificationsReducer, CategoryReducer,SidenavReducers, StoreProfileReducer
});