<template>
    <div class="add-smoothie container">
        <h2 class="center-align indigo-text">Add new Smoothie Recipe</h2>
        <form @submit.prevent="AddSmoothie">
            <div class="field title">
                <label for="title">Smoothie Title :</label>
                <input type="text" name="title" v-model="title">
            </div>
            <div v-for="(ing,index) in ingrad" :key='index' class="field">
                <label for="ingredients">Ingredient:</label>
                <input type="text" name="ingredient" v-model="ingrad[index]">
                <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
            </div>
            <div class="field add-ingrad">
                 <label for="title">Add Ingredient :</label>
                <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
            </div>
            <div class="field center-align">
                <p v-if="feedback" class="red-text">{{feedback}}</p>
                <button class="btn pink">Add Smoothie</button>
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
    name:'AddSmoothie',
    data(){
        return{
            title:null ,
            another:null,
            ingrad:[],
            feedback:null,
            slug:null
        }
    },
    methods:{
        AddSmoothie(){
             if(this.title){
                 this.feedback=null
                 db.collection('smoothies').add({
                     title:this.title,
                     ingrad:this.ingrad,
                     slug:slugify(this.title,{
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
                this.ingrad.push(this.another)
                this.another=""
                this.feedback=null
            }
            else{
                this.feedback="You must enter a value to add in Ingreadient"
            }
           
        },
        deleteIng(ing){
            this.ingrad = this.ingrad.filter(ingrad =>{
                return ingrad !=ing
            })
        }
    }
}
</script>

<style>
.add-smoothie{
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
}
.add-smoothie h2{
    font-size: 2em;
    margin:  20px auto
}
.add-smoothie .field{
    margin: 20px auto;
    position: relative;
}
.add-smoothie .delete{
    cursor: pointer;
    position: absolute;
    right: 0;
    color: #aaa;
    bottom: 16px;

}
</style>
