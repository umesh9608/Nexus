 const Auth = (req, res, next) => {
    //add item into food menu
    //Authentiation krna padega ki ye admin hi hai ya nhi
    const token = "ABCDEF"
    const Accesss = token === "ABCDEF" ? 1 : 0;

    if (!Accesss)
        res.status(403).send("No Permission");
    next();
}

module.exports ={
    Auth,
} 