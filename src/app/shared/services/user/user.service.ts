import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private key = 'user';
  private currentUserkey = 'currentUser';

  constructor(private storageService: StorageService<User>) {}

  getAll(): User[] {
    return this.storageService.getList(this.key);
  }

  getById(id: string): User | null {
    let users = this.storageService.getList(this.key);
    return users.find((u) => u.id === id) ?? null;
  }

  add(user: User): User[] {
    return this.storageService.addItem(this.key, user);
  }

  update(user: User): User[] {
    return this.storageService.editItem(this.key, user);
  }

  delete(user: User): User[] {
    return this.storageService.removeItem(this.key, user);
  }

  login(username: string, password: string): User | undefined {
    const users = this.storageService.getList(this.key);
    const userLogged =
      users.find((u) => u.username === username && u.password === password);

    if (userLogged) {
      this.storageService.set(this.currentUserkey, userLogged);
    }
    return userLogged;
  }

  logout(): void {
    this.storageService.remove(this.currentUserkey);
  }

  getCurrentUser(): User {
    return this.storageService.get(this.currentUserkey);
  }
}
