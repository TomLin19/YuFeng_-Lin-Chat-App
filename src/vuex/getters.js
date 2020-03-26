// In the ES6 ：
// export const getCount = state => state.count

export function getLoginId (state) {
  return state.loginId
}

export function getUserName (state) {
  console.log(state.userName)
  return state.userName
}

export function addUserList (state) {
	console.log(state.userList)
	return state.userList
}

export function getTime (state) {
	return state.time
}
