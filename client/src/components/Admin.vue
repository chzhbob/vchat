<template>
    <section class="wrapper">
        <section class="form">
            <section class="form-header">
                <p></p><p></p><p></p><p></p><p></p><p></p>
            </section>
            <h1>登录</h1>
            <section class="form-input">
                <input type="text" placeholder="用户名" />
                <input type="password" placeholder="密码" />

                <section class="form-control clearfix">
                    <label>
                        <input type="checkbox" />记住我
                    </label>
                    <button>确定</button>
                </section>
                
            </section>
            <section class="forget">
                忘记密码？
            </section>
        </section>
    </section>    
</template>

<script>

export default {
  name: 'admin'
}
</script>

<style scoped>
h1{
    font-size: 18px;
    color: #3d4246;
    line-height: 70px;
    font-weight: bold;
}
.wrapper{
    position: absolute;
    top: 50%;
    left: 50%;
}
.form{
    position: relative;
    top: -133.5px;
    left: -160px;
    width: 320px;
    margin: 0 auto;
    padding-top: 10px;
    background: white;
    border: 1px solid #bbb;
    border-top: none;
    box-shadow: 0px 2px 10px rgba(187,187,187,0.9);
    border-radius: 8px;
    text-align: center;
    overflow: hidden;
}
.form-header{
    top: 0px;
    position: absolute;
    width: 100%;
    height: 3px;
    background: #f17468;
    overflow: hidden;
}
.form-header p{
    float: left;
    height: 3px;
    width: 20%;
}
.form-header p:nth-child(1){
    width: 10%;
    background: #c59ae0;
}
.form-header p:nth-child(2){
    background: #f4add4 ;
}
.form-header p:nth-child(3){
    background: #f17468;
}
.form-header p:nth-child(4){
    background: #ffcf67;
}
.form-header p:nth-child(5){
    background: #f7fec7;
}
.form-header p:nth-child(6){
    width: 10%;
    background: #c3e277;
}
.form-input{
    width: 250px;
    margin: 0 auto;
    padding-bottom: 15px;
}
.form-input input[type="text"],
.form-input input[type="password"]{
    font-size: 14px;
    margin-bottom: 10px;
    display: block;
    width: 100%;
    border: 1px solid #dadada;
    border-top: 1px solid #b0b0b0;
    border-left: 1px solid #b0b0b0;
    line-height: 34px;
    border-radius: 5px;
    padding: 0 8px;
    font-family: '微软雅黑';
    box-shadow: inset 1px 1px 2px rgba(176,176,176,0.5);
    outline: 0;
}



.forget{
    border-top: 1px solid #c6c6c6;
    text-align: center;
    height:  40px;
    line-height: 40px;
    font-size: 12px;
    color: #2e2f30;
    background: #f7f7f7;
    box-shadow: inset 0px 1px 10px rgba(221,221,221,0.5);
}

.form-control{
    padding-top: 5px;
}
.form-control label{
    display: block;
    float: left;
    font-size: 12px;
    line-height: 14px;
    padding-top: 10px;
}
.form-control label input{
    margin-right: 10px;
}
.form-control button{
    float: right;
    width: 106px;
    height: 36px;
    line-height: 32px;
    font-size: 14px;
    border-radius: 5px;
    background-color: #5cb85c;
    border-width: 0;
    color: #fff;
    outline: 0;
}
.form-control button:active{
    background-color: #449d44;
    box-shadow: inset 0 1px 2px hsla(0,0%,4%,.2);
}
</style>
