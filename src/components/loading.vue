<template>
    <el-button
            type="primary"
            @click="openFullScreen"
            v-loading.fullscreen.lock="fullscreenLoading">
        {{loadingMsg}}
    </el-button>
</template>

<script>
    export default {
        data() {
            return {
                loadingMsg: '',
                fullscreenLoading: false
            }
        },
        methods: {
            openFullScreen() {
                this.fullscreenLoading = true;
                let tempTimer = setTimeout(() => {
                    this.fullscreenLoading = false;
                    clearTimeout(tempTimer)
                }, 3000);
            }
        }
    }
</script>