const notebook = {
    brand: 'ASUS',
    model: 'Vivobook D413IA-EB303TS',
    processor: 'AMD Ryzen 7 4700U 3.6GHz',
    graphics: 'Integrated Graphics : AMD Radeon Graphics',
    ram: '8GB DDR4 Onboard',
    storage: '512GB PCIe NVMe M.2 SSD'
  };
  
/////// # for..in
// let notebook_clone = {}

// for(let x in notebook) {
//     notebook_clone[x] = notebook[x]
// }

// console.log(notebook_clone)

/////////// # Object.assign

const notebook_clone = Object.assign({}, notebook)
console.log(notebook_clone)

