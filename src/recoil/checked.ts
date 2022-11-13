import { atom } from 'recoil'

export const checkedState = atom<boolean>({
  key: 'checked',
  default: true,
})
