// Este exemplo é de um componente reutilizavel

import "./segundoComponente.css"

export const Photo = ({ link, nome, tipo }) => {

  return (
    <div className="box">
      <h1>{nome}</h1>
      <img src={link} className="poke-photo"/>
    </div>
  )
}