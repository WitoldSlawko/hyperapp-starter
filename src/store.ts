import { ActionsType } from 'hyperapp'
import { State, Actions } from './types'

export namespace Counter {
  export const state: State = {
    count: 0
  }

  export const actions: ActionsType<State, Actions> = {
    down: () => (state) => ({ count: state.count - 1 }),
    up: () => (state) => ({ count: state.count + 1 })
  }
}