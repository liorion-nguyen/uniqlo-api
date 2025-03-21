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
import { IResponse } from "src/common/interface/response.interface";
import { successResponse } from "src/common/dto/response.dto";
import { AuthJwtAccessProtected } from "src/common/guards/role.guard";
import { AUTH_PERMISSIONS } from "src/enums/auth.enum";
import { BlogDetailService } from "./blogdetails.service";
import { CreateBlogdetailRequest, SearchBlogdetailRequest, UpdateBlogdetailRequest } from "src/payload/request/blog-details.request";
import { BlogDetailRespone } from "src/payload/response/blogdetails.respone";
  @Controller("blog-details")
  export class BlogDetailController{
    constructor(private readonly service:BlogDetailService){}

    @Post()
    @AuthJwtAccessProtected(AUTH_PERMISSIONS.BLOGDETAIL_CREATE)
    async create(
        @Body() blogdetailcreaterequest: CreateBlogdetailRequest
      ): Promise<IResponse<BlogDetailRespone>> { 
       try{
        const blogdetail = await this.service.create(blogdetailcreaterequest);
        return successResponse(blogdetail);
       }catch(error)
       {
        throw new Error(`Error while create blogdetail`);
       }
      }
      
      @Get('search')
      @AuthJwtAccessProtected(AUTH_PERMISSIONS.BLOGDETAIL_VIEW)
  async search(@Query() query:SearchBlogdetailRequest){
    try{
      return this.service.searchblogdetail(query);

    }catch(error)
    {
      throw new Error(`Error while search blogdetail`);

    }
  }  
  @Get()
  @AuthJwtAccessProtected(AUTH_PERMISSIONS.BLOGDETAIL_VIEW)
  async findAll(): Promise<BlogDetailRespone[]> {
    try
    {
      return this.service.findAll();
    }catch(error)
    {
      throw new Error(` Eror while find all blogdetail `)

    }
  }
  @Get(':id')
  @AuthJwtAccessProtected(AUTH_PERMISSIONS.BLOGDETAIL_VIEW)
  async findOne(@Param('id') id: string): Promise<BlogDetailRespone> {
    try{
      return this.service.findOne(id);
    }catch(error)
    {
      throw new Error(`Error while find  blogdetail by id`);
    }
  }
  @Put(':id')
  @AuthJwtAccessProtected(AUTH_PERMISSIONS.BLOGDETAIL_UPDATE)
  async update(
    @Param('id')id:string,
    @Body() blogdetailUpdateRequest:UpdateBlogdetailRequest
  ):Promise<BlogDetailRespone>{
   try{
    return this.service.update(id,blogdetailUpdateRequest);
   }catch(error)
   {
    throw new Error(`Error while update blogdetail`)

   }
  }
  @Delete(':id')
  @AuthJwtAccessProtected(AUTH_PERMISSIONS.BLOGDETAIL_DELETE)
  async delete(@Param('id') id:string):Promise<{message:string}>{
    try{
      await this.service.delete(id);
    return {message:`Delete Successfully`};
    }catch(error){
      throw new Error(`Error while delete blogdetail`)

    }
  }
  }