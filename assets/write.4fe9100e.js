import{b as a,g as e,d as s,i as t}from"./index.0e3110bc.js";import{r as l}from"./randomColor.0027efaf.js";import{b as r,e as o,a as i,w as n,o as u,f as c,u as d,g as m,m as p,t as v,v as _,F as f,j as y,k as g,l as b}from"./vendor.8499063d.js";const Y=g();r("data-v-2110a354");const k={key:0},h={class:"article__list"},x={key:0,class:"year"},j={class:"article__group"},q={class:"article--time"},w=p("查看更多>>>");o();const B={expose:[],props:{year:Boolean,more:Boolean,max:Number},setup(r){const o=a(),g=i([]);n((()=>o.query),(a=>{g.value=[],e(a).then((a=>{g.value=a}))}),{deep:!0,immediate:!0});const B=(()=>{let a=null;return e=>a?!t(a,e)&&(a=e,!0):(a=e,!0)})();return Y(((a,e)=>{const t=b("a-tag"),i=b("router-link"),n=b("a-skeleton");return u(),c(n,{active:"",paragraph:{rows:3},loading:!g.value.length},{default:Y((()=>{var a,e;return[(null==(e=null==(a=d(o))?void 0:a.query)?void 0:e.labels)?(u(),c("div",k,[m(t,{color:d(l)({luminosity:"bright"})},{default:Y((()=>[p(v(d(o).query.labels),1)])),_:1},8,["color"])])):_("",!0),m("ul",h,[(u(!0),c(f,null,y(g.value.slice(0,r.max),(a=>(u(),c("li",{key:a},[r.year&&d(B)(a.created_at)?(u(),c("h3",x,v(d(s)(a.created_at).format("YYYY")),1)):_("",!0),m("div",j,[m("div",q,v(d(s)(a.created_at).format("YYYY-MM-DD")),1),m(i,{class:"article--title ellipsis",to:{name:"post",params:{id:a.number}}},{default:Y((()=>[m("span",null,v(a.title),1)])),_:2},1032,["to"])])])))),128))]),r.more?(u(),c(i,{key:1,class:"more",to:{name:"write"}},{default:Y((()=>[w])),_:1})):_("",!0)]})),_:1},8,["loading"])}))},__scopeId:"data-v-2110a354"};export{B as _};
