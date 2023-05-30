const Products = require("../../dao/model/product.model");
const connection = require("../../db");
// require("dotenv").config();

async function filtro(
    type,
    category,
    priceMin,
    priceMax,
) {
  connection();
  try {
      let all = await Products.find({ deleted: false }).populate({
          path: "user",
          match: { deleted: false },
        });
     if (!priceMin && !priceMax){
        all = all;
     }
     if (priceMin > 0 && !priceMax){
        all = all.filter((ev) => ev.price >= priceMin)
     }
     if (priceMax > 0 && !priceMin){
        all = all.filter((ev) => ev.price <= priceMax)
     }
     if (priceMin > 0 && priceMax > 0){
        all = all.filter((ev) => ev.price >= priceMin && ev.price <= priceMax)
     }
    
    if (type === "Velas de Soja") {
      all = all.filter((ev) => ev.type === "Velas de Soja");
    }
    if (type === "Velas de Parafina") {
      all = all.filter((ev) => ev.type === "Velas de Parafina");
    }
    if (category === "Decorativas") {
      all = all.filter((ev) => ev.category === "Decorativas");
    }
    if (category === "Tematicas") {
      all = all.filter((ev) => ev.category === "Tematicas");
    }
    if (category === "Esencias") {
      all = all.filter((ev) => ev.category === "Esencias");
    }
    if (category === "Formas") {
      all = all.filter((ev) => ev.category === "Formas");
    }
    return all;
  } catch (error) {
    console.error(error);
  }
}
module.exports = { filtro };