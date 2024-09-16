export function PizzaForm() {
    return `
      <form id="pizza-calculator">
        <!-- Label and input for the number of pizzas -->
        <label for="pizzaCount">Amount:</label>
        <input type="number" id="pizzaCount" value="1" min="1" />
  
        <!-- Label and dropdown for selecting the size of the pizza -->
        <label for="pizzaSize">Size:</label>
        <select id="pizzaSize">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
  
        <!-- Label and checkboxes for selecting toppings -->
        <label for="toppings">Toppings:</label>
        <input type="checkbox" id="toppingPepperoni" value="pepperoni" /> Pepperoni
        <input type="checkbox" id="toppingCheese" value="cheese" /> Extra Cheese
        <input type="checkbox" id="toppingMushrooms" value="mushrooms" /> Mushrooms
        <input type="checkbox" id="toppingOlives" value="olives" /> Olives
        <input type="checkbox" id="toppingBacon" value="bacon" /> Bacon
        <input type="checkbox" id="toppingOnions" value="onions" /> Onions
        <input type="checkbox" id="toppingPineapple" value="pineapple" /> Pineapple

        <!-- Button to submit the form and calculate the total price -->
        <button type="submit">Calculate Amount</button>
      </form>
    `;
}
  