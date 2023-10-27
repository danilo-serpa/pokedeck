import { FormControl } from "@angular/forms";

export interface User {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserFormLogin {
  username: FormControl<string | null | undefined>;
  password: FormControl<string | null | undefined>;
}

export interface UserFormRegister {
  newUsername: FormControl<string | null | undefined>;
  newPassword: FormControl<string | null | undefined>;
  firstName: FormControl<string | null | undefined>;
  lastName: FormControl<string | null | undefined>;
}
