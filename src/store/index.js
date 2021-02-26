import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        item1:{
          name:"ชาเย็น",
          price:35,
          amount:0
        },
        item2:{
          name:"ชาเขียว",
          price:35,
          amount:0
        },
        item3:{
          name:"นมเย็น",
          price:35,
          amount:0
        },
        item4:{
          name:"โกโก้",
          price:35,
          amount:0
        },
        item5:{
          name:"ชามะนาว",
          price:35,
          amount:0
        },
        item6:{
          name:"ชาดำเย็น",
          price:35,
          amount:0
        },
        item7:{
          name:"คาบูชิโน่",
          price:40,
          amount:0
        },
        item8:{
          name:"ลาเต้",
          price:40,
          amount:0
        },
        item9:{
          name:"มอคค่า",
          price:40,
          amount:0
        },
        item10:{
          name:"อเมริกาโน่",
          price:45,
          amount:0
        },
        sum: 0,count:0,say: function (message) {
        alert(message)
      }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
