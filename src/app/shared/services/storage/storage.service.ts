import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService<T> {
  set(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): T {
    return JSON.parse(localStorage.getItem(key) ?? '');
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  getList(key: string): T[] {
    let list = JSON.parse(localStorage.getItem(key) ?? '[]') as T[];
    return list;
  }

  setList(key: string, value: T[]): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  addItem(key: string, value: T): T[] {
    let list = this.getList(key);
    list.push(value);
    localStorage.setItem(key, JSON.stringify(list));
    return list;
  }

  editItem(key: string, value: T): T[] {
    let list = this.getList(key);
    list.push(value);
    localStorage.setItem(key, JSON.stringify(list));
    return list;
  }

  removeItem(key: string, value: T): T[] {
    let list = this.getList(key);
    let index = list.findIndex((l) => l === value);
    list.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(list));
    return list;
  }
}
