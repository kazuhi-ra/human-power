import { selector } from 'recoil'
import { match, P } from 'ts-pattern'

import { yaruzoState } from './yaruzo'
import { yaruzoInputState } from './yaruzoInput'

type StatefulChar = {
  char: string
  status: 'ok' | 'ng' | 'pending'
}

export const statefulCharState = selector<StatefulChar[]>({
  key: 'statefulChar',
  get: ({ get }) => {
    const yaruzoInput = get(yaruzoInputState)
    const target = yaruzoInput.split('')
    const example = get(yaruzoState)

    const result: StatefulChar[] = example.split('').map((char, index) => {
      const status = match<string, StatefulChar['status']>(target[index])
        .with(P.nullish, () => 'pending')
        .with(char, () => 'ok')
        .with(P.string, () => 'ng')
        .exhaustive()

      return { char, status }
    })

    return result
  },
})
