<template>
    <div class="slider-bar" :style="'min-width:' + (isCollapse ? '64px' : '220px') + '!important;max-width:' + (isCollapse ? '64px' : '220px') + '!important;transition:.3s'" >
        <el-menu :router="true" 
                 :unique-opened="true"  
                 text-color="#485a6a"
                 :default-openeds="defaultOpeneds"
                 :default-active="defaultIndex"
                 :collapse-transition="true"
                 :collapse="isCollapse"
                 class="mf-menu"
                 id="mf-menu"
                 >
            <template v-for="item in menuList">
                <template v-if="item.children.length > 0">
                    <el-submenu :index="item.url" :class="{'bg-c': item.url == currentUrl}" >
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span>{{item.text}}</span>
                        </template>
                        <template v-for="subItem in item.children">
                            <!-- <i :class="subItem.icon"></i> -->
                            <el-menu-item :index="subItem.url"><span :class="{'active-text':subItem.url == defaultIndex || subItem.siblings.includes(defaultIndex)}">{{subItem.text}}</span></el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.url">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.text}}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
        <div class="line"></div>
    </div>
</template>
<script>
    export default {
    	props: {
            isCollapse: {                                           // 菜单收缩控制 
                type: Boolean,
                default: false
            },
            defaultIndex: {                                         // 激活的当前二级菜单路由
		    	type: String
            },
            currentUrl: {                                           // 高亮的当前一级菜单URL
                type: String,
            }
        },
        data(){
            return {
                menuList: [],
                defaultOpeneds: ["/user/1", "/user/queryAccount"],  // 默认打开的菜单栏
            }   
        },
        created () {
            this.menuList = JSON.parse(sessionStorage.getItem('menuList'))
        },
    }
</script>
<style>
.slider-bar{
    overflow-x: hidden;
    overflow-y: auto;
}
.slider-bar::-webkit-scrollbar{
    width: 0;
    height: 0;
}
.slider-bar:hover::-webkit-scrollbar{
    width: 10px;
    height: 10px;
    background-color: #ffffff;
}
.slider-bar::-webkit-scrollbar-thumb{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #999;
}

.mf-menu:not(.el-menu--collapse) {
    width: 220px;
}
.bg-c{
    position: relative;
    background-color: #e3f1fc;
    color: #5b9bd1;
}
.bg-c::before{
    content: '';
    position: absolute;
    left: 0;
    background: #5C9ACF;
    height: 56px;
    width: 4px;
    animation: show .5s ease;
    z-index: 2;
}
.active-text{
    color: #5b9bd1;
}
@keyframes show {
    from{
        height: 0;
    }
    to{
        height: 56px;
    }
}
</style>