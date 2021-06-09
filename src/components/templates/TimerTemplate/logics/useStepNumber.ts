import { useState } from 'react'

const useStepNumber = (
  defaultNumber: number,
  options?: { max?: number; min?: number }
) => {
  const { max = 999, min = 1 } = options ?? {}
  const [state, setState] = useState(defaultNumber)

  const increment = () => {
    return new Promise<number>((resolve) => {
      setState((prev) => {
        if (prev >= max) return max
        const next = prev + 1
        resolve(next)
        return next
      })
    })
  }

  const decrement = () => {
    return new Promise<number>((resolve) => {
      setState((prev) => {
        if (prev <= min) return min
        const next = prev - 1
        resolve(next)
        return next
      })
    })
  }

  return [state, { setState, increment, decrement }] as const
}

export default useStepNumber
