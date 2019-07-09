import produce from 'immer';

const INITIAL_STATE = {
  products: [],
  adding: null,
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_REQUEST':
      return produce(state, draft => {
        draft.adding = action.id;
      });
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;
        draft.products.push(product);
        draft.adding = null;
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.products.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.products.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        const productIndex = draft.products.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.products[productIndex].amount = Number(action.amount);
        }

        draft.adding = null;
      });
    case '@cart/UPDATE_AMOUNT_FAILURE':
      return produce(state, draft => {
        draft.adding = null;
      });
    default:
      return state;
  }
}
