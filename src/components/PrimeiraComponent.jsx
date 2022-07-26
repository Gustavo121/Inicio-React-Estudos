
const RetonarQualquerCoisa = () => <div>qualquer coisa</div>

export const PrimeiroComponente = () => {

  // Cria uma constante com valor
  const nome = 'Alvinho'

  const cabecalho = <h1>Cabeçalho do Alvinho</h1>

  return (
    <>
      <h1>{nome}</h1>
      <RetonarQualquerCoisa/>
    </>
  )

}