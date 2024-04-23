import { type RegisterUserDto } from '../dtos'
import { type UserEntity } from '../entities'

export abstract class AuthDatasource {
  abstract register (registerUserDto: RegisterUserDto): Promise<UserEntity>
}
