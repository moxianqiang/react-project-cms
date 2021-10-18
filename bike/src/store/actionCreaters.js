import { SWITCH_MEUE } from './constants';
import { IS_LOGIN } from './constants';


export const swicthMenuAction = (menuName) => ({
  type: SWITCH_MEUE,
  menuName: menuName,
});

export const isLoginAction = (trueOrFalse) => ({
  type: IS_LOGIN,
  isLogin:trueOrFalse
});
