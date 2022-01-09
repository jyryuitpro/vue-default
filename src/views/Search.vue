<template>
  <div>
    <div>
      <select v-model="selectedCity">
        <option :value="city.code" :key="i" v-for="(city, i) in cityList">{{city.name}}</option>
      </select>
      <input type="text" v-model="userName" @keyup.enter="searchUserList()"/>
      <button type="button" @click="searchUserList">조회</button>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>직업</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="i" v-for="(person, i) in userList">
            <td>{{person.name}}</td>
            <td>{{person.age}}</td>
            <td>{{person.job}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  components: {},
  data() {
    return {
      cityList: [
        {name: '서울', code: '02'},
        {name: '부산', code: '21'},
        {name: '제주', code: '064'},
      ],
      selectedCity: '',
      userName: '',
      userList: [],
    };
  },
  setup() {

  },
  created() {
    //Vue Component가 생성이되는 순간에 실행
  },
  mounted() {
    //Html이 실제 화면에 로딩이 되는 순간에 실행
  },
  unmounted() {
    //다른 Component로 이동할 때, 실행
  },
  methods: {
    //Component안에서 사용할 메소드(함수) 정의
    searchUserList() {
      // const selectedCity = this.selectedCity;
      // const userName = this.userName;
      const params = {
        selectedCity: this.selectedCity,
        userName: this.userName,
      }

      this.userList = this.getUserList(params);
    },
    getUserList(params) {
      console.log(params);

      let list = [
        {name: '류지영1', age: 31, job: '프로그래머1'},
        {name: '류지영2', age: 32, job: '프로그래머2'},
        {name: '류지영3', age: 33, job: '프로그래머3'},
        {name: '류지영4', age: 34, job: '프로그래머4'},
      ];

      return list;
    },
  },
}
</script>

<style scoped>

</style>