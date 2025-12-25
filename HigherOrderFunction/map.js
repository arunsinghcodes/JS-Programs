const arr = [1, 2, 3, 4, 5, 6, 7];

// const dobuleVale = arr.map((item) => 2 * item);

const ThripleValue =  arr.map((item, index, men)=>{
    // console.log(item)
    // console.log(index);
    // console.log(men);
    return item * 3;
})

console.log(ThripleValue);

// EX:1 Mark the lat item -> Imgine you're rendering the a menu and wante to style the last item differently.

const menu = ["Home", "About", "Services", "Contact"];

const result = menu.map((item, index, array) =>{
    return {
        lable: item,
        isLast: index === array.length -1
    }
})

console.log(result);