const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
  };

  
  const findEmployee = p => {
    for(let k in employees) {
        if(k == p) {
            return `Name: ${k}, salary: ${employees[k].salary}, address: ${employees[k].address.district}, ${employees[k].address.province}`
        } else {
            return 'Not Found'
        }
    }
  };

  findEmployee('john')
  