const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const runAsyncProcess = async () => {
    console.log("start"); 
    console.log("end");   

    await wait(10000); 
    console.log(`${new Date().toLocaleTimeString()} - ★`);

    await wait(20000); 
    console.log(`${new Date().toLocaleTimeString()} - ◆`);
};

runAsyncProcess();