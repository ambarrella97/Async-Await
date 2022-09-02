let attempt = 1;
let rN; 
function getRandomNumber() {
    return new Promise((resolve, reject)=> {
        console.log(`Attempt #${attempt}. GetRandomNumber is called.`);
        setTimeout((function afterHalfSecond)=>{
            let randomNumber = Math.floor(Math.random() * 100) + 1;
            rN = randomNumber;
            console.log("Half a second has passed.");
            
            if(randomNumber>=80&&attempt<=10){
                console.log(randomNumber,attempt);

                resolve();
            }else if(randomNumber<80&&attempt<=10){
                attempt++;
                console.log(`Random number generated is ${randomNumber}.`);
                console.log("===============================");
                EmitRandomNumber();
            }
        },500);
    });
  }

let promise = getRandomNumber();

promise.then(()=>{
    console.log(`Random number generated is ${rN}!!!!`);
    console.log("===============================");
}).catch(()=>{
    console.log("End");
});
