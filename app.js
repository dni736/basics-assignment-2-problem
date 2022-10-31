Vue.createApp({
  data() {
    return {
      text: "Hello from Vue 3",
      output1: "OUTPUT",
      output2: "OUTPUT",
    };
  },

  methods: {
    alertText(event) {
      alert(`${this.text}!`);
    },
  },
}).mount("#assignment");
