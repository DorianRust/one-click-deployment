(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5163b2d0"],{"012e":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"viewBranchDialog"},[r("el-row",{attrs:{gutter:12}},[r("el-col",{attrs:{span:24}},[r("el-card",{attrs:{shadow:"hover"}},[r("div",{on:{click:function(t){e.genesisContentShow=!e.genesisContentShow}}},[r("i",{class:e.genesisContentShow?"el-icon-arrow-down":"el-icon-arrow-right"}),e._v("\n                    "+e._s(e.$t("tronSettingGenesis"))+"\n                ")]),e._v(" "),e.genesisContentShow?r("el-form",{ref:"genesisSettingDialogForm",staticClass:"tronbaseSettingForm",attrs:{"label-width":"200px","label-position":"left"}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("div",{staticClass:"asset"},[r("el-button",{staticClass:"newAsset",on:{click:function(t){return e.newAssetFun()}}},[e._v("new asset")]),e._v(" "),e._l(e.detailInfoData.genesis_block_assets,(function(t,o){return r("el-row",{key:o},[r("el-button",{staticStyle:{width:"100%"},on:{click:function(r){return e.currentAssetFun(t,o)}}},[e._v(e._s(t.accountName))])],1)}))],2)]),e._v(" "),r("el-col",{attrs:{span:12}},[r("div",{staticClass:"witeness"},[r("el-button",{staticClass:"newWiteness"},[e._v("witeness")]),e._v(" "),e._l(e.detailInfoData.genesis_block_witnesses,(function(t,o){return r("el-row",{key:o},[r("el-button",{staticStyle:{width:"100%"},on:{click:function(r){return e.currenWitenessFun(t,o)}}},[e._v(e._s(t.address))])],1)}))],2)])],1)],1):e._e()],1)],1)],1),e._v(" "),r("div",{staticClass:"textRight",attrs:{"label-width":"0"}},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.saveAllData()}}},[e._v(e._s(e.$t("tronSettingNextStep")))])],1),e._v(" "),r("el-dialog",{attrs:{center:"",width:"700px",title:e.$t("tronAssetSetting"),visible:e.innerAssetVisible},on:{"update:visible":function(t){e.innerAssetVisible=t}}},[r("el-form",{ref:"assetDialogForm",staticClass:"assetDialogForm",attrs:{rules:e.assetRules,model:e.assetForm,"label-width":"120px","label-position":"left"}},[r("el-form-item",{attrs:{label:"accountName",prop:"accountName"}},[r("el-input",{attrs:{size:"small",maxlength:50,placeholder:e.$t("tronAccountNamePlaceholder")},model:{value:e.assetForm.accountName,callback:function(t){e.$set(e.assetForm,"accountName",t)},expression:"assetForm.accountName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"accountType",prop:"accountType"}},[r("el-select",{attrs:{size:"small",placeholder:e.$t("tronAccountTypePlaceholder")},model:{value:e.assetForm.accountType,callback:function(t){e.$set(e.assetForm,"accountType",t)},expression:"assetForm.accountType"}},e._l(e.accountTypeOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"address",prop:"address"}},[r("el-input",{attrs:{size:"small",maxlength:50,placeholder:e.$t("tronAddressPlaceholder")},model:{value:e.assetForm.address,callback:function(t){e.$set(e.assetForm,"address",t)},expression:"assetForm.address"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"balance",prop:"balance"}},[r("el-input",{attrs:{size:"small",maxlength:50,placeholder:e.$t("tronBalancePlaceholder")},model:{value:e.assetForm.balance,callback:function(t){e.$set(e.assetForm,"balance",t)},expression:"assetForm.balance"}})],1),e._v(" "),r("el-form-item",{staticClass:"textRight",attrs:{"label-width":"0"}},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.saveData("assetDialogForm")}}},[e._v(e._s(e.$t("tronSettingSave")))]),e._v(" "),r("el-button",{attrs:{size:"small"},on:{click:function(t){e.innerAssetVisible=!1}}},[e._v(e._s(e.$t("tronSettingCancel")))])],1)],1)],1),e._v(" "),r("el-dialog",{attrs:{center:"",width:"700px",title:e.$t("tronWitenessSetting"),visible:e.innerWitenessVisible},on:{"update:visible":function(t){e.innerWitenessVisible=t}}},[r("el-form",{ref:"witenessDialogForm",attrs:{rules:e.witenessRules,model:e.witenessForm,"label-width":"120px","label-position":"left"}},[r("el-form-item",{attrs:{label:"address",prop:"address"}},[e._v("\n                "+e._s(e.witenessForm.address)+"\n                ")]),e._v(" "),r("el-form-item",{attrs:{label:"url",prop:"url"}},[e._v("\n                "+e._s(e.witenessForm.url)+"\n                ")]),e._v(" "),r("el-form-item",{attrs:{label:"voteCount",prop:"voteCount"}},[e._v("\n                "+e._s(e.witenessForm.voteCount)+"\n                ")])],1)],1)],1)},n=[],s=(r("ac6a"),r("93b6")),a=r("61f7"),i=r("d01b"),l=r.n(i),c={name:"genesisSetting",props:["detailInfoData"],data:function(){var e=this,t=function(t,r,o){Object(a["b"])(r)?o():o(new Error(e.$t("tronSettingNumberPlaceholder")))},r=function(t,r,o){r>0x8000000000000000||r<-0x8000000000000000?o(new Error(e.$t("tronSettingNumberPlaceholder"))):o()},o=function(t,r,o){l.a.isAddress(r)?o():o(new Error(e.$t("tronSettingAddressPlaceholder")))},n=function(t,r,o){var n=l.a.address.fromPrivateKey(r);console.log(n),l.a.isAddress(n)?o():o(new Error(e.$t("tronSettingAddressPlaceholder")))};return{classLoading:!1,genesisContentShow:!0,assetEditStatus:0,currentAssetEditInd:"",currentWitenessEditInd:"",witenessEditStatus:0,innerAssetVisible:!1,innerWitenessVisible:!1,genesisSetting:{genesis_block_assets:[],genesis_block_witnesses:[]},accountTypeOptions:[{value:"AssetIssue",label:"AssetIssue"},{value:"Contract",label:"Contract"}],assetRules:{accountName:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"}],accountType:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"}],address:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{required:!0,validator:o,trigger:"blur"}],balance:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{required:!0,validator:r,trigger:"blur"}]},assetForm:{accountName:"",accountType:"",address:"",balance:""},witenessRules:{address:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{required:!0,validator:o,trigger:"blur"}],url:{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},voteCount:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{required:!0,validator:t,trigger:"blur"}],privateKey:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{required:!0,validator:n,trigger:"blur"}]},witenessForm:{address:"",url:"",voteCount:"",privateKey:""}}},methods:{newAssetFun:function(){this.assetForm={accountName:"",accountType:"",address:"",balance:""},this.innerAssetVisible=!0},newWitenessFun:function(){this.witenessForm={address:"",url:"",voteCount:"",privateKey:""},this.innerWitenessVisible=!0},currentAssetFun:function(e,t){this.assetForm=e,this.assetEditStatus=1,this.currentAssetEditInd=t,this.innerAssetVisible=!0},currenWitenessFun:function(e,t){this.witenessForm=e,this.witenessEditStatus=1,this.currentWitenessEditInd=t,this.innerWitenessVisible=!0},saveData:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.assetForm),0==t.assetEditStatus?t.genesisSetting.genesis_block_assets.push(t.assetForm):t.genesisSetting.genesis_block_assets[t.currentAssetEditInd]=t.assetForm;var r={assets:t.genesisSetting.genesis_block_assets};console.log(r),Object(s["e"])(r).then((function(e){t.$emit("addSettingSuccess",!0),t.$message.success(t.$t("tronSettingGenesisSaveSuccess")),t.innerAssetVisible=!1,t.assetEditStatus=0})).catch((function(e){console.log(e)}))}))},saveWitenessData:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.witenessForm),0==t.witenessEditStatus?t.genesisSetting.genesis_block_witnesses.push(t.witenessForm):t.genesisSetting.genesis_block_witnesses[t.currentWitenessEditInd]=t.witenessForm,console.log(t.genesisSetting,"genesisSetting");var r=t.genesisSetting.genesis_block_assets,o=t.genesisSetting.genesis_block_witnesses;o.forEach((function(e){e.url='"'.concat(e.url,'"')}));var n={assets:r,witness:o};console.log(n)}))},saveAllData:function(){var e=this,t={assets:this.genesisSetting.genesis_block_assets};Object(s["e"])(t).then((function(t){e.$emit("addSettingSuccess",!0),e.$message.success(e.$t("tronSettingGenesisSaveSuccess"))})).catch((function(e){console.log(e)}))}},watch:{detailInfoData:function(e){this.baseSettingForm=this.detailInfoData,this.genesisSetting=this.detailInfoData}}},d=c,m=(r("fdba"),r("2877")),u=Object(m["a"])(d,o,n,!1,null,"04be3fc2",null);t["a"]=u.exports},"0c75":function(e,t,r){},1:function(e,t){},2:function(e,t){},"3a28":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"viewBranchDialog"},[r("el-form",{ref:"crossSettingDialogForm",staticClass:"tronbaseSettingForm",attrs:{rules:e.branchRules,model:e.baseSettingForm,"label-width":"200px","label-position":"left"}},[r("el-row",{attrs:{gutter:12}},[r("el-col",{attrs:{span:24}},[r("el-card",{attrs:{shadow:"hover"}},[r("div",{on:{click:function(t){e.baseContentShow=!e.baseContentShow}}},[r("i",{class:e.baseContentShow?"el-icon-arrow-down":"el-icon-arrow-right"}),e._v("\n                        "+e._s(e.$t("tronSettingHttp"))+"\n                    ")]),e._v(" "),e.baseContentShow?r("div",[r("el-form-item",{staticClass:"baseFormItem mgt20",attrs:{label:"maxHttpConnectNumber",prop:"node_maxHttpConnectNumber"}},[r("el-input",{attrs:{size:"small",maxlength:50,placeholder:e.$t("tronmaxHttpConnectNumberPlaceholder")},model:{value:e.baseSettingForm.node_maxHttpConnectNumber,callback:function(t){e.$set(e.baseSettingForm,"node_maxHttpConnectNumber",t)},expression:"baseSettingForm.node_maxHttpConnectNumber"}})],1),e._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"httpFullNodePort",prop:"node_http_fullNodePort"}},[r("el-input",{attrs:{size:"small",maxlength:50,placeholder:e.$t("tronhttpFullNodePortPlaceholder")},model:{value:e.baseSettingForm.node_http_fullNodePort,callback:function(t){e.$set(e.baseSettingForm,"node_http_fullNodePort",t)},expression:"baseSettingForm.node_http_fullNodePort"}})],1),e._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"httpSolidityPort",prop:"node_http_solidityPort"}},[r("el-input",{attrs:{size:"small",maxlength:50,placeholder:e.$t("tronhttpHttpSolidityPortPlaceholder")},model:{value:e.baseSettingForm.node_http_solidityPort,callback:function(t){e.$set(e.baseSettingForm,"node_http_solidityPort",t)},expression:"baseSettingForm.node_http_solidityPort"}})],1),e._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"rpcPort",prop:"node_rpc_port"}},[r("el-input",{attrs:{size:"small",maxlength:50,placeholder:e.$t("tronhttpRpcPortPlaceholder")},model:{value:e.baseSettingForm.node_rpc_port,callback:function(t){e.$set(e.baseSettingForm,"node_rpc_port",t)},expression:"baseSettingForm.node_rpc_port"}})],1),e._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"rpcSolidityPort",prop:"node_rpc_solidityPort"}},[r("el-input",{attrs:{size:"small",maxlength:50,placeholder:e.$t("tronhttpRpcSolidityPortPlaceholder")},model:{value:e.baseSettingForm.node_rpc_solidityPort,callback:function(t){e.$set(e.baseSettingForm,"node_rpc_solidityPort",t)},expression:"baseSettingForm.node_rpc_solidityPort"}})],1),e._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"listenPort",prop:"node_listen_port"}},[r("el-input",{attrs:{size:"small",maxlength:50,placeholder:e.$t("tronhttpRpcListenPortPlaceholder")},model:{value:e.baseSettingForm.node_listen_port,callback:function(t){e.$set(e.baseSettingForm,"node_listen_port",t)},expression:"baseSettingForm.node_listen_port"}})],1)],1):e._e()])],1)],1),e._v(" "),r("el-form-item",{staticClass:"textRight",attrs:{"label-width":"0"}},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.previousStepFun}},[e._v(e._s(e.$t("tronSettingPreviousStep")))]),e._v(" "),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.saveData("crossSettingDialogForm")}}},[e._v(e._s(e.$t("tronSettingNextStep")))])],1)],1)],1)},n=[],s=r("93b6"),a=r("61f7"),i={name:"networkSetting",props:["detailInfoData"],data:function(){var e=this,t=function(t,r,o){Object(a["b"])(r)?o():o(new Error(e.$t("tronSettingNumberPlaceholder")))};return{baseContentShow:!0,baseSettingForm:{node_maxHttpConnectNumber:"",node_http_solidityPort:"",node_http_fullNodePort:"",node_rpc_port:"",node_rpc_solidityPort:"",listenPort:""},branchRules:{node_maxHttpConnectNumber:[{required:!0,message:this.$t("tronmaxHttpConnectNumberPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:t,trigger:"blur"}],node_http_fullNodePort:[{required:!0,message:this.$t("tronhttpFullNodePortPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:t,trigger:"blur"}],node_http_solidityPort:[{required:!0,message:this.$t("tronhttpHttpSolidityPortPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:t,trigger:"blur"}],node_rpc_port:[{required:!0,message:this.$t("tronhttpRpcPortPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:t,trigger:"blur"}],node_rpc_solidityPort:[{required:!0,message:this.$t("tronhttpRpcSolidityPortPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:t,trigger:"blur"}],node_listen_port:[{required:!0,message:this.$t("tronhttpRpcListenPortPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:t,trigger:"blur"}]}}},methods:{previousStepFun:function(){this.$emit("previousSettingStep",!0)},saveData:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var r={maxHttpConnectNumber:t.baseSettingForm.node_maxHttpConnectNumber,rpcPort:t.baseSettingForm.node_rpc_port,rpcSolidityPort:t.baseSettingForm.node_rpc_solidityPort,httpFullNodePort:t.baseSettingForm.node_http_fullNodePort,httpSolidityPort:t.baseSettingForm.node_http_solidityPort,listenPort:t.baseSettingForm.node_listen_port};Object(s["f"])(r).then((function(e){t.$emit("addSettingSuccess",!0),t.$message.success(t.$t("tronSettingNetworkSaveSuccess")),t.dialogVisible=!1})).catch((function(e){console.log(e)}))}))}},watch:{detailInfoData:function(e){this.baseSettingForm=this.detailInfoData}}},l=i,c=(r("d704"),r("2877")),d=Object(c["a"])(l,o,n,!1,null,"73e819c0",null);t["a"]=d.exports},"647c":function(e,t,r){},"6b2b":function(e,t,r){"use strict";var o=r("0c75"),n=r.n(o);n.a},"75ef":function(e,t,r){},"82a2":function(e,t,r){},"9af9":function(e,t,r){"use strict";var o=r("ecfc"),n=r.n(o);n.a},"9e25":function(e,t,r){"use strict";var o=r("647c"),n=r.n(o);n.a},a4e7:function(e,t,r){},a673:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tronp2pSettingForm"},[r("el-form",{ref:"p2pSettingDialogForm",staticClass:"tronbaseSettingForm",attrs:{rules:e.p2pSettingRules,model:e.p2pSettingForm,"label-width":"250px","label-position":"left"}},[r("el-row",{attrs:{gutter:12}},[r("el-col",{attrs:{span:24}},[r("el-card",{attrs:{shadow:"hover"}},[r("div",{on:{click:function(t){e.baseContentShow=!e.baseContentShow}}},[r("i",{class:e.baseContentShow?"el-icon-arrow-down":"el-icon-arrow-right"}),e._v("\n                        "+e._s(e.$t("tronSettingP2p"))+"\n                    ")]),e._v(" "),e.baseContentShow?r("div",[r("el-form-item",{staticClass:"baseFormItem mgt20",attrs:{prop:"node_p2p_version"}},[r("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n                                p2pVersion\n                                "),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("tronp2pVersionPlaceholder"),placement:"top"}},[r("i",{staticClass:"iconfont icon-iconset0143"})])],1),e._v(" "),r("el-input",{attrs:{size:"small",maxlength:50,placeholder:e.$t("tronP2pVersionPlaceholder")},model:{value:e.p2pSettingForm.node_p2p_version,callback:function(t){e.$set(e.p2pSettingForm,"node_p2p_version",t)},expression:"p2pSettingForm.node_p2p_version"}})],1),e._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"seedNode",prop:"defalutSelectedIp"}},[r("el-checkbox-group",{attrs:{size:"small"},on:{change:e.checkBoxChangeFun},model:{value:e.p2pSettingForm.defalutSelectedIp,callback:function(t){e.$set(e.p2pSettingForm,"defalutSelectedIp",t)},expression:"p2pSettingForm.defalutSelectedIp"}},e._l(e.seedNodeIpList,(function(t,o){return r("el-checkbox",{key:o,staticClass:"checkBox",attrs:{label:t.ip}},[r("el-input",{attrs:{size:"small",placeholder:e.$t("tronSettingPortPlaceholder"),disabled:""},model:{value:t.port,callback:function(r){e.$set(t,"port",r)},expression:"item.port"}},[r("template",{staticStyle:{width:"100px"},slot:"prepend"},[e._v(e._s(t.ip))])],2)],1)})),1)],1),e._v(" "),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.moreSetting=!e.moreSetting}}},[e._v(e._s(e.$t("tronMoreSetting")))]),e._v(" "),e.moreSetting?r("div",[r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"maxActionNodes",prop:"node_maxActiveNodes"}},[r("el-input",{attrs:{size:"small",maxlength:50,placeholder:e.$t("tronMaxActionNodesPlaceholder")},model:{value:e.p2pSettingForm.node_maxActiveNodes,callback:function(t){e.$set(e.p2pSettingForm,"node_maxActiveNodes",t)},expression:"p2pSettingForm.node_maxActiveNodes"}})],1),e._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"maxActiveNodesWithSameIp",prop:"node_maxActiveNodesWithSameIp"}},[r("el-input",{attrs:{size:"small",maxlength:50,placeholder:e.$t("tronMaxActiveNodesWithSameIpPlaceholder")},model:{value:e.p2pSettingForm.node_maxActiveNodesWithSameIp,callback:function(t){e.$set(e.p2pSettingForm,"node_maxActiveNodesWithSameIp",t)},expression:"p2pSettingForm.node_maxActiveNodesWithSameIp"}})],1),e._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"activeConnectFactor",prop:"node_activeConnectFactor"}},[r("el-input-number",{attrs:{size:"small","controls-position":"right",min:0,step:.1,maxlength:50,placeholder:e.$t("tronSettingPlaceholder")},model:{value:e.p2pSettingForm.node_activeConnectFactor,callback:function(t){e.$set(e.p2pSettingForm,"node_activeConnectFactor",t)},expression:"p2pSettingForm.node_activeConnectFactor"}})],1),e._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"connectFactor",prop:"connectFactor"}},[r("el-input-number",{attrs:{size:"small","controls-position":"right",min:0,step:.1,maxlength:50,placeholder:e.$t("tronSettingPlaceholder")},model:{value:e.p2pSettingForm.connectFactor,callback:function(t){e.$set(e.p2pSettingForm,"connectFactor",t)},expression:"p2pSettingForm.connectFactor"}})],1)],1):e._e()],1):e._e()])],1)],1),e._v(" "),r("el-form-item",{staticClass:"textRight",attrs:{"label-width":"0"}},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.previousStepFun}},[e._v(e._s(e.$t("tronSettingPreviousStep")))]),e._v(" "),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.saveData("p2pSettingDialogForm")}}},[e._v(e._s(e.$t("tronSettingNextStep")))])],1)],1)],1)},n=[],s=(r("28a5"),r("ac6a"),r("db72")),a=r("2f62"),i=r("93b6"),l=r("61f7"),c={name:"p2pSettingDialog",props:["detailInfoData","listenPort","seedNodeIpList"],computed:Object(s["a"])({},Object(a["b"])(["tronSetting"])),data:function(){var e=this,t=function(t,r,o){Object(l["b"])(r)?o():o(new Error(e.$t("tronSettingNumberPlaceholder")))},r=function(t,r,o){11111==r?o(new Error(e.$t("tronp2pVersionMainnetPlaceholder"))):o()},o=function(t,r,o){20180622==r?o(new Error(e.$t("tronp2pVersionTestnetPlaceholder"))):o()},n=function(t,r,o){1==r?o(new Error(e.$t("tronp2pVersionSpecialPlaceholder"))):o()};return{baseContentShow:!0,moreSetting:!1,p2pSettingForm:{node_p2p_version:"",node_maxActiveNodes:"",node_maxActiveNodesWithSameIp:"",connectFactor:"",node_activeConnectFactor:""},checkedSeedNodeList:[],p2pSettingRules:{node_p2p_version:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:t,trigger:"blur"},{message:this.$t("tronp2pVersionMainnetPlaceholder"),validator:r,trigger:"blur"},{message:this.$t("tronp2pVersionTestnetPlaceholder"),validator:o,trigger:"blur"},{message:this.$t("tronp2pVersionSpecialPlaceholder"),validator:n,trigger:"blur"}],defalutSelectedIp:[{required:!0,message:this.$t("tronP2pSeedNodeSelectPlaceholder"),trigger:"blur"}],node_maxActiveNodes:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:t,trigger:"blur"}],node_maxActiveNodesWithSameIp:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:t,trigger:"blur"}],node_activeConnectFactor:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"}],connectFactor:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"}]}}},methods:{previousStepFun:function(){this.$emit("previousSettingStep",!0)},checkBoxChangeFun:function(e){console.log(e),this.checkedSeedNodeList=e},saveData:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var r={p2pVersion:t.p2pSettingForm.node_p2p_version,maxActiveNodes:t.p2pSettingForm.node_maxActiveNodes,nodeActiveConnectFactor:t.p2pSettingForm.node_activeConnectFactor,nodeMaxActiveNodesWithSameIp:t.p2pSettingForm.node_maxActiveNodesWithSameIp,connectFactor:t.p2pSettingForm.connectFactor},o=t.p2pSettingForm.seed_node_ip_list,n=[],s=[];o&&null!=o&&o.forEach((function(e){s.push(e.split(":")[0])})),t.p2pSettingForm.defalutSelectedIp.forEach((function(e){n.push("".concat(e,'":"').concat(t.listenPort))})),console.log(n,"passNodeData"),Object(i["h"])(r,n).then((function(e){t.$emit("addSettingSuccess",!0),t.$message.success(t.$t("tronSettingp2pSaveSuccess"))})).catch((function(e){console.log(e)}))}))}},watch:{detailInfoData:function(e){this.p2pSettingForm=Object(s["a"])({},this.detailInfoData),console.log(this.p2pSettingForm)}}},d=c,m=(r("6b2b"),r("2877")),u=Object(m["a"])(d,o,n,!1,null,"aa03f378",null);t["a"]=u.exports},c31b:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"viewBranchDialog"},[r("div",{staticClass:"tronp2pSettingForm"},[r("el-form",{ref:"dbSettingDialogForm",staticClass:"trondbSettingForm",attrs:{rules:e.dbSettingRules,model:e.dbSettingForm,"label-width":"250px","label-position":"left"}},[r("el-row",{attrs:{gutter:12}},[r("el-col",{attrs:{span:24}},[r("el-card",{attrs:{shadow:"hover"}},[r("div",{on:{click:function(t){e.baseContentShow=!e.baseContentShow}}},[r("i",{class:e.baseContentShow?"el-icon-arrow-down":"el-icon-arrow-right"}),e._v("\n                            "+e._s(e.$t("tronSettingDb"))+"\n                        ")]),e._v(" "),e.baseContentShow?r("div",[r("el-form-item",{staticClass:"mgt20",attrs:{label:e.$t("tronSettingwriteSynchronously"),prop:"storage_db_sync"}},[r("el-switch",{model:{value:e.dbSettingForm.storage_db_sync,callback:function(t){e.$set(e.dbSettingForm,"storage_db_sync",t)},expression:"dbSettingForm.storage_db_sync"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("tronSettingOpenTransaction"),prop:"storage_transHistory_switch"}},[r("el-switch",{attrs:{"active-value":"on","inactive-value":"off"},model:{value:e.dbSettingForm.storage_transHistory_switch,callback:function(t){e.$set(e.dbSettingForm,"storage_transHistory_switch",t)},expression:"dbSettingForm.storage_transHistory_switch"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("tronSelectDatabaseConfiguration"),prop:"storage_db_engine"}},[r("el-radio-group",{model:{value:e.dbSettingForm.storage_db_engine,callback:function(t){e.$set(e.dbSettingForm,"storage_db_engine",t)},expression:"dbSettingForm.storage_db_engine"}},[r("el-radio",{attrs:{label:"LEVELDB"}},[e._v("leveldb")]),e._v(" "),r("el-radio",{attrs:{label:"ROCKSDB"}},[e._v("rocksdb")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("tronSettingIndexDirectory"),prop:"storage_index_directory"}},[r("el-switch",{attrs:{"active-value":"index"},model:{value:e.dbSettingForm.storage_index_directory,callback:function(t){e.$set(e.dbSettingForm,"storage_index_directory",t)},expression:"dbSettingForm.storage_index_directory"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("tronSettingNeedToUpdateAsset"),prop:"storage_needToUpdateAsset"}},[r("el-switch",{model:{value:e.dbSettingForm.storage_needToUpdateAsset,callback:function(t){e.$set(e.dbSettingForm,"storage_needToUpdateAsset",t)},expression:"dbSettingForm.storage_needToUpdateAsset"}})],1)],1):e._e()])],1)],1),e._v(" "),r("el-form-item",{staticClass:"textRight",attrs:{"label-width":"0"}},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.previousStepFun}},[e._v(e._s(e.$t("tronSettingPreviousStep")))]),e._v(" "),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.saveData("dbSettingDialogForm")}}},[e._v(e._s(e.$t("tronSettingNextStep")))])],1)],1)],1)])},n=[],s=r("93b6"),a={name:"dbetting",props:["detailInfoData"],data:function(){return{baseContentShow:!0,dbSettingForm:{},radioVal:0,dbSettingRules:{storage_db_sync:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"change"}],storage_transHistory_switch:{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"change"},storage_db_engine:{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"change"},storage_index_directory:{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"change"},storage_needToUpdateAsset:{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"change"}}}},methods:{previousStepFun:function(){this.$emit("previousSettingStep",!0)},saveData:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var r={isDBSync:t.dbSettingForm.storage_db_sync,isOpenTransaction:t.dbSettingForm.storage_transHistory_switch,dbEnine:t.dbSettingForm.storage_db_engine,indexDirectory:t.dbSettingForm.storage_index_directory,needToUpdateAsset:t.dbSettingForm.storage_needToUpdateAsset};Object(s["d"])(r).then((function(e){t.$emit("addSettingSuccess",!0),t.$message.success(t.$t("tronSettingDBSaveSuccess"))})).catch((function(e){console.log(e)}))}))}},watch:{detailInfoData:function(e){this.dbSettingForm=this.detailInfoData}}},i=a,l=(r("9e25"),r("2877")),c=Object(l["a"])(i,o,n,!1,null,"ac5cd336",null);t["a"]=c.exports},c36a:function(e,t,r){"use strict";var o=r("75ef"),n=r.n(o);n.a},d704:function(e,t,r){"use strict";var o=r("82a2"),n=r.n(o);n.a},e2d6:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"viewBranchDialog"},[r("el-form",{ref:"baseSettingDialogForm",staticClass:"tronbaseSettingForm",attrs:{rules:e.branchRules,model:e.baseSettingForm,"label-width":"230px","label-position":"left"}},[r("el-row",{attrs:{gutter:12}},[r("el-col",{attrs:{span:24}},[r("el-card",{attrs:{shadow:"hover"}},[r("div",{on:{click:function(t){e.baseContentShow=!e.baseContentShow}}},[r("i",{class:e.baseContentShow?"el-icon-arrow-down":"el-icon-arrow-right"}),e._v("\n                        "+e._s(e.$t("tronSettingBase"))+"\n                    ")]),e._v(" "),e.baseContentShow?r("div",[r("el-form-item",{staticClass:"baseFormItem mgt20",attrs:{label:"chainId",prop:"chainId"}},[r("el-input",{attrs:{size:"small",maxlength:50,placeholder:e.$t("tronChainIdPlaceholder")},model:{value:e.baseSettingForm.chainId,callback:function(t){e.$set(e.baseSettingForm,"chainId",t)},expression:"baseSettingForm.chainId"}})],1),e._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"chainName",prop:"chainName"}},[r("el-input",{attrs:{size:"small",maxlength:50,placeholder:e.$t("tronChainNamePlaceholder")},model:{value:e.baseSettingForm.chainName,callback:function(t){e.$set(e.baseSettingForm,"chainName",t)},expression:"baseSettingForm.chainName"}})],1),e._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"MaintenanceTimeInterval",prop:"block_maintenanceTimeInterval"}},[r("el-input",{attrs:{size:"small",maxlength:50,placeholder:e.$t("tronblockBlockMaintenanceTimeIntervalPlaceholder")},model:{value:e.baseSettingForm.block_maintenanceTimeInterval,callback:function(t){e.$set(e.baseSettingForm,"block_maintenanceTimeInterval",t)},expression:"baseSettingForm.block_maintenanceTimeInterval"}})],1),e._v(" "),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.moreSetting=!e.moreSetting}}},[e._v(e._s(e.$t("tronMoreSetting")))]),e._v(" "),e.moreSetting?r("div",[r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"blockProducedTimeOut",prop:"block_proposalExpireTime"}},[r("el-input",{attrs:{size:"small",maxlength:50,placeholder:e.$t("tronblockProducedTimeOutePlaceholder")},model:{value:e.baseSettingForm.block_proposalExpireTime,callback:function(t){e.$set(e.baseSettingForm,"block_proposalExpireTime",t)},expression:"baseSettingForm.block_proposalExpireTime"}})],1),e._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"nodeBlockProducedTimeOut",prop:"node_blockProducedTimeOut"}},[r("el-input",{attrs:{size:"small",maxlength:50,placeholder:e.$t("tronblockNodeBlockProducedTimeOutPlaceholder")},model:{value:e.baseSettingForm.node_blockProducedTimeOut,callback:function(t){e.$set(e.baseSettingForm,"node_blockProducedTimeOut",t)},expression:"baseSettingForm.node_blockProducedTimeOut"}})],1),e._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"nodeMinParticipationRate",prop:"node_minParticipationRate"}},[r("el-input",{attrs:{size:"small",maxlength:50,placeholder:e.$t("tronblockNodeMinParticipationRatePlaceholder")},model:{value:e.baseSettingForm.node_minParticipationRate,callback:function(t){e.$set(e.baseSettingForm,"node_minParticipationRate",t)},expression:"baseSettingForm.node_minParticipationRate"}})],1)],1):e._e()],1):e._e()])],1)],1),e._v(" "),r("el-form-item",{staticClass:"textRight",attrs:{"label-width":"0"}},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.previousStepFun}},[e._v(e._s(e.$t("tronSettingPreviousStep")))]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.saveData("baseSettingDialogForm")}}},[e._v(e._s(e.$t("tronSettingNextStep")))])],1)],1)],1)},n=[],s=r("93b6"),a=r("61f7"),i={name:"baseSetting",props:["detailInfoData","editStatus"],data:function(){var e=this,t=function(t,r,o){Object(a["b"])(r)?o():o(new Error(e.$t("tronSettingNumberPlaceholder")))};return{classLoading:!1,moreSetting:!1,baseSettingForm:{},baseContentShow:!0,branchRules:{chainId:[{required:!0,message:this.$t("tronChainIdPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:t,trigger:"blur"}],chainName:[{required:!0,message:this.$t("tronChainNamePlaceholder"),trigger:"blur"}],block_proposalExpireTime:[{required:!0,message:this.$t("tronblockProducedTimeOutePlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:t,trigger:"blur"}],block_maintenanceTimeInterval:[{required:!0,message:this.$t("tronblockBlockMaintenanceTimeIntervalPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:t,trigger:"blur"}],node_blockProducedTimeOut:[{required:!0,message:this.$t("tronblockNodeBlockProducedTimeOutPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:t,trigger:"blur"}],node_minParticipationRate:[{required:!0,message:this.$t("tronblockNodeMinParticipationRatePlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:t,trigger:"blur"}]}}},methods:{previousStepFun:function(){this.$emit("previousSettingStep",!0)},saveData:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.baseSettingForm);var r={chainId:t.baseSettingForm.chainId,chainName:t.baseSettingForm.chainName,blockProducedTimeOut:t.baseSettingForm.node_blockProducedTimeOut,maintenanceTimeInterval:t.baseSettingForm.block_maintenanceTimeInterval,proposalExpireTime:t.baseSettingForm.block_proposalExpireTime,minParticipationRate:t.baseSettingForm.node_minParticipationRate};Object(s["a"])(r).then((function(e){t.$emit("addSettingSuccess",!0),t.$message.success(t.$t("tronSettingBaseSaveSuccess"))})).catch((function(e){console.log(e)}))}))}},watch:{detailInfoData:function(e){this.baseSettingForm=this.detailInfoData}}},l=i,c=(r("c36a"),r("2877")),d=Object(c["a"])(l,o,n,!1,null,"7fc1a900",null);t["a"]=d.exports},eae2:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"viewBranchDialog"},[r("el-form",{ref:"crossSettingDialogForm",staticClass:"tronbaseSettingForm",attrs:{rules:e.branchRules,model:e.baseSettingForm,"label-width":"200px","label-position":"left"}},[r("el-row",{attrs:{gutter:12}},[r("el-col",{attrs:{span:24}},[r("el-card",{attrs:{shadow:"hover"}},[r("div",{on:{click:function(t){e.baseContentShow=!e.baseContentShow}}},[r("i",{class:e.baseContentShow?"el-icon-arrow-down":"el-icon-arrow-right"}),e._v("\n                        "+e._s(e.$t("tronCrossChain"))+"\n                    ")]),e._v(" "),e.baseContentShow?r("div",[r("el-form-item",{staticClass:"baseFormItem mgt20",attrs:{label:"enableCrossChain",prop:"enableCrossChain"}},[r("el-switch",{attrs:{size:"small","active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.baseSettingForm.enableCrossChain,callback:function(t){e.$set(e.baseSettingForm,"enableCrossChain",t)},expression:"baseSettingForm.enableCrossChain"}})],1),e._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"maxValidatorNumber",prop:"maxValidatorNumber"}},[r("el-input",{attrs:{size:"small",maxlength:50,placeholder:e.$t("tronMaxValidatorNumberPlaceholder")},model:{value:e.baseSettingForm.maxValidatorNumber,callback:function(t){e.$set(e.baseSettingForm,"maxValidatorNumber",t)},expression:"baseSettingForm.maxValidatorNumber"}})],1),e._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"minValidatorNumber",prop:"minValidatorNumber"}},[r("el-input",{attrs:{size:"small",maxlength:50,placeholder:e.$t("tronMinValidatorNumberPlaceholder")},model:{value:e.baseSettingForm.minValidatorNumber,callback:function(t){e.$set(e.baseSettingForm,"minValidatorNumber",t)},expression:"baseSettingForm.minValidatorNumber"}})],1),e._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"crossChainFee",prop:"crossChainFee"}},[r("el-input-number",{attrs:{size:"small","controls-position":"right",min:0,step:.01,maxlength:50,placeholder:e.$t("tronSettingPlaceholder")},model:{value:e.baseSettingForm.crossChainFee,callback:function(t){e.$set(e.baseSettingForm,"crossChainFee",t)},expression:"baseSettingForm.crossChainFee"}})],1)],1):e._e()])],1)],1),e._v(" "),r("el-form-item",{staticClass:"textRight",attrs:{"label-width":"0"}},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.previousStepFun}},[e._v(e._s(e.$t("tronSettingPreviousStep")))]),e._v(" "),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.saveData("crossSettingDialogForm")}}},[e._v(e._s(e.$t("tronSettingNextStep")))])],1)],1)],1)},n=[],s=(r("96cf"),r("3b8d")),a=r("93b6"),i=r("61f7"),l={name:"corssChain",props:["detailInfoData"],data:function(){var e=this,t=function(t,r,o){Object(i["b"])(r)?o():o(new Error(e.$t("tronSettingNumberPlaceholder")))},r=function(t,r,o){e.baseSettingForm.minValidatorNumber&&r<e.baseSettingForm.minValidatorNumber?o(new Error(e.$t("tronSettingMaxNumberPlaceholder"))):o()},o=function(t,r,o){e.baseSettingForm.maxValidatorNumber&&r>e.baseSettingForm.maxValidatorNumber?o(new Error(e.$t("tronSettingMinNumberPlaceholder"))):o()},n=function(t,r,o){Object(i["c"])(r)?o():o(new Error(e.$t("validTwoDecimal")))};return{baseContentShow:!0,baseSettingForm:{},branchRules:{enableCrossChain:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"change"}],maxValidatorNumber:[{required:!0,message:this.$t("tronMaxValidatorNumberPlaceholder"),trigger:"change"},{message:this.$t("tronSettingNumberPlaceholder"),validator:t,trigger:"blur"},{message:this.$t("tronSettingMaxNumberPlaceholder"),validator:r,trigger:"blur"}],minValidatorNumber:[{required:!0,message:this.$t("tronMinValidatorNumberPlaceholder"),trigger:"change"},{message:this.$t("tronSettingNumberPlaceholder"),validator:t,trigger:"blur"},{message:this.$t("tronSettingMinNumberPlaceholder"),validator:o,trigger:"blur"}],crossChainFee:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"change"},{message:this.$t("tronSettingNumberTwoDecimal"),validator:n,trigger:"blur"}]}}},methods:{previousStepFun:function(){this.$emit("previousSettingStep",!0)},saveData:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;Object(a["c"])(t.baseSettingForm).then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$emit("addSettingSuccess",!0),t.$message.success(t.$t("tronSettingCrossChainSaveSuccess")),e.next=4,t.$store.dispatch("user/changeRoles","plugin").then((function(e){console.log(e)}));case 4:t.$router.push({path:"/plugin/list"});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}))}},watch:{detailInfoData:function(e){this.baseSettingForm=this.detailInfoData}}},c=l,d=(r("9af9"),r("2877")),m=Object(d["a"])(c,o,n,!1,null,"7fac64b4",null);t["a"]=m.exports},ecfc:function(e,t,r){},fdba:function(e,t,r){"use strict";var o=r("a4e7"),n=r.n(o);n.a}}]);