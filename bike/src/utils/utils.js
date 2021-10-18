const utils =  {
  forMateTime: (date)=> {
    if (!date) return '';
    let time = date.toLocaleString();
    time = time.replace(/\//g, '-');
    let newTime = time.substring(0, 19);
    return newTime;
  },
};

export default utils;