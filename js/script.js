let promiseObj = new Promise((resolve,reject) => {
      console.log("Getting Data from db..");
      setTimeout(() => {
         resolve("Image uploaded Sucessfully .");
      }, 2000);
})

promiseObj.then(val => {
   console.log(`${val}`);
})

promiseObj.catch(err =>{
   console.log(err);
})