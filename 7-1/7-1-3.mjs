let ar = ["A", "B"];

const addToArray = (array, str) => {
    array.push(str); 
};

// 関数に配列 ar と文字列 "C" を渡す
addToArray(ar, "C");

console.log(ar);
