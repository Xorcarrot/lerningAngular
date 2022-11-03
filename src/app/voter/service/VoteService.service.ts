import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from '../model/vote';

@Injectable({
  providedIn: 'root'
})
export class VoteServiceService {

  private votingUrl: string;

constructor(private http: HttpClient) { 
  this.votingUrl = 'http://localhost:8080/vote';
}

public findAll(): Observable<Vote[]> {
  return this.http.get<Vote[]>(this.votingUrl);
}

public save(vote: Vote) {
  return this.http.post<Vote>(this.votingUrl, vote);
}

}
