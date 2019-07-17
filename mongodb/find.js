const GoogleProducts = require('./GoogleProducts');

// 条件查询
function getByConditions() {
    var whereStr = {};

    GoogleProducts.find(whereStr, function (err, docs) {
        if(err) {
            console.log("Error: " + err);
        } else {
            console.log("docs: " + docs.length);
        }
    })
}
getByConditions();
