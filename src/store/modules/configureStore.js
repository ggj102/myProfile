import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import GlobalData from './GlobalData'


const configureStore = () =>{
    const store = createStore(GlobalData);
    return store;
}

const wrapper = createWrapper(configureStore,{
    debug: process.env.NODE_ENV === 'development'
})

export default wrapper;