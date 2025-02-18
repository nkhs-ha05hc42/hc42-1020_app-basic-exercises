const post8_1_2 = (req, res) => {
    console.log(req.body)
    res.send(
        JSON.stringify({
            status: "ok",
            postcode : req.query.postcode,
  
        }),
    )
}




export const q8_2Controller = {
    post8_1_2,
}