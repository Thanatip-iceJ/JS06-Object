let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };

const multiplyNumeric = (obj, num) => {
    for(let x in obj) {
        if(typeof obj[x] != 'number') continue;
        obj[x] *= num;
    }
    return obj;
}