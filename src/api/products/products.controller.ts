import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Put,
  Delete,
  Query,
  NotFoundException,
} from "@nestjs/common";
import { ProductService } from "./products.service";
import { fitlerProduct, ProductCreateRequest, ProductSearchRequest, ProductUpdateRequest } from "src/payload/request/product.request";
import { ProductResponse } from "src/payload/response/product.respone";
import { IResponse } from "src/common/interface/response.interface";
import { successResponse } from "src/common/dto/response.dto";
import { AuthJwtAccessProtected } from "src/common/guards/role.guard";
import { AUTH_PERMISSIONS } from "src/enums/auth.enum";
import { query } from "express";
  @Controller("products")
  export class ProductController{
    constructor(private readonly service:ProductService){}

    @Post()
    @AuthJwtAccessProtected(AUTH_PERMISSIONS.PRODUCT_CREATE)
    async create(
        @Body() productcreaterequest: ProductCreateRequest
      ): Promise<IResponse<ProductResponse>> { 
       try{
        const product = await this.service.create(productcreaterequest);
        return successResponse(product);
       }catch(error)
       {
        throw new NotFoundException(`Error while create product:${error.message}`);
       }
      }

      @Get('search')
      @AuthJwtAccessProtected(AUTH_PERMISSIONS.PRODUCT_VIEW)
  async search(@Query() query:ProductSearchRequest){
    try{
      return this.service.searchproduct(query);

    }catch(error)
    {
      throw new Error(`Error while search product`);

    }
  } 
  @Get('filter')
  @AuthJwtAccessProtected(AUTH_PERMISSIONS.PRODUCT_VIEW)
  async filter(@Query() query:fitlerProduct){
    try{
      // const processedQuery = {
      //   ...query,
      //   limit: query.limit ? Number(query.limit) : 6,
      //   page: query.page ? Number(query.page) : 0,
      //   minPrice: query.minPrice ? Number(query.minPrice) : undefined,
      //   maxPrice: query.maxPrice ? Number(query.maxPrice) : undefined
      // };
    
      // console.log('Processed Query:', processedQuery);
      
      // Object.keys(query).forEach(key => {
      //   console.log(`${key} type: ${typeof query[key]}`);
      // });
    
      return this.service.filterProduct(query);
    }catch(error)
    {
      throw new NotFoundException(`Error while filter product`,error);
    }
  } 

  @Get()
  @AuthJwtAccessProtected(AUTH_PERMISSIONS.PRODUCT_VIEW)
  async findAll(): Promise<ProductResponse[]> {
    try
    {
      return this.service.findAll();
    }catch(error)
    {
      throw new Error(` Eror while find all product `)

    }
  }
  @Get(':id')
  @AuthJwtAccessProtected(AUTH_PERMISSIONS.PRODUCT_VIEW)
  async findOne(@Param('id') id: string): Promise<ProductResponse> {
    try{
      return this.service.findOne(id);
    }catch(error)
    {
      throw new Error(`Error while find  product by id`);
    }
  }
  @Put(':id')
  @AuthJwtAccessProtected(AUTH_PERMISSIONS.PRODUCT_UPDATE)
  async update(
    @Param('id')id:string,
    @Body() productUpdateRequest:ProductUpdateRequest
  ):Promise<ProductResponse>{
   try{
    return this.service.update(id,productUpdateRequest);
   }catch(error)
   {
    throw new Error(`Error while update product`)

   }
  }
  @Delete(':id')
  @AuthJwtAccessProtected(AUTH_PERMISSIONS.PRODUCT_DELETE)
  async delete(@Param('id') id:string):Promise<{message:string}>{
    try{
      await this.service.delete(id);
    return {message:`Delete Successfully`};
    }catch(error){
      throw new Error(`Error while delete product`)

    }
  }


  
  }
