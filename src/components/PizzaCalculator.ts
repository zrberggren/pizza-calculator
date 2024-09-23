
// This function sets up an event listener on a form to calculate and display the total price of a pizza order when the form is submitted.
import { calculatePrice } from "../utils/calculatePrice";

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