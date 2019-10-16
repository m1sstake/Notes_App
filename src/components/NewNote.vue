<template>
  <!-- new note -->
  <div class="new-note">
    <div class = "importance">
     <label v-for="(imp, index) in impList" :key="index">
       {{ imp }}
       <input type="radio" v-model="note.imp" :value="imp">
     </label>
    </div>
    <label>Title</label>
    <input v-model="note.title" type="text">
    <label>Description</label>
    <textarea v-model="note.descr"></textarea>
    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      impList:null,
      note: {
        title: '',
        descr: '',
        imp: 'Low',
        date: null,
      }
    }
  },
   mounted () {
    this.impList = this.$store.getters.getImp

  },
  methods: {
    addNote () {
      let {title, descr, imp} = this.note
      if (title === '') {
        this.$store.dispatch('addMessage','title can`t be blank!')
        this.note.imp = 'Low'
        return false
      }
      this.note.date = new Date(Date.now()).toLocaleString()
      
      this.$store.dispatch('addNote', this.note)
      this.note.imp = 'Low'
      this.note.title = ''
      this.note.descr = ''
    }
  }
}
</script>

<style lang="scss">
.new-note {
  text-align: center;
}
.importance {
  display: inline-flex;
  label {
    margin: 0 30px;
  }
}
</style>

