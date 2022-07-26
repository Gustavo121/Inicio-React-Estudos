import { Photo } from "./Photo/Photo"
import { PrimeiroComponente } from "./PrimeiraComponent"

export const PaginaPrincipal = () => {

  const url = 'https://assets.reedpopcdn.com/pokemon-go-guia-melhores-pokemons-para-usar-contra-mewtwo-1505991519649.jpg/BROK/thumbnail/1200x1200/quality/100/pokemon-go-guia-melhores-pokemons-para-usar-contra-mewtwo-1505991519649.jpg'
  const nome = "Mewtwo"

  const pokeFotos = [
    {
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
      name: 'Mewtwo',
    },
    {
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png',
      name: 'Mew',
    },
    {
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png',
      name: 'Chikorita',
    }
  
  ]

  return (
    <div>
      {pokeFotos.map((poke) => <Photo link={poke.img} nome={poke.name}/>)}
      <PrimeiroComponente/>
    </div>
  )

}


