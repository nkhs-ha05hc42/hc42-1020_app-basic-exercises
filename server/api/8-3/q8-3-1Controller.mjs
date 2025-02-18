const get8_3_1 = (req, res) => {
    const fruits = [
        { en: "apple", ja: "りんご" },
        { en: "lemon", ja: "レモン" },
        { en: "grape", ja: "ぶどう" }
    ]

    res.send(JSON.stringify(fruits));
}

export const sample1Controller = {
    get8_3_1
}