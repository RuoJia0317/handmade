import { createSlice } from '@reduxjs/toolkit'

const userData = JSON.parse(localStorage.getItem('user'))?.user

const initialState = {
  chatRooms: [],
  currentRoom: {},
  socket: {},
  newMessage: [],
  friends: [],
  welcomeMsg: '',
  userData: userData,
  senderTyping: { typing: false },
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setSocket: (state, action) => {
      return {
        ...state,
        socket: action.payload,
      }
    },

    fetchAllRooms: (state, action) => {
      return { ...state, chatRooms: action.payload }
    },

    setCurrentRoom: (state, action) => {
      return { ...state, currentRoom: action.payload }
    },

    setWelcomeMsg: (state, action) => {
      return { ...state, welcomeMsg: action.payload }
    },

    setLeftRoom: (state, action) => {
      const { user } = action.payload

      const newFriends = state.friends.filter((f) => {
        return f.id !== user.id
      })

      return {
        ...state,
        friends: newFriends,
      }
    },

    setFriends: (state, action) => {
      const concatFriends = state.friends.concat(action.payload)

      const set = new Set()

      const filterFriend = concatFriends.filter((item) =>
        !set.has(item.account) ? set.add(item.account) : false
      )

      return {
        ...state,
        friends: filterFriend,
      }
    },

    addMessage: (state, action) => {
      const concatMsg = state.newMessage.concat(action.payload)

      const set = new Set()

      const filterMsg = concatMsg.filter((m) =>
        !set.has(m.id) ? set.add(m.id) : false
      )

      return {
        ...state,
        newMessage: filterMsg,
      }
    },
  },
})

export const {
  setSocket,
  addMessage,
  setCurrentRoom,
  setWelcomeMsg,
  setFriends,
  setLeftRoom,
  fetchAllRooms,
} = chatSlice.actions
export default chatSlice.reducer
