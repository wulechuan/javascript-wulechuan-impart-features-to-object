!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){window.WulechuanImpartationOperator=n(1),window.iop=new window.WulechuanImpartationOperator,window.iop.impart,console.log(window.iop)},function(e,t,n){e.exports=n(2)},function(e,t,n){function r(){function e(e){return t(e),r(),de}function t(e){O=e,ve.setPreferredNaturalLanguageTo(e),me.setPreferredNaturalLanguageTo(e)}function r(e){for(var t in R)if(t!==e){var n=R[t];delete de[n]}}function a(e){return{isAFunction:function(){return"function"==typeof e},isNotAFunction:function(){return"function"!=typeof e},isNeitherAnObjectNorAnArray:function(){return!e||"object"!=typeof e},isAValidObject:function(){return!!e&&"object"==typeof e&&!Array.isArray(e)},isNotAValidObject:function(){return!a(e).isAValidObject()},isAnArray:function(){return Array.isArray(e)},isNotAnArray:function(){return!Array.isArray(e)},isAnEmptyString:function(){return!e&&"string"==typeof e},isANonEmptyString:function(){return!!e&&"string"==typeof e},isAValidKey:function(){return a(e).isANonEmptyString()},isNotAValidKey:function(){return!a(e).isAValidKey()}}}function o(e){var t,n,r="Unkown error occurred.";if(e)if("string"==typeof e)r=e;else if("object"==typeof e&&!Array.isArray(e)){var o=e[O];if(a(o).isANonEmptyString())r=o;else for(var i in e)if(o=e[i],a(o).isANonEmptyString()){t=!0,n=i,r=o;break}}if(t&&(r="["+n+"] "+r),U)throw TypeError("\n"+r);console.error(TypeError("\n"+r))}function i(e,t){if(a(e).isAValidObject()&&a(t).isAValidObject())for(var n in t)t[n]&&(e[n]=t[n]);return e}function s(e){a(e).isNeitherAnObjectNorAnArray()?(o({"zh-CN":"首个参数必须为一个非空对象，可以为数组对象。\n而实际提供的首个参数是一个"+typeof e+"。","en-US":"The provided source must be an object that is not a null. An array object is allowed. \nWhat's actually provided was of type: "+typeof e+"."}),me.abort()):P=e}function u(e){a(e).isNotAFunction()?(o({"zh-CN":"首个参数必须为一个函数。其将被视为一个构造函数以构造一个对象。该对象之属性和方法将被传授给受封者。\n而实际提供的首个参数是一个"+typeof e+"。","en-US":"The provided source must be a function, which will be used as a constructor to create the object to impart to a grantee.\nWhat's actually provided was of type: "+typeof e+"."}),ve.abort()):(a(x=(z=e)[ae]).isNotAValidObject()&&(x={}),l(oe)&&(V=x[oe],E=oe,he=!1,pe=!0))}function f(e){F=e}function c(){P=new z(F)}function d(e){l(e)?(V=x[e],E=e,he=!1,pe=!1):("string"!=typeof e&&(e=typeof e),o({"zh-CN":"未找到指定的变体。输入参数为：“"+e+"”。","en-US":'The desired profile name was invalid. No profile was matched by that name. \nThe input was "'+e+'".'}),ve.abort())}function l(e){return!a(e).isNotAValidKey()&&a(x[e]).isAValidObject()}function h(e){if(a(e).isANonEmptyString()){var t={};t[ue]=e,e=t}a(e).isAValidObject()?i(ge,e):(ve.abort(),me.abort())}function p(e){a(e).isAFunction()&&(I=e)}function g(e){a(e).isAValidObject()?i(ye,e):(ve.abort(),me.abort())}function y(e){return a(e).isNeitherAnObjectNorAnArray()?(o({"zh-CN":"受封者必须是一个标准对象或数组，且不可为空对象（null）。","en-US":"The grantee to impart methods and properties to must be an object or an array, and not a null."}),ve.abort(),void me.abort()):(L=e,b()?P:void 0)}function b(){return A(),N(),S(),j(),!0}function A(){if(V){if(v(V[ue]),a(I).isAFunction()){var e=V[fe];a(e).isAFunction()&&(I=e)}m(E[ie],!0),m(E[se],!1)}v(ge[ue]),delete ge[ue],m(ge,!0),m(ye,!1)}function v(e){a(e).isAValidKey()&&(k=e)}function m(e,t){var n;if(!a(e).isNotAValidObject()){n=t?be:Ae;var r,i,s,u,f,c,d,l,h,p;for(r in e)if(!a(r).isNotAValidKey()){if(c="",s=!1,(i=P.hasOwnProperty(r))?c=r:(d=n[r])&&(s=!0,(l=a(d).isAFunction())||(c=d)),u=e[r],f=a(u).isAFunction()){if(s){o({"zh-CN":"名称“"+r+"”"+(l?"已另有函数定义其内容，":"已定义为属性“"+d+"”之别名，")+"不应再以一函数重新定义之。","en-US":'The caption "'+r+'"'+(l?"is already defined via another function, ":'is already mapped to the attribute "'+d+'" as an alias of its, ')+"and should not be redefined."}),ve.abort(),me.abort();continue}}else if(!i&&!s){o({"zh-CN":"给定对象或给定类之实例没有名为“"+r+"”的属性;同时也没有此别名。","en-US":"The provided object, or the instance of the provided class doesn't have an attribute named \""+r+'".Nor does an alias match this caption.'}),ve.abort(),me.abort();continue}a(u).isNotAnArray()&&(p=[u]);for(var g=0;g<p.length;g++)h=p[g],P.hasOwnProperty(h)?h!==c&&(o({"zh-CN":"所选别名“‘"+h+"”与另一属性重名。","en-US":'The alias "'+h+'" is actually another existing attribute.'}),ve.abort(),me.abort()):h===r||(n[h]=f?u:c)}}}function N(){if(!k)return w(),!1;var e={enumerable:!0,get:function(){return P}};a(I).isAFunction()&&(e.set=function(e){I(P,e)}),Object.defineProperty(L,k,e)}function w(){var e='\n\t"'+[Q[0],X[0],X[1]].join('\n\t"')+'"\n',t="而每欲传授对象至它物，该对象本身作为受封物之属性，亦须定名。请采用以下任意方法函数为其定名："+e,n="Note that an object to impart, as it would be an attribute of the grantee, needs a name itself.\nPlease use any of these methods below to give it a name:"+e;o(he?{"zh-CN":"所给出的“类”没有名为“"+oe+"”的默认变体。程序亦未指定采用其它变体。现欲传授该类之实例对象至它物，其传授后之名称却未知。"+t,"en-US":"The class doesn't have the default profile, which should have been named \""+oe+'". You are allowed not to use the default profile. But... '+n}:pe?{"zh-CN":"所给出的“类”的默认变体（即，“"+oe+"”）被采用，但该变体未指明奖被传授之实例对象所应采用之名称。"+t,"en-US":'For the given class, the "'+oe+'" profile is used, while the profile does not provide the attribute name for the instance object. '+n}:{"zh-CN":"行将传授所给出“对象”之属性至它物，其传授后之名称却未知。"+t,"en-US":"The given object is about to impart to the grantee, but the attribute name is not provided yet."+n})}function S(){for(var e in be){var t=be[e];a(t).isAFunction()?C(P,e,t,null):T(t,e,P)}}function j(){for(var e in Ae){var t=Ae[e];a(t).isAFunction()?C(L,e,t,P):T(t,e,L)}}function T(e,t,n){var r={enumerable:!0,get:function(){return P[e]}};a(P[e]).isNotAFunction()&&(r.set=function(t){P[e]=t});for(var o=0;o<ce.length;o++)t=t.replace(ce[o],k);Object.defineProperty(n,t,r)}function C(e,t,n,r){a(r).isAValidObject()&&(n=n.bind(r)),e[t]=n}var U,O,z,F,x,E,V,P,I,k,L,K=n(3),R={"zh-CN":"传授","en-US":"impart"},W=["对象","此对象"],B=["theObject"],q=["类","此类"],D=["anInstanceOf","anInstanceOfClass"],G=["依据"],$=["withTheseOptions"],M=["之实例","之实例对象","构建之实例","构建之实例对象"],Y=["whenConstructed"],H=["视作"],J=["as","treatAs","usingThisProfile"],Q=["且定名为","并添加以下别名"],X=["nameIt","nameItself","addAliasesForThese","addAliasesForAttributes"],Z=["并以此函数为主属性之setter","主属性之赋值器为"],_=["withASetterForTheChiefProperty","useThisSetterForTheChiefProperty","theChiefPropertySetterBeing"],ee=["且为受体设以下直接可用之属性"],te=["addAttributesDirectlyUnderGrantee"],ne=["予"],re=["to"],ae="wulechuanImpartationProfiles",oe="default",ie="attributesAliasesToAdd",se="attributesToAddDirectlyUnderGrantee",ue="chiefPropertyNameForTheObjectItself",fe="chiefPropertySetter",ce=[new RegExp("\\$\\{主名称\\}","g"),new RegExp("\\$\\{[cC]hief[nN]ame\\}","g")],de=this,le={},he=!0,pe=!1,ge={},ye={},be={},Ae={},ve=function(){var e=new K(de,O);return e.addStage(u,{"zh-CN":q,"en-US":D}),e.addStage(f,!0,{"zh-CN":G,"en-US":$}),e.addStage(c,{"zh-CN":M,"en-US":Y}),e.addStage(d,!0,{"zh-CN":H,"en-US":J}),e.addStage(h,!0,{"zh-CN":Q,"en-US":X}),e.addStage(p,!0,{"zh-CN":Z,"en-US":_}),e.addStage(g,!0,{"zh-CN":ee,"en-US":te}),e.addStage(y,{"zh-CN":ne,"en-US":re}),e}(),me=function(){var e=new K(de,O);return e.addStage(s,{"zh-CN":W,"en-US":B}),e.addStage(h,!0,{"zh-CN":Q,"en-US":X}),ve.addStage(p,!0,{"zh-CN":Z,"en-US":_}),e.addStage(g,!0,{"zh-CN":ee,"en-US":te}),e.addStage(y,{"zh-CN":ne,"en-US":re}),ve}();!function(){for(var t in R)le[t]||(le[t]=function(t){return e.bind(de,t)}(t))}(),function(){for(var e in R){var t=R[e];Object.defineProperty(de,t,{configurable:!0,enumerable:!0,get:le[e]})}}()}e.exports=r},function(e,t){function n(e,t){function n(e){return Array.isArray(e)&&e.length>0}function r(t,n,r){if("function"!=typeof t)throw TypeError('A so-called stage is basically a function, with some associated aliases just for conveniences, which not only does some demonded work but also exposes subsequence stages and hides past stages for a given stages operator. Among them, the demonded work is provided by you developer via the first argument, So, when defining a stage, the first argument must be a function, \nwhile the provided value was of type "'+typeof t+'".');2===arguments.length&&(r=n,n=!1);var o=a(r),i=v.length;o.stageIndex=i,o.usingLanguage="";var s={actionAliases:o,allowsToSkip:n,action:function(){if(h)return i===v.length-1?void 0:e;m=i;var n=t.apply(e,arguments);return u(),i===v.length-1?n:e}};return v.push(s),s}function a(e){var t={},r=!1;if("string"==typeof e){if(!e)throw RangeError("An alias for a method must not be an empty string");if(!p)throw TypeError("Before the preferred language is set, the language an alias of a method is in must be specified explicitly.");var a={};a[p]=[e],e=a}else if(!e||"object"!=typeof e)throw TypeError("The action aliases argument must be an object, containing at least one alias which is marked as in a specified language.");for(var o in e){var i=e[o];if(i&&"string"==typeof i&&(i=[i],e[o]=i),n(i)){for(var s=[],u=0;u<i.length;u++){var f=i[u];f&&"string"==typeof f&&s.push(f)}s.length<1?console.warn('Non of the entries in language "'+o+'" are valid.'):(r=!0,t[o]=s,!w[o]&&(N.push(o),w[o]=!0))}}if(!r)throw TypeError("At least one alias is required for a stage action to publish as a method.");return t}function o(e,t){var r=e[t];if(n(r))return e.usingLanguage=t,r;var a,o=!1;for(a in e)if(r=e[a],n(r)){o=!0,e.usingLanguage=a;break}if(!o)throw ReferenceError("No valid aliases in any language for stage "+e.stageIndex+"!");return console.warn("For stage",e.stageIndex,', none of the aliases is in the preferred language ("'+t+'").','\nInstead, aliases in "'+a+'" are exposed as methods.'),r}function i(e){if(!e)throw TypeError("Must specify the natural language to use.");p=e,c()}function s(){v[0].action.apply(e,arguments)}function u(){f(),d(m+1)}function f(){for(var t=0;t<=m;t++)for(var n=v[t].actionAliases,r=n[n.usingLanguage],a=0;a<r.length;a++){var o=r[a];delete e[o]}}function c(){v.length<1||p&&(A[b]=s,l(0,1))}function d(e){var t,n=v.length;for(t=e;t<v.length-1;t++)if(!v[t].allowsToSkip){n=t+1;break}l(e,n)}function l(t,n){for(var r=t;r<n;r++)for(var a=v[r],i=a.action,s=o(a.actionAliases,p),u=0;u<s.length;u++){var f=s[u];e[f]=i}}var h,p,g="addStage",y="setPreferredNaturalLanguageTo",b="startFromFirstStage",A=this,v=[],m=NaN,N=[],w={};t&&"string"==typeof t&&(p=t),A[g]=function(){h=!1,r.apply(A,arguments),A[g]=r,A[y]=i,c()},A[y]=i,A.abort=function(){m>=0?(h=!0,console.error("The process is stopped at stage",m)):console.info("The execution process has not started yet.")}}e.exports=n}]);