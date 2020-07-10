module.exports.render_login =  function (app, req, res){
    res.render("login/loginpage");
}

module.exports.validate_login =  function (data, app, req, res){
    login = req.session;
    
    if(Object.is(data.email, "admin@gmail.com") && Object.is(data.password, "123")){
        res.status(200).redirect("/posts");
    } else {
        res.redirect("/login");     
    }
}
