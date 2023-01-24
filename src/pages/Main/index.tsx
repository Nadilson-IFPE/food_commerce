import { Outlet } from 'react-router-dom'
import { SideBar } from '../../components/SideBar'
import { Container } from './styles'

import logoImg from '../../assets/logo.svg'

export default function Main() {
  return (
    <Container>
      <SideBar />
      <section>
        <img src={logoImg} />
        <Outlet />
      </section>
    </Container>

  )
}
