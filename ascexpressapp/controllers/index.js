exports.index = function(req, res, next) {
    res.render('index', { title: 'Express' });
};
exports.getContact = function(req, res, next) {
    res.send('respond with a resource');
};