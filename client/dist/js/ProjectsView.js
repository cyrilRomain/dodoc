(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[614],{2310:function(t,e,r){"use strict";r.d(e,{Z:function(){return R}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"_projectInfos",class:{"is--preview":"list"===t.context,"u-card":"list"===t.context}},[r("div",{ref:"coverImage",staticClass:"_projectInfos--cover",class:{"is--fullscreen":t.is_fullscreen,"is--empty":!t.cover_thumb}},[t.cover_thumb?[r("img",{attrs:{src:t.cover_thumb}}),"full"===t.context?r("sl-button",{staticClass:"_fsButton u-buttonLink",attrs:{size:"small",variant:"neutral"},on:{click:t.toggleFs}},[r("sl-icon",{attrs:{name:t.is_fullscreen?"fullscreen-exit":"arrows-fullscreen"}})],1):t._e()]:r("div",{staticClass:"_noImage"}),"full"===t.context&&t.can_edit_project?r("CoverField",{staticClass:"_coverPicker",attrs:{cover:t.project.$cover,path:t.project.$path}}):t._e()],2),r("div",{staticClass:"_projectInfos--infos"},[r("AuthorField",{attrs:{label:"full"===t.context?t.$t("contributors"):"",authors_paths:t.project.$authors,path:t.project.$path,can_edit:t.can_edit_project,instructions:t.$t("project_author_instructions")}}),"full"===t.context?r("br"):t._e(),r("TitleField",{attrs:{field_name:"title",label:"full"===t.context?t.$t("title"):"",content:t.project.title,path:t.project.$path,required:!0,maxlength:40,tag:"full"===t.context?"h1":"h2",can_edit:t.can_edit_project,instructions:t.$t("project_title_instructions")}}),"full"===t.context?r("br"):t._e(),r("TitleField",{staticClass:"_description",attrs:{field_name:"description",label:"full"===t.context&&(t.project.description||t.can_edit_project)?t.$t("description"):"",content:t.project.description,path:t.project.$path,maxlength:280,can_edit:t.can_edit_project,instructions:t.$t("project_desc_instructions")}})],1),r("button",{staticClass:"u-buttonLink _showMeta",attrs:{type:"button"},on:{click:function(e){t.show_meta=!t.show_meta}}},[t._v(" "+t._s(t.$t("show_meta"))+" ")]),"full"===t.context&&t.show_meta?r("div",{staticClass:"_projectInfos--meta"},[r("CardMeta",{attrs:{project:t.project,can_edit:t.can_edit_project}}),r("CardStatus",{attrs:{project:t.project,can_edit_project:t.can_edit_project}}),r("CardKeywords",{attrs:{project:t.project,can_edit_project:t.can_edit_project}}),r("CardMachines",{attrs:{project:t.project,can_edit_project:t.can_edit_project}})],1):t._e(),"list"===t.context?r("div",{staticClass:"_projectInfos--open"},[r("router-link",{staticClass:"u-button u-button_red",attrs:{to:{path:"/"+t.project.$path}}},[t._v(" "+t._s(t.$t("open"))+" "),r("sl-icon",{attrs:{name:"arrow-up-right"}})],1)],1):t._e()])},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ProjectCard",[r("div",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.$t("informations"))+" ")]),r("DateField",{attrs:{title:"date_created",date:t.project.$date_created}}),r("br"),r("DateField",{attrs:{title:"date_modified",date:t.project.$date_modified}}),r("br"),r("DLabel",{attrs:{str:t.$t("license"),instructions:t.$t("licence_instructions")}}),r("div",{},[r("RadioField",{attrs:{field_name:"license",content:t.project.license,path:t.project.$path,can_edit:t.can_edit,options:t.license_options}})],1),r("br"),r("div",{},[t.can_edit?r("button",{staticClass:"u-buttonLink",attrs:{type:"button"},on:{click:function(e){t.show_confirm_delete=!t.show_confirm_delete}}},[t._v(" "+t._s(t.$t("remove"))+" ")]):t._e(),r("br"),r("br"),t.show_confirm_delete?r("button",{staticClass:"u-button u-button_red",attrs:{type:"button"},on:{click:t.removeProject}},[t._v(" "+t._s(t.$t("confirm_removal"))+" ")]):t._e()])],1)},n=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("sl-card",{staticClass:"_projectCard u-card"},[t.$slots["header"]?r("header",{attrs:{slot:"header"},slot:"header"},[t._t("header")],2):t._e(),t._t("default")],2)},c=[],l={props:{},components:{},data(){return{}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{}},d=l,p=(r(2655),r(1001)),_=(0,p.Z)(d,i,c,!1,null,"38fce0f1",null),u=_.exports,h={props:{project:Object,can_edit:Boolean},components:{ProjectCard:u},data(){return{edit_mode:!1,show_confirm_delete:!1,license_options:[{key:"creativecommons_by_nc_sa",text:"creativecommons_by_nc_sa_explanations"},{key:"all_rights_reserved",text:"all_rights_reserved_explanations"},{key:"copyleft",text:"copyleft_explanations"},{key:"custom_license",text:"custom_license_explanations"}]}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{enableEditMode(){this.edit_mode=!0},async removeProject(){this.fetch_status="pending",this.fetch_error=null;try{const t=await this.$api.deleteItem({path:this.project.$path});this.response=t.data,this.fetch_status="success"}catch(t){this.fetch_status="error",this.fetch_error=t.response.data}}}},f=h,m=(0,p.Z)(f,s,n,!1,null,"d369928e",null),v=m.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ProjectCard",[r("div",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.$t("keywords"))+" ")]),r("div",{},[r("TagsField",{attrs:{field_name:"keywords",content:t.project.keywords,path:t.project.$path,can_edit:t.can_edit_project}})],1)])},b=[],g={props:{project:Object,can_edit_project:Boolean},components:{ProjectCard:u},data(){return{}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{}},w=g,x=(0,p.Z)(w,j,b,!1,null,"733fe7a8",null),$=x.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ProjectCard",[r("div",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.$t("machines_and_materials"))+" ")]),r("div",{},[r("TagsField",{attrs:{field_name:"materials",content:t.project.materials,path:t.project.$path,can_edit:t.can_edit_project}})],1)])},k=[],C={props:{project:Object,can_edit_project:Boolean},components:{ProjectCard:u},data(){return{}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{}},I=C,P=(0,p.Z)(I,y,k,!1,null,"15b186fb",null),M=P.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ProjectCard",[r("div",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.$t("visibility_progress"))+" "),r("sl-icon",{attrs:{name:"globe"}})],1),r("div",[t._v(" "+t._s(t.$t("visibility_progress_text"))+" ")]),r("br"),r("div",{},[r("DLabel",{attrs:{str:t.$t("status")}}),r("SelectField",{attrs:{field_name:"status",content:t.project.status,path:t.project.$path,can_edit:t.can_edit_project,options:t.status_options}}),r("br"),r("DLabel",{attrs:{str:t.$t("progress"),instructions:t.$t("progress_instr")}}),r("sl-progress-bar",{staticClass:"progress-bar-values",attrs:{value:"50"}},[t._v(" 50% ")])],1)])},F=[],L={props:{project:Object,can_edit_project:Boolean},components:{ProjectCard:u},data(){return{status_options:[{key:"draft",text:this.$t("draft"),instruction:"draft_status_explanations"},{key:"finished",text:this.$t("finished"),instruction:"finished_status_explanations"}],visible_value:this.project.status}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{}},T=L,Z=(0,p.Z)(T,D,F,!1,null,"c40ea0a0",null),S=Z.exports,z={props:{project:Object,context:String,can_edit_project:Boolean},components:{CardMeta:v,CardKeywords:$,CardMachines:M,CardStatus:S},data(){return{new_title:this.project.title,fetch_status:null,fetch_error:null,response:null,show_meta:!0,is_fullscreen:!1}},created(){},mounted(){document.addEventListener("fullscreenchange",this.detectFullScreen)},beforeDestroy(){document.removeEventListener("fullscreenchange",this.detectFullScreen)},watch:{},computed:{cover_thumb(){return this.makeRelativeURLFromThumbs({$thumbs:this.project.$cover,$type:"image",$path:this.project.$path,resolution:1200})}},methods:{detectFullScreen(){document.fullscreenElement?this.is_fullscreen=!0:(this.is_fullscreen=!1,this.$nextTick((()=>{})))},toggleFs(){const t=this.$refs.coverImage;this.is_fullscreen?document.exitFullscreen():t.requestFullscreen().catch((t=>t))},async updateProject(){this.fetch_status="pending",this.fetch_error=null;try{this.response=await this.$api.updateMeta({path:this.project.$path,new_meta:{title:this.new_title}}),this.fetch_status="success"}catch(t){this.fetch_status="error",this.fetch_error=t.response.data}}}},E=z,B=(r(175),(0,p.Z)(E,a,o,!1,null,"2328d83e",null)),R=B.exports},4678:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return x}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"_projectsView"},[r("transition",{attrs:{name:"fade_fast",mode:"out-in"}},[t.projects?t.fetch_projects_error?r("div",{key:"err"},[t._v(" "+t._s(t.fetch_projects_error)+" ")]):r("div",{key:"projects"},[r("div",{},[r("router-link",{staticClass:"u-buttonLink",attrs:{to:"/"}},[r("sl-icon",{attrs:{name:"arrow-left-short"}}),t._v(t._s(t.$t("general_informations"))+" ")],1),r("br"),r("br"),t.connected_as?r("button",{staticClass:"u-button u-button_red u-button_big",attrs:{type:"button"},on:{click:function(e){t.show_create_modal=!0}}},[r("svg",{staticStyle:{"enable-background":"new 0 0 168 168"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 168 168","xml:space":"preserve"}},[r("path",{staticStyle:{fill:"#fc4b60"},attrs:{d:"M24.6,24.4c-32.8,32.8-32.8,86.1,0,119c32.8,32.8,85.9,32.8,118.7,0c32.8-32.8,32.8-85.9,0-118.7\n\t\tC110.5-8.2,57.5-8.2,24.6,24.4z"}}),r("polygon",{staticStyle:{fill:"#ffbe32"},attrs:{points:"132.3,73.4 132.3,94.4 94.6,94.4 94.6,132.1 73.6,132.1 73.6,94.4 35.9,94.4 35.9,73.4 \n\t\t73.6,73.4 73.6,35.7 94.6,35.7 94.6,73.4 \t\t"}})]),t._v(" "+t._s(t.$t("create_a_project"))+" ")]):[t._v(" Vous devez "),r("button",{staticClass:"u-button u-button_bleumarine u-button_small",attrs:{type:"button"},on:{click:function(e){return t.$eventHub.$emit("toolbar.openAuthor")}}},[t._v(" vous inscrire ")]),t._v(" pour pouvoir créer ou rejoindre un projet. ")],t.show_create_modal?r("CreateProject",{on:{close:function(e){t.show_create_modal=!1},openNewProject:t.openNewProject}}):t._e()],2),(t.is_admin,t._e()),r("br"),r("div",{},[r("h3",[t._v(t._s(t.$t("finished_projects")))]),r("transition-group",{staticClass:"_projectsList",attrs:{tag:"div",name:"StoryModules",appear:"",duration:700}},[0===t.finalized_projects.length?r("div",{key:"no_content",staticClass:"u-instructions"},[t._v(" "+t._s(t.$t("no_finalized_projects"))+" ")]):t._e(),t._l(t.finalized_projects,(function(t){return r("ProjectPresentation",{key:t.$path,attrs:{project:t,context:"list"}})}))],2)],1),r("br"),r("div",{},[r("h3",[t._v(t._s(t.$t("projects_in_progress")))]),r("transition-group",{staticClass:"_projectsList",attrs:{tag:"div",name:"StoryModules",appear:"",duration:700}},[0===t.draft_projects.length?r("div",{key:"no_content",staticClass:"u-instructions"},[t._v(" "+t._s(t.$t("no_draft_projects"))+" ")]):t._e(),t._l(t.draft_projects,(function(t){return r("ProjectPresentation",{key:t.$path,attrs:{project:t,context:"list"}})}))],2)],1)],1):r("div",{key:"loader",staticClass:"u-divCentered"},[r("LoaderSpinner")],1)])],1)},o=[],s=(r(7658),r(2310)),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseModal2",{attrs:{title:t.$t("create_a_project")},on:{close:function(e){return t.$emit("close")}}},[r("form",{staticClass:"input-validation-required",on:{submit:function(e){return e.preventDefault(),t.createProject.apply(null,arguments)}}},[r("DLabel",{attrs:{str:t.$t("title")}}),r("TextInput",{attrs:{content:t.new_project_title,maxlength:40,required:!0},on:{"update:content":function(e){t.new_project_title=e},toggleValidity:function(e){return t.allow_save=e}}}),r("br"),r("div",{},[r("ToggleInput",{attrs:{content:t.new_project_is_listed,label:t.$t("listed"),options:{true:t.$t("listed_status_explanations_projects"),false:t.$t("unlisted_status_explanations_projects")}},on:{"update:content":function(e){t.new_project_is_listed=e}}})],1),r("br"),r("sl-button",{attrs:{slot:"footer",variant:"primary",loading:t.is_creating_project,type:"submit"},slot:"footer"},[t._v(" "+t._s(t.$t("create_and_open"))+" ")]),t.error_msg?[r("br"),r("br"),r("div",{staticClass:"u-errorMsg",domProps:{textContent:t._s(t.error_msg)}})]:t._e()],2)])},i=[],c={props:{},components:{},data(){return{new_project_title:"",new_project_is_listed:!0,is_creating_project:!1,allow_save:!1,error_msg:""}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{async createProject(){this.is_creating_project=!0;try{const t=await this.$api.createFolder({path:"/projects",additional_meta:{title:this.new_project_title,requested_slug:this.new_project_title,status:"draft",license:"CC",$listed:this.new_project_is_listed,$authors:[this.$api.tokenpath.token_path]}});setTimeout((()=>{this.$emit("openNewProject",t)}),50)}catch(t){this.error_msg="Error: "+t.message,setTimeout((()=>{this.error_msg=""}),5e3),this.is_creating_project=!1}}}},l=c,d=r(1001),p=(0,d.Z)(l,n,i,!1,null,"af488d0a",null),_=p.exports,u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("DLabel",{attrs:{str:"routine"}}),t.routine_is_started?[r("button",{staticClass:"u-button u-button_red u-button_big",attrs:{type:"button"},on:{click:t.stopRoutine}},[t._v(" stop routine ")])]:[r("button",{staticClass:"u-button u-button_red u-button_big",attrs:{type:"button"},on:{click:t.startRoutine}},[t._v(" start ")])]],2)},h=[],f={props:{},components:{},data(){return{routine_is_started:!1}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{async startRoutine(){this.routine_is_started=!0;const t=await this.$api.createFolder({path:"projects",additional_meta:{title:"Z test project "+this.$api.socket.userID,$authors:["sarah"]}});await new Promise((t=>setTimeout(t,200))),await this.$api.updateMeta({path:`projects/${t}`,new_meta:{$authors:["louis","pauline"]}}),await new Promise((t=>setTimeout(t,200))),await this.$api.updateMeta({path:`/projects/${t}`,new_meta:{title:"Nouveau titre "+this.$api.socket.userID}}),await new Promise((t=>setTimeout(t,200))),await this.$api.updateMeta({path:`projects/${t}`,new_meta:{keywords:["plop"]}}),await new Promise((t=>setTimeout(t,200))),await this.$api.updateMeta({path:`projects/${t}`,new_meta:{keywords:["plip"]}}),await new Promise((t=>setTimeout(t,500))),await this.$api.deleteItem({path:`projects/${t}`}),await new Promise((t=>setTimeout(t,250))),this.routine_is_started&&this.startRoutine()},async stopRoutine(){this.routine_is_started=!1}}},m=f,v=(r(7215),(0,d.Z)(m,u,h,!1,null,"675e8e12",null)),j=v.exports,b={props:{},components:{ProjectPresentation:s.Z,CreateProject:_,ProjectsTester:j},data(){return{path:"projects",projects:[],fetch_projects_error:null,show_create_modal:!1}},created(){},async mounted(){this.projects=await this.$api.getFolders({path:this.path}).catch((t=>{this.fetch_project_error=t.response,this.is_loading=!1})),this.$api.join({room:this.path})},beforeDestroy(){this.$api.leave({room:this.path})},watch:{},computed:{sorted_projects(){let t=this.projects.slice();return t=t.filter((t=>this.canLoggedinSeeProject({project:t}))),t.sort(((t,e)=>+new Date(e.$date_created)-+new Date(t.$date_created)))},finalized_projects(){return this.sorted_projects.filter((t=>"finished"===t.status))},draft_projects(){return this.sorted_projects.filter((t=>"finished"!==t.status))}},methods:{openNewProject(t){this.show_create_modal=!1,this.$router.push(`/projects/${t}`)}}},g=b,w=(r(7070),(0,d.Z)(g,a,o,!1,null,"2b4d9434",null)),x=w.exports},3355:function(t,e,r){"use strict";r.r(e);var a=r(8081),o=r.n(a),s=r(3645),n=r.n(s),i=n()(o());i.push([t.id,"._topLabel[data-v-675e8e12]{text-align:left}",""]),e["default"]=i},3552:function(t,e,r){"use strict";r.r(e);var a=r(8081),o=r.n(a),s=r(3645),n=r.n(s),i=n()(o());i.push([t.id,"._projectCard[data-v-38fce0f1]{border:0;border-radius:0;box-shadow:none}",""]),e["default"]=i},8830:function(t,e,r){"use strict";r.r(e);var a=r(8081),o=r.n(a),s=r(3645),n=r.n(s),i=n()(o());i.push([t.id,"._project[data-v-2328d83e]{position:relative}._projectInfos[data-v-2328d83e]{display:flex;flex-flow:row nowrap;align-items:stretch;margin:0 auto;overflow:hidden;background:#fff;transition:all .4s cubic-bezier(.19,1,.22,1)}._projectInfos.is--preview[data-v-2328d83e]{border-bottom:2px solid #b9b9b9;box-shadow:0 1px 4px rgba(0,0,0,.1);border-radius:4px}._projectInfos.is--preview ._description[data-v-2328d83e]{font-size:90%}@media only screen and (max-width:980px){._projectInfos[data-v-2328d83e]{flex-flow:row wrap}}._projectInfos>*[data-v-2328d83e]{flex:10 1 320px;transition:all .4s cubic-bezier(.19,1,.22,1)}._projectInfos>._projectInfos--meta[data-v-2328d83e]{flex:1 0 260px}@media only screen and (max-width:980px){._projectInfos>._projectInfos--meta[data-v-2328d83e]{flex:0 0 100%}}._projectInfos--infos[data-v-2328d83e]{display:flex;flex-flow:column nowrap;place-content:center;gap:calc(var(--spacing)/2);padding:calc(var(--spacing)/1);transition:all .4s}._projectInfos--infos>*[data-v-2328d83e]{max-width:66ch}._imageSelect[data-v-2328d83e]{background:#fff;position:relative}._projectInfos--cover[data-v-2328d83e]{position:relative;overflow:hidden;aspect-ratio:1/1;--color1:var(--c-gris);--color2:var(--c-gris_clair)}._projectInfos--cover.is--empty[data-v-2328d83e]{background:radial-gradient(circle,transparent 20%,var(--color1) 20%,var(--color1) 80%,transparent 80%,transparent),radial-gradient(circle,transparent 20%,var(--color1) 20%,var(--color1) 80%,transparent 80%,transparent) 15px 15px,linear-gradient(var(--color2) 1.2px,transparent 1.2px) 0 -.6px,linear-gradient(90deg,var(--color2) 1.2px,var(--color1) 1.2px) -.6px 0;background-size:30px 30px,30px 30px,15px 15px,15px 15px}._projectInfos--cover img[data-v-2328d83e]{position:absolute;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}._projectInfos--cover.is--fullscreen img[data-v-2328d83e]{-o-object-fit:contain;object-fit:contain}._projectInfos--cover[data-v-2328d83e]  ._noImage{position:absolute;z-index:-1;width:100%;height:100%;background-color:var(--c-gris_fonce)}._projectInfos--cover[data-v-2328d83e]  ._fsButton{position:absolute;bottom:0;margin:calc(var(--spacing)/1)}._projectInfos--meta[data-v-2328d83e]{display:flex;flex-flow:column nowrap;font-size:90%;overflow:auto;background:var(--c-gris_clair);gap:calc(var(--spacing)/2);padding:calc(var(--spacing)/2) calc(var(--spacing)/2);max-height:calc(50vw - 130px)}._projectInfos--meta[data-v-2328d83e]::-webkit-scrollbar{height:18px;width:18px;background-color:transparent}._projectInfos--meta[data-v-2328d83e]::-webkit-scrollbar-thumb,._projectInfos--meta[data-v-2328d83e]::-webkit-scrollbar-track{border:6px solid hsla(0,0%,100%,0);border-radius:24px;background-clip:padding-box;-webkit-transition:all .4s;transition:all .4s}._projectInfos--meta[data-v-2328d83e]::-webkit-scrollbar-track{background-color:transparent}._projectInfos--meta[data-v-2328d83e]::-webkit-scrollbar-thumb{background-color:var(--c-noir)}._projectInfos--meta[data-v-2328d83e]::-webkit-scrollbar-thumb:hover{background-color:var(--c-gris);border:6px solid hsla(0,0%,100%,0)}@media only screen and (max-width:980px){._projectInfos--meta[data-v-2328d83e]{flex-flow:row nowrap;max-height:none}}._projectInfos--meta>*[data-v-2328d83e]{flex:1 1 260px;background:#fff;box-shadow:0 1px 6px rgba(0,0,0,.2);border-radius:8px}@media only screen and (max-width:980px){._projectInfos--meta>*[data-v-2328d83e]{flex:1 0 260px}}._projectInfos--open[data-v-2328d83e]{display:flex;justify-content:center;margin:calc(var(--spacing)*1)}._projectInfos--open a[data-v-2328d83e]{transition:all .25s cubic-bezier(.19,1,.22,1)}._projectInfos--open a[data-v-2328d83e]:focus,._projectInfos--open a[data-v-2328d83e]:hover{transform:translateY(-4px) rotate(-2deg);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}._coverPicker[data-v-2328d83e]{bottom:0;padding:calc(var(--spacing)/1)}._coverPicker[data-v-2328d83e],._showMeta[data-v-2328d83e]{position:absolute;right:0}._showMeta[data-v-2328d83e]{top:0;background:#fff;margin:calc(var(--spacing)/4)}",""]),e["default"]=i},7016:function(t,e,r){"use strict";r.r(e);var a=r(8081),o=r.n(a),s=r(3645),n=r.n(s),i=n()(o());i.push([t.id,"._projectsView[data-v-2b4d9434]{padding:calc(var(--spacing)*2)}._projectsView>*[data-v-2b4d9434]{margin-bottom:var(--spacing)}._projectsList[data-v-2b4d9434]{display:grid;grid-auto-rows:max-content;grid-gap:calc(var(--spacing)/1);align-items:flex-start;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));border-radius:6px;overflow:hidden;margin-top:calc(var(--spacing)/4)}._projectsList>*[data-v-2b4d9434]{box-shadow:0 1px 4px rgba(0,0,0,.1);width:100%}._projectsList[data-v-2b4d9434]  ._projectInfos{min-height:100%;display:block}._title[data-v-2b4d9434]{text-align:center}",""]),e["default"]=i},7215:function(t,e,r){var a=r(3355);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var o=r(1982).Z;o("ae852a16",a,!0,{sourceMap:!1,shadowMode:!1})},2655:function(t,e,r){var a=r(3552);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var o=r(1982).Z;o("4d002b02",a,!0,{sourceMap:!1,shadowMode:!1})},175:function(t,e,r){var a=r(8830);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var o=r(1982).Z;o("5db2a452",a,!0,{sourceMap:!1,shadowMode:!1})},7070:function(t,e,r){var a=r(7016);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var o=r(1982).Z;o("158090f4",a,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=ProjectsView.js.map