import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import usersReducer from './Redux/reducers'

const persistConfig = {
  key: 'users',
  storage,
}

const persistedReducer = persistReducer(persistConfig, usersReducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}