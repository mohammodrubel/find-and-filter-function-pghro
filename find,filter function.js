
const myNumber = [1,2,3,4,5,6,7,8,9,0,12,34,56,78]
const result = myNumber.filter(number => number >40)
console.log(result)

const updateNUmber = [1,2,3,4,5,6,7,8,9,0,12,34,56,78]
const result = updateNUmber.filter(number => number < 40)
console.log(result)

const products = [
    {name:'Tshart',color:'red',amount:4000,mobile:'1234567890'},
    {name:'fullShirt',color:'black',amount:5000,mobile:'098765'},
    {name :'belt',color:'black',amount:2000,mobile:'09876123'},
    {name :'shoes',color:'blue',amount:3000,mobile:'12345678'}

]
const updateProduct = products.filter(product => product.amount > 4000)
const mobileNUmber = products.filter(product =>product.color == 'black')
console.log(updateProduct)
const fullName = products.find(product => product.name == 'shoes')
console.log(fullName)
console.log(mobileNUmber)
const myTshirt = products.find(product => product.name == 'Tshart')
console.log(myTshirt)