(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-310fcf83"],{5148:function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,"#myChart-yq-2-2{width:95%;height:95%}",""]),t.exports=e},"535f":function(t,e,o){var n=o("5148");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("499e").default;i("32a34610",n,!0,{sourceMap:!1,shadowMode:!1})},"576c":function(t,e,o){"use strict";o("535f")},be36:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{height:"100%"}},[o("div",{staticClass:"flexbox",staticStyle:{width:"100%",height:"100%"}},[o("div",{directives:[{name:"on-echart-resize",rawName:"v-on-echart-resize"}],ref:"myChart-yq-2-2",attrs:{id:"myChart-yq-2-2"}})])])},i=[],r=(o("d3b7"),o("eec4")),a=o.n(r),l=(o("e734"),{name:"yq_2_2",data:function(){return{data:{}}},computed:{chartOption:function(){for(var t=this.data,e={},o=[],n=[],i={"委托单位（个人）":"#fff","委托单位（企业）":"#ea8161","委托单位（科研机构）":"#d1a955","委托单位（高校）":"#4eb7fd","委托单位（其他）":"#5FDDE7"},r=0;r<t.length;r++)-1==o.indexOf(t[r].year)&&o.push(t[r].year);for(var a=0;a<o.length;a++){e[o[a]]=[];for(var l=0;l<t.length;l++)t[l].year==o[a]&&e[o[a]].push({source:t[l].source,target:t[l].target,value:t[l].value,lineStyle:{color:i[t[l].target]}});n.push({title:{subtext:o[a]+"年",subtextStyle:{color:"#fff",fontSize:18}},series:{links:e[o[a]]}})}var f={baseOption:{timeline:{bottom:"2%",top:"93%",left:"10%",right:"10%",axisType:"category",autoPlay:!0,playInterval:3e3,padding:-5,lineStyle:{show:!0,color:"#d1a955"},label:{position:20,interval:0,fontSize:18},emphasis:{label:{fontSize:20}},progress:{label:{interval:0,fontSize:18,color:"#d1a955"},itemStyle:{color:"#fff"},lineStyle:{color:"#d1a955"}},symbol:"none",checkpointStyle:{color:"#d1a955",borderColor:"#fff",borderWidth:2},controlStyle:{showNextBtn:!1,showPrevBtn:!1,itemGap:30,itemSize:24,normal:{color:"#d1a955",borderColor:"#d1a955"}},data:o},title:{text:"不同类型服务单位对外使用机时比例",left:"center",top:0,textStyle:{color:"#fff",fontSize:28}},series:{type:"sankey",layout:"none",orient:"vertical",layoutIterations:0,top:100,bottom:140,left:80,right:80,itemStyle:{borderWidth:0},lineStyle:{opacity:.8},data:[{name:"服务单位（企业）",label:{show:!0,position:"top",color:"#fff",fontSize:16},itemStyle:{color:"#ea8161"}},{name:"服务单位（科研院所）",label:{show:!0,position:"top",color:"#fff",fontSize:16},itemStyle:{color:"#d1a955"}},{name:"服务单位（高校）",label:{show:!0,position:"top",color:"#fff",fontSize:16},itemStyle:{color:"#4eb7fd"}},{name:"服务单位（其他）",label:{show:!0,position:"top",color:"#fff",fontSize:16},itemStyle:{color:"#5FDDE7"}},{name:"委托单位（个人）",label:{show:!0,position:"bottom",color:"#fff",fontSize:16,formatter:function(){return"委托单位\n（个人）"}},itemStyle:{color:"#fff"}},{name:"委托单位（企业）",label:{show:!0,position:"bottom",color:"#fff",fontSize:16,formatter:function(){return"委托单位\n（企业）"}},itemStyle:{color:"#ea8161"}},{name:"委托单位（科研机构）",label:{show:!0,position:"bottom",color:"#fff",fontSize:16,formatter:function(){return"委托单位\n（科研机构）"}},itemStyle:{color:"#d1a955"}},{name:"委托单位（高校）",label:{show:!0,position:"bottom",color:"#fff",fontSize:16,formatter:function(){return"委托单位\n（高校）"}},itemStyle:{color:"#4eb7fd"}},{name:"委托单位（其他）",label:{show:!0,position:"bottom",color:"#fff",fontSize:16,formatter:function(){return"委托单位\n（其他）"}},itemStyle:{color:"#5FDDE7"}}],silent:!0,links:e[o[0]]}},options:n};return f}},methods:{draw:function(){var t=this.$echarts.init(document.getElementById("myChart-yq-2-2"),"macarons");t.setOption(this.chartOption)}},filters:{},created:function(){var t=this;this.axios.get("yq-2-2.json").then((function(e){t.data=e.data,t.draw()})).catch((function(e){console.log(e),t.errored=!0})).finally((function(){return t.loading=!1}))},mounted:function(){var t=a()(),e=this;t.listenTo(document.getElementById("myChart-yq-2-2"),(function(t){e.$nextTick((function(){e.$echarts.init(document.getElementById("myChart-yq-2-2"),"macarons").resize()}))}))}}),f=l,c=(o("576c"),o("2877")),s=Object(c["a"])(f,n,i,!1,null,null,null);e["default"]=s.exports}}]);