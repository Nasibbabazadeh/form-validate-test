// formSaga.js
import { call, put, takeLatest } from 'redux-saga/effects'
import { instance } from '../axiosInstance'
import { getMessage, success } from './formSlice'

const sendMessage = async (message) => {
    try {
        const response = await instance.post('/messageform', { message })
        if (response.status === 400) {
            alert('You hacked :)')
        }
        return response.data
    } catch (error) {
        console.error('Error:', error)
    }
}

function* fetchUser(action) {
    try {
        const { message } = action.payload
        const data = yield call(sendMessage, message)
        yield put(success(data))
    } catch (error) {
        console.log(error.message)
    }
}

export default function* formSaga() {
    yield takeLatest(getMessage, fetchUser)
}
