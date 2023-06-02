import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private apiURL = "https://1.api.fy23ey01.careers.ifelsecloud.com/"; // API URL
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
      }
  constructor(private httpClient: HttpClient) {}

  getContent(){
    return this.httpClient.get(this.apiURL + 'check_my_current_balance');
    }
  }
