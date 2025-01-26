const number = (num) =>
    {
        console.log("view", num, new Date())
    }
    
    const x = (num, callbackFunc) => 
    {
        const a = 1
        const b = 2
    
        setTimeout(() =>
        {
            const c = a + b
            console.log(c)
            callbackFunc(num)
        }, 3000)
    
        setTimeout(() => 
        {
            console.log("end", new Date())
        }, 4000)
    
    }
    
    console.log("start", new Date())
    x(12, number)