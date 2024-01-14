import { Injectable } from '@angular/core';
import { RestService } from '../http/rest.service';
import { Company } from 'src/app/common/company/company.model';
import { Observable } from 'rxjs';

@Injectable()
export class CompanyService extends RestService<Company> {

  baseUrl = 'companies';

  public getCompanies(): Observable<Company[]> {
    return this.getAll();
  }

}