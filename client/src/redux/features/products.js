const initialState = {
  loading: true,
  editing: false,
  deleting: false,
  addition: false,
  items: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'products/load/pending':
      return {
        ...state,
        loading: true,
      };
    case 'products/load/fulfilled':
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case 'products/delete/pending':
      return {
        ...state,
        deleting: true,
      };
    case 'products/delete/fulfilled':
      return {
        ...state,
        items: state.items.filter((product) => {
          return product._id !== action.payload;
        }),
        deleting: false,
      };
    case 'products/add/pending':
      return {
        ...state,
        addition: true,
      };
    case 'products/add/fulfilled':
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    default:
      return state;
    case 'productByCategory/load/pending':
      return {
        ...state,
        loading: true,
      };
    case 'productByCategory/load/fulfilled':
      return {
        ...state,
        items: action.payload,
      };
  }
};
//
export default products;

export const loadProducts = () => {
  return async (dispatch) => {
    dispatch({ type: 'products/load/pending' });
    try {
      const res = await fetch('http://localhost:3003/products');
      const data = await res.json();

      dispatch({ type: 'products/load/fulfilled', payload: data });
    } catch (e) {
      console.log(e.toString());
    }
  };
};

export const deleteProducts = (id) => {
  return async (dispatch) => {
    dispatch({ type: 'products/delete/pending' });
    try {
      await fetch(`http://localhost:3003/product/${id}`, {
        method: 'DELETE',
      });

      dispatch({ type: 'products/delete/fulfilled', payload: id });
    } catch (e) {
      console.log(e.toString());
    }
  };
};

export const addProduct = (data) => {
  return async (dispatch) => {
    dispatch({ type: 'products/add/pending' });

    try {
      const response = await fetch('http://localhost:3003/product', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const json = await response.json();
      dispatch({ type: 'products/add/fulfilled', payload: json });
    } catch (e) {
      console.log(e.toString());
    }
  };
};

export const productsByCategory = (id) => {
  return async (dispatch) => {
    dispatch({ type: 'productByCategory/load/pending' });

    try {
      const res = await fetch(`http://localhost:3003/category/${id}/products`);
      const data = await res.json();

      dispatch({ type: 'productByCategory/load/fulfilled', payload: data });
    } catch (e) {
      console.log(e.toString());
    }
  };
};
