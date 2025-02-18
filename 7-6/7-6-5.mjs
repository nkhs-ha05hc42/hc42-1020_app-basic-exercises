const func1 = () => {
    return new Promise(resolve => {
        resolve("Test1");
    });
};

const func2 = () => {
    return new Promise(resolve => {
        resolve("Test2");
    });
};

const func3 = () => {
    return new Promise(async resolve => {
        const [result1, result2] = await Promise.all([func1(), func2()]);
        resolve(result1 + result2);
    });
};

const runAsyncProcess = async () => {
    const result = await func3();
    console.log(result); 
};

runAsyncProcess();