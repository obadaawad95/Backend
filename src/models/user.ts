import { Model } from 'objection';

export class User extends Model {
  readonly id!: number;
  name: string;
  email: string;
  age: number;
  gender: string;
  birthdate: Date;
  visitedAt: Date;
  createdAt?: Date;
  updatedAt?: Date;

  static get tableName() {
    return 'users';
  }

  static get idColumn() {
    return 'id';
  }

  static relationMappings = () => ({});
}
