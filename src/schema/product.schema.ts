import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

const validProductTags=["PRODUCT","BAGS","SHOES","FASHIO","CLOTHING","HATS","ACCESSORIES"];
const validProductBrands=["Louis Vuitton","Chanel","Hermes","Gucci"];
const validProductSizes=["XS","S","M","L","XL","2XL","3XL","4XL","Free Size"];
const validProductColors=["White","Red","Green","Yellow","Blue","Gray","Orange","Brown","Beige","Purple","Pink","Black"]

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class Product extends Document {
  @Prop({ required: true })
  Product_name: string;

  @Prop({required:true ,type:String,enum:validProductBrands})
  Product_brand:string;

  @Prop({required:true ,type:String,enum:validProductTags})
  Product_tag:string;

  @Prop({ required: true, unique: true })
  Product_sku: string;

  @Prop({ required: true })
  Product_description: string;

  @Prop({ required: true })
  Product_currency: string;

  @Prop({ required: true,type:[String],enum:validProductColors })
  Product_color: string[];

  @Prop({ required: true,type:[String],enum:validProductSizes })
  Product_size: string[];

  @Prop()
  Product_variantSku: string;

  @Prop()
  Product_specifications: string;

  @Prop({ required: true, type: Number })
  Product_price: number;

  @Prop({ default: 0, type: Number })
  Product_rating: number;

  @Prop({ default: 0, type: Number })
  Product_count: number;


  @Prop({ default: "" ,type:[String]})
  Product_images: string[];

  @Prop({ default: false })
  Product_isNewArrival: boolean;

  @Prop({ default: false })
  Product_isBestSeller: boolean;

  @Prop({ default: false })
  Product_isOnSale: boolean;
  
  @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
  categoryId: Types.ObjectId;

  @Prop({type:[Types.ObjectId],ref:'users',required:true})
  user_Id:Types.ObjectId;
}


export const ProductSchema = SchemaFactory.createForClass(Product);
