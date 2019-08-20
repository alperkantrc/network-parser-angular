import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ParserService {
  URL = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}

  parse(myInputValue) {
    return this.http.post(`${this.URL}/parseInput`, {
      input: myInputValue
    });
  }
}
