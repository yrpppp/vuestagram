!<template>
  <div>

    <!-- <div>Container DIV : {{ postData }}</div> -->
    <div v-if= "step == 0">
      <Post  :postData="postData[i]" v-for="(a,i) in postData" :key="i"/>
      <!-- <Post :postData="postData[1]" /> -->
      <!-- <Post :postData="postData[2]" /> -->
    </div>

    <!-- 필터선택페이지 -->
    <div v-if = "step == 1">
      <div  :class="`${filter} upload-image`" :style="{backgroundImage:`url(${imgUrl})`}">
      </div>
      <div class="filters">
        <FilterBox :필터="필터[i]" :imgUrl="imgUrl" v-for="(a, i) in 필터" :key="i">
          {{필터[i]}}
        </FilterBox>
      </div>
    </div>

  <!-- 글작성페이지 -->
  <div v-if = "step == 2">
    <div :class="`${filter}`" class="upload-image" :style="{backgroundImage:`url(${imgUrl})`}"></div>
      <div class="write">
        <textarea @input='$emit("write", $event.target.value)' class="write-box">write!</textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from './Post';
import FilterBox from './FilterBox.vue'

export default {
  name : 'Container',
  components : {
    Post : Post,
    FilterBox : FilterBox,
  },
  props : {
    postData : Array,
    step : Number,
    imgUrl : String,
    필터 : Array,
    filter : String,
  },
  data(){
    return{
      postData : this.postData,
      필터 : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
    }
  },
  mounted(){
    console.log("container : " + this.filter);
  }
}

</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>