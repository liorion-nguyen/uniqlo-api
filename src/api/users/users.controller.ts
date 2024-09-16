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
} from "@nestjs/common";
import { UserService } from "./users.service";
import { User } from "../../schema/user.schema";
import { UpdateUserRequest } from "../../payload/request/users.request";
import { CommonException } from "../../common/exception/common.exception";
import { successResponse } from "../../common/dto/response.dto";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  async getUser(@Param("id") id: string) {
    try {
      const result = await this.userService.findUserById(id);
      return successResponse(result);
    } catch (error) {
      throw new CommonException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Put(":id")
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
}
