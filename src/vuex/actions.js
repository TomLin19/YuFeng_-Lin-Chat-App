
import superagent from 'superagent'
import setting from '../settings'
const server = setting.server
export const userLogin = function ({ dispatch, state }, _id) {
  
  dispatch('login', _id)
  // dispatch('login', user)
}

export const talkUserName = function( {dispatch, state }, userName) {
	dispatch('talkUserName', userName)
} 

export const addUserList = function( {dispatch, state }, user) {
	dispatch('addUserList', user)
}

export const setTime = function( {dispatch, state }, time) {
	dispatch('setTime', time)
}