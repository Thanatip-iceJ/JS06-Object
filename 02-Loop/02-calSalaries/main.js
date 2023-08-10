let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
const isEmpty = obj => Object.keys(obj).length === 0;

const calSalaries = obj => {
    let sum = 0;
    if(Object.keys(obj).length === 0) {
        return sum;
    } else {
        for(let x in obj) {
            sum += obj[x]
        }
        return sum
    }
}

calSalaries(salaries)
  