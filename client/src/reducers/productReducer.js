import {
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  ADD_ICON_TO_PRODUCT,
  UPDATE_BG_COLOR,
  SET_ICONS,
  LIST_UPLOADED_ICONS,
} from '../constants';
// import allIcons from '../data/imgIcons';

const uploadedIconsFromStorage = localStorage.getItem('uploadedIcons')
  ? JSON.parse(localStorage.getItem('uploadedIcons'))
  : [];

export const productReducer = (
  state = {
    productIcons: [],
    bgColor: '#434255',
    allIcons: [...uploadedIconsFromStorage],
    loading: false,
    error: false,
    uploadedIcons: uploadedIconsFromStorage,
  },
  action
) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_PRODUCTS_SUCCESS:
      return { ...state, loading: false, allIcons: action.payload };
    case GET_ALL_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ADD_ICON_TO_PRODUCT:
      return {
        ...state,
        productIcons: [...state.productIcons, action.payload],
      };
    case SET_ICONS:
      return { ...state, productIcons: action.payload };
    case LIST_UPLOADED_ICONS:
      return {
        ...state,
        uploadedIcons: [...state.uploadedIcons, action.payload],
        allIcons: [...state.allIcons, action.payload],
      };
    case UPDATE_BG_COLOR:
      console.log('Yes');
      return { ...state, bgColor: action.payload };
    default:
      return { ...state };
  }
};
