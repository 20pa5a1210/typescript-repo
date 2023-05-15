function ide<t>(args: t): t {
  return args;
}

console.log(ide(10));


interface genericIde<Type>{
  (arg: Type): Type
}

interface numsLens{
  length: number
}
function loggingIde<Type extends numsLens>(args: Type): Type{
  return args
}

function getProperty<Type,Key extends keyof Type>(obj: Type,key: Key){
  return obj[key]
}

let x  = {a:1,b:3,c:4}

getProperty(x, "a")

type Predict = (x: string) => string
type K = ReturnType<Predict>

let nusm: K = "k"
// Conditional Types

