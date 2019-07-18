/**
 * Products表model
 */
const mongoose = require('./db');//加载数据库文件
const Schema = mongoose.Schema;

const Products = new Schema({
    ProductId: { type : String },
    Sku: { type : String },
    Barcode: { type : String },
    ProductDescription: { type : String },
    UpdataTime: { type : Date }
});

// 生成Model
module.exports = mongoose.model('Products', Products );
