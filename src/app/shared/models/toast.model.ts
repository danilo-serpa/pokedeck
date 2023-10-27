import { TypeMessageEnum } from "../enums/type-message.enum";

export interface Toast {
  title: string;
  message: string;
  type: TypeMessageEnum
}
