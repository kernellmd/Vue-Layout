import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
var handle = function(_attr, _slots) {
    //定义默认属性
    let attributes = {

            plain:{
                type:'boolean',
                value:'false'
            },
            round:{
                type:'boolean',
                value:'false'
            },
            type:{
                type:'selection',
                items:['success','primary','danger','info','text'],
                value:'success'
            },
            size:{
                type:'selection',
                items:['small','medium','mini'],
                value:''
            },
            icon:{
                type:'icon',
                value:''
            }
        },
        slots = {
            default:[],
            icon:[]
        }

    //覆盖默认属性
    Object.assign(slots, _slots)
    Object.assign(attributes, _attr)

    //根据组件不同需要做的不同操作


    //获取插槽模板内容
    var subContent = getSlotContent(slots)

    //设置当前组件的slot
    if (attributes.slot && attributes.slot!=='default') {
        attributes.slot = {
            type: 'text',
            value: attributes.slot
        }
    } else {
        attributes.slot = {
            type: 'text',
            value: 'element按钮'
        }
    }

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes)
    let template = `<el-button
                        ${stringAttr}>${subContent}
                        </el-button>`
                        
    return { template, attributes, slots }
}
export default handle
