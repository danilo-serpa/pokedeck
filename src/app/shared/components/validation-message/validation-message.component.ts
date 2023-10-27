import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss'],
})
export class ValidationMessageComponent {
  @Input() control!: FormControl;
  @Input() validation!: string;
  @Input() message!: string;
}
