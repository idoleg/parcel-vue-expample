<template>
  <form>
    <h2>{{item.name}}</h2>
    <p>
      <label> 
        Описание
        <textarea :value="item.description"/>
      </label>
    </p>
    <button @click="$emit('close')" type="reset">Close</button>
  </form>
</template>

<script>

export default {
  props: {
    item: Object,
  }
}
</script>