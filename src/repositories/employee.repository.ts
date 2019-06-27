import {DefaultCrudRepository} from '@loopback/repository';
import {Employee, EmployeeRelations} from '../models';
import {MypocDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EmployeeRepository extends DefaultCrudRepository<
  Employee,
  typeof Employee.prototype.empNumber,
  EmployeeRelations
> {
  constructor(
    @inject('datasources.mypoc') dataSource: MypocDataSource,
  ) {
    super(Employee, dataSource);
  }
}
