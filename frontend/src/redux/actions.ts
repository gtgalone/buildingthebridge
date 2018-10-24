import { createFormAction } from 'redux-form-saga'

enum RequestType {
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

interface RequestTypes {
  [RequestType.REQUEST]: string
  [RequestType.SUCCESS]: string
  [RequestType.FAILURE]: string
}

function createRequestTypes(base: string) {
  return [
    RequestType.REQUEST,
    RequestType.SUCCESS,
    RequestType.FAILURE,
  ].reduce<RequestTypes>((acc, type) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {} as RequestTypes)
}

export const PARCEL = createRequestTypes('PARCEL')
export const SELECTED_PARCEL = createRequestTypes('SELECTED_PARCEL')
export const LOGIN = createFormAction('LOGIN')
export const SIGNUP = createFormAction('SIGNUP')
export const FEEDBACK = createFormAction('FEEDBACK')
export const UNCONFIRMATION = createFormAction('UNCONFIRMATION')
export const PASSWORD = createFormAction('PASSWORD')
export const RESET_PASSWORD = createFormAction('RESET_PASSWORD')

export const SET_SCROLL_Y = 'SET_SCROLL_Y'

function action(type: string, payload = {}) {
  return { type, ...payload }
}

interface Response {}

interface ActionError {}

export interface Entity {
  request: (endpoint: string, token: string) => any
  success: (endpoint: string, response: Response) => any
  failure: (endpoint: string, error: ActionError) => any
}

export const setScrollY = (data) => action(SET_SCROLL_Y, { data })
