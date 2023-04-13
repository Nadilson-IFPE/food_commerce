import { createContext, ReactNode, useEffect, useState } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { getBurgers, getPizzas, getDrinks, getIceCreams } from '../services/api'

interface SnackContextProps {
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  iceCreams: SnackData[]
}

export const SnackContext = createContext({} as SnackContextProps)

interface SnackProviderProps {
  children: ReactNode;
}
export function SnackProvider({ children }: SnackProviderProps) {
  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [drinks, setDrinks] = useState<SnackData[]>([])
  const [iceCreams, setIceCreams] = useState<SnackData[]>([])


  useEffect(() => {
    ; (async () => {

      // Recomendado APENAS para dados pequenos.
      try {
        const burgersRequest = await getBurgers()
        const pizzasRequest = await getPizzas()
        const drinksRequest = await getDrinks()
        const iceCreamsRequest = await getIceCreams()

        const requests = [burgersRequest, pizzasRequest, drinksRequest, iceCreamsRequest]

        const [
          { data: burgersResponse },
          { data: pizzasResponse },
          { data: drinksResponse },
          { data: iceCreamsResponse },
        ] = await Promise.all(requests) // Promise.all(): usado em situações de várias requests

        setBurgers(burgersResponse)
        setPizzas(pizzasResponse)
        setDrinks(drinksResponse)
        setIceCreams(iceCreamsResponse)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])


  return (
    <SnackContext.Provider value={{ burgers, pizzas, drinks, iceCreams }}>
      {children}
    </SnackContext.Provider>
  )
}
