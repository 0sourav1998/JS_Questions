const promise1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(2)
    },20)
})

const promise2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(5)
    },60)
})

Promise.all([promise1,promise2]).then((result)=>{
    const sum = result.reduce((total,num)=>total+num,0)
    console.log(sum) ;
}).catch(()=>console.log('Error Detected')) ;