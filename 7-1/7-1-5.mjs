const createObject = (ja, en) => {
    return {
        ja: ja,  
        en: en   
    };
};

const result = createObject("こんにちは", "Hello");

console.log(result);