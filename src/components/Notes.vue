<template>
  <!-- note list -->
  <div class="notes">
    <div class="note" :class="{ full: !grid }" v-for="(note, index) in notes" :key="index">
      <div class="note-header" :class="{ full: !grid }" >
        <input class ="change active" type="text" v-if = "change" 
        v-model="note.title"
        @keyup.enter="changeTitle" 
        @keyup.esc="changeTitle">
        <p class="title" @click="changeTitle" v-else>{{ note.title }}</p>
        <p class="cancel" @click="removeNote(index)">x</p>
      </div>
      <div class="note-body">
        <p>{{ note.descr }}</p>
        <span>{{ note.date }}</span> 
        <div :class = "(note.importance).toLowerCase()">{{ note.importance }} Priority</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      required: true
    },
    grid: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      change: false,
    }
  },
  methods: {
    removeNote (index) {
      this.$emit('remove', index)
    },
    changeTitle: function () {
      this.change = !this.change
    },
  }
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
      display: flex;
      height: 20px;
      width: 300px;
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

