import { Prisma, User } from "@prisma/client";
import { CreateUserInput } from "../dto/input/create-user.input";
import { UpdatePasswordUser } from "../dto/input/update-password-user.input";
import { UpdateUserInput } from "../dto/input/update-user.input";

export interface IUserService {
    createOneUserAndStudent(body: CreateUserInput): Promise<User>;
    findAllUser(params: {
        skip?: number;
        take?: number;
        orderBy?: Prisma.UserOrderByWithRelationInput;
    }): Promise<User[]>;
    findUserById(userId: number): Promise<User>;
    updatePassword(userId: number, data: UpdatePasswordUser): Promise<void>;
    updateAccount(userId: number, data: UpdateUserInput): Promise<void>;
    activateUserAccount(userId: number): Promise<User>;
    deleteOneUser(userId: number): Promise<void>;
}