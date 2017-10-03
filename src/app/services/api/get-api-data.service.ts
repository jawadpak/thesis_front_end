import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class GetApiDataService {

  constructor(private http: Http) { }
  getPostData(actionName, paramObject): Observable<any> {
    let body = JSON.stringify(paramObject);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    const url = "http://localhost:80/thesis_rest_api/api/" + actionName;
    //const url = "http://api.github.com/search/users?q=jaw";
    return this.http.post(url, paramObject, options)
    //return this.http.get(url, options)
      .map(this.extractData)
      .do(data => {return data})
      .catch(this.handleError);
  }

  getUser(searchText): Observable <any> {
  //const searchText = "js";
  //  const url = "http://api.github.com/search/users?q=jaw" + searchText;
    const url = "http://localhost/nutrition_api/my_app_name/api/users/dailyPlan.json";

    //return this.http.get(url).map(
    return this.http.post(url,{"user_id":4,"plan_date":"2017-09-26"}).map(
      res => {
        const data = res.json();
        console.log(data);
        return data;
      }
    )
  }

  private extractData(response: Response) {
    let body = response.json();
    return body || {};
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || "500 internal server error");
  }

}
