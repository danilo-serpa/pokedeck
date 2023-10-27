import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TypeMessageEnum } from '../../enums/type-message.enum';
import { Toast } from '../../models/toast.model';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts$: Observable<Toast>;
  private _toasts = new Subject<Toast>();

  constructor() {
    this.toasts$ = this._toasts.asObservable();
  }

  showSuccessToast(title: string, message: string) {
    this._toasts.next({
      message,
      title,
      type: TypeMessageEnum.success,
    });
  }

  showErrorToast(title: string, message: string) {
    this._toasts.next({
      message,
      title,
      type: TypeMessageEnum.error,
    });
  }
}
