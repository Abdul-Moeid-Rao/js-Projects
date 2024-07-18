const promiseOne = new  Promise(function(resolve, reject){
setTimeout(function(){
      console.log("Abdul Moeid Rao");
      resolve();
}, 1000)

})
promiseOne.then(()=>{
    console.log("Promise Completed")
})


new  Promise(function(resolve, reject){
    setTimeout(function(){
          console.log("promise 2");
          resolve();
    }, 1000)
    
    }).then(()=>{
        console.log("Promise 2 Completed")
    })

const promiseThree = new Promise(function (resolve, reject){
    setTimeout(()=>{
        resolve({UserName: "Ab Rao", Email: "ab@example.com"})
    }, 1000)
})
promiseThree.then(function(user){
      console.log(user);
})

const promiseFour = new Promise(function (resolve, reject){
    setTimeout(()=>{
        let error= false;
        if(!error){
            resolve({username: "Ab Rao", Email: "ab@example.com"})
        }else{
            reject('error');
        }
        
    }, 1000)
})
promiseFour
.then(function(user){
      console.log(user);
      return user.username;
})
.then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("promise 4 completed");
}
)



const promiseFive = new Promise(function (resolve, reject){
    setTimeout(()=>{
        let error= true;
        if(!error){
            resolve({username: "Java Script", Email: "ab@example.com"})
        }else{
            reject('error');
        }
        
    }, 1000)
})
async function consumePromiseFive(){
   try {
    const response = await promiseFive;
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive();

// async function getAllUser(){
//     try {
//         const response = await fetch('https://api.github.com/users/Abdul-Moeid-Rao')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E : ", error);
//     }
// }
// getAllUser()

fetch('https://api.github.com/users/Abdul-Moeid-Rao')
.then((userData)=>{
     return userData.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})