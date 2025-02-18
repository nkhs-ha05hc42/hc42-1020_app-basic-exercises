const delete8_1_4 = (req, res) => {
    res.send(
        JSON.stringify({
            "status": "OK",
            code: req.query.code,
        }),
    )
}

export const q8_4Controller = {
    delete8_1_4,
}