// This code imports the PizzaForm and PizzaCalculator components, sets the inner HTML of the element with ID "pizza-form" to the PizzaForm component, and initializes the PizzaCalculator function.
import { PizzaForm } from "./components/PizzaForm";
import { PizzaCalculator } from "./components/PizzaCalculator";

document.getElementById("pizza-form")!.innerHTML = PizzaForm();
PizzaCalculator();
