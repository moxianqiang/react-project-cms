export const setLocalStorage =(value)=> {
  localStorage.setItem('isLogin', value);
}

export const getLocalStorage =()=> {
  localStorage.getItem('isLogin');
}