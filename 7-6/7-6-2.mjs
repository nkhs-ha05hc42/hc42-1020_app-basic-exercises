const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const runAsyncProcess = async () => {
    console.log("start"); 

    await wait(2000); 
    console.log(`${new Date().toLocaleTimeString()} - ★`);

    await wait(3000); 
    console.log(`${new Date().toLocaleTimeString()} - ◆`);

    await wait(2000); 
    console.log(`${new Date().toLocaleTimeString()} - end`);
};

runAsyncProcess();

