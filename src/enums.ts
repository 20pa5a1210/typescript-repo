enum Sanwich {
  Handburger,
  Veggieburger,
  Grilledcheese,
  BLT
}

enum hell {
  head = "qwer",
  tail = "gkjgk"
}

type SanwichOrder = [
  number,
  Sanwich,
  hell,
  ...string[]
]

const order1: SanwichOrder = [12.99, Sanwich.Handburger, hell.head, "leetuce"]
console.log(order1)
