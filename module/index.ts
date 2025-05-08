// Formate string based on optional boolean
function formateString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLocaleLowerCase()
}

// Filters item with rating >= 4
type ArrOfObj = {
    title: string,
    rating: number
}[]

function filterByRating(items: ArrOfObj): ArrOfObj {
    return items.filter(item => item.rating >= 4)
}


// Generic function to join multiple arrays
function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, curr) => acc.concat(curr), [])
}

// Vehicle and Car classes
class Vehicle {
    constructor(public make: string, public year: number) { }

    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.make}`)
    }
}

class Car extends Vehicle {
    constructor(public make: string, public year: number, public model: string) {
        super(make, year)
    }
    getModel() {
        console.log(`Model: ${this.model}`)
    }
}

// Return length of string or double of number
function processValue(value: string | number): number {
    return typeof value === 'string' ? value.length : value * 2
}

// Returns Product with highest price or null
interface Product {
    name: string,
    price: number
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    return products.reduce((max, current) => current.price > max.price ? current : max)
}


// Returns "Weekend" | "Weekday" based on Day enum
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

function getDayType(day: Day): string {
    return day === Day.Sunday ? "Weekend" : "Weekday"
}


// Asynchronous square calculator with rejection for negatives
async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            n > 0 ? resolve(n * n) : reject(new Error('Negative number not allowed'))
        }, 1000);
    }
    )
}
