<template class="wrap">
  <h1>TEST MSG</h1>
  <h2>{{props}}</h2>
  <div>
    <div>
      <input type="text" v-model="search" ref="input"/>
      <label>Search Users:</label>
      <h1>Slot example</h1>
      <slot>
        This is Slot
      </slot>
    </div>
    <ul>
      <li v-for="user in filteredAndSorted" :key="user.id">{{ user.name }}</li>
    </ul>

  </div>
</template>

<script>

export default {
  name: "TestComponent",
  props: {
    props: String
  },
  data() {
    return {
      search: "",
      userList: [
        {
          id: 1,
          name: "Prem",
        },
        {
          id: 1,
          name: "Chandu",
        },
        {
          id: 1,
          name: "Shravya",
        },
      ],
    };
  },
  computed: {
    filteredAndSorted() {
      const compare = (a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      };

      return this.userList
          .filter((user) => {
            return user.name.toLowerCase().includes(this.search.toLowerCase());
          })
          .sort(compare);
    },
  },
  mounted() {
     this.$refs.input.focus()
  }
}

</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .wrap{
    background-color: #2c3e50;
  }
</style>