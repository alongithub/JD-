<template>
    <div>
        <div class="message_header">
            <div class="backView">
                <along-back></along-back>
            </div>
            message
        </div>
        
    </div>
</template>
<script>
    
</script>
<style lang="scss">
    $height:2rem;
    .message_header{
        line-height:$height;
        height:$height;
        .backView{
            height:$height;
            width:$height;
            float:left;
        }
    }
</style>