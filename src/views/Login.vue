<template>
    <div id="container">
        <div id="output">
            <div class="containerT">
                <h1>用户登录</h1>
                <form class="form" id="entry_form">
                    <input v-model="username" type="text" placeholder="用户名" id="entry_name">
                    <input v-model="password" type="password" placeholder="密码" id="entry_password">
                    <button @click="login" type="button" id="entry_btn">登录</button>
                    <div id="prompt" class="prompt"></div>
                </form>
            </div> 
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            password:'',
            username:''
        }
    },
    methods: {
        login(){
            axios.post('http://localhost:3000/user/login',{
                userName:this.username,  // key 值 userName 是后台定义的字段
                password:this.password
            })
            .then(res=>{
                var data = res.data;
                console.log(data)
                if(data.code === 0){
                    sessionStorage.setItem('nickName',data.data.nickName)
                    var newPath = this.$route.query.redirectTo
                    if(newPath){
                        this.$router.replace({
                            path:this.$route.query.redirectTo
                        })
                    }else{
                        this.$router.replace('/center')
                    }
                    location.reload();
                    
                }else{
                    alert(res.msg)
                }
            })
        }
    },
    mounted() {
        $(function(){
            Victor("container", "output");   //登陆背景函数
            $("#entry_name").focus();
            $(document).keydown(function(event){
                if(event.keyCode==13){
                    $("#entry_btn").click();
                }
            });
        });
    },
}
</script>

<style lang="scss">
.containerT{
    h1{
        margin: 20px !important; 
    }
    form{
        padding:10px;
    }
}
</style>
