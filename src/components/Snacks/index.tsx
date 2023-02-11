import { Container } from './styles'
import { FiPlus } from 'react-icons/fi'
import { currencyFormat } from '../../helpers/currencyFormat'

interface SnacksProps {
  snacks: any[] // any não é boa prática e está aqui por enquanto, até a definição do tipo da Props
}

export function Snacks({ snacks }: SnacksProps) {
  return (
    <Container>
      {!snacks.length ? (
        <p style={{ color: '#fff' }}>Carregando...</p>
      ) : (
        snacks.map((snack) => (
          <div key={snack.id} className='snack'>
            <h2>{snack.name}</h2>
            <img src={snack.image} alt={snack.name} />
            <p>{snack.description}</p>
            <div>
              <strong>{currencyFormat(snack.price)}</strong>
              <button type='button'>
                <FiPlus />
              </button>
            </div>
          </div>
        ))
      )}
    </Container>
  )
}
