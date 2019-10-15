export default {
  state: {
    notes: [
      {
        title: 'First Note',
        descr: 'Description for first note',
        date: new Date(Date.now()).toLocaleString(),
        imp: 'Medium'
      },
      {
        title: 'Second Note',
        descr: 'Description for second note',
        date: new Date(Date.now()).toLocaleString(),
        imp: 'Low'
      },
      {
        title: 'Third Note',
        descr: 'Description for third note',
        date: new Date(Date.now()).toLocaleString(),
        imp: 'High'
      }
    ],
    importance: ['Low','Medium','High'],
    message: null,
    grid: false,
    search: ''
  },
  mutations: {
    addNote (state, note) {
      let {title, descr, date, imp} = note
      state.notes.push({
        title,
        descr,
        date,
        imp,
      })
      state.message = null
    },
    addMessage (state, text) {
      state.message = text
    },
    setGridTrue(state) {
      state.grid = true
    },
    setGridFalse(state) {
      state.grid = false
    },
    removeNote(state, index) {
        state.notes.splice(index, 1)
    },
    setSearch(state, val) {
      state.search = val
    }
  },
  actions: {
    addNote ({ commit }, note) {
      commit('addNote', note)
    },
    addMessage({ commit }, text) {
      commit('addMessage', text)
    },
    setGridTrue({ commit }) {
      commit('setGridTrue')
    },
    setGridFalse({ commit }) {
      commit('setGridFalse')
    },
    removeNote({ commit }, index) {
      commit('removeNote', index)
    },
    setSearch({ commit }, val) {
      commit('setSearch', val)
    }
  },
  getters: {
    getNotes (state) {
      return state.notes
    },
    getImp (state) {
      return state.importance
    },
    getErrorMessage (state) {
      return state.message
    },
    getGridValue (state) {
      return state.grid
    },
    getSearch (state) {
      return state.search
    },
    notesFilter (state) {
      let array = state.notes,
         search = state.search
       if (!search) return array
         // Small
       search = search.trim().toLowerCase()
          // Filter
       array = array.filter((item) =>{
       if (item.title.toLowerCase().indexOf(search) !== -1) {
       return item
       }
     })
     // Error
     return array
   },
  }
}