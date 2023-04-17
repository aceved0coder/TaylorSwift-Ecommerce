<<<<<<< HEAD
import fs from "fs"

const products = []
const path = './files/Productos.json'


class ProductManager {
    constructor (){
        this.products=products
        this.path = path
    }

    addProduct(newProduct){
        const productsJSON = fs.readFileSync(this.path, "utf-8")
        const productsParsed = JSON.parse(productsJSON)
        this.products = productsParsed

        if (!newProduct.title ||
            !newProduct.description ||
            !newProduct.price ||
            !newProduct.thumbnail ||
            !newProduct.code ||
            !newProduct.stock ) return 'todos los campos son necesarios'

        let product = this.products.find(prod => prod.code === newProduct.code)
        if(product) return 'Un producto con este code ya fue ingresado'

        this.products.push({id: this.products.length+1, ... newProduct})
        fs.promises.writeFile(path, JSON.stringify(this.products, null, 2), "utf-8")
        return "Producto agregado"
    }

    deleteProduct (path, id) {
        fs.readFile(path, "utf-8",(err,data) => {
            if(err){
                console.log(err)
                return
            }
            const product = JSON.parse(data)
            const index = product.findIndex(product => product.id === id)
            if (index !== -1) {
                product.splice(index, 1)
            } else {
                console.log(`No existe ningún producto con el id ${id}`)
                return
            }
            fs.writeFile(path, JSON.stringify(product, null, 2), "utf-8" , err => {
                if(err) {
                    console.log(err)
                } else {
                    console.log (`Producto removido con el id ${id}`)
                }
            })
        })
    }

    createJsonFile = () => {
        fs.promise.writeFile(path.JSON.stringify([ ... product.products],null,2),"utf-8", (err) => {
            if(err) return console.log (err)
        })
    }

    getProducts = async() => {
        try {
            let data = fs.readFile(path, "utf-8")
            const parseData = JSON.parse(data)
            console.log(parseData)
            return parseData
        } catch (err) {
            console.log(err)
        }
    }

    getProductById(path, id) {
        fs.readFile(path, "utf-8", (err, contenido) => {
            if(err) console.log(err)
            let product = JSON.parse(contenido)
            let productID = product.find(prod => prod.id === id)
            if(!product) return "Producto no ecnotrado"
            console.log("Producto from JSON with id: ",productID)
        })
    }

    updateProducts = async (id, updatedFields) => {
        
        try {
            const products = await fs.promises.readFile(this.path, "utf-8");
            const parsedProducts = JSON.parse (products);
            const index = parsedProducts.findIndex ((p) => p.id === id);

            if (index !== -1) {
                parsedProducts[index] = {... parsedProducts [index], ...updatedFields };
                await fs.promises.writeFile(this.path, JSON.stringify(parsedProducts, null, 2));

                return parsedProducts[index];
            } else {
                console.log(`No existe ningún producto con el id ${id}`);
                return null;
            }
        } catch (error) {
            console.error(error);
        }
    }
}

const product = new ProductManager()
=======
let productos = []

class ProductManager {
    constructor (){
        this.products=productos
    }

    addProduct(newProduct){

        if (!newProduct.title ||
            !newProduct.description ||
            !newProduct.price ||
            !newProduct.thumbnail ||
            !newProduct.code ||
            !newProduct.stock ) return 'todos los campos son necesarios'

        let product = this.products.find(prod => prod.code === newProduct.code)
        if(product) return 'Un producto con este code ya fue ingresado'

        return this.products.push({id: this.products.length+1, ... newProduct})
    }
    getProducts(){
        return this.product
    }
    getProductById(id){
        let product = this.products.find(prod => prod.id === id)
        if (!product) return 'Product Not Found'
        return product
    }
    updateProducts(id, upProd){

        let product = this.products.find(prod => prod.id === id);
        
        if(product){
            product.title=upProd.title;
            product.description=upProd.description;
            product.price=upProd.price;
            product.thumbnail=upProd.thumbnail;
            product.code=upProd.code;
            product.stock=upProd.stock;
            return "Producto actualizado";
        }else{
            return "No se encontre el producto a actualizar";
        }

    }

    deleteProducts(id){

        let productos = this.products.filter(x => x.id != id);
        console.log(productos);
        return this.products = productos;
    }
}

const product = new ProductManager()

product.addProduct({
    title: 'Producto 1',
    description: 'Sin descripcion',
    price: 1800,
    thumbnail: 'Sin imagen',
    code: 004,
    stock: 10
})
product.addProduct({
    title: 'Producto 2',
    description: 'Sin descripcion',
    price: 2800,
    thumbnail: 'Sin imagen',
    code: 005,
    stock: 8
})

product.updateProducts(1, {
    title: 'Producto 1 Editado',
    description: 'Sin descripcion, Editado',
    price: 1900,
    thumbnail: 'Sin imagen',
    code: 004,
    stock: 10
})

console.log(product.getProducts());
>>>>>>> 12fe9da8e13fbbabb90323c54da3e75de9cb0195
