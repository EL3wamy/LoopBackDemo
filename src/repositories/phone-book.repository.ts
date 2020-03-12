import {DefaultCrudRepository} from '@loopback/repository';
import {PhoneBook, PhoneBookRelations} from '../models';
import {MysqlDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PhoneBookRepository extends DefaultCrudRepository<
  PhoneBook,
  typeof PhoneBook.prototype.Id,
  PhoneBookRelations
> {
  constructor(
    @inject('datasources.MysqlDs') dataSource: MysqlDsDataSource,
  ) {
    super(PhoneBook, dataSource);
  }
}
