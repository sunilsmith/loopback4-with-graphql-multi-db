import { Entity, model, property } from '@loopback/repository';

@model({ settings: {} })
export class Employee extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    id: true,
  })
  empNumber: number;

  @property({
    type: 'number',
    required: true,
  })
  age: number;

  constructor(data?: Partial<Employee>) {
    super(data);
  }
}

export interface EmployeeRelations {
  // describe navigational properties here
}

export type EmployeeWithRelations = Employee & EmployeeRelations;
