import { SWITCH_MEUE } from './constants';
import { IS_LOGIN } from './constants';

// 存储在本地存储
import { getLocalStorage, setLocalStorage } from '../utils/loaclstorage';

const initState = {
  menuName: '首页',
  myMessage: '是否也会传递到组件？',
  isLogin: getLocalStorage() || false
};

console.log('getLocalStorage', getLocalStorage());

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SWITCH_MEUE:
      return { ...state, menuName: action.menuName };
    case IS_LOGIN:
      setLocalStorage(action.isLogin)
      return { ...state, isLogin: action.isLogin };
    default:
      return state;
  }
};

export default reducer;
