const initialState = {
  items: [],
  loading: false,
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
