import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeTemporaryService {

  constructor(private http: HttpClient) {}

  getContributors = ()=>{
    return this.http.get("https://api.github.com/repos/jobinjose-github/farmind/contributors")
  }

}
