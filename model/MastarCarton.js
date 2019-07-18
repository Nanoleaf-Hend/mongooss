/**
 * MastarCarton表model
 */
const mongoose = require('./db');//加载数据库文件
const Schema = mongoose.Schema;

const MastarCarton = new Schema({
    MastarCartonId: { type : String },
    CartonCode: { type : String },
    CartonBarCode: { type : String },
    PalletId: { type : String },
    QTY: { type : String },
    GW: { type : Double },
    NG: { type : Double },
    Length: { type : Double },
    Width: { type : Double },
    Height: { type : Double },
    UpdataTime:  { type : Date }
});

// 生成Model
module.exports = mongoose.model('MastarCarton', MastarCarton );
