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

	window.WulechuanImpartationOperator = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = WulechuanImpartationOperator;


	/**
	 * @author 吴乐川 <wulechuan@live.com>
	 * @requires @wulechuan/apply-one-stage-one-method-pattern
	 * -	<https://github.com/wulechuan/javascript-wulechuan-apply-one-stage-one-method-pattern>
	 * 
	 * @description
	 * 
	 * 
	 * ----- readme start -----
	 * 
	 * # 简介
	 * 
	 * 以所谓“传授（impart）”的程序写法实现所谓“混入（Mixin）”功能，使得“受体”具有被传授的属性和方法函数。
	 * 并且，这些被传授的属性和方法均被包裹在getter和setter内，受到保护。
	 * 
	 * 主体为一所谓“工厂函数”，用于构建一个对象。该对象包含若干属性，每一属性均为一函数。
	 * 这些函数之功能在逻辑上严格等同，但却操持不同人类语言，以便熟悉这些语言之一者采用。
	 * 
	 * # 范例
	 * 
	 * 首先，创建一个类（即一个函数）。稍后将由该类创建一个实例对象，
	 * 并把实例对象之属性“传授予”某个称之为“受体”的对象。
	 * 
	 * @example
	 * 	function 二维矢量() {
	 * 		// 此处为具体内容
	 * 	}
	 * 
	 * 接着，不妨定义一些所谓“变体”，以便日后遵照一些个性化要求“传授”该类之实例对象的属性及方法。
	 * 定义这些“变体”有何益处？且听分解。
	 * 
	 * 在上例中，二维矢量之实例可以表达多种意图，或者说可以有多种“变体”。
	 * 诸如“二维位置”、“二维力矢量”及“二维速度矢量”等。
	 * 
	 * 编写程序以反映现实世界之现象或关系时，有人喜欢抽象——尽可能高度的抽象，并为其所达高度而自豪。
	 * 针对本例，此类人可能完全满足于将“模”一词通用于“二维位置”、“二维力”以及“二维速度”，以表达这些矢量之“大小”。
	 * 具体为“二维力.模”、“二维速度.模”，乃至“二维位置”也同样有“模”，虽然用处不大。
	 * 
	 * 另有一些人，包括笔者，则热衷于模仿真实事物的特性乃至命名习惯，
	 * 以求更容易将其所写程序对应于所欲描述之真实。
	 * 于本例而言，这类人或许更愿意在其代码中如此表达：
	 * -	于“二维力”，将“模”更名为“强度”，即有“二维力.强度”；
	 * -	于“二维速度”，将“模”更名为“速率”，即有“二维速度.速率”；
	 * -	于“二维位置”，隐去“模”属性，不允许外界访问；
	 * 
	 * 由此可见，统一的幕后概念，在不同场合应有不同表达。这些不同表达，我称之为所谓“变体”。
	 * 
	 * 另外，有时，为使用之方便，亦须将“获受”的属性或方法
	 * 直接挂载于受体对象下。形如：
	 * 	既有“二维粒子.受力.强度”，同时亦有“二维粒子.受力强度”；
	 * 	既有“二维粒子.速度.速率”，同时亦有“二维粒子.速率”；
	 * 如此种种，以为方便。
	 * 
	 * 此种情形之下，仍坚持令所有“获受”之实例在“受体”上各自保留原版属性名称，显然行不通。
	 * 程序员当然可以手工解决此问题。只是，此事虽然容易，却颇为令人厌烦。
	 * 为行方便，应有更佳方案自动实现之。
	 * 
	 * @example
	 * 	二维矢量.wulechuanImpartationProfiles = {
	 * 		'二维位置': { propertyNameForTheObjectItself: '位置', ... },
	 * 		'二维力':   { propertyNameForTheObjectItself: '受力', ... },
	 * 		'二维速度': { propertyNameForTheObjectItself: '速度', ... }
	 * 	}
	 * 
	 * 	function 二维点() {
	 * 		传授(true).实例对象源于此类(二维矢量).视作('二维位置').予(this);
	 * 		// “传授(true)”中的“true”代表即便有错误也不抛出，而仅仅在控制台打印错误记录。
	 * 	}
	 * 
	 * 	function 二维粒子() {
	 * 		传授().实例对象源于此类(二维矢量)
	 * 			.视作('二维位置')
	 * 			.且定名为('方位')    // 此例中故意将默认配置中的主名称“位置”改称“方位”。
	 * 			.予(this); 
	 * 
	 * 		传授().实例对象源于此类(二维矢量)
	 * 			.视作('二维速度')
	 * 			.并更名以下属性({
	 * 				速率2: '速率之平方'     // 此处有意改称之，以为示例。
	 * 			})
	 * 			.且设以下直接可用之属性({
	 * 				速率: '',             // 此处采用默认名称即可，因而取值留空。
	 * 				速率2: '速率之平方'	// 此处采有意改称之，以为示例。
	 * 				方向: '移动方向'       // 此处有意将速度之“方向”改称“移动方向”。
	 * 			}).予(this);
	 * 
	 * 		传授().实例对象源于此类(二维矢量)
	 * 			.视作('二维位置')
	 * 			.构建时依据({
	 * 				x: 3,
	 * 				y: -19
	 * 			})
	 * 			.并更名以下属性({
	 * 				propertyNameForTheObjectItself: '中心点',
	 * 				x: '水平位置',
	 * 				y: '垂直位置'
	 * 			})
	 * 			.予(this);
	 * 
	 * 		传授().实例对象源于此类(二维矢量)
	 * 			.视作('二维力')
	 * 			.且设以下直接可用之属性({
	 * 				强度: '受力强度',
	 * 				方向: '受力方向'
	 * 			})
	 * 			.予(this);
	 * 	}
	 * 
	 * 
	 * 尽管上例均以另一“类”作为“受体”，准确的说是以该类之任何实例分别作为受体，
	 * 采用所谓“普通对象”，如“明文对象（一译‘字面量对象’）”，作为“受体”对象亦是可行的。
	 * @example
	 * 	二维粒子.wulechuanImpartationProfiles = {
	 * 		default: { propertyNameForTheObjectItself: '二维粒子', ... }
	 * 	};
	 * 
	 * 	var 一个字面量对象用作受体 = { 姓名: '吴乐川', 电子邮件地址: 'wulechuan@live.com' };
	 * 	传授().对象(My2DParticle).予(一个字面量对象用作受体);
	 * 
	 * 
	 * 进而不难想见，所谓“普通对象”，亦可被用作传授源体，其属性和方法可传授予“受体”对象。
	 * @example
	 * 	var 传授源 = {
	 * 		会写CSS: true,
	 * 		挚爱: 'SOFTIMAGE XSI',
	 * 		会做饭: true
	 * 	};
	 * 
	 * 	var 一个字面量对象用作受体 = { 姓名: '吴乐川', 电子邮件地址: 'wulechuan@live.com' };
	 * 	
	 * 传授().对象(传授源).予(一个字面量对象用作受体);
	 * 
	 * 
	 * 
	 * 
	 * 
	 * # Introduction
	 * 
	 * This is the factory function to build up the impartation tool,
	 * a.k.a. the object to expose and use, which is discribed below.
	 * 
	 * # Example
	 * 
	 * First, let's write a function as a class.
	 * Later, we will impart properties of an instance of this class to some grantee.
	 * 
	 * @example
	 * 	function My2DVector() {
	 * 		// The definitions go here.
	 * 	}
	 * 
	 * Now, add pre-defined profiles for easier impartations.
	 * 
	 * As one might imagine, a 2d vector can be used in different ways,
	 * such as a 2d position, a 2d force, or a 2d velocity.
	 * 
	 * Some people love to use abstract across different things.
	 * Thus, as an example, they are often happy to use
	 * the single term "legnth" across all possible applications,
	 * or we can say profiles, or variants. That is, they live with
	 * "force2D.length", "position2D.length" as well as "velocity2D.length".
	 * 
	 * While there are another type of people, they love to describ things
	 * in there programs in a way that matches real world as much as possible.
	 * These type of people turn to choose different terms for different things,
	 * even though the core concept behind these things are exactly the same.
	 * Still take the 2d vector as an example, they might be happier with:
	 * -	for a 2d force, expose "force.strength" instead of "force2D.length";
	 * -	for a 2d velocity, expose "velocity.speed" instead of "velocity2D.speed";
	 * -	for a 2d position, does not expose the "length" at all.
	 * 
	 * All these means that despite the shared concept behinds, we need different
	 * ways to express things in different siuations. And these ways,
	 * I call them "profiles" of a concept.
	 * A profile describs how a core/raw class should be imparted to a grantee.
	 * Take the example above, the "position2d", "force2d", as well as the "velocity2d"
	 * are all impartation profiles of the My2DVector class.
	 * 
	 * Note:
	 * 	Being a non-native English speaker, I might NOT pick the
	 * 	accurate word by using the term "profile".
	 * 	And I'm glad to recieve suggestions upon this.
	 * 
	 * What's more, there are cases in which we want to impart some properties or methods
	 * directly into a grantee object. Which means, we want not only:
	 * @example
	 * 	particle2d.force.strength
	 * 	particle2d.velocity.speed
	 * 
	 * but also:
	 * @example
	 * 	particle2d.forceStrength // an imparted property directly under the grantee itself
	 * 	particle2d.speed // another imparted property directly under the grantee itself
	 * 
	 * In this situation, keeping the same term for properties of each and every imparted properties
	 * is impossible.
	 * As programmers, we can solve these problems by hands. But that's not a perfect way.
	 * So we need a solution, hopefully a slightly better one.
	 * 
	 * 
	 * 
	 * @example
	 * 	My2DVector.wulechuanImpartationProfiles = {
	 * 		position2D: { propertyNameForTheObjectItself: 'position', ... },
	 * 		force2D:    { propertyNameForTheObjectItself: 'force', ... },
	 * 		velocity2D: { propertyNameForTheObjectItself: 'velocity', ... }
	 * 	}
	 * 
	 * 	function My2DPoint() {
	 * 		impart().theClass(My2DVector).as('position2D').to(this);
	 * 	}
	 * 
	 * 	function My2DParticle() {
	 * 		impart().theClass(My2DVector).as('position2D').renamedAs('pos').to(this);
	 * 
	 * 		impart().theClass(My2DVector).as('velocity2D').renamedAs({
	 * 			speed: 'velocityLength',
	 * 			speed2: 'squareSpeed'
	 * 			velocityDirection: 'movingDirection'
	 * 		}).to(this);
	 * 
	 * 		impart().theClass(My2DVector)
	 * 			.as('position2D')
	 * 			.buildAccordingTo({
	 * 				x: 3,
	 * 				y: -19
	 * 			})
	 * 			.addAliasesForAttributes({
	 * 				propertyNameForTheObjectItself: 'centerPos',
	 * 				x: 'centerX',
	 * 				y: 'centerY'
	 * 			})
	 * 			.to(this);
	 * 
	 * 		impart().theClass(My2DVector)
	 * 			.usingThisProfile('force2D')
	 * 			.addAliasesForAttributes({
	 * 				strength: 's',
	 * 				forceDirection: 'forceAngle'
	 * 			})
	 * 			.to(this);
	 * 	}
	 * 
	 * 
	 * Although we were using other classes like "My2DParticle"
	 * as the grantees, it shouldn't be suprising that we
	 * can impart things into an object literal as well.
	 * Thus the object literal gains new properties and methods.
	 * @example
	 * 	My2DParticle.wulechuanImpartationProfiles = {
	 * 		default: { propertyNameForTheObjectItself: 'particle2D', ... }
	 * 	};
	 * 
	 * 	var myLovelyObjectLiteral = { name: '吴乐川', email: 'wulechuan@live.com' };
	 * 	impart().theClass(My2DParticle).to(myLovelyObjectLiteral);
	 * 
	 * 
	 * One can imagine that an object literal can also treated
	 * as an impartation source object, just like those who
	 * are instantiated from a given class.
	 * Still, the grantee can be any other object,
	 * be it an instance, or another object literal.
	 * @example
	 * 	var myObjectAsImpartationSource = {
	 * 		property1: 'I love SOFTIMAGE XSI',
	 * 		isAbleToFly: true
	 * 	};
	 * 
	 * 	var myObjectLiteralAsGrantee = { name: '吴乐川', email: 'wulechuan@live.com' };
	 * 	impart
	 * 		.theObject(myObjectAsImpartationSource)
	 * 		.to(myObjectLiteralAsGrantee);
	 * 
	 * 
	 * 
	 * 
	 * # Random thoughts on API:
	 * 
	 * A profile can itself be named 'default', thus it will be taken by default.
	 * Any profile **might** but is not forced to provide two objects, named:
	 * 
	 * 	'attributesAliasesToAdd'
	 * 
	 * and
	 * 
	 * 	'attributesToAddDirectlyUnderGrantee'
	 * 
	 * .
	 * 
	 * A profile object **might** also contain a property named
	 * 
	 * 	'propertyNameForTheObjectItself'
	 * 
	 * , value of whom is to decide the new name of the instance to impart.
	 * If the 'propertyNameForTheObjectItself' is absent,
	 * then the name of the profile is taken instead.
	 * 
	 * For example, the minimum definition of the 'force2D' profile
	 * for the 'Vector2D' class looks like this:
	 * @example
	 * 	Vector2D.wulechuanImpartationProfiles = {
	 * 		force2D: {} // All instances will by default be named 'force2D'.
	 * 	};
	 * 
	 * 
	 * Take another example for this:
	 * @example
	 * 	Vector2D.wulechuanImpartationProfiles = {
	 * 		velocity2D: {
	 * 			propertyNameForTheObjectItself: 'v' // All instances will by default be named 'v', instead of 'velocity2D'.
	 * 			attributesAliasesToAdd: {
	 * 				speed: 'rapidness' // A new attribute named 'rapidness' will be added to the intance. While the 'speed' is still available, because we only add attributes with new names, never delete existing ones.
	 * 				direction: ['dir', '方向', '偏角'] // An array of strings is also allowed
	 * 			}
	 * 		}
	 * 	};
	 * 
	 * The 'attributesToAddDirectlyUnderGrantee' property of a profile is optional.
	 * When present, it looks like this:
	 * @example
	 * 	Vector2D.wulechuanImpartationProfiles = {
	 * 		velocity2D: {
	 * 			propertyNameForTheObjectItself: 'v',
	 * 			attributesToAddDirectlyUnderGrantee: {
	 * 				speed: '', // added with the name 'speed', so the name can be omitted, an empty string is used instead
	 * 				x: 'speedX',
	 * 				y: 'speedY'
	 * 			}
	 * 		}
	 * 	};
	 * 
	 * ----- readme end -----
	 * 
	 * 
	 * A class, instance of which is the operator
	 * that remembers several key factors and does the impartation job
	 * for a given object, or an instance of a given class(a.k.a. a function).
	 *
	 * Each time the entrance method is invoked,
	 * a new instance object of this operator class is created,
	 * which then takes over the impartation process afterwards.
	 * 
	 * If the operator is used through its class impartation route,
	 * an instance object of the provided class is created
	 * via the javascript "new" operator, and this instance is
	 * the object to impart properties from;
	 * 
	 * if otherwise the object route is taken,
	 * the provided input object itself it the one to impart properties from.
	 *
	 * @class
	 * 
	 * @instance
	 * @property {function} 传授 - 此为impart函数的包裹函数，其将impart函数的优选语言定为“简体中文”。
	 * @property {function} impart - the wrapped impart function, taking the 'en-US' as the preferred language
	 * 
	 */
	function WulechuanImpartationOperator() {
		var WulechuanApplyOneStageOneMethodProgrammingPatternTo =
			__webpack_require__(2);
			// require('@wulechuan/apply-one-stage-one-method-pattern');

		var nameOfEntranceMethodInAllLanguages = {
			'zh-CN': '传授',
			'en-US': 'impart'
		};




		var methodNames_theObject_zhCN = [
			'此对象'
		];
		var methodNames_theObject_enUS = [
			'theObject'
		];




		var methodNames_theClass_zhCN = [
			'此类'
		];
		var methodNames_theClass_enUS = [
			'anInstanceOf',
			'anInstanceOfClass'
		];

		var methodNames_useTheseOptionsWhenConstructInstance_zhCN = [
			'依据'
		];
		var methodNames_useTheseOptionsWhenConstructInstance_enUS = [
			'withTheseOptions'
		];

		var methodNames_buildInstanceObject_zhCN = [
			'之实例',
			'之实例对象',
			'构建之实例',
			'构建之实例对象'
		];

		var methodNames_buildInstanceObject_enUS = [
			'whenConstructed'
		];




		var methodNames_useThisProfileOfTheClass_zhCN = [
			'视作'
		];
		var methodNames_useThisProfileOfTheClass_enUS = [
			'as',
			'treatAs',
			'usingThisProfile'
		];




		var methodNames_addAliasesForAttributes_zhCN = [
			'且定名为',     // 用于仅更改主名称（propertyNameForTheObjectItself）时较为符合汉语习惯。
			'并添加以下别名' // 用于更改多种属性名称时，较为符合汉语习惯。
		];
		var methodNames_addAliasesForAttributes_enUS = [
			'nameIt',
			'nameItself',
			'addAliasesForThese',
			'addAliasesForAttributes'
		];




		var methodNames_addAttributesDirectlyUnderGrantee_zhCN = [
			'且设以下直接可用之属性',
		];
		var methodNames_addAttributesDirectlyUnderGrantee_enUS = [
			'addAttributesDirectlyUnderGrantee'
		];




		var methodNames_towards_zhCN = ['予'];
		var methodNames_towards_enUS = ['to'];





		var propertyName_wulechuanImpartationProfiles = 'wulechuanImpartationProfiles';
		var propertyName_defaultProfile = 'default';
		var propertyName_attributesAliasesToAdd = 'attributesAliasesToAdd';
		var propertyName_attributesToAddDirectlyUnderGrantee = 'attributesToAddDirectlyUnderGrantee';
		var propertyName_nameToUseForTheObjectItself = 'propertyNameForTheObjectItself';
		var chiefNameRegExps = [
			new RegExp('\\$\\{主名称\\}', 'g'),
			new RegExp('\\$\\{ChiefName\\}', 'g')
		];











		var thisOperator = this;

		var shouldThrowErrors;

		var preferredLanguage;
		var entranceMethodsInAllLanguages = {};

		var theClassConstructor;
		var theClassConstructionOptions;
		var allImpartationProfilesOfClass;
		var usedImpartationProfileNameOfClass;
		var isUsingImplicitProfileOfClass = true; // make getter and setter for each and every attribute.
		var isUsingDefaultProfileOfClass = false;

		var usedImpartationProfileOfClass;

		var theSourceObjectToImpartAttributesFrom;

		var chiefAttributeCustomizedSetter;
		var attributesAliasesToAddAdditionalToProfileDefined = {};
		var attributesToAddDirectlyUnderGranteeAdditionalToProfileDefined = {};

		var usedChiefName;
		var allAliasesToAddForAllAttributes = {};
		var allAliasesToAddForAllAttributesFlattenedBackwardsMapping = {};
		var allAttributesToAddDirectlyUnderGrantee = {};
		var allAttributesToAddDirectlyUnderGranteeFlattenedBackwardsMapping = {};

		var grantee;


		if (preferredLanguage && typeof preferredLanguage === 'string') {
			preferredLanguage = 'zh-CN';
		}


		var stagesOfClassRoute  = _defineExecutionRouteForImpartingFromAClassInstance();
		var stagesOfObjectRoute = _defineExecutionRouteForImpartingFromAnObject();
		console.log(thisOperator);


		_buildAllEntranceMethods();
		_exposeEntranceMethodsInAllLanguages();



		function _exposeEntranceMethodsInAllLanguages() {
			for (var language in nameOfEntranceMethodInAllLanguages) {
				var nameOfEntranceMethodInSpecificLanguage =
					nameOfEntranceMethodInAllLanguages[language];

				Object.defineProperty(thisOperator, nameOfEntranceMethodInSpecificLanguage, {
					configurable: true,
					enumerable: true,
					get: entranceMethodsInAllLanguages[language]
				});
			}
		}

		function _buildAllEntranceMethods() {
			for (var language in nameOfEntranceMethodInAllLanguages) {
				if (entranceMethodsInAllLanguages[language]) continue;

				entranceMethodsInAllLanguages[language] = (function (usingLanguage) {
					return _entranceMethodCore.bind(thisOperator, usingLanguage);
				})(language);
			}
		}

		function _entranceMethodCore(usingLanguage) {
			_setPreferredLanguageTo(usingLanguage);
			_hideEntranceMethodsInLanguagesOtherThan();
			return thisOperator;
		}

		function _setPreferredLanguageTo(languageCode) {
			preferredLanguage = languageCode;
			stagesOfClassRoute.setPreferredNaturalLanguageTo(languageCode);
			stagesOfObjectRoute.setPreferredNaturalLanguageTo(languageCode);
		}

		function _hideEntranceMethodsInLanguagesOtherThan(languageToPreserve) {
			for (var language in nameOfEntranceMethodInAllLanguages) {
				if (language === languageToPreserve) continue;

				var nameOfEntranceMethodInSpecificLanguage =
					nameOfEntranceMethodInAllLanguages[language];

				delete thisOperator[nameOfEntranceMethodInSpecificLanguage];
			}
		}

		function _defineExecutionRouteForImpartingFromAClassInstance() {
			var stagesOfClassRoute =
				new WulechuanApplyOneStageOneMethodProgrammingPatternTo(
					thisOperator, preferredLanguage
				);

			stagesOfClassRoute.addStage(theClass, {
				'zh-CN': methodNames_theClass_zhCN,
				'en-US': methodNames_theClass_enUS
			});

			stagesOfClassRoute.addStage(useTheseOptionsWhenConstructAnInstance, true, {
				'zh-CN': methodNames_useTheseOptionsWhenConstructInstance_zhCN,
				'en-US': methodNames_useTheseOptionsWhenConstructInstance_enUS
			});

			stagesOfClassRoute.addStage(buildInstanceObject, {
				'zh-CN': methodNames_buildInstanceObject_zhCN,
				'en-US': methodNames_buildInstanceObject_enUS
			});

			stagesOfClassRoute.addStage(useThisProfileOfTheClass, true, {
				'zh-CN': methodNames_useThisProfileOfTheClass_zhCN,
				'en-US': methodNames_useThisProfileOfTheClass_enUS
			});

			stagesOfClassRoute.addStage(addAliasesForAttributesAdditionalToProfileDefinedAliases, true, {
				'zh-CN': methodNames_addAliasesForAttributes_zhCN,
				'en-US': methodNames_addAliasesForAttributes_enUS
			});

			stagesOfClassRoute.addStage(addAttributesDirectlyUnderGranteeAdditionalToProfileDefinitions, true, {
				'zh-CN': methodNames_addAttributesDirectlyUnderGrantee_zhCN,
				'en-US': methodNames_addAttributesDirectlyUnderGrantee_enUS
			});

			stagesOfClassRoute.addStage(towards, {
				'zh-CN': methodNames_towards_zhCN,
				'en-US': methodNames_towards_enUS
			});

			return stagesOfClassRoute;
		}

		function _defineExecutionRouteForImpartingFromAnObject() {
			var stagesOfObjectRoute =
				new WulechuanApplyOneStageOneMethodProgrammingPatternTo(
					thisOperator, preferredLanguage
				);

			stagesOfObjectRoute.addStage(theObject, {
				'zh-CN': methodNames_theObject_zhCN,
				'en-US': methodNames_theObject_enUS
			});

			stagesOfObjectRoute.addStage(addAliasesForAttributesAdditionalToProfileDefinedAliases, true, {
				'zh-CN': methodNames_addAliasesForAttributes_zhCN,
				'en-US': methodNames_addAliasesForAttributes_enUS
			});

			stagesOfObjectRoute.addStage(addAttributesDirectlyUnderGranteeAdditionalToProfileDefinitions, true, {
				'zh-CN': methodNames_addAttributesDirectlyUnderGrantee_zhCN,
				'en-US': methodNames_addAttributesDirectlyUnderGrantee_enUS
			});

			stagesOfObjectRoute.addStage(towards, {
				'zh-CN': methodNames_towards_zhCN,
				'en-US': methodNames_towards_enUS
			});

			return stagesOfClassRoute;
		}



		function _the(subject) {
			return {
				isNeitherAnObjectNorAnArray: function() {
					return !subject || typeof subject !== 'object';
				},

				isAValidObject: function() {
					return !!subject && typeof subject === 'object' && !Array.isArray(subject);
				},

				isNotAValidObject: function() {
					return !_the(subject).isAValidObject();
				},

				isAnArray: function() {
					return Array.isArray(subject);
				},

				isNotAnArray: function() {
					return !Array.isArray(subject);
				},

				isAnEmptyString: function() {
					return !subject && typeof subject === 'string';
				},

				isANonEmptyString: function() {
					return !!subject && typeof subject === 'string';
				},

				isAValidKey: function() {
					return _the(subject).isANonEmptyString();
				},

				isNotAValidKey: function() {
					return !_the(subject).isAValidKey();
				}
			};
		}

		function _reportMultilingualErrors(errors) {
			var _isUsingANonPreferredLanguage;
			var _usedLanguageForErrorMessage;
			var _errorMessage = 'Unkown error occurred.';
			if (errors) {
				if (typeof errors === 'string') {
					_errorMessage = errors;
				} else if (typeof errors === 'object' && !Array.isArray(errors)) {
					var _foundErrorMessage = errors[preferredLanguage];
					if (_the(_foundErrorMessage).isANonEmptyString()) {
						_errorMessage = _foundErrorMessage;
					} else {
						for (var language in errors) {
							_foundErrorMessage = errors[language];
							if (_the(_foundErrorMessage).isANonEmptyString()) {
								_isUsingANonPreferredLanguage = true;
								_usedLanguageForErrorMessage = language;
								_errorMessage = _foundErrorMessage;
								break;
							}
						}
					}
				}
			}

			if (_isUsingANonPreferredLanguage) {
				_errorMessage = '['+_usedLanguageForErrorMessage+'] '+_errorMessage;
			}

			if (shouldThrowErrors) {
				throw TypeError('\n'+_errorMessage);
			} else {
				console.error(TypeError('\n'+_errorMessage));
			}
		}

		function _mergeAttribtesFromBToA(a, b) {
			if (_the(a).isAValidObject() && _the(b).isAValidObject()) {
				for (var key in b) {
					if ( ! b[key]) continue;
					a[key] = b[key];
				}
			}

			return a;
		}



		/**
		 * This stage simply provides two possible routes:
		 * the object route and the class route.
		 */
		function startToImpart() {
			// nothing explicitly
		}


		/**
		 * To accept the function treated as a class, instances of which will be imparted.
		 *
		 * @param {!object} sourceObject
		 */
		function theObject(sourceObject) {
			if (_the(sourceObject).isNeitherAnObjectNorAnArray()) {
				_reportMultilingualErrors({
					'zh-CN':
						'首个参数必须为一个非空对象，可以为数组对象。'+
						'\n而实际提供的首个参数是一个'+typeof sourceObject + '。',

					'en-US':
						'The provided source must be an object that is not a null. '+
						'An array object is allowed. '+
						'\nWhat\'s actually provided was of type: '+
						typeof sourceObject + '.'
				});

				stagesOfObjectRoute.stop();
			} else {
				theSourceObjectToImpartAttributesFrom = sourceObject;
			}
		}




		/**
		 * To accept the function treated as a class, instances of which will be imparted.
		 *
		 * @param {!function} theGivenFunction
		 */
		function theClass(theGivenFunction) {
			if (typeof theGivenFunction !== 'function') {
				_reportMultilingualErrors({
					'zh-CN':
						'首个参数必须为一个函数。其将被视为一个构造函数以构造一个对象。'+
						'该对象之属性和方法将被传授给受封者。'+
						'\n而实际提供的首个参数是一个'+typeof theGivenFunction + '。',

					'en-US':
						'The provided source must be a function, '+
						'which will be used as a constructor '+
						'to create the object to impart to a grantee.'+
						'\nWhat\'s actually provided was of type: '+
						typeof theGivenFunction + '.'
				});

				stagesOfClassRoute.stop();
			} else {
				theClassConstructor = theGivenFunction;
			}


			allImpartationProfilesOfClass = theClassConstructor[propertyName_wulechuanImpartationProfiles];
			if (_the(allImpartationProfilesOfClass).isNotAValidObject()) {
				allImpartationProfilesOfClass = {};
			}

			if (_classHasAProfileNamed(propertyName_defaultProfile)) {
				usedImpartationProfileOfClass = allImpartationProfilesOfClass[propertyName_defaultProfile];
				usedImpartationProfileNameOfClass = propertyName_defaultProfile;
				isUsingImplicitProfileOfClass = false;
				isUsingDefaultProfileOfClass = true;
			}
		}

		/**
		 * To accept the options for construction of an instance that is to impart.
		 *
		 * @param {?object} constructionOptions
		 */
		function useTheseOptionsWhenConstructAnInstance(constructionOptions) {
			theClassConstructionOptions = constructionOptions;
		}

		/**
		 * Contruct an instance for the provided class
		 */
		function buildInstanceObject() {
			theSourceObjectToImpartAttributesFrom = new theClassConstructor(theClassConstructionOptions);
		}

		/**
		 * To accept the name of the desired variant to use.
		 *
		 * @param {!string} variantName
		 */
		function useThisProfileOfTheClass(profileName) {
			if (_classHasAProfileNamed(profileName)) {
				usedImpartationProfileOfClass = allImpartationProfilesOfClass[profileName];
				usedImpartationProfileNameOfClass = profileName;
				isUsingImplicitProfileOfClass = false;
				isUsingDefaultProfileOfClass = false;
			} else {
				if (typeof profileName !== 'string') {
					profileName = typeof profileName;
				}

				_reportMultilingualErrors({
					'zh-CN':
						'未找到指定的变体。'+
						'输入参数为：“'+profileName+'”。',

					'en-US':
						'The desired profile name was invalid. '+
						'No profile was matched by that name. '+
						'\nThe input was "'+profileName+'".'
				});

				stagesOfClassRoute.stop();			
			}
		}

		function _classHasAProfileNamed(profileName) {
			if (_the(profileName).isNotAValidKey()) {
				return false;
			}

			return _the(allImpartationProfilesOfClass[profileName]).isAValidObject();
		}





		function addAliasesForAttributesAdditionalToProfileDefinedAliases(_attributesAliasesToAdd) {
			if (_the(_attributesAliasesToAdd).isANonEmptyString()) {
				var _tempConfiguration = {};
				_tempConfiguration[propertyName_nameToUseForTheObjectItself] =
					_attributesAliasesToAdd;

				_attributesAliasesToAdd = _tempConfiguration;
			}
			
			if (_the(_attributesAliasesToAdd).isAValidObject()) {
				_mergeAttribtesFromBToA(
					attributesAliasesToAddAdditionalToProfileDefined,
					_attributesAliasesToAdd
				);
			} else {
				stagesOfClassRoute.stop();
				stagesOfObjectRoute.stop();
			}
		}

		function addAttributesDirectlyUnderGranteeAdditionalToProfileDefinitions(_attributesToAddDirectlyUnderGrantee) {
			if (_the(_attributesToAddDirectlyUnderGrantee).isAValidObject()) {
				_mergeAttribtesFromBToA(
					attributesToAddDirectlyUnderGranteeAdditionalToProfileDefined,
					_attributesToAddDirectlyUnderGrantee
				);
			} else {
				stagesOfClassRoute.stop();
				stagesOfObjectRoute.stop();
			}
		}

		function towards(_grantee) {
			if (_the(_grantee).isNeitherAnObjectNorAnArray()) {
				_reportMultilingualErrors({
					'zh-CN':
						'受封者必须是一个标准对象或数组，且不可为空对象（null）。',

					'en-US':
						'The grantee to impart methods and properties to '+
						'must be an object or an array, and not a null.'
				});

				// Although at present the "stop" method does nothing
				// if it's invoked within the last stage.
				// But what if this piece of code were settled
				// into another non-ending stage in the future?
				stagesOfClassRoute.stop();
				stagesOfObjectRoute.stop();

				return;
			}


			grantee = _grantee;


			var _succeeded = _impartIt();

			if (_succeeded) {
				// return the object that has been imparted to the scope of the grantee,
				// so that the grantee has a chance to store a local variable for the imparted object.
				return theSourceObjectToImpartAttributesFrom;
			} else {
				return;
			}
		}


		function _impartIt() {
			_decideAllAliasesToUseFinally();
			_defineAnAttributeForTheImpartedObject();
			_addAliasesOfAttributesToImpartedObject();
			_addAttributesDirectlyToGrantee();

			return true;
		}

		function _decideAllAliasesToUseFinally() {
			var _aliasesAreToAddToImpartationSourceObject;


			if (usedImpartationProfileOfClass) {

				// Try to take chief name according to class profile.
				_tryUpdatingChiefName(
					usedImpartationProfileOfClass[propertyName_nameToUseForTheObjectItself]
				);




				// Try to add aliases according to class profile.
				var _aliasesToAddToImpartationSourceObjectAccordingToProfile =
					usedImpartationProfileNameOfClass[propertyName_attributesAliasesToAdd]
					;
				_aliasesAreToAddToImpartationSourceObject = true;
				_decideAliasesAccordingTo(
					_aliasesToAddToImpartationSourceObjectAccordingToProfile,
					_aliasesAreToAddToImpartationSourceObject
				);



				// Try to add attributes directly under grantee according to class profile.
				var _attributesToAddDirectlyUnderGranteeAccordingToProfile =
					usedImpartationProfileNameOfClass[propertyName_attributesToAddDirectlyUnderGrantee]
					;
				_aliasesAreToAddToImpartationSourceObject = false;
				_decideAliasesAccordingTo(
					_attributesToAddDirectlyUnderGranteeAccordingToProfile,
					_aliasesAreToAddToImpartationSourceObject
				);

			}




			// Try to take chief name according to user options.
			_tryUpdatingChiefName(
				attributesAliasesToAddAdditionalToProfileDefined[
					propertyName_nameToUseForTheObjectItself
				]
			);

			// Remove chief name attribute to prevent it from
			// being treated as an alias of some attribute.
			delete attributesAliasesToAddAdditionalToProfileDefined[
				propertyName_nameToUseForTheObjectItself
			];





			// Try to add aliases according to user options.
			_aliasesAreToAddToImpartationSourceObject = true;
			_decideAliasesAccordingTo(
				attributesAliasesToAddAdditionalToProfileDefined,
				_aliasesAreToAddToImpartationSourceObject
			);





			// Try to add attributes directly under grantee according to user options.
			_aliasesAreToAddToImpartationSourceObject = false;
			_decideAliasesAccordingTo(
				attributesToAddDirectlyUnderGranteeAdditionalToProfileDefined,
				_aliasesAreToAddToImpartationSourceObject
			);
		}

		function _tryUpdatingChiefName(_chiefName) {
			if (_the(_chiefName).isAValidKey()) {
				usedChiefName = _chiefName;
			}
		}

		function _decideAliasesAccordingTo(_aliasesRules, _aliasesAreToAddToImpartationSourceObject) {
			var _nonDuplicatedAliasesForAllInvolvedAttributes;
			var _flatternedRecordsForBackwardsMapping;


			if (_the(_aliasesRules).isNotAValidObject()) {
				// Although aliases according to the user options are always an object,
				// Since its a copy of the raw options,
				// A profile might not provide an object for aliases.
				return;
			}


			if (_aliasesAreToAddToImpartationSourceObject) {
				_nonDuplicatedAliasesForAllInvolvedAttributes =
					allAliasesToAddForAllAttributes;

				_flatternedRecordsForBackwardsMapping =
					allAliasesToAddForAllAttributesFlattenedBackwardsMapping;
			} else {
				_nonDuplicatedAliasesForAllInvolvedAttributes =
					allAttributesToAddDirectlyUnderGrantee;

				_flatternedRecordsForBackwardsMapping =
					allAttributesToAddDirectlyUnderGranteeFlattenedBackwardsMapping;
			}


			var _keyIsAnAttributeName;
			var _keyIsAnAlias;

			var _attributeName;
			var _aliasesArrayOfCurrentKey;
			var _nonDuplicatedAliasesForCurrentAttributeName;
			var _alias;
			var _theAliasIsActuallyAnAttribute;
			var _theAliasOfAKeyIsTheSameAsTheKeyItself;



			for (var _keyAsEitherAttributeNameOrAlias in _aliasesRules) {
				if (_the(_keyAsEitherAttributeNameOrAlias).isNotAValidKey()) {
					continue;
				}

				_keyIsAnAttributeName =
					theSourceObjectToImpartAttributesFrom.hasOwnProperty(
						_keyAsEitherAttributeNameOrAlias
					);

				if (_keyIsAnAttributeName) {
					_attributeName = _keyAsEitherAttributeNameOrAlias;
					_keyIsAnAlias = false;
				} else {
					_attributeName =
						_flatternedRecordsForBackwardsMapping[
							_keyAsEitherAttributeNameOrAlias
						];
					
					if (_attributeName) {
						_keyIsAnAlias = true;
					}
				}

				if ( ! _keyIsAnAttributeName && ! _keyIsAnAlias) {
					_reportMultilingualErrors({
						'zh-CN':
							'给定对象或给定类之实例没有名为'+
							'“'+_keyAsEitherAttributeNameOrAlias+'”的属性;'+
							'同时也没有此别名。'
							,

						'en-US':
							'The provided object, or the instance of the provided class '+
							'doesn\'t have an attribute named '+
							'"'+_keyAsEitherAttributeNameOrAlias+'".'+
							'Nor does an alias match this caption.'
					});

					// Although at present the "stop" method does nothing
					// if it's invoked within the last stage.
					// But what if this piece of code were settled
					// into another non-ending stage in the future?
					stagesOfClassRoute.stop();
					stagesOfObjectRoute.stop();

					continue;
				}

				_aliasesArrayOfCurrentKey =
					_aliasesRules[_keyAsEitherAttributeNameOrAlias];

				if (_the(_aliasesArrayOfCurrentKey).isNotAnArray()) {
					_aliasesArrayOfCurrentKey = [_aliasesArrayOfCurrentKey];
				}




				// Use an object instead of an array to avoid duplications easily.
				if (_the(
						_nonDuplicatedAliasesForAllInvolvedAttributes[_attributeName]
					).isNotAValidObject()
				) {
					_nonDuplicatedAliasesForAllInvolvedAttributes[_attributeName] = {};
				}

				_nonDuplicatedAliasesForCurrentAttributeName =
					_nonDuplicatedAliasesForAllInvolvedAttributes[_attributeName];




				for (var _i=0; _i<_aliasesArrayOfCurrentKey.length; _i++) {
					_alias = _aliasesArrayOfCurrentKey[_i];
					_theAliasIsActuallyAnAttribute =
						theSourceObjectToImpartAttributesFrom
							.hasOwnProperty(_alias);

					if (_theAliasIsActuallyAnAttribute) {
						if (_alias !== _attributeName) {
							_reportMultilingualErrors({
								'zh-CN':
									'所选别名“‘'+_alias+'”与另一属性重名。'
									,

								'en-US':
									'The alias "'+_alias+'" is actually another existing attribute.'
							});

							// Although at present the "stop" method does nothing
							// if it's invoked within the last stage.
							// But what if this piece of code were settled
							// into another non-ending stage in the future?
							stagesOfClassRoute.stop();
							stagesOfObjectRoute.stop();
						}
						
						continue;
					}



					_theAliasOfAKeyIsTheSameAsTheKeyItself =
						_alias === _keyAsEitherAttributeNameOrAlias;
					if (_theAliasOfAKeyIsTheSameAsTheKeyItself) {
						continue;
					}



					_nonDuplicatedAliasesForCurrentAttributeName[_alias] = true;
					_flatternedRecordsForBackwardsMapping[_alias] =
						_attributeName;
				}
			}
		}

		function _defineAnAttributeForTheImpartedObject() {
			if ( ! usedChiefName) {
				_dealWithTheAbsentOfTheChiefName();
				return false;
			}

			var _configuration = {
				enumerable: true,
				get: function () {
					return theSourceObjectToImpartAttributesFrom;
				}
			};

			if (typeof chiefAttributeCustomizedSetter === 'function') {
				_configuration.set = chiefAttributeCustomizedSetter;
			}

			Object.defineProperty(grantee, usedChiefName, _configuration);
		}

		function _dealWithTheAbsentOfTheChiefName() {
			var _methodSuggestionsForNamingObjectItself = '\n\t"'+
				[
					methodNames_addAliasesForAttributes_zhCN[0],
					methodNames_addAliasesForAttributes_enUS[0],
					methodNames_addAliasesForAttributes_enUS[1]
				].join('\n\t"')
				+'"\n'
				;

			var reusableWords_zhCN = 
				'而每欲传授对象至它物，该对象本身作为受封物之属性，亦须定名。'+
				'请采用以下任意方法函数为其定名：'+
				_methodSuggestionsForNamingObjectItself
				;

			var reusableWords_enUS =
				'Note that an object to impart, '+
				'as it would be an attribute of the grantee, '+
				'needs a name itself.'+
				'\nPlease use any of these methods below to give it a name:'+
				_methodSuggestionsForNamingObjectItself
				;


			if (isUsingImplicitProfileOfClass) {

				_reportMultilingualErrors({
					'zh-CN':
						'所给出的“类”没有名为“'+propertyName_defaultProfile+'”的默认变体。'+
						'程序亦未指定采用其它变体。现欲传授该类之实例对象至它物，其传授后之名称却未知。'+
						reusableWords_zhCN
						,

					'en-US':
						'The class doesn\'t have the default profile, '+
						'which should have been named "'+propertyName_defaultProfile+'". '+
						'You are allowed not to use the default profile. But... '+
						reusableWords_enUS
				});

			} else if (isUsingDefaultProfileOfClass) {

				_reportMultilingualErrors({
					'zh-CN':
						'所给出的“类”的默认变体（即，“'+propertyName_defaultProfile+'”）被采用，'+
						'但该变体未指明奖被传授之实例对象所应采用之名称。'+
						reusableWords_zhCN
						,

					'en-US':
						'For the given class, '+
						'the "'+propertyName_defaultProfile+'" profile is used, '+
						'while the profile does not provide the attribute name for '+
						'the instance object. '+
						reusableWords_enUS
				});

			} else {

				_reportMultilingualErrors({
					'zh-CN':
						'行将传授所给出“对象”之属性至它物，其传授后之名称却未知。'+
						reusableWords_zhCN
						,

					'en-US':
						'The given object is about to impart to the grantee, '+
						'but the attribute name is not provided yet.'+
						reusableWords_enUS
				});

			}
		}

		function _addAliasesOfAttributesToImpartedObject() {
			for (var _alias in allAliasesToAddForAllAttributesFlattenedBackwardsMapping) {
				var _attributeName = allAliasesToAddForAllAttributesFlattenedBackwardsMapping[_alias];

				_impartOneAliasTheDefaultWay(
					_attributeName,
					_alias,
					theSourceObjectToImpartAttributesFrom
				);
			}
		}

		function _addAttributesDirectlyToGrantee() {
			for (var _alias in allAttributesToAddDirectlyUnderGranteeFlattenedBackwardsMapping) {
				var _attributeName = allAttributesToAddDirectlyUnderGranteeFlattenedBackwardsMapping[_alias];

				_impartOneAliasTheDefaultWay(
					_attributeName,
					_alias,
					grantee
				);
			}
		}

		function _impartOneAliasTheDefaultWay(_attributeName, _alias, _granteeOfProperty) {
			var _configuration = {
				enumerable: true,
				get: function () {
					return theSourceObjectToImpartAttributesFrom[_attributeName];
				}
			};

			if (typeof theSourceObjectToImpartAttributesFrom[_attributeName] === 'function') {
				_configuration.set = function (newValue) {
					theSourceObjectToImpartAttributesFrom[_attributeName] = newValue;
				};
			}

			for (var _i=0; _i<chiefNameRegExps.length; _i++) {
				console.log(chiefNameRegExps[_i]);
				_alias = _alias.replace(chiefNameRegExps[_i], usedChiefName);
			}

			Object.defineProperty(_granteeOfProperty, _alias, _configuration);
		}
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = WulechuanApplyOneStageOneMethodProgrammingPatternTo;

	/**
	 * @author 吴乐川 <wulechuan@live.com>
	 * 
	 * ----- readme start -----
	 * 
	 * # 中文介绍
	 * 
	 * 凡由本类构建的实例对象，可用于将本人设计的一种程序设计模式应用至另一“受体”对象。
	 * “受体”因而被改造，其各个所涉及之方法函数均被依次对应于各自的所谓“执行阶段”，亦可称“步骤”，
	 * 每个方法函数对应一个步骤。
	 * 自此时起，仅第一个步骤所对应的方法函数被公开（或称“曝露”），
	 * 其余后续步骤之方法函数均被隐藏，直至各自前导执行阶段完成，这些方法函数才会陆续公开。
	 * 
	 * 任何“步骤，凡非最终者，其对应之方法函数均返回“受体”对象本身，以实现对其各个方法函数的链式调用；
	 * 而最末步骤则负责返回程序作者对执行整个执行链所期望之结果。
	 * 
	 * 某些步骤允许被设置为“可省略”，或称“可跳过”。不可省略的步骤则可称为“必经”步骤。
	 * 每当“执行链”行至这些可省略的步骤的前一步骤时，凡代表这些可省略步骤后第一个必经步骤之方法函数
	 * 亦被一通曝露，否则，“可跳过”步骤名不副实。
	 * 最末步骤则为特例，因其负责返回执行链之结果。何况，“曝露其后续步骤”亦无从谈起。
	 * 例如：
	 * @example
	 * 	设有“步骤丙”、“步骤丁”及“步骤戊”三者，其中丁为“可省略”步骤，其余两者为“必经”步骤。
	 * 	则，当丙结束时，非但代表丁的方法函数会被曝露，戊之对应方法函数亦会一同被曝露。
	 * 
	 * 一言以蔽之，大体上，不执行完早期方法函数，则后续方法函数是隐藏的，无从执行。据此，各个方法之调用次序无从违背。
	 * 
	 * 此番改造之根本目的在于，将传统的形如：“
	 * @example
	 * 	var 结果 = 对象.传统方法函数(参数子, 参数丑, 参数寅);
	 * 
	 * ”之调用方式，转变为我之特色方式，形如：“
	 * @example
	 * 	var 结果 = 对象.方法函数甲(参数子).方法函数乙(参数丑).方法函数丙(参数寅)；
	 * 
	 * ”，并建议（但不强迫）每个阶段仅接受至多一个参数。
	 * 此方式亦有助于构造更为逼近自然语言之计算机程序语句。
	 * 例如：
	 * @example
	 * 	var 礼物 = 我.掏出钥匙(钥匙实例).解锁自行车(自行车实例).骑行至(目的地).获取礼物自(赠与人);
	 * 
	 * 在上例中，依据“不执行完早期方法函数，则后续方法函数无从执行”之规则，
	 * 客户程序调用对象“我”之方法函数时，不允许违背规定顺序。
	 * 若不调用“解锁自行车”，或虽调用但有错误抛出，则无法进入“骑行至”方法函数。
	 * 假定其中“获取礼物自”方法函数，是应用该程序设计模式时最末添加的阶段所对应之方法，
	 * 那么，该原始方法函数之返回值回被传递并最终返回至“外界”；
	 * 而其余各阶段则之原始函数的返回值均会被忽略于调用链内部。
	 * 
	 * 该模式可应用于所谓“普通对象”，诸如“明文对象（一译‘字面量对象’）”、JSON等。
	 * 而将该程序设计模式应用于“类”之定义内（针对JavaScript，亦即应用于另一个函数内部），
	 * 作用于“this”对象，似乎是更为常见、实用之用法。亦即，每一个有此“类”构建之实例对象
	 * 均会被视为“受体”。见例。
	 * 
	 * 另，倘若将整条执行链称为“执行路线”，我认为，对于任何“受体”，
	 * 完全可以为其构建多条执行路线，而不仅限于一条。
	 * 由于执行线路不可中断，否则无从返回结果；
	 * 何况每当从新的“路线”之首个阶段开始执行时，执行“现状”会被重新配置，没有干扰。
	 * 因此，多条执行线路不会互相干涉，即便它们共用某些方法函数。
	 * 
	 * 
	 * 
	 * # Introduction
	 * 
	 * Instances of this helper class is to apply a programming pattern design by me
	 * to a given object.
	 * The object is thus decorated, so that, all involved methods of the object
	 * are mapped into so-called stages, each method a stage.
	 * And from then on, only the first method is exposed.
	 * All other methods are hidden untill the first method gets invoked and not thrown.
	 * 
	 * Any stage other than the last one, when invoked,
	 * returns the instance itself, so that we can chain the invocations.
	 * This way we can easily design natural-language-like invocation chain.
	 * 
	 * All stages might be configured as skippable, a.k.a. optional.
	 * While for the last stage, this configuration is simply ignored.
	 * Cause anyway we need to invoke it to return what we want.
	 * 
	 * The purpose of applying such a pattern to a given object,
	 * is to change the traditional statement like:
	 * @example
	 * 	var result = anObject.traditionalMethod(arg1, arg2, arg3);
	 * 
	 * into another format as:
	 * @example
	 * 	var result = anObject.methodA(arg1).methodB(arg2).methodC(arg3);
	 * 
	 * I also suggest but not force to take at most only one argument per stage method.
	 * Besides, this is a good way, I personally think,
	 * to help making computer programming statements
	 * look more like natrual language sentences.
	 * 
	 * Let''s take another example:
	 * @example
	 * 	var gift = I
	 * 		.drawOutKey(theKeyInstance)
	 * 		.unlockBike(theBikeInstance)
	 * 		.driveTo(destination)
	 * 		.acceptGiftFrom(anotherPerson);
	 * 
	 * In the example above, the custom program that consumes the object "I"
	 * is *NOT* able to invoke methods of the "I" disobeying the pre-designed order.
	 * Before the invocation of the "unlockBike" method, the subsequence ones
	 * such as "driveTo" are not even available to the program.
	 * Also, assuming the "acceptGiftFrom" method happens to be the last one that is
	 * added as a stage, then the returning value, no matter what it is,
	 * will be transferred to the "outside world", which is the custom program mentioned above.
	 * While those returning values of any other methods are simply ignored
	 * inside of the invokaction chain scopes.
	 * 
	 * This pattern can be applied to any object, such as an object literal, a JSON, etc.
	 * While using it inside the definition of a class(a function), applying it to the "this"
	 * object might be a more useful use case, I guess.
	 * Since that way, each and every instance of the class is automatically decorated.
	 * 
	 * If we call the execution chain a "route", we can expect that multiple routes being
	 * applied to a single object at the same time is allowed and safe.
	 * Because the execution should not exit in the half way, otherwise nothing is able to return.
	 * Plus each time we start a route, the situation we are in is initialized to be clean.
	 * So multiple routes will not disturb each other at all, even if they might share same methods.
	 * 
	 * 
	 * 
	 * 
	 * # 较完整的范例 (Examples)
	 * 
	 * ## 基本用法 (Basics)
	 * @example
	 * 	function Soldier() {
	 * 
	 * 		var stagesBuilder = new WulechuanApplyOneStageOneMethodProgrammingPatternFor(this);
	 * 
	 * 		stagesBuilder.addStage(methodAsStage1, true, {
	 * 			'zh-CN': [ '第一步', '预备', '准备' ],
	 * 			'en-US': [ 'prepare', 'getReady', 'methodAsStage1', 'firstOfAll' ]
	 * 		});
	 * 
	 * 		stagesBuilder.addStage(shoot, true, {
	 * 			'zh-CN': [ '发射子弹', '开火', '开火！' ],
	 * 			'en-US': [ 'shoot', 'shootThem', 'fire' ]
	 * 		});
	 * 
	 * 
	 * 
	 * 		// This line below is essential and required.
	 * 		stagesBuilder.setPreferredNaturalLanguageTo('zh-CN');
	 * 
	 * 
	 * 
	 * 		function methodAsStage1() {
	 * 			// your statements go here
	 * 		}
	 * 
	 * 		function shoot() {
	 * 			// your statements go here
	 * 		}
	 * 	}
	 * 
	 * 	var firstSoldier = new Soldier;
	 * 	
	 * Now the "firstSoldier" object has only those methods
	 * which are mapped onto the "methodAsStage1" function,
	 * in all three Chinese aliases, of course,
	 * since the usingLanguage has been set to 'zh-CN'.
	 * Those which are mapped onto the "shoot" function
	 * is *NOT* available at this time.
	 * @example
	 * 	firstSoldier.第一步();
	 * 	// In English, this should have been:
	 * 	// firstSoldier.prepare();
	 * 
	 * From now on, the three aliases for the "methodAsStage1"
	 * are hidden (removed from the instance), since the stage1 is now a past stage.
	 * while the three aliases for the "shoot" function are available now.
	 * 
	 * If below were in English: var killedEnemies = firstSoldier.shoot();
	 * @example
	 * 	var killedEnemies = firstSoldier.发射子弹();
	 * 
	 * 
	 * ## 链式调用 (Chaining invocations)
	 * 
	 * Note that:
	 * @example
	 * 	firstSoldier === firstSoldier.第一步() // true
	 * 	firstSoldier === firstSoldier.prepare() // true
	 * 	firstSoldier === firstSoldier.getReady() // true
	 * 	.
	 * 	.
	 * 	.
	 * 
	 * because non-terminal stage methods return the decorared object itself.
	 * 
	 * So we can also do this:
	 * @example
	 * 	var secondSoldier = new Soldier;
	 * 
	 * 	var 被打死的敌人 = secondSoldier.预备().开火！();
	 * 	// If above were in English:
	 * 	// var killedEnemiesBySecondSoldier = secondSoldier.getReady().fire();
	 * 
	 * 
	 * ----- readme end -----
	 * 
	 * 
	 * @param {!object} stagesOperator - The object to apply staged-methods pattern to.
	 */
	// eslint-disable-next-line
	function WulechuanApplyOneStageOneMethodProgrammingPatternTo(stageMethodsOwner, initialPreferredLanguage) {
		var methodName_addStage = 'addStage';
		var methodName_setPreferredNaturalLanguageTo = 'setPreferredNaturalLanguageTo';
		var methodName_startFromFirstStage = 'startFromFirstStage';
		var methodName_stop = 'stop';

		var thisManagerOfStages = this;

		var allStages = [];
		var currentStageIndex = NaN;
		var theExecutionIsStopped; // Maybe it's some errors occurred.

		var knownLanguagesSoFar = [];
		var knownLanguagesIndicesSoFar = {}; // Simply for easy avoiding duplications
		var preferredLanguage;


		if (initialPreferredLanguage && typeof initialPreferredLanguage === 'string') {
			preferredLanguage = initialPreferredLanguage;
		} 

		thisManagerOfStages[methodName_addStage] = addFirstStage;
		thisManagerOfStages[methodName_setPreferredNaturalLanguageTo] = setPreferredNaturalLanguageTo;
		thisManagerOfStages[methodName_stop] = stop;





		function _isAUsableArray(subject) {
			return Array.isArray(subject) && subject.length > 0;
		}


		/**
		 * 
		 * @param {!object} stageAction - A function that will be added to the operator as its method at correct stage.
		 * @param {?boolean} isAnOptionalStage - True means the stage being added is an optional stage, so that the method
		 * 	after this optional stage should also be exposed at the previous stage of this optional stage.
		 * @param {!object} actionAliases - An object that takes several arrays, each contains aliases in a specific language.
		 * -	@param {!array} actionAliases[languageCode1] - An array that contains aliases of the method that presenting a stage, in a specific language.
		 * -	@param {?array} actionAliases[languageCode2] - An array that contains aliases of the method that presenting a stage, in a specific language.
		 * -	@param {?array} actionAliases['zh-CN'] - An array that contains aliases of the method that presenting a stage, in Chinese.
		 */
		function addStage(stageAction, thisStageCanBeSkipped, actionAliasesInAllLanguages) {
			if (typeof stageAction !== 'function') {
				throw TypeError(
					'A so-called stage is basically a function, '+
					'with some associated aliases just for conveniences, '+
					'which not only does some demonded work '+
					'but also exposes subsequence stages '+
					'and hides past stages for a given stages operator. '+
					'Among them, the demonded work is provided by you developer via the first argument, '+
					'So, when defining a stage, the first argument must be a function, '+
					'\nwhile the provided value was of type "'+typeof stageAction+'".'
				);
			}


			if (arguments.length === 2) {
				actionAliasesInAllLanguages = thisStageCanBeSkipped;
				thisStageCanBeSkipped = false;
			}


			// This line below might throw an error if the provided actionAliases is not valid.
			_examineProvidedActionAliases(actionAliasesInAllLanguages);


			var indexOfThisStage = allStages.length;

			actionAliasesInAllLanguages.stageIndex = indexOfThisStage;
			actionAliasesInAllLanguages.usingLanguage = '';

			var newStage = {
				actionAliases: actionAliasesInAllLanguages,
				allowsToSkip: thisStageCanBeSkipped,
				action: function () {
					if (theExecutionIsStopped) {
						if (indexOfThisStage === allStages.length-1) {
							return; // Return undefined if errors occured. Need more think.
						} else {
							return stageMethodsOwner;
						}
					}

					currentStageIndex = indexOfThisStage;
					var resultOfTheStageAction = stageAction.apply(stageMethodsOwner, arguments);

					_modifyMethodsOwnerByExposingOrHidingSomeMethods();

					if (indexOfThisStage === allStages.length-1) {
						// The final result of the actions chain is really what we want.
						return resultOfTheStageAction;
					} else {
						// Must return the {stagesOperator} for chaining steps,
						// even if errors occur inside the action, as long as nothing get thrown.
						return stageMethodsOwner;
					}
				}
			};

			allStages.push(newStage);

			return newStage;
		}

		function addFirstStage(/* stageAction, thisStageCanBeSkipped, actionAliasesInAllLanguages */) {
			theExecutionIsStopped = false;
			addStage.apply(thisManagerOfStages, arguments);
			thisManagerOfStages[methodName_addStage] = addStage;
			thisManagerOfStages[methodName_setPreferredNaturalLanguageTo] = setPreferredNaturalLanguageTo;
			_tryToExposeFirstStageSoThatTheOperatorIsUsable();
		}

		function _examineProvidedActionAliases(actionAliasesInAllLanguages) {
			var errorMessage1 = 'At least one alias is required for a stage action to publish as a method.';
			var atLeastOneValidAliasIsProvided = false;

			if (!actionAliasesInAllLanguages || typeof actionAliasesInAllLanguages !== 'object') {
				throw TypeError(
					'The action aliases argument must be an object, '+
					'containing at least one alias which is marked as in a specified language.'
				);
			}

			for (var language in actionAliasesInAllLanguages) {
				var actionAliasesInASpecificLanguage = actionAliasesInAllLanguages[language];

				if (actionAliasesInASpecificLanguage && typeof actionAliasesInASpecificLanguage === 'string') {
					actionAliasesInASpecificLanguage = [actionAliasesInASpecificLanguage];
					actionAliasesInAllLanguages[language] = actionAliasesInASpecificLanguage;
				}

				if (!_isAUsableArray(actionAliasesInASpecificLanguage)) continue;

				atLeastOneValidAliasIsProvided = true;

				var isAnUnknownLanguage = !knownLanguagesIndicesSoFar[language];
				if (isAnUnknownLanguage) {
					knownLanguagesSoFar.push(language);
					knownLanguagesIndicesSoFar[language] = true;
				}
			}

			if (!atLeastOneValidAliasIsProvided) {
				throw TypeError(errorMessage1);
			}
		}

		function _getActionAliasesBetterInThisLanguage(actionAliasesInAllLanguages, _preferredLanguage) {
			var foundActionAliases = actionAliasesInAllLanguages[_preferredLanguage];
			if (_isAUsableArray(foundActionAliases)) {
				actionAliasesInAllLanguages.usingLanguage = _preferredLanguage;
				return foundActionAliases;
			}

			var aValidAlternativeHasBeenFound = false;
			var language;
			for (language in actionAliasesInAllLanguages) {
				foundActionAliases = actionAliasesInAllLanguages[language];
				if (_isAUsableArray(foundActionAliases)) {
					aValidAlternativeHasBeenFound = true;
					actionAliasesInAllLanguages.usingLanguage = language;
					break;
				}
			}

			if ( ! aValidAlternativeHasBeenFound) {
				throw ReferenceError(
					'No valid aliases in any language for stage '+
					actionAliasesInAllLanguages.stageIndex+
					'!'
				);
			}

			console.warn('For stage', actionAliasesInAllLanguages.stageIndex,
				', none of the aliases is in the preferred language ("'+_preferredLanguage+'").',
				'\nInstead, aliases in "'+language+'" are exposed as methods.'
			);

			return foundActionAliases;
		}

		function setPreferredNaturalLanguageTo(language) {
			if (!language) {
				throw TypeError('Must specify the natural language to use.');
			}
			preferredLanguage = language;
			_tryToExposeFirstStageSoThatTheOperatorIsUsable();
		}

		function startFromFirstStage() {
			allStages[0].action.apply(stageMethodsOwner, arguments);
		}

		function stop() {
			theExecutionIsStopped = true;
			console.error('The process is stopped at stage', currentStageIndex);
		}

		function _modifyMethodsOwnerByExposingOrHidingSomeMethods() {
			_hideMethodsOfAllPastOrSkippedStagesIncludingCurrentStage();
			_exposeMethodsOfAllStagesTillFirstRequiredStageStartingWithIndex(currentStageIndex+1);
		}

		function _hideMethodsOfAllPastOrSkippedStagesIncludingCurrentStage() {
			for (var si = 0; si <= currentStageIndex; si++) {
				var stage = allStages[si];
				var actionAliasesInAllLanguages = stage.actionAliases;
				var actionAliasesInActuallyUsingLanuage =
					actionAliasesInAllLanguages[actionAliasesInAllLanguages.usingLanguage];

				for (var ai = 0; ai < actionAliasesInActuallyUsingLanuage.length; ai++) {
					var alias = actionAliasesInActuallyUsingLanuage[ai];
					delete stageMethodsOwner[alias];
				}
			}
		}

		function _tryToExposeFirstStageSoThatTheOperatorIsUsable() {
			if (allStages.length < 1) return;
			if ( ! preferredLanguage) return;

			// Expose the method of the first stage with the common name,
			// a.k.a. the "startFromFirstStage" according to the default configuration.
			thisManagerOfStages[methodName_startFromFirstStage] = startFromFirstStage;

			// Also expose it with aliases.
			_exposeMethodsOfStagesWithIndexBetween(0, 1);
		}

		function _exposeMethodsOfAllStagesTillFirstRequiredStageStartingWithIndex(startingStageIndex) {
			var endingExclusiveStageIndex = allStages.length;

			var si, stage;
			for (si = startingStageIndex; si < allStages.length-1; si++) {
				stage = allStages[si];
				if (!stage.allowsToSkip) {
					endingExclusiveStageIndex = si+1;
					break;
				}
			}

			_exposeMethodsOfStagesWithIndexBetween(startingStageIndex, endingExclusiveStageIndex);
		}

		function _exposeMethodsOfStagesWithIndexBetween(startingStageIndex, endingExclusiveStageIndex) {
			for (var si = startingStageIndex; si < endingExclusiveStageIndex; si++) {
				var stage = allStages[si];

				var actionToExpose = stage.action;

				var actionAliasesInActuallyUsingLanuage =
					_getActionAliasesBetterInThisLanguage(stage.actionAliases, preferredLanguage);

				for (var ai = 0; ai < actionAliasesInActuallyUsingLanuage.length; ai++) {
					var alias = actionAliasesInActuallyUsingLanuage[ai];
					stageMethodsOwner[alias] = actionToExpose;
				}
			}
		}
	}

/***/ })
/******/ ]);