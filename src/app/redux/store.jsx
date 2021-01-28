import {createStore} from 'redux';
import {RootReducers} from '../redux/reducers/rootReducers'

export const store = createStore(RootReducers)
store.subscribe(() => console.log(store.getState()))


// export const allProducts = [];
// export const storeInfos = [];
// export const allLaptops = [];
// products.map(product => {
//     product.products.map(prod => allProducts.push(prod))
//     product.store.map(store => storeInfos.push(store))
//     console.log(product)
    
//     product.products.map(product => {
        
//         if(String(product.subcategory) === 'Laptops') {
//             allLaptops.push(product)
//             console.log(product.subcategory)
//         }
//     })
//     console.log(allLaptops)
 
// })

