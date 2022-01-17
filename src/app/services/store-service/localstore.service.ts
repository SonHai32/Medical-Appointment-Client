import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStoreService {
  constructor() {}

  saveToStorage<T>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getFromStorage<T>(key: string) {
    const data: string | null = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data) as T;
    } else return;
  }

  removeStorageItem(key: string) {
    localStorage.removeItem(key);
  }

  clearStorage() {
    localStorage.clear();
  }
}
