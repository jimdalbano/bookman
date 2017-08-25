import {
  ADD_BOOKMARK,
  DESTROY_BOOKMARK,
} from './action-types';

export default (state = [], action) => {
  const newBookmark = {
    id: action.id,
    url: action.url,
    name: action.name,
    notes: action.notes,
  };

  switch (action.type) {
    case ADD_BOOKMARK:
      console.log('ADDING BOOKMARK');
      return [
        ...state,
        newBookmark,
      ];
    case DESTROY_BOOKMARK:
      console.log('DESTROYING BOOKMARK');
      return state.filter((bookmark) => { return bookmark.id !== action.id; });
    default:
      return state;
  }
};

