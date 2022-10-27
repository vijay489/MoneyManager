import{j as H,u as q,q as Y,e as $,c as j,g as f,b as G,r as J}from"./main.465728e1.js";import{J as M,G as K,ah as V,r as o,o as p,l as g,w as t,u as a,f as n,i as T,t as B,j as N,B as z,k as P,V as O,m as Q,e as W,x as Z}from"./vendor.d12b5734.js";import{_ as ee}from"./TaxTypeModal.d37d74ed.js";const te={props:{row:{type:Object,default:null},table:{type:Object,default:null},loadData:{type:Function,default:null}},setup(S){const s=S,b=H();q();const{t:r}=M(),h=Y(),v=K(),m=$(),E=j();V("utils");async function c(d){await h.fetchTaxType(d),E.openModal({title:r("settings.tax_types.edit_tax"),componentName:"TaxTypeModal",size:"sm",refreshData:s.loadData&&s.loadData})}function C(d){b.openDialog({title:r("general.are_you_sure"),message:r("settings.tax_types.confirm_delete"),yesLabel:r("general.ok"),noLabel:r("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async u=>{if(u){if((await h.deleteTaxType(d)).data.success)return s.loadData&&s.loadData(),!0;s.loadData&&s.loadData()}})}return(d,u)=>{const i=o("BaseIcon"),w=o("BaseButton"),D=o("BaseDropdownItem"),k=o("BaseDropdown");return p(),g(k,null,{activator:t(()=>[a(v).name==="tax-types.view"?(p(),g(w,{key:0,variant:"primary"},{default:t(()=>[n(i,{name:"DotsHorizontalIcon",class:"h-5 text-white"})]),_:1})):(p(),g(i,{key:1,name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}))]),default:t(()=>[a(m).hasAbilities(a(f).EDIT_TAX_TYPE)?(p(),g(D,{key:0,onClick:u[0]||(u[0]=I=>c(S.row.id))},{default:t(()=>[n(i,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),T(" "+B(d.$t("general.edit")),1)]),_:1})):N("",!0),a(m).hasAbilities(a(f).DELETE_TAX_TYPE)?(p(),g(D,{key:1,onClick:u[1]||(u[1]=I=>C(S.row.id))},{default:t(()=>[n(i,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),T(" "+B(d.$t("general.delete")),1)]),_:1})):N("",!0)]),_:1})}}},ae={key:0},le={setup(S){const{t:s}=M(),b=V("utils"),r=G(),h=Y(),v=j(),m=$(),E=J(),c=z(null),C=z(r.selectedCompanySettings.tax_per_item),d=P(()=>[{key:"name",label:s("settings.tax_types.tax_name"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"compound_tax",label:s("settings.tax_types.compound_tax"),tdClass:"font-medium text-gray-900"},{key:"percent",label:s("settings.tax_types.percent"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"actions",label:"",tdClass:"text-right text-sm font-medium",sortable:!1}]),u=P(()=>r.selectedCompanySettings.sales_tax_us_enabled==="YES"&&E.salesTaxUSEnabled),i=P({get:()=>C.value==="YES",set:async l=>{const _=l?"YES":"NO";let y={settings:{tax_per_item:_}};C.value=_,await r.updateCompanySettings({data:y,message:"general.setting_updated"})}});function w(){return m.hasAbilities([f.DELETE_TAX_TYPE,f.EDIT_TAX_TYPE])}async function D({page:l,filter:_,sort:y}){let A={orderByField:y.fieldName||"created_at",orderBy:y.order||"desc",page:l},x=await h.fetchTaxTypes(A);return{data:x.data.data,pagination:{totalPages:x.data.meta.last_page,currentPage:l,totalCount:x.data.meta.total,limit:5}}}async function k(){c.value&&c.value.refresh()}function I(){v.openModal({title:s("settings.tax_types.add_tax"),componentName:"TaxTypeModal",size:"sm",refreshData:c.value&&c.value.refresh})}return(l,_)=>{const y=o("BaseIcon"),A=o("BaseButton"),x=o("BaseBadge"),X=o("BaseTable"),L=o("BaseDivider"),U=o("BaseSwitchSection"),F=o("BaseSettingCard");return p(),g(F,{title:l.$t("settings.tax_types.title"),description:l.$t("settings.tax_types.description")},O({default:t(()=>[n(ee),n(X,{ref:(e,R)=>{R.table=e,c.value=e},class:"mt-16",data:D,columns:a(d)},O({"cell-compound_tax":t(({row:e})=>[n(x,{"bg-color":a(b).getBadgeStatusColor(e.data.compound_tax?"YES":"NO").bgColor,color:a(b).getBadgeStatusColor(e.data.compound_tax?"YES":"NO").color},{default:t(()=>[T(B(e.data.compound_tax?"Yes":"No".replace("_"," ")),1)]),_:2},1032,["bg-color","color"])]),"cell-percent":t(({row:e})=>[T(B(e.data.percent)+" % ",1)]),_:2},[w()?{name:"cell-actions",fn:t(({row:e})=>[n(te,{row:e.data,table:c.value,"load-data":k},null,8,["row","table"])])}:void 0]),1032,["columns"]),a(m).currentUser.is_owner?(p(),W("div",ae,[n(L,{class:"mt-8 mb-2"}),n(U,{modelValue:a(i),"onUpdate:modelValue":_[0]||(_[0]=e=>Z(i)?i.value=e:null),disabled:a(u),title:l.$t("settings.tax_types.tax_per_item"),description:l.$t("settings.tax_types.tax_setting_description")},null,8,["modelValue","disabled","title","description"])])):N("",!0)]),_:2},[a(m).hasAbilities(a(f).CREATE_TAX_TYPE)?{name:"action",fn:t(()=>[n(A,{type:"submit",variant:"primary-outline",onClick:I},{left:t(e=>[n(y,{class:Q(e.class),name:"PlusIcon"},null,8,["class"])]),default:t(()=>[T(" "+B(l.$t("settings.tax_types.add_new_tax")),1)]),_:1})])}:void 0]),1032,["title","description"])}}};export{le as default};
