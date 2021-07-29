const initialState = {
  loading: false,
  deliting: false,
  editing: false,
  items: [],
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case 'categories/load/pending':
      return {
        ...state,
        loading: true,
      };
    case 'categories/load/fulfilled':
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case 'categories/edit/pending':
      return {
        ...state,
        editing: true,
      };

    case 'categories/edit/fulfilled':
      return {
        ...state,
        editing: false,
        items: state.items.map((category) => {
          if (category._id === action.payload.id) {
            return {
              ...category,
              ...action.payload.data,
            };
          }
          return category;
        }),
      };
    default:
      return state;
  }
};

export const allCategories = () => {
  return async (dispatch) => {
    dispatch({ type: 'categories/load/pending' });
    try {
      const res = await fetch('http://localhost:3003/categories');
      const data = await res.json();

      dispatch({ type: 'categories/load/fulfilled', payload: data });
    } catch (e) {
      console.log(e.toString());
    }
  };
};

export const editCategory = (id, data) => {
  return async (dispatch) => {
    dispatch({ type: 'categories/edit/pending' });

    try {
      await fetch(`http://localhost:3003/category/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      console.log(id, data);
      dispatch({ type: 'categories/edit/fulfilled', payload: { id, data } });
    } catch (e) {
      console.log(e.message);
    }
  };
};

export default categories;
