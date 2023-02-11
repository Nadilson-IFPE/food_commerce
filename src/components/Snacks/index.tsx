import { Container } from './styles'

interface SnacksProps {
  snacks: any[] // any não é boa prática e está aqui por enquanto, até a definição do tipo da Props
}

export function Snacks({ snacks }: SnacksProps) {
  return (
    <Container>
      {snacks.map((snack) => (
        <div key={snack.id}>
          <h2>{snack.name}</h2>
          <img src={snack.image} alt={snack.name} />
          <p>{snack.description}</p>
          <div>
            <strong>{snack.price}</strong>
            <button type='button'></button>
          </div>
        </div>
      ))}
    </Container>
  )
}
