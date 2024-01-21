// store.js
// import { configureStore } from '@reduxjs/toolkit';
import { configureStore} from '@reduxjs/toolkit';
import quoteSlice from './quoteSlice.js';

// import thunk from 'redux-thunk';

const store = configureStore({
  reducer: quoteSlice,
  
});

export default store;









































// import { configureStore } from '@reduxjs/toolkit';

// import counterSlice, { decrement, increment, incrementAsync } from './counterSlice';


// const store = configureStore({
//   reducer: {
//     counter: counterSlice,
//     // Other reducers can be added here if needed
//   },
  
// });
// store.subscribe(() => console.log(store.getState(),"chk"))
// store.dispatch(increment())
// store.dispatch(incrementAsync())
// store.dispatch(increment())

// store.dispatch(decrement())

// export default store;





