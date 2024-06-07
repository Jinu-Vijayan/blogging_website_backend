const signUp = (req,res) => {
    res.status(201).json({
        message : "Dummy response for signUp"
    })
};

const logIn = (req,res) => {
    res.status(200).json({
        message : "Dummy response for logIn"
    })
};

const logOut = (req,res) => {
    res.status(200).json({
        message : "Dummy response for logOut"
    })
};

module.exports = {
    signUp,
    logIn,
    logOut
}