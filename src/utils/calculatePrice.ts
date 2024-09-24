
// This function calculates the total price of pizzas based on the number of pizzas, their size, and selected toppings.
export function calculatePrice(pizzaCount: number, pizzaSize: string, toppings: string[]): number {

    const basePrice = pizzaSize === "small" ? 5 : pizzaSize === "medium" ? 7 : pizzaSize === "large" ? 9 : 0;
    const toppingPrice = toppings.length * 3;
    const totalPrice = (basePrice + toppingPrice) * pizzaCount;

    return totalPrice;
}