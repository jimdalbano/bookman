import v4 from 'node-uuid';

export const addBookmark = (bookmark) => {
  const type = 'ADD_BOOKMARK';

  const { url, name, notes } = bookmark;
  const id = v4();
  const action = { type, id, url, name, notes };

  return action;
};

export const bookmarkReducer = (state = [], action) => {
  const newBookmark = {
    id: action.id,
    url: action.url,
    name: action.name,
    notes: action.notes,
  };
  switch (action.type) {
    case 'ADD_BOOKMARK':
      console.log('ADDING BOOKMARK');
      return [
        ...state,
        newBookmark,
      ];
    default:
      return state;
  }
};
