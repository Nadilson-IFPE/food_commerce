import { ReactNode } from 'react'

import { Title } from './styles'

interface TitleProps {
  children: ReactNode
}

export function SnackTitle({ children }: TitleProps) {
  return <Title>{children}</Title>
}
