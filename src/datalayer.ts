class Book {
  constructor(public id: string, public auhor: string) {}
}
class Moive {
  constructor(public id: string,public director: string) {}
}
class Song {
  constructor(public id: string,public artist: string) {}
}

interface EntityMap {
  [key: string]: Book | Moive | Song;
}

class Store {
  private obj: {
    [K in keyof EntityMap]?: { [id: string]: EntityMap[K] };
  };
  constructor() {
    this.obj = {};
  }
  get<K extends keyof EntityMap>(kind: K, id: string): EntityMap[K] | undefined{
    const entities = this.obj[kind]
    if(entities){
      return entities[id]
    }
    return undefined
  }
  getAll<K extends keyof EntityMap>(kind: K): EntityMap[K][] {
    const entities = this.obj[kind]
    if(entities){
      return Object.values(entities)
    }
    return []
  }
  update<K extends keyof EntityMap>(
    kind: K,
    id: string,
    props: Partial<EntityMap[K]>
  ) {
  const entity = this.get(kind,id)
  if(entity){
    Object.assign(entity,props)
  }
  }
}


const store = new Store()
const M1 = new Moive('123','Nolan')
console.log(store.get('Moive','123'))
