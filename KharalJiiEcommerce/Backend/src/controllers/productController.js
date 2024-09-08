const Product=require('../models/productModel')
const Category=require('../models/categoryModel')

// controller to create a new product
const createProduct=async(req,res)=>{
    try{
        const{name,productImage,brand,category,description,price,countInStock,rating,numReviews}=req.body
        if(!name||!category){
            return res.status(400).json({message:"Name and category are required"})
        }
        const categoryExists=await Category.findById(category)
        if(!categoryExists){
            return res.status(400).json({message:"Category does not exist"})
        }
        const newProduct=new Product({
            name,
            productImage,
            brand,
            category,
            description,
            price,
            countInStock,
            rating,
            numReviews
        })
        const productResponse=await newProduct.save()
        return res.status(201).json({message:"Product created",product:productResponse})
    }catch(error){
        return res.status(500).json({message:"Internal server error",error:error.message})
    }
}


// controller for searching products
// Search and sort products (Public)
const searchProducts = async (req, res) => {
    const { search, sort } = req.query;
    let query = {
        
    };
    if (search) {
      query.name = { $regex: search, $options: "i" };
    }
  
    let products = await Product.find(query);
  
    if (sort) {
      const sortOrder = sort === "asc" ? 1 : -1;
      products = products.sort((a, b) => (a.price - b.price) * sortOrder);
    }
  
    res.status(200).json({msg:"Products found",products});
  };

module.exports={createProduct,searchProducts}