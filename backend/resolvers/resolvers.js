const Product = require('../model/model'); 

const rootValue = {
    listProducts: async () => {
        try {
            return await Product.find({});
        } catch (error) {
            console.error("Error fetching products:", error);
            throw new Error("Error fetching products");
        }
    },
    addProduct: async (args) => {
        try {
            const newProduct = new Product({
                name: args.name,
                description: args.description,
                price: args.price,
                image: args.image,
            });
            await newProduct.save();
            return newProduct;
        } catch (error) {
            console.error("Error adding product:", error);
            throw new Error("Error adding product");
        }
    },
};

module.exports = rootValue;
