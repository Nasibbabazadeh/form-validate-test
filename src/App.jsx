import React from 'react'
import { configureStore, findNonSerializableValue } from '@reduxjs/toolkit'
import { Routing } from './Routing'
import { Provider } from 'react-redux'
import formSlice from './Redux/formSlice'
import formSaga from './Redux/formSaga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware(findNonSerializableValue)

const store = configureStore({
    reducer: {
        form: formSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(formSaga)

function App() {
    return (
        <div>
            <Provider store={store}>
                <Routing />
            </Provider>
        </div>
    )
}

export default App
