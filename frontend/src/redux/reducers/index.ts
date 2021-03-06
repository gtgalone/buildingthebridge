import { combineReducers, AnyAction } from 'redux'
import { reducer as formReducer } from 'redux-form'

import * as ActionTypes from '../actions'
import { RootState } from '../../@types/types'

export const _initialState = {}

function scrollY(state: number = 0, action: AnyAction) {
  const { type } = action

  if (type == ActionTypes.SET_SCROLL_Y) {
    return action.data
  }

  return state
}

function isShowIframePlayer(state: boolean = false, action: AnyAction) {
  const { type } = action

  if (type == ActionTypes.SET_IS_SHOW_IFRAME_PLAYER) {
    return action.data
  }

  return state
}

const rootReducer = combineReducers<RootState>({
  form: formReducer,
  scrollY,
  isShowIframePlayer
})

export default rootReducer
