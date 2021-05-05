<template>
<div id='loginPage'>
    <h1>Seat Selection</h1>
    <h3>Login</h3>
        <select @change="login" v-model="userName">
            <option value=""></option>
            <option value="kiwi">kiwi</option>
            <option value="tapa">tapa</option>
            <option value="drum">drum</option>
        </select>
</div>
</template>

<script>
export default {
    data(){
        return {
            userName: String
        }
    },
    methods: {
        login() {
            this.$store.commit('changeUserName', this.userName);
            this.$router.push('/');
        }
    }

}
</script>

<style>
#loginPage{
    text-align: center;
}
</style>