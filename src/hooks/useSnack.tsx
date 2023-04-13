import { useContext } from 'react'

import { SnackContext } from '../contexts/SnackContext'

export function useSnack() {
  return useContext(SnackContext)
}
