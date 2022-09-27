import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer"
import  storage  from "redux-persist/lib/storage";
import userReducer from './user/user.reducer.js';
import CartReducer from "./Cart/cart.reducer";
import directoryReducer from "./Directory/directory.reducer"
import shopReducer from "./Shop/shop.reducer"



const persistConfig = {

	key: 'root',
	storage,
	whitelist: ['cart']
};

const rootReducer = combineReducers({

	user: userReducer,
	cart: CartReducer,
	directory: directoryReducer,
	shop: shopReducer
});


export default persistReducer(persistConfig, rootReducer);


