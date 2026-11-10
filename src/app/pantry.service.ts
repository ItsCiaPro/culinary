import { Injectable, signal } from "@angular/core";
import { CATEGORIES, MACHINES } from "./data";
type State = {
  ingredients: string[];
  machines: string[];
  shopping: string[];
  customIngredients: string[];
  customMachines: { id: string; name: string }[];
};
const INITIAL: State = {
  ingredients: ["Tomate", "Ovo", "Arroz", "Sal", "Azeite"],
  machines: ["fogao", "panela", "liquidificador"],
  shopping: [],
  customIngredients: [],
  customMachines: [],
};
@Injectable({ providedIn: "root" })
export class PantryService {
  private state = signal<State>(this.load());
  ingredients = () => this.state().ingredients;
  machines = () => this.state().machines;
  shopping = () => this.state().shopping;
  customIngredients = () => this.state().customIngredients;
  customMachines = () => this.state().customMachines;
  private load(): State {
    try {
      const raw = localStorage.getItem("despensa-v1");
      return raw ? { ...INITIAL, ...JSON.parse(raw) } : INITIAL;
    } catch {
      return INITIAL;
    }
  }
  private update(s: State) {
    this.state.set(s);
    localStorage.setItem("despensa-v1", JSON.stringify(s));
  }
  toggleIngredient(v: string) {
    const a = this.ingredients();
    this.update({
      ...this.state(),
      ingredients: a.includes(v) ? a.filter((x) => x !== v) : [...a, v],
    });
  }
  toggleMachine(v: string) {
    const a = this.machines();
    this.update({
      ...this.state(),
      machines: a.includes(v) ? a.filter((x) => x !== v) : [...a, v],
    });
  }
  addCustomIngredient(value: string) {
    const name = value.trim();
    if (!name) return;
    const native = CATEGORIES.flatMap((category) => category.items).find(
      (item) => item.toLocaleLowerCase() === name.toLocaleLowerCase(),
    );
    const ingredient = native ?? name;
    const customIngredients = native
      ? this.customIngredients()
      : this.customIngredients().some(
            (item) => item.toLocaleLowerCase() === name.toLocaleLowerCase(),
          )
        ? this.customIngredients()
        : [...this.customIngredients(), name];
    this.update({
      ...this.state(),
      customIngredients,
      ingredients: [...new Set([...this.ingredients(), ingredient])],
    });
  }
  addCustomMachine(value: string) {
    const name = value.trim();
    if (!name) return;
    const native = MACHINES.find(
      (machine) => machine.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
    );
    if (native) {
      if (!this.machines().includes(native.id)) this.toggleMachine(native.id);
      return;
    }
    const existing = this.customMachines().find(
      (machine) => machine.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
    );
    const machine = existing ?? {
      id: `custom-${name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      name,
    };
    this.update({
      ...this.state(),
      customMachines: existing
        ? this.customMachines()
        : [...this.customMachines(), machine],
      machines: [...new Set([...this.machines(), machine.id])],
    });
  }
  clear() {
    this.update({ ...this.state(), ingredients: [] });
  }
  addShopping(items: string[]) {
    this.update({
      ...this.state(),
      shopping: [...new Set([...this.shopping(), ...items])],
    });
  }
  removeShopping(v: string) {
    this.update({
      ...this.state(),
      shopping: this.shopping().filter((x) => x !== v),
    });
  }
  buy(v: string) {
    const isNative = CATEGORIES.some((category) => category.items.includes(v));
    this.update({
      ...this.state(),
      shopping: this.shopping().filter((x) => x !== v),
      ingredients: [...new Set([...this.ingredients(), v])],
      customIngredients:
        isNative ||
        this.customIngredients().some(
          (item) => item.toLocaleLowerCase() === v.toLocaleLowerCase(),
        )
          ? this.customIngredients()
          : [...this.customIngredients(), v],
    });
  }
}
