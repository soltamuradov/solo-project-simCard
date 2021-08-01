const initialState = {
  items: [],
  loading: false,
  deleting: false,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'productsInCart/load/pending':
      return {
        ...state,
        loading: true,
      };
    case 'productsInCart/load/fulfilled':
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case 'productFromCart/delete/pending':
      return {
        ...state,
        deleting: true,
      };
    case 'productFromCart/delete/fulfilled':
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default cart;

export const loadCart = () => {
  return async (dispatch) => {
    dispatch({ type: 'productsInCart/load/pending' });

    try {
      const res = await fetch('http://localhost:3003/cart');
      const data = await res.json();

      dispatch({ type: 'productsInCart/load/fulfilled', payload: data });
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const delProdFromCart = (cartId, productId) => {
  return async (dispatch) => {
    dispatch({ type: 'productFromCart/delete/pending' });

    try {
      const res = await fetch(
        `http://localhost:3003/productFromCart/${cartId}`,
        {
          method: 'DELETE',
          body: JSON.stringify({ productId: productId }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      const data = await res.json();
      console.log(data);
      dispatch({
        type: 'productFromCart/delete/fulfilled',
        payload: data,
      });
    } catch (e) {
      console.log(e.message);
    }
  };
};
