
// makeing a button and assiging a function to it

// let  btn = document.getElementById('btn');
// test=(event)=>
// {
//     console.log('hellow')
// }
// btn.addEventListener('click',test)



// listening the event but not the context of the event
// onwly single btn can be targeted

// let  btn = document.getElementById('btn');
// test=(event)=>
// {
//     console.log(event)
// }
// btn.addEventListener('click',test)


// btn.addEventListener('click',(event)=>{
//     console.log(event)
// })

let btn = document.querySelectorAll('button');
btn.forEach((btn) => {
        btn.addEventListener('click',(e)=>{

            let btn =e.target;
            console.log(btn.innerText+ ' clicked');
             btn.innerText='clicked';
             btn.setAttribute('disabled', true)

        })
})
