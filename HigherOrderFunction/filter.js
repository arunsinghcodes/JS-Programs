// filter is used for filtering the values


const scrores = [99, 56, 45, 65, 33];

const filterRange = scrores.filter((score, index)=>{
    return score > 50 && score < 70 ;
})

console.log(filterRange);