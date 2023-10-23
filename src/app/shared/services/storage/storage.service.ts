import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService<T> {
  set(key: string, value: T[]): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  addItem(key: string, value: T): T[] {
    let list = this.get(key);
    list.push(value);
    localStorage.setItem(key, JSON.stringify(list));
    return list;
  }

  editItem(key: string, value: T): T[] {
    let list = this.get(key);
    let index = list.findIndex((l) => l === value);
    list.splice(index, 1, value);
    localStorage.setItem(key, JSON.stringify(list));
    return list;
  }

  get(key: string): T[] {
    let list = JSON.parse(localStorage.getItem(key) ?? '[]') as T[];
    return list;
  }

  removeItem(key: string, value: T): T[] {
    let list = this.get(key);
    let index = list.findIndex((l) => l === value);
    list.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(list));
    return list;
  }

  removeKey(key: string): void {
    localStorage.removeItem(key);
  }
}
