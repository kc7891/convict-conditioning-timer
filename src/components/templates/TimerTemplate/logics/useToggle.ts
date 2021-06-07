import { useState } from 'react'

const useToggle = (initialValue?: boolean) => {
  const [state, setState] = useState<boolean>(initialValue || true)

  const toggle = () => {
    setState((prev) => {
      return !prev
    })
  }

  return [state, toggle] as const
}

export default useToggle
