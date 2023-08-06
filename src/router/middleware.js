module.exports = function(req, res){
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE')
    res.header('Access-Control-Max-Age', '3600')
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization');
}