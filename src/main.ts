// Import the PizzaForm component from the components folder
import { PizzaForm } from "./components/PizzaForm";

// Import the PizzaCalculator component from the components folder
import { PizzaCalculator } from "./components/PizzaCalculator";

// Get the HTML element with the ID "pizza-form" and set its inner HTML to the PizzaForm component
document.getElementById("pizza-form")!.innerHTML = PizzaForm();

// Call the PizzaCalculator function to perform its operations
PizzaCalculator();