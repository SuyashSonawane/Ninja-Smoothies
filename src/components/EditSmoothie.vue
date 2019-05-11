<template>
    <div v-if="smoothie" class="edit-smoothie container">
        <h2 v-if="smoothie.title">{{smoothie.title}} Smoothie</h2>
         <form @submit.prevent="EditSmoothie">
            <div class="field title">
                <label for="title">Smoothie Title :</label>
                <input type="text" name="title" v-model="smoothie.title">
            </div>
            <div v-for="(ing,index) in smoothie.ingrad" :key='index' class="field">
                <label for="ingredients">Ingredient:</label>
                <input type="text" name="ingredient" v-model="smoothie.ingrad[index]">
                <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
            </div>
            <div class="field add-ingrad">
                 <label for="title">Add Ingredient :</label>
                <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
            </div>
            <div class="field center-align">
                <p v-if="feedback" class="red-text">{{feedback}}</p>
                <button class="btn pink">Update Smoothie</button>
            </div>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'
import slugiy from 'slugify'
import slugify from 'slugify';
import { truncate } from 'fs';
export default {
    name:'EditSmoothie',
    data(){
        return{
            r_slug:this.$route.params.smoothie_slug,
            smoothie:'',
            another:null,
            feedback:null

        }

    },
    methods:{
         EditSmoothie(){
             if(this.smoothie.title){
                 this.feedback=null
                 db.collection('smoothies').doc(this.smoothie.id).update({
                     title:this.smoothie.title,
                     ingrad:this.smoothie.ingrad,
                     slug:slugify(this.smoothie.title,{
                         replacement:'-',
                         remove: /[$*_+`.()"'!\-:@]/g,
                         lower:truncate
                     })
                 }).then(()=>{
                     this.$router.push({name:'Index'})
                 })
                 .catch(err=>console.log(err))
            }
            else{
                this.feedback="You must enter a value in Title"
            }

        },
        addIng(){
            if(this.another){
                this.smoothie.ingrad.push(this.another)
                this.another=""
                this.feedback=null
            }
            else{
                this.feedback="You must enter a value to add in Ingreadient"
            }
           
        },
         deleteIng(ing){
            this.smoothie.ingrad = this.smoothie.ingrad.filter(ingrad =>{
                return ingrad !=ing
            })
        }
    },
    created(){
        let ref =db.collection('smoothies').where('slug','==',this.r_slug)
        ref.get()
        .then(snapshot=>{
            snapshot.forEach(doc => {
                this.smoothie = doc.data();
                this.smoothie.id=doc.id
            });
        })
    }

}
</script>

<style>
.edit-smoothie{
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
}
.edit-smoothie h2{
    font-size: 2em;
    margin:  20px auto
}
.edit-smoothie .field{
    margin: 20px auto;
    position: relative;
}
.edit-smoothie .delete{
    cursor: pointer;
    position: absolute;
    right: 0;
    color: #aaa;
    bottom: 16px;

}
</style>
