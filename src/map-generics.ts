type Fruit = {
  name: string;
  color: string;
  mass: number;
};

type Dict<T> = { [k: string]: T };


const obj1: Fruit = {
  name: "Apple",
  color: "Red",
  mass: 100,
};

const fruitCatalog: Dict<Fruit> = {
  "apple": obj1
};


console.log(
fruitCatalog.apple
)

// Record Type
type MyRecord<keytype extends string,valuetype> = {
  // ?^
  [key in keytype]: valuetype
}

// extends keyof any {where type unknown = typeof any // symbol | string | number}

interface Todo {
  title:string
  description:string
  completed:boolean
}

const PickObj: Pick<Todo,"title"|"completed"> = {
  title:"title",
  completed:false
}
