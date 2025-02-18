const func1 = () => {
    return new Promise(resolve => {
        resolve("Test1");
    });
};

const func2 = (text) => {
    return new Promise(resolve => {
        resolve(`New${text}`);
    });
};

const runAsyncProcess = async () => {
    const result1 = await func1(); 
    const result2 = await func2(result1); 
    console.log(result2); 
};

runAsyncProcess();