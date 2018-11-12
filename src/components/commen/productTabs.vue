<template>
    <div id="productTabs">
        <div v-for="(label,index) in labels" class="labelsWrapper" :key="index">
            <p class="labelTip">{{label.name}}</p>
            <div class="labels">
                <span v-for="(tab,i) in label.tabs" :class="{'label':true,'checked':checkedOnoff( label.id,tab.id )}" @click="checkLabel(label.id,tab.id,tab.des)" :key="i">
                    {{tab.des}}
                </span>
            </div>
        </div>
        
    </div>
</template>
<script>
    export default {
        data(){
            return {
                labels:[
                    {name:'尺码',id:1,tabs:[{id:1,des:'标准版'},{id:2,des:'升级版G#00P'},{id:3,des:'G300+32G存储卡'},{id:4,des:'G300+16G存储卡'}]},
                    {name:'安装服务',id:2,tabs:[{id:1,des:'到店安装'},{id:2,des:'无需安装'}]},
                    
                ],
                checked:{
                   
                },
            }
        },
        watch:{
            checked:{
                handler:function(newVal,oldVal) {   //特别注意，不能用箭头函数，箭头函数，this指向全局
                    //alert('修改')
                    let str = '';
                    console.log( newVal )
                    console.log( JSON.stringify(newVal) )
                    for(let key in newVal ){
                       console.log(key)
                        if (this.checked.hasOwnProperty(key) === true){ 
                            str+= this.checked[key].des+','
                        }
                    }
                    
                    
                    this.$emit( 'changeVersion',str );
                    //return str;

                },

                deep: true,    //深度监听

            }
        },
        
        methods:{
            checkLabel(labelId,tabId,des){
                console.log( labelId,tabId,des ) 
                this.$set( this.checked,labelId,{id:tabId,des:des} )
            },
            checkedOnoff(labelId,tabId){
                if( this.checked[labelId] ){
                    if(this.checked[labelId].id == tabId ){
                        return true;
                    }
                }
                return false;
            }
        },
        updated(){
            console.log('更新')
        }
        

    }
</script>
<style lang="scss" scoped>
    .labelsWrapper{
        padding:0 0.5rem 1rem;
        .labelTip{
            font-size: 0.9rem;
            color:#999;
            margin-bottom: 0.7rem;;
        }
        .labels{
            
            .label{
                display: inline-block;
                background: #f7f7f7;
                padding:0.5rem 1rem;
                margin:0 0.5rem 0.5rem 0.5rem;
                font-size: 0.95rem;
                border-radius: 0.2rem;

                &.checked{
                    background: #e4393c;
                    color:#fff;
                }
            }
        }
        
    }
</style>

