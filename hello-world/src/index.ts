let sales:number = 123_456_789;
let course:string = 'TypeScript';
let is_published:boolean = true;
let level;

// tuple --> fixed-length array
let user: [number, string] = [1, 'Mosh']

// const small = 1;
// const medium = 2;
// const large = 3;

enum Size { Small = 1, Medium, Large };

let mySize:Size = Size.Medium;

console.log(mySize)

// properly annotate to include type of return value --> ESPECIALLY for APIs
function calculateTax(income:number): number {
  if (income < 50_000) {
    return income * 1.2;
  }
  return 0;
}

function returnsNothing(income: number): void {
  console.log("I return nothing!");
}

type Employee = {
  id: number,
  name: string,
  retire: (date: Date) => void;
}

let employee:Employee = { id: 1,
      name:'Cameron',
      retire: (date: Date) => {
        console.log(date)
      }}
