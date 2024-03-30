export type Pokemon = {
    id: number,
    name: string,
    sprites: {
      front_default: string,
      back_shiny: string,
      back_default: string,
      front_shiny: string,
    },
    abilities: {
        ability: {
          name: string,
        }
    }[]
  }

export type Current = {
  id: number,
  isShow: boolean,
}