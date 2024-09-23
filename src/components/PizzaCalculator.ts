
// Import the calculatePrice function from the utils file
import { calculatePrice } from "../utils/calculatePrice";

// Export the PizzaCalculator function so it can be used in other files
export function PizzaCalculator() {
    const form = document.getElementById('pizza-calculator') as HTMLFormElement;

    form?.addEventListener('submit', (event) => {
        event.preventDefault();

        const pizzaCount = Number((document.getElementById('pizzaCount') as HTMLInputElement).value);
        const pizzaSize = (document.getElementById('pizzaSize') as HTMLSelectElement).value;
        const toppings = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(input => (input as HTMLInputElement).value);


        const price = calculatePrice(pizzaCount, pizzaSize, toppings);

        const summaryDiv = document.getElementById('order-summary');

        if (summaryDiv) {
            summaryDiv.innerHTML = `<h2>Total Price: ${price}$</h2>`;
        }
    });
}