import { Request, RestBindings, get, ResponseObject, param } from '@loopback/rest';
import { repository } from '@loopback/repository';
import { EmployeeRepository } from '../repositories/employee.repository';
import { Employee } from '../models';

/*
Open API response poc() */

const ADD_USER_RESPONSE: ResponseObject = {
  description: 'poc response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        }
      }
    }
  }
}


const USER_RESPONSE: ResponseObject = {
  description: 'poc response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          userName: { type: 'string' },
          age: { type: 'string' },
          empId:{type:'number'}
        }
      }
    }
  }
}

export class AddUser {
  constructor(@repository(EmployeeRepository)
  private employeeRepository: EmployeeRepository) { }


  @get('/add', {
    responses: {
      '200': ADD_USER_RESPONSE,
    },
  })
  async addUser(
    @param.query.number('id') id: number,
    @param.query.string('name') name: string,
    @param.query.number('age') age: number
  ): Promise<Employee> {
    return await this.employeeRepository.create({ "empNumber": id, "name": name, "age": age });

  }

  @get('/fetchUser', {
    responses: {
      '200': USER_RESPONSE
    },
  })
  async fetchUser(
    @param.query.number('id') id:number
  ): Promise<Employee>{
    return await this.employeeRepository.findById(id);
  }
}
