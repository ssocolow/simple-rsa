let primes = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
  101,
  103,
  107,
  109,
  113,
  127,
  131,
  137,
  139,
  149,
  151,
  157,
  163,
  167,
  173,
  179,
  181,
  191,
  193,
  197,
  199,
  211,
  223,
  227
];

const r1 = primes[Math.floor(Math.random() * primes.length)];
const r2 = primes[Math.floor(Math.random() * primes.length)];

const product = r1 * r2;

const totient = (r1 - 1) * (r2 - 1);

function __gcd(a, b) {
  // Everything divides 0
  if (a == 0 || b == 0) return 0;

  // Base case
  if (a == b) return a;

  // a is greater
  if (a > b) return __gcd(a - b, b);

  return __gcd(a, b - a);
}

// Function to check and print if
// two numbers are co-prime or not
function coprime(a, b) {
  if (__gcd(a, b) == 1) return true;
  else return false;
}

function findCoprime(totient) {
  let x = 2;
  while (true) {
    if (coprime(x, totient)) {
      return x;
    } else {
      x++;
    }
  }
}

console.log("Prime 1: " + r1);
console.log("Prime 2: " + r2);
console.log("product: " + product);
console.log("totient: " + totient);

console.log(coprime(79, 10));
