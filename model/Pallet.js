/**
 * Pallet表model
 */
const mongoose = require('./db');//加载数据库文件
const Schema = mongoose.Schema;

const Pallet = new Schema({
    PalletId:{ type : String },
    PalletCode: { type : String },
    PalletBarCode: { type : String },
    QTY: { type : String },
    Length: { type : Double },
    width: { type : Double },
    Height: { type : Double },
    UpdataTime: { type : Date },
    Transport: { type : String }
});

// 生成Model
module.exports = mongoose.model('Pallet', Pallet );
