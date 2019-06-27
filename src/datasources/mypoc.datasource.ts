import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './mypoc.datasource.json';

export class MypocDataSource extends juggler.DataSource {
  static dataSourceName = 'mypoc';

  constructor(
    @inject('datasources.config.mypoc', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
