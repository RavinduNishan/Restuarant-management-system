const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema= new Schema({
    SupplierName: {
        type : String,
        required: true
    },
    product: {
         type: String, 
        required: true 
    },
    Quintity: {
        type: Number,
        
    },
    UnitPrice: {
        type: Number,
        
    },
    Total: {
        type: Number,
        
    },
})

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier