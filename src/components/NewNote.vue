<template>
  <!-- new note -->
  <div class="new-note">
    <div class = "importance">
    <label>Low Priority<input type="radio" value = "Low"  v-model="note.importance"></label>
    <label>Medium Priority<input type="radio"  value = "Medium"  v-model="note.importance"></label>
    <label>High Priority<input type="radio" value = "High" v-model="note.importance" ></label>
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
      checkData: true
    }
  },
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    Test () {
      return true
    },
    addNote () {
      // console.log(this.note);
      this.$emit('addNote', this.note)
      this.note.importance = 'Low'
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

