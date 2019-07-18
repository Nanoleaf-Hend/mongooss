/**
 * GoogleProducts表model
 */
const mongoose = require('./db');
const Schema = mongoose.Schema;

const GoogleProducts = new Schema({

    SKU: { type: String },
    BarCode: { type: String },
    ProductDescription:{ type: String },
    HSCode: { type: String },
    ProductPackaging_GW: { type: String },
    ProductPackaging_Length: { type: String },
    ProductPackaging_Width:{ type: String },
    ProductPackaging_Height: { type: String },
    MastarCarton_CartonCode:{ type: String },
    MastarCarton_CartonBarCode: { type: String },
    MastarCarton_QTY: { type: String },
    MastarCarton_NW: { type: String },
    MastarCarton_GW: { type: String },
    MastarCarton_Length: { type: String },
    MastarCarton_Width: { type: String },
    MastarCarton_Height: { type: String },
    SeaPallet_PalletCode:{ type: String },
    SeaPallet_PalletBarCode:{ type: String },
    SeaPallet_QTY: { type: String },
    SeaPallet_Length: { type: String },
    SeaPallet_Width:{ type: String },
    SeaPallet_Height: { type: String },
    AirPallet_PalletCode: { type: String },
    AirPallet_PalletBarCode: { type: String },
    AirPallet_QTY: { type: String },
    AirPallet_Length: { type: String },
    AirPallet_Width:{ type: String },
    AirPallet_Height: { type: String }
});

// 生成Model
module.exports = mongoose.model('GoogleProducts', GoogleProducts );
