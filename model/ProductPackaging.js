/**
 * ProductPackaging表model
 */
const mongoose = require('./db');//加载数据库文件
const Schema = mongoose.Schema;

const ProductPackaging = new Schema({
    ProductPackagingId: { type : String },
    MastarCartonId: { type : String },
    GW: { type : Double },
    Length: { type : Double },
    Width: { type : Double },
    Height: { type : Double },
    UpdataTime: { type : Date }
});

// 生成Model
module.exports = mongoose.model('ProductPackaging', ProductPackaging );
