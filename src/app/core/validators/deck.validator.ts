import { AbstractControl } from "@angular/forms";
import { Card } from "src/app/shared/models/card.model";

export class DeckValidators {
  static limitCardsSameName(control: AbstractControl) {
    const cards = control.value as Card[];

    const uniqueArray: { key: string; count: number }[] = [];
    cards.forEach((card) => {
      const obj = { key: card.name, count: 1 };
      const index = uniqueArray.findIndex((f) => {
        return f.key === card.name;
      });
      index === -1 ? uniqueArray.push(obj) : (uniqueArray[index].count += 1);
    });

    const isLimitExceeded = uniqueArray.some((obj) => obj.count > 4)

    if (isLimitExceeded) {
      return { limitcard: true };
    } else return null;
  }
}
