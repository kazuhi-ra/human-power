import { atom } from 'recoil'

export const pastedState = atom<boolean>({
  key: 'pasted',
  default: false,
})
