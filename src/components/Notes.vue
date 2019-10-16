<template>
  <!-- note list -->
  <div class="notes">
    <div class="note" :class="{ full: grid }" v-for="(note, index) in notes" :key="index">
      <div class="note-header" :class="{ full: !grid }" >
        <input class ="change active" type="text" v-show="note.change"
        :value="note.title"
        @keyup.enter="changeTitle(index, $event.target.value)"
        @keyup.esc="changeTitleFalse(index)">
        <p class="title" @click="changeTitleTrue(index)" v-show="!note.change">{{ note.title }}</p>
        <p class="cancel" @click="removeNote(index)">x</p>
      </div>
      <div class="note-body">
        <p>{{ note.descr }}</p>
        <span>{{ note.date }}</span> 
        <div :class = "getClass(note.imp)">{{ note.imp }} Priority</div>
      </div>
    </div>
  </div>
</template>

<script>
// TODO - fix change title input
export default {
  data() {
    return {
      notes: null,
      inputData: ''
    }
  },
  props: {
    grid: {
      type:Boolean,
      required:true
    }
  },
  created () {
    this.notes = this.$store.getters.notesFilter
    this.$store.watch(
       (state,getters) => getters.notesFilter,
       (notes) => {
         this.notes = notes
       }
     )
  },
  methods: {
    removeNote (index) {
      this.$store.dispatch('removeNote', index)
    },
    changeTitleTrue (index) {
      const changeTitle = {index, bool:true}
      this.$store.dispatch('setNoteChange', changeTitle)
    },
    changeTitleFalse (index) {
      const changeTitle = {index, bool:false}
      this.$store.dispatch('setNoteChange', changeTitle)
    },
    changeTitle (index, title) {
      const store = this.$store.dispatch
      if (title == "") {
        store('addMessage','title can`t be blank!')
        this.changeTitleFalse(index)
      }
      else {
        const obj = {index, title}
        store('changeNoteTitle', obj)
        this.changeTitleFalse(index)
      }
    },
    getClass (imp) {
      return imp.toLowerCase()
    }
  },
  
}
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  transition: all .25s cubic-bezier(.02,.01,.47,1);
  box-shadow: 0 30px 30px rgba(0,0,0,.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0,0,0,.04);
    transform: translate(0,-6px);
    transition-delay: 0s !important;
  }
  &.full {
    width: 100%;
    text-align: center;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .change {
    &.active {
      margin-top: 5px;
      display: flex;
      height: 20px;
      width: 260px;
      color: #402caf;
      font-size: 22px;
      opacity: 100;
    }
  }
  .cancel {
    cursor: pointer;
    margin-bottom: 30px;
    display: flex;
  }
  h1 {
    font-size: 32px;
  }
  p {
    font-size: 22px;
    color: #402caf;
  }
  svg {
    margin-right: 12px;
    color: #999999;
    &.active {
      color: #402caf;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &.full {
    justify-content: center;
    p {
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.note-body{
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color: #999999;
  }
  .low {
    background-color: green;
    text-align: center;
    color: #ffffff;
  }
  .medium {
    background-color: orange;
    text-align: center;
    color: #ffffff;
  }
  .high {
    background-color: red;
    text-align: center;
    color: #ffffff;
  }
  

}
</style>

