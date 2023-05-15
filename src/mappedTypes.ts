type bools = {
  [key : string]: boolean | string
}

const conforms: bools = {
  del:true,
  rod:false
}

type optinalFlags<T> = {
  [Property in keyof T]: boolean
}

type featureFlags = {
  darkmode:() => void;
  newUser:() => void;
}

type FeatureOptions = optinalFlags<featureFlags>

const obj: FeatureOptions={
  darkmode:true,
newUser:false
};

obj.darkmode = true
obj.newUser =  false
