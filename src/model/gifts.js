import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  gift_name: { type: String },
  price: { type: Number },
  category: { type: String },
  tags: [String], // Array of tags
  recipient_age_group: { type: String },
  occasion: { type: String },
  purchase_link: { type: String },
  gift_description: { type: String },
  recipient_name: { type: String },
  shipping_address: { type: String },
});

// Check if the model already exists to prevent OverwriteModelError
const ProductModel =
  mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default ProductModel;
