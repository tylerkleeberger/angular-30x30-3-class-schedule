import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './items';
import { ITEMS_ENVIRONMENT } from '../items.token';
import { ItemEnvironment } from '../item.model';

const BASE_URL = 'https://tylerkleeberger.github.io/angular-30x30-5-class-schedule/'

@Injectable({
  providedIn: 'root'
})
export class MethodService {

  model = 'items'

  constructor(private http: HttpClient,) { }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get(this.getUrl());
  }

  find(id) {
    return this.http.get(this.getUrlWithID(id));
  }

  create(item) {
    return this.http.post(this.getUrl(), item);
  }

  update(item) {
    return this.http.put(this.getUrlWithID(item.id), item);
  }

  delete(id) {
    return this.http.delete(this.getUrlWithID(id));
}

}
