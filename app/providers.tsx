'use client'

import { Provider } from 'react-redux'
import { ReactNode } from 'react'
import { store } from '../redux/store'

export function Providers({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}
