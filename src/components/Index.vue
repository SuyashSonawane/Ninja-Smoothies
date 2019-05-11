<template>
  <div  class="index container">
    <div class="card" v-for="(smoothie) in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
        <h2 class="indigo-text">{{smoothie.title}}</h2>
        <ul class="ingrad">
            <li v-for="(ing , index) in smoothie.ingrad" :key="index">
              <span class="chip">{{ing}}</span>
            </li>
        </ul>
      </div>
      <span class="btn-floating btn-large halfway-fab pink" >
        <router-link :to="{name:'EditSmoothie' , params:{smoothie_slug:smoothie.slug}}">
          <i class="material-icons">edit</i>
        </router-link>
      </span>
    </div>
    <div v-if="smoothies.length==0" class="nothing text-darken-2">
      No Smoothies found 😥 <br>
      You can add some Smoothies 😋
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
export default {
  name:'Index',
  data(){
    return{
      smoothies:[]
    }
  },
  created(){
    db.collection('smoothies').get()
    .then(snapshot =>{
        snapshot.forEach(doc => {
          let smoothie =doc.data();
          smoothie.id=doc.id;
          this.smoothies.push(smoothie)
        })
    })
  },
  methods:{
    deleteSmoothie(del_smoo){
      // this.smoothies= this.smoothies.filter(e=>{
      //   return e.id !=del_smoo
      // })
      db.collection('smoothies').doc(del_smoo).delete()
      .then(()=>{
         this.smoothies= this.smoothies.filter(e=>{
        return e.id !=del_smoo
      })
      })
    }
  }
}
</script>

<style>
.card{
  transition: all 0.1s;
  margin: 2em;
  width: 400px
}
.index{
  /* display: grid;
  grid-template-columns: repeat(3,1fr); */
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
}
.index h2{
  font-size: 1.8em;
  text-align: center;
  margin:0
}
.index .ingrad{
  margin: 30px auto
}
.index .ingrad li{
  display: inline-block
}
.index .delete{
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.5em
}
.nothing{
  text-align: center;
  color: #aaa
}
</style>
