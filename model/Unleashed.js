/**
 * Unleashed表model
 */
const mongoose = require('./db');//加载数据库文件
const Schema = mongoose.Schema;

const Unleashed = new Schema({

    ProductCode: { type : String },
    ProductDescription: { type : String },
    Barcode: { type : String },
    PackSize: { type : Double },
    Width: { type : Double },
    Height: { type : Double },
    Depth: { type : Double },
    Weight: { type : Double },
    MinStockAlertLevel: { type : String },
    MaxStockAlertLevel: { type : String },
    ReOrderPoint: { type : String },
    UnitOfMeasure: { type : String },
    NeverDiminishing: { type : String },
    LastCost: { type : Double },
    DefaultPurchasePrice:{ type : Double },
    DefaultSellPrice: { type : Double },
    CustomerSellPrice: { type : Double },
    AverageLandPrice: { type : Double },
    Obsolete: { type : Boolean },
    Notes: { type : String },
    Images: { type : String },
    ImageUrl: { type : String },
    SellPriceTier1: { type : Object },
    SellPriceTier2: { type : Object },
    SellPriceTier3: { type : Object },
    SellPriceTier4: { type : Object },
    SellPriceTier5: { type : Object },
    SellPriceTier6: { type : Object },
    SellPriceTier7: { type : Object },
    SellPriceTier8: { type : Object },
    SellPriceTier9: { type : Object },
    SellPriceTier10: { type : Object },
    XeroTaxCode: { type : String },
    XeroTaxRate: { type : String },
    TaxablePurchase: { type : String },
    TaxableSales: { type : String },
    XeroSalesTaxCode: { type : String },
    XeroSalesTaxRate: { type : String },
    IsComponent: { type : Boolean },
    IsAssembledProduct: { type : Boolean },
    ProductGroup: { type : String },
    XeroSalesAccount: { type : String },
    XeroCostOfGoodsAccount: { type : String },
    PurchaseAccount: { type : String },
    BinLocation: { type : String },
    Supplier: { type : String },
    AttributeSet: { type : String },
    SourceId: { type : String },
    SourceVariantParentId: { type : String },
    IsSerialized: { type : String },
    IsBatchTracked: { type : String },
    IsSellable: { type : String },
    CreatedBy: { type : String },
    CreatedOn: { type : String },
    LastModifiedBy: { type : String },
    Guid: { type : String },
    LastModifiedOn: { type : String }

});

// 生成Model
module.exports = mongoose.model('Unleashed', Unleashed );
