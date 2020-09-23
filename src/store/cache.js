import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// Actions

export const handleWriteCache = (state, payload) => ({
  ...state,
  [payload.entity]: payload.data,
});

// Store

export const WRITE_CACHE = 'WRITE_CACHE';

const initialState = {};

export const cacheReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITE_CACHE:
      return handleWriteCache(state, action.payload);
    default:
      return state;
  }
};

const selector = (type, id) => (state) => {
  const { cache } = state;
  if (!cache) return null;
  if (id) {
    return cache[type] ? cache[type].find((a) => a._id === id) : cache[type + id];
  }
  return cache[type];
};

/**
 * Hook para acessar a cache store
 */

const useCache = () => {
  const dispatch = useDispatch();

  const useReadCache = (type, id) => useSelector(selector(type, id), shallowEqual);

  const writeCache = (entity, data) => {
    dispatch({
      type: WRITE_CACHE,
      payload: {
        entity,
        data,
      },
    });
    return data;
  };

  return {
    writeCache,
    readCache: useReadCache,
  };
};

export default useCache;
