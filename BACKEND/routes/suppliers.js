const router = require("express").Router();
let Supplier = require("../models/Supplier.js");

router.route("/add").post((req, res) => {
    const SupplierName = req.body.SupplierName;
    const product = req.body.product;
    const Quintity = Number(req.body.Quintity);
    const UnitPrice = Number(req.body.UnitPrice);
    const Total = Number(req.body.Total);

    const newSupplier = new Supplier({
        SupplierName,
        product,
        Quintity,
        UnitPrice,
        Total
    })

    newSupplier.save().then(() => {
        res.json("Supplier Added")
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/").get((req, res) => {
    Supplier.find().then((suppliers) => {
        res.json(suppliers)
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/update/:id").put(async(req, res) => {
    let userId = req.params.id;
    const {SupplierName, product, Quintity, UnitPrice, Total} = req.body;

    const updateSupplier = {
        SupplierName,
        product,
        Quintity,
        UnitPrice,
        Total
    }

    const update = await Supplier.findByIdAndUpdate(userId, updateSupplier).then(() => {
        res.status(200).send({status: "Supplier Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;

    await Supplier.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Supplier Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete supplier", error: err.message});
    })
});

router.route("/get/:id").get(async(req, res) => {
    let userId = req.params.id;
    const user = await Supplier.findById(userId).then((Supplier) => {
        res.status(200).send({status: "User fetched", Supplier})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get Supplier", error: err.message});
    })
})


module.exports =router;
