const state1 = { username: 'john', point: 100, loading: true };
const state1_mod = Object.assign({}, state1, {loading: false}, {point: 75}, {success: true})



console.log(state1_mod)