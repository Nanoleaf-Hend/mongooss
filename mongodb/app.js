const GoogleProducts = require('./GoogleProducts');

// 插入
function insert() {
    var user = new GoogleProducts({"SKU":"NL20-0001TW","BarCode":"0740016550952","ProductDescription":"Nanoleaf Panel | Triangle | White","HSCode":"US: 8531.80.90.26 (0.3%)\nCA: 8531.20.0090\nEU: 9405.4039.90 (4.7%)\nOthers: 9405409000","ProductPackaging_GW":"0.20 ","ProductPackaging_Length":"24.50 ","ProductPackaging_Width":"21.00 ","ProductPackaging_Height":"0.85 ","MastarCarton_CartonCode":"/","MastarCarton_CartonBarCode":"/","MastarCarton_QTY":"72 without envelope","MastarCarton_NW":"14.40 ","MastarCarton_GW":"15.20 ","MastarCarton_Length":"46.00 ","MastarCarton_Width":"36.50 ","MastarCarton_Height":"36.50 ","SeaPallet_PalletCode":"/","SeaPallet_PalletBarCode":"17.50 ","SeaPallet_QTY":"/","SeaPallet_Length":"/","SeaPallet_Width":"/","SeaPallet_Height":"/","AirPallet_PalletCode":"/","AirPallet_PalletBarCode":"/","AirPallet_QTY":"/","AirPallet_Length":"/","AirPallet_Width":"/","AirPallet_Height":"/"}
    );

    user.save(function (err, docs) {
        if(err) {
            console.log("Error: " + err);
        } else {
            console.log("docs: " + docs);
        }
    })
}
for(var i=0;i<500;i++){
    insert();
}

