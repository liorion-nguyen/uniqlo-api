import {
  Controller,
  Body,
  Get,
  Param,
  Put,
  Delete,
  InternalServerErrorException,
  NotFoundException,
  HttpStatus,
  Req,
  Query,
  Post,
} from "@nestjs/common";
import { UserService } from "./users.service";
import {
  ChangePasswordRequest,
  SearchUserRequest,
  UpdateUserRequest,
} from "src/payload/request/users.request";
import { CommonException } from "../../common/exception/common.exception";
import { successResponse } from "../../common/dto/response.dto";
import { AUTH_PERMISSIONS } from "src/enums/auth.enum";
import { AuthJwtAccessProtected } from "src/common/guards/role.guard";
import { ApiBearerAuth } from "@nestjs/swagger";
import { User } from "src/schema/user.schema";
@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post()
  // create(@Body()createUserRequest:CreateUserRequest){
  //   console.log(">>user>>:");
  //   return this.userService.create(createUserRequest);

  // }

  @Get()
  @ApiBearerAuth("access_token")
  async getUser(@Req() req) {
    try {
      return successResponse(await this.userService.getUser(req.user));
    } catch (error) {
      throw new CommonException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get("find/:id")
  @ApiBearerAuth("access_token")
  @AuthJwtAccessProtected(AUTH_PERMISSIONS.CUSTOMER_VIEW)
  async findUser(@Param("id") id: string) {
    try {
      return successResponse(await this.userService.findUserById(id));
    } catch (error) {
      throw new CommonException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get("search")
  @ApiBearerAuth("access_token")
  @AuthJwtAccessProtected(AUTH_PERMISSIONS.CUSTOMER_VIEW)
  async search(@Query() query: SearchUserRequest) {
    try {
      return successResponse(await this.userService.searchUsers(query));
    } catch (error) {
      throw new CommonException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Put(":id")
  @ApiBearerAuth("access_token")
  @AuthJwtAccessProtected(AUTH_PERMISSIONS.CUSTOMER_UPDATE)
  async updateUser(
    @Param("id") id: string,
    @Body() updateUserRequest: UpdateUserRequest
  ): Promise<User> {
    try {
      const user = await this.userService.updateUser(id, updateUserRequest);
      if (!user) {
        throw new NotFoundException(`User with id ${id} not found`);
      }
      return user;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException("Failed to update user");
    }
  }

  @Delete(":id")
  @ApiBearerAuth("access_token")
  @AuthJwtAccessProtected(AUTH_PERMISSIONS.CUSTOMER_DELETE)
  async deleteUser(@Param("id") id: string): Promise<void> {
    try {
      await this.userService.deleteUser(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException("Failed to delete user");
    }
  }

  @Post("change-password")
  async changePassword(@Req() req, @Body() changePasswordRequest: ChangePasswordRequest) {    
    return this.userService.changePassword(req.user._id, changePasswordRequest.oldPassword, changePasswordRequest.newPassword);
  }
}
