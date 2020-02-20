import { Alert } from 'react-native';
import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import NavigationServices from '../../../services/navigationServices';
import { formattedPrice } from '../../../util/format';

import {
  addToCartSuccess,
  updateAmountSuccess,
  stockAmountFail,
} from './actions';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('Quantidade fora de estoque');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      formattedPrice: formattedPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));

    NavigationServices.navigate('Cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Quantidade fora de estoque');

    yield put(stockAmountFail(id));

    return;
  }
  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_REQUEST', updateAmount),
]);
