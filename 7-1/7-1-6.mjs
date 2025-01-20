const doubleUntilOver100 = (num) => {
    console.log(num); 
    if (num <= 100) {  
        doubleUntilOver100(num * 2); 
    }
};

doubleUntilOver100(10);
doubleUntilOver100(25);