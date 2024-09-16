export function calculatePrice(pizzaCount: number, pizzaSize: string, toppings: string[]): number {

    const basePrice = pizzaSize === "small" ? 5 : pizzaSize === "medium" ? 7 : pizzaSize === "large" ? 9 : 0;

    const toppingPrice = toppings.length * 3;

    const totalPrice = (basePrice + toppingPrice) * pizzaCount;

    return totalPrice;
}

export function PizzaCalculator() {

    const form = document.getElementById('pizza-calculator');

    form?.addEventListener('submit', (event) => {

        event.preventDefault();


        const pizzaCount = Number((document.getElementById('pizzaCount') as HTMLInputElement).value);

        const pizzaSize = (document.getElementById('pizzaSize') as HTMLSelectElement).value;


        const toppings = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(input => (input as HTMLInputElement).value);

        const price = calculatePrice(pizzaCount, pizzaSize, toppings);


        const summaryDiv = document.getElementById('order-summary');

        if (summaryDiv) {
            summaryDiv.innerHTML = `<h2>Total Price: ${price}$</h2>`;
        }
    });
}