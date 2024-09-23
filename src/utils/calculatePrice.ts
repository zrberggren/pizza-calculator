// Export the calculatePrice function so it can be used in other files
export function calculatePrice(pizzaCount: number, pizzaSize: string, toppings: string[]): number {

    // Determine the base price of the pizza based on its size
    const basePrice = pizzaSize === "small" ? 5 : pizzaSize === "medium" ? 7 : pizzaSize === "large" ? 9 : 0;

    // Calculate the total price of the toppings
    const toppingPrice = toppings.length * 3;

    // Calculate the total price of the order and multiplies the sum of the base price and topping price by the number of pizzas 
    const totalPrice = (basePrice + toppingPrice) * pizzaCount;

    // Return the total price of the order
    return totalPrice;
}