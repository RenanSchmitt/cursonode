module.exports = function(app) {
    app.get('/posts', function(req, res){    
        app.app.controllers.posts.posts(app, req, res);
    });

    app.get('/postage', function(req, res){    
        app.app.controllers.posts.postage(app, req, res);
    });

    app.post('/savepost', function(req, res){    
        app.app.controllers.posts.savepost(app, req, res);
    });

    app.get('/newpostage', function(req, res){
        app.app.controllers.posts.include_new_postage(app, req, res);
    });

    app.post('/newcomment', function(req, res){
        app.app.controllers.posts.newComment(app, req, res);
    });
};