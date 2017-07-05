/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var wulechuanImpartationOperator = __webpack_require__(1);
	console.log(wulechuanImpartationOperator);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	function WulechuanImpartationOperator(){function e(e,n){Object.defineProperty(re,n,{enumerable:!0,get:function(){return t(w),pe()}})}function t(e){w=e,he.setPreferredNaturalLanguageTo(e),le.setPreferredNaturalLanguageTo(e)}function n(e){return{isNeitherAnObjectNorAnArray:function(){return!e||"object"!=typeof e},isAValidObject:function(){return!!e&&"object"==typeof e&&!Array.isArray(e)},isNotAValidObject:function(){return!n(e).isAValidObject()},isAnArray:function(){return Array.isArray(e)},isNotAnArray:function(){return!Array.isArray(e)},isAnEmptyString:function(){return!e&&"string"==typeof e},isANonEmptyString:function(){return!!e&&"string"==typeof e},isAValidKey:function(){return n(e).isANonEmptyString()},isNotAValidKey:function(e){return!n(e).isAnValidKey(e)}}}function r(e){var t,r,a="Unkown error occurred.";if(e)if("string"==typeof e)a=e;else if("object"==typeof e&&!Array.isArray(e)){var o=e[w];if(n(o).isANonEmptyString())a=o;else for(var i in e)if(o=e[i],n(o).isANonEmptyString()){t=!0,r=i,a=o;break}}if(t&&(a="["+r+"] "+a),O)throw TypeError("\n"+a);console.error(TypeError("\n"+a))}function a(e,t){if(n(e).isAValidObject()&&n(t).isAValidObject())for(var r in t)t[r]&&(e[r]=t[r]);return e}function o(){}function i(e){n(e).isNeitherAnObjectNorAnArray()?(r({"zh-CN":"首个参数必须为一个非空对象，可以为数组对象。\n而实际提供的首个参数是一个"+typeof e+"。","en-US":"The provided source must be an object that is not a null. An array object is allowed. \nWhat's actually provided was of type: "+typeof e+"."}),le.stop()):P=e}function s(e){"function"!=typeof e?(r({"zh-CN":"首个参数必须为一个函数。其将被视为一个构造函数以构造一个对象。该对象之属性和方法将被传授给受封者。\n而实际提供的首个参数是一个"+typeof e+"。","en-US":"The provided source must be a function, which will be used as a constructor to create the object to impart to a grantee.\nWhat's actually provided was of type: "+typeof e+"."}),he.stop()):U=e,n(z=U[Z]).isNotAValidObject()&&(z={}),f($)&&(V=z[$],T=$,ae=!1,oe=!0)}function u(e){C=e}function d(){P=new U(C)}function c(e){f(e)?(V=z[e],T=e,ae=!1,oe=!1):("string"!=typeof e&&(e=typeof e),r({"zh-CN":"未找到指定的变体。输入参数为：“"+e+"”。","en-US":'The desired profile name was invalid. No profile was matched by that name. \nThe input was "'+e+'".'}),he.stop())}function f(e){return!n(e).isANotValidKey()&&n(z[e]).isAValidObject()}function h(e){n(e).isAValidObject()?a(ie,e):(he.stop(),le.stop())}function l(e){n(e).isAValidObject()?a(se,e):(he.stop(),le.stop())}function p(e){return n(e).isNeitherAnObjectNorAnArray()?(r({"zh-CN":"受封者必须是一个标准对象或数组，且不可为空对象（null）。","en-US":"The grantee to impart methods and properties to must be an object or an array, and not a null."}),he.stop(),void le.stop()):(E=e,y()?P:void 0)}function y(){return b(),I?(S(),m(),!0):(A(),!1)}function A(){var e='\n\t"'+[H[0],J[0]].join('\n\t"')+'"\n',t="而每欲传授对象至它物，该对象本身作为受封物之属性，亦须定名。请采用以下任意方法函数为其定名："+e,n="Note that an object to impart, as it would be an attribute of the grantee, needs a name itself.\nPlease use any of these methods below to give it a name:"+e;r(ae?{"zh-CN":"所给出的“类”没有名为“"+$+"”的默认变体。程序亦未指定采用其它变体。现欲传授该类之实例对象至它物，其传授后之名称却未知。"+t,"en-US":"The class doesn't have the default profile, which should have been named \""+$+'". You are allowed not to use the default profile. But... '+n}:oe?{"zh-CN":"所给出的“类”的默认变体（即，“"+$+"”）被采用，但该变体未指明奖被传授之实例对象所应采用之名称。"+t,"en-US":'For the given class, the "'+$+'" profile is used, while the profile does not provide the attribute name for the instance object. '+n}:{"zh-CN":"行将传授所给出“对象”之属性至它物，其传授后之名称却未知。"+t,"en-US":"The given object is about to impart to the grantee, but the attribute name is not provided yet."+n})}function b(){V&&(N(V[ne]),g(T[ee],!0),g(T[te],!1)),N(ie[ne]),delete ie[ne],g(ie,!0),g(se,!1)}function N(e){n(e).isAValidKey()&&(I=e)}function g(e,t){var a,o;if(!n(e).isNotAValidObject()){t?(a=ue,o=de):(a=ce,o=fe);var i,s,u,d,c,f;for(var h in e)if(!n(h).isNotAValidKey())if((i=P.hasOwnProperty(h))?(u=h,s=!1):(u=o[h])&&(s=!0),i||s){n(d=e[h]).isNotAnArray()&&(d=[d]),n(a[u]).isNotAValidObject()&&(a[u]={}),c=a[u];for(var l=0;l<d.length;l++)f=d[l],P.hasOwnProperty(f)?f!==u&&(r({"zh-CN":"所选别名“‘"+f+"”与另一属性重名。","en-US":'The alias "'+f+'" is actually another existing attribute.'}),he.stop(),le.stop()):f===h||(c[f]=!0,o[f]=u)}else r({"zh-CN":"给定对象或给定类之实例没有名为“"+h+"”的属性;同时也没有此别名。","en-US":"The provided object, or the instance of the provided class doesn't have an attribute named \""+h+'".Nor does an alias match this caption.'}),he.stop(),le.stop()}}function S(){for(var e in de){var t=de[e];"function"==typeof P[t]?v(t,e,P):j(t,e,P)}}function m(){for(var e in fe){var t=fe[e];"function"==typeof P[t]?v(t,e,E):j(t,e,E)}}function v(e,t,n){Object.defineProperty(n,t,{enumerable:!0,get:function(){return P[e]}})}function j(e,t,n){Object.defineProperty(n,t,{enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}})}var O,w,U,C,z,T,V,P,I,E,K=__webpack_require__(2),F="__startToImpart__",W=["此对象"],_=["theObject"],k=["此类"],x=["anInstanceOf","anInstanceOfClass"],D=["依据"],G=["withTheseOptions"],L=["之实例","之实例对象","构建之实例","构建之实例对象"],q=["whenConstructed"],B=["视作"],Y=["as","treatAs","usingThisProfile"],H=["且定名为","并添加以下别名"],J=["named","addAliasesForThese","addAliasesForAttributes"],M=["且设以下直接可用之属性"],Q=["addAttributesDirectlyUnderGrantee"],R=["予"],X=["to"],Z="wulechuanImpartationProfiles",$="default",ee="attributesAliasesToAdd",te="attributesToAddDirectlyUnderGrantee",ne="propertyNameForTheObjectItself",re=this,ae=!0,oe=!1,ie={},se={},ue={},de={},ce={},fe={},he=function(){var e=new K(re);return e.addStage(o,{"zh-CN":[F],"en-US":[F]}),e.addStage(s,{"zh-CN":k,"en-US":x}),e.addStage(u,!0,{"zh-CN":D,"en-US":G}),e.addStage(d,{"zh-CN":L,"en-US":q}),e.addStage(c,!0,{"zh-CN":B,"en-US":Y}),e.addStage(h,!0,{"zh-CN":H,"en-US":J}),e.addStage(l,!0,{"zh-CN":M,"en-US":Q}),e.addStage(p,{"zh-CN":R,"en-US":X}),e}(),le=function(){var e=new K(re);return e.addStage(o,{"zh-CN":[F],"en-US":[F]}),e.addStage(i,{"zh-CN":W,"en-US":_}),e.addStage(h,!0,{"zh-CN":H,"en-US":J}),e.addStage(l,!0,{"zh-CN":M,"en-US":Q}),e.addStage(p,{"zh-CN":R,"en-US":X}),he}(),pe=re[F];delete re[F],e(0,"传授"),e(0,"impart")}var wulechuanImpartationOperator=new WulechuanImpartationOperator;module.exports=wulechuanImpartationOperator;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	function WulechuanApplyOneStageOneMethodProgrammingPatternTo(e){function a(e){return Array.isArray(e)&&e.length>1}function n(a,n,o){if("function"!=typeof a)throw TypeError('A so-called stage is basically a function, with some associated aliases just for conveniences, which not only does some demonded work but also exposes subsequence stages and hides past stages for a given stages operator. Among them, the demonded work is provided by you developer via the first argument, So, when defining a stage, the first argument must be a function, \nwhile the provided value was of type "'+typeof a+'".');2===arguments.length&&(o=n,n=!1),t(o);var r=m.length;o.stageIndex=r,o.usingLanguage="";var i={actionAliases:o,allowsToSkip:n,action:function(){if(c)return r===m.length-1?void 0:e;w=r;var n=a.apply(e,arguments);return s(),r===m.length-1?n:e}};return m.push(i),i}function t(e){var n=!1;if(!e||"object"!=typeof e)throw TypeError("The action aliases argument must be an object, containing at least one alias which is marked as in a specified language.");for(var t in e){var o=e[t];o&&"string"==typeof o&&(e[t]=[o],o=e[t]),a(o)&&(n=!0,!T[t]&&(b.push(t),T[t]=!0))}if(!n)throw TypeError("At least one alias is required for a stage action to publish as a method.")}function o(e,n){var t=e[n];if(a(t))return e.usingLanguage=n,t;var o,r=!1;for(o in e)if(t=e[o],a(t)){r=!0,e.usingLanguage=o;break}if(!r)throw ReferenceError("No valid aliases in any language for stage "+e.stageIndex+"!");return console.warn("For stage",e.stageIndex,', none of the aliases is in the preferred language ("'+n+'").','\nInstead, aliases in "'+o+'" are exposed as methods.'),t}function r(e){if(!e)throw TypeError("Must specify the natural language to use.");h=e,g()}function i(){m[0].action.apply(e,arguments)}function s(){u(),m[w].action.apply(e,arguments),0===w&&l(1)}function u(){for(var a=0;a<=w;a++)for(var n=m[a].actionAliases,t=n[n.usingLanguage],o=0;o<t.length;o++){var r=t[o];delete e[r]}}function g(){m.length<1||h&&(y[v]=i,f(0,1))}function l(e){var a,n=m.length;for(a=e;a<m.length-1;a++)if(!m[a].allowsToSkip){n=a+1;break}f(e,n)}function f(a,n){for(var t=a;t<n;t++)for(var r=m[t],i=r.action,s=o(r.actionAliases,h),u=0;u<s.length;u++){var g=s[u];e[g]=i}}var c,h,p="addStage",d="setPreferredNaturalLanguageTo",v="startFromFirstStage",y=this,m=[],w=NaN,b=[],T={};y[p]=function(e,a,t){c=!1,n(e,a,t),y[p]=n,y[d]=r,g()},y[d]=r,y.stop=function(){c=!0,console.error("The process is stopped at stage",w)}}module.exports=WulechuanApplyOneStageOneMethodProgrammingPatternTo;

/***/ })
/******/ ]);