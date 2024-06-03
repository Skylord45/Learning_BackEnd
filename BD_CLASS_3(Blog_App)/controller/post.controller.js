
exports.dummyRoute = async(req, res) => {
    res.send("Hello dummy")
    res.status(200)
    .json({
        success : true,
        data : response,
        message : "Data Created Successfully"
    })
}

// module.exports = dummyRoute