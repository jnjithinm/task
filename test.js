const test = [{id: 1, rate: 10, qty: 3}, {id: 2, rate: 50, qty: 2}];


// test.map(index=>(
//     console.log(`sum of ${index.id} is` ,(index.qty*index.rate))
// ))
let sum=0;
for(let i=0;i<test.length;i++)
{
    
    sum=sum+ test[i].rate*test[i].qty


}
console.log("sum is",sum)