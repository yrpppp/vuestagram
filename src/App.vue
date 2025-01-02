<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
      <!-- <li>{{ $store.state.name }}</li>
      <button @click="$store.commit('이름변경')">버튼</button>
      <li>{{ $store.state.age }}</li>
      <button @click="$store.commit('나이증가')">버튼</button> -->
    </ul>
    <ul class="header-button-right">
      <li v-if="step==1" @click="step=2">Next</li>
      <li v-if="step==2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container @write="작성한글=$event" :postData="postData" :step="step" :imgUrl="imgUrl" :filter="filter"/>
  <p>{{  $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

<!-- <div v-if="step==0">내용 0</div>
<div v-if="step==1">내용 1</div>
<div v-if="step==2">내용 2</div>
<button @click="step = 0">버튼 0</button>
<button @click="step =1">버튼 1</button>
<button @click="step = 2">버튼 2</button> -->

</template>

<script>
import Container from './components/Container';
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Container: Container,
  },
  methods : {
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.cnt}.json`)
      .then( result=>{
        this.postData.push(result.data);
        if(this.cnt == 0){
          this.cnt = 1;
        } else this.cnt = 20;
      })
    },
    upload(e){
      let 파일 = e.target.files;
      console.log(파일);
      let url = URL.createObjectURL(파일[0]);
      console.log(url);
      this.imgUrl = url;
      this.step++;
    },
    publish(){
      var  내게시물 = {     
          name: "Kim Hyun",
          userImage: "https://picsum.photos/100?random=3",
          postImage: this.imgUrl,
          likes: 36,
          date: "May 15",
          liked: false,
          content: this.작성한글,
          filter: this.filter,
        };
      this.postData.unshift(내게시물);
      this.step = 0;
    }
  },
  data() {
    return {
     postData : [
        {
          name: "Kim Hyun",
          userImage: "https://picsum.photos/100?random=3",
          postImage: "https://picsum.photos/600?random=3",
          likes: 36,
          date: "May 15",
          liked: false,
          content: "오늘 무엇을 했냐면요 아무것도 안했어요 ?",
          filter: "perpetua"
        },
        {
          name: "John Doe",
          userImage: "https://picsum.photos/100?random=4",
          postImage: "https://picsum.photos/600?random=4",
          likes: 20,
          date: "Apr 20",
          liked: false,
          content: "흔한 자랑스타그램",
          filter: "clarendon"
        },
        {
          name: "Minny",
          userImage: "https://picsum.photos/100?random=5",
          postImage: "https://picsum.photos/600?random=5",
          likes: 49,
          date: "Apr 4",
          liked: false,
          content: "우리집 개는 화장실 물도 내림",
          filter: "lofi"
        }
      ],
      cnt : 0,
      step : 0,
      imgUrl : '',
      작성한글:'',
      filter: '',
    }
  },
  mounted(){
    this.emitter.on('fire', (a)=>{
      this.filter = a;
      console.log("app.vue : " + this.filter);
    });
  }
}
</script>

<style>
body {
  margin: 0;
}

ul {
  padding: 5px;
  list-style-type: none;
}

.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}

.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}

.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}

.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}

.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}

.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}

.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}

.inputfile {
  display: none;
}

.input-plus {
  cursor: pointer;
}

#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
