module.exports = function(app) {
    app.get('/login', function(req, res){
        app.app.controllers.login.render_login(app, req, res);
    });

    app.post('/trylogin', function(req, res){
        let data = req.body;
        app.app.controllers.login.validate_login(data, app, req, res);
    });
};