const put8_1_3 = (req, res) => {
    console.log(req.body)
    res.send(
        JSON.stringify({
            status: "ok",
            postcode : req.query.postcode,
        }),
    )
}

export const q8_3Controller = {
    put8_1_3,
}