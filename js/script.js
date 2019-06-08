const getname = async ()=>{
    try{
         let name = await named;
         console.log(`Getting name from db is .. ${name}`);
    } catch(err) {
         console.log(err);
    }
}

let named = new Promise((res , rej ) => {
    console.log("Getting name from db ....");
    setTimeout(() => {
        rej(new Error("bc kand ho gaya abtoh"));
    }, 3000);
});

getname();