function PostsDAO(connection){
    this._connection = connection
}

PostsDAO.prototype.getPosts =  function(callback){
    this._connection.query('select * from posts ORDER BY date DESC ', callback);
}

PostsDAO.prototype.getPostage = function(idProd, callback) {
    this._connection.query(`select * from posts where id = ${idProd}`, callback);       
}

PostsDAO.prototype.getCommentsPostage = function(idProd, callback) {
    this._connection.query(`select * from comments where id_post = ${idProd}`, callback);       
}

PostsDAO.prototype.savePostage = function(newpost, callback){
    var post = `INSERT INTO posts (title, content, date, author, category) VALUES ('${newpost.title}','${newpost.content}', NOW(), 'Renan Schmitt','Tecnologia')`;       
    this._connection.query(post, callback);       
}
PostsDAO.prototype.newComment = function(newcomment, callback){
    var comment = `INSERT INTO comments (author, content, date, id_post) VALUES ('Admin','${newcomment.commentText}', NOW(),${newcomment.id_post})`;
    console.log(comment)
    this._connection.query(comment, callback);       
}

module.exports = function(){
    return PostsDAO;
}