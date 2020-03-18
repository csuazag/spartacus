import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { B2BSearchConfig } from '../../model/search-config';
import { EntitiesModel } from '../../../model/misc.model';
import { B2BUserAdapter } from './b2b-user.adapter';
import { B2BUser } from 'projects/core/src/model';

@Injectable({
  providedIn: 'root',
})
export class B2BUserConnector {
  constructor(protected adapter: B2BUserAdapter) {}

  get(userId: string, orgUnitCustomerId: string): Observable<B2BUser> {
    return this.adapter.load(userId, orgUnitCustomerId);
  }

  getList(
    userId: string,
    params?: B2BSearchConfig
  ): Observable<EntitiesModel<B2BUser>> {
    return this.adapter.loadList(userId, params);
  }

  // getApprovers(
  //   userId: string,
  //   orgUnitCustomerId: string,
  //   params?: B2BSearchConfig
  // ): Observable<EntitiesModel<Permission>> {
  //   return this.adapter.loadApprovers(
  //     userId,
  //     orgUnitCustomerId,
  //     params
  //   );
  // }

  // getUserGroups(
  //   userId: string,
  //   orgUnitCustomerId: string,
  //   params?: B2BSearchConfig
  // ): Observable<EntitiesModel<User>> {
  //   return this.adapter.loadUserGroups(
  //     userId,
  //     orgUnitCustomerId,
  //     params
  //   );
  // }
}