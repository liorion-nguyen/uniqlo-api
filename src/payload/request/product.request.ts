import { Transform, Type } from 'class-transformer';
import { IsString, IsNumber, IsArray, IsBoolean, IsOptional, IsEnum, IsMongoId, IsInt, IsPositive, IsObject, Min } from 'class-validator';
import { Types } from 'mongoose';

export class ProductCreateRequest  {
  @IsString()
  Product_name: string;

  @IsString()
  Product_sku: string;

  @IsString()
  Product_brand: string;

  @IsString()
  Product_tag: string;

  @IsString()
  Product_description: string;

  @IsString()
  Product_currency: string;

  @IsArray()
  Product_color: string[];

  @IsArray()
  Product_size: string[];

  @IsOptional()
  @IsString()
  Product_variantSku?: string;

  @IsOptional()
  @IsString()
  Product_specifications?: string;

  @IsNumber()
  Product_price: number;

  @IsOptional()
  @IsNumber()
  Product_rating?: number;

  @IsOptional()
  @IsNumber()
  Product_count?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  Product_images?: string;

  @IsBoolean()
  Product_isNewArrival: boolean;

  @IsBoolean()
  Product_isBestSeller: boolean;

  @IsBoolean()
  Product_isOnSale: boolean;

  @IsMongoId()
  @IsOptional()
  categoryId: Types.ObjectId;
}
export class ProductUpdateRequest {
  @IsOptional()
  @IsString()
  Product_name?: string;

  @IsOptional()
  @IsString()
  Product_sku?: string;

  @IsOptional()
  @IsString()
  Product_tag?: string;

  @IsOptional()
  @IsString()
  Product_brand?: string;

  @IsOptional()
  @IsString()
  Product_description?: string;

  @IsOptional()
  @IsString()
  Product_currency?: string;

  @IsOptional()
  @IsArray()
  Product_color?: string[];

  @IsOptional()
  @IsArray()
  Product_size?: string[];

  @IsOptional()
  @IsString()
  Product_variantSku?: string;

  @IsOptional()
  @IsString()
  Product_specifications?: string;

  @IsOptional()
  @IsNumber()
  Product_price?: number;

  @IsOptional()
  @IsNumber()
  Product_rating?: number;

  @IsOptional()
  @IsNumber()
  Product_count?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  Product_images?: string[];

  @IsOptional()
  @IsBoolean()
  Product_isNewArrival?: string;

  @IsOptional()
  @IsBoolean()
  Product_isBestSeller?: string;

  @IsOptional()
  @IsBoolean()
  Product_isOnSale?: string;

  @IsOptional()
  @IsMongoId()
  categoryId?: string;
}

export class PriceRangeDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  minPrice?: number;

  @IsOptional()
  @Type(() => Number)  
  @IsNumber()
  maxPrice?: number;
}

export class ProductSearchRequest {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  @Min(0)
  page?: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  @Min(1)
  limit?: number;


  @IsOptional()
  @IsString()
  Product_name?: string;

  @IsOptional()
  @IsString()
  categoryId?: string;

  @IsOptional()
  @IsString()
  Product_size?: string;

  @IsOptional()
  @IsString()
  Product_color?: string;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  minPrice?: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  maxPrice?: number;


  @IsOptional()
  @IsObject()
  @Type(() => Number)
  Product_price?:PriceRangeDto
}


export class fitlerProduct {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number;

  @IsOptional()
  @Type(() => Number)
  @Min(0)
  minPrice?: number;

  @IsOptional()
  @Type(() => Number)
  @Min(0)
  maxPrice?: number;

  @IsOptional()
  @Type(() => PriceRangeDto)
  Product_price?: PriceRangeDto;

  @IsOptional()
  @IsString()
  Product_brand?: string;

  @IsOptional()
  @IsString()
  Product_tag?: string;

  @IsOptional()
  @IsString()
  Product_size?: string;

  @IsOptional()
  @IsString()
  Product_color?: string;

  @IsOptional()
  @IsMongoId()
  categoryId?: string;
}
