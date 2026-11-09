import { Injectable, signal } from "@angular/core";
type State = { ingredients: string[]; machines: string[]; shopping: string[] };
const INITIAL: State = {
  ingredients: ["Tomate", "Ovo", "Arroz", "Sal", "Azeite"],
  machines: ["fogao", "panela", "liquidificador"],
  shopping: [],
};
@Injectable({ providedIn: "root" })
export class PantryService {
  private state = signal<State>(this.load());
  ingredients = () => this.state().ingredients;
  machines = () => this.state().machines;
  shopping = () => this.state().shopping;
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
    this.update({
      ...this.state(),
      shopping: this.shopping().filter((x) => x !== v),
      ingredients: [...new Set([...this.ingredients(), v])],
    });
  }
}
