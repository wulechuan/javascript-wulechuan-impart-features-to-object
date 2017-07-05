var wulechuanImpartationOperator = new WulechuanImpartationOperator();
module.exports = wulechuanImpartationOperator;


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
 * @param {!string} usingLanguage
 * 
 * @returns
 * @property {function} 传授 - 此为impart函数的包裹函数，其将impart函数的优选语言定为“简体中文”。
 * @property {function} impart - the wrapped impart function, taking the 'en-US' as the preferred language
 * 
 */
function WulechuanImpartationOperator() {
	var WulechuanApplyOneStageOneMethodProgrammingPatternTo =
		require('@wulechuan/apply-one-stage-one-method-pattern');

	var nameOfEntranceProperty_zhCN = '传授';
	var nameOfEntranceProperty_enUS = 'impart';


	// This method name below, which is the first method to invoke,
	// will NOT be public.
	// Because we are wrapping it with getter functions,
	// so that we can easily decide the using langugae.
	// Thus, only one alias is enough for it to use inside this scope.
	var methodName_startToImpart = '__startToImpart__';




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
		'named',
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












	var thisOperator = this;

	var shouldThrowErrors;

	var usingLanguage;

	var theClassConstructor;
	var theClassConstructionOptions;
	var allImpartationProfilesOfClass;
	var usedImpartationProfileNameOfClass;
	var isUsingImplicitProfileOfClass = true; // make getter and setter for each and every attribute.
	var isUsingDefaultProfileOfClass = false;

	var usedImpartationProfileOfClass;

	var theSourceObjectToImpartAttributesFrom;

	var attributesAliasesToAddAdditionalToProfileDefined = {};
	var attributesToAddDirectlyUnderGranteeAdditionalToProfileDefined = {};

	var usedChiefName;
	var allAliasesToAddForAllAttributes = {};
	var allAliasesToAddForAllAttributesFlattenedBackwardsMapping = {};
	var allAttributesToAddDirectlyUnderGrantee = {};
	var allAttributesToAddDirectlyUnderGranteeFlattenedBackwardsMapping = {};

	var grantee;




	var stagesOfClassRoute  = _defineExecutionRouteForImpartingFromAClassInstance();
	var stagesOfObjectRoute = _defineExecutionRouteForImpartingFromAnObject();

	// Hide(remove) the "startToImpart" method, because we only want to expose
	// the entrance getters defined below.
	var backupOfStartToImpartMethod = thisOperator[methodName_startToImpart];
	delete thisOperator[methodName_startToImpart];



	_defineEntranceGettersInLanguage('zh-CN', nameOfEntranceProperty_zhCN);
	_defineEntranceGettersInLanguage('en-US', nameOfEntranceProperty_enUS);











	function _defineEntranceGettersInLanguage(languageCode, entrancePropertyName) {
		Object.defineProperty(thisOperator, entrancePropertyName, {
			enumerable: true,
			get: function () {
				_forAllRoutesSetPreferredNaturalLanguageTo(usingLanguage);

				// Execute first stage to automatically hide methods in other languages.
				// Note that in face, the returned value is still "thisOperator" itself.
				return backupOfStartToImpartMethod();
			}
		});
	}

	function _forAllRoutesSetPreferredNaturalLanguageTo(languageCode) {
		usingLanguage = languageCode;
		stagesOfClassRoute.setPreferredNaturalLanguageTo(languageCode);
		stagesOfObjectRoute.setPreferredNaturalLanguageTo(languageCode);
	}

	function _defineExecutionRouteForImpartingFromAClassInstance() {
		var stagesOfClassRoute =
			new WulechuanApplyOneStageOneMethodProgrammingPatternTo(thisOperator);
		
		stagesOfClassRoute.addStage(startToImpart, {
			'zh-CN': [methodName_startToImpart],
			'en-US': [methodName_startToImpart]
		});

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
			new WulechuanApplyOneStageOneMethodProgrammingPatternTo(thisOperator);

		stagesOfObjectRoute.addStage(startToImpart, {
			'zh-CN': [methodName_startToImpart],
			'en-US': [methodName_startToImpart]
		});

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

			isNotAValidKey: function(subject) {
				return !_the(subject).isAnValidKey(subject);
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
				var _foundErrorMessage = errors[usingLanguage];
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
		if (_the(profileName).isANotValidKey()) {
			return false; // failed
		}

		return _the(allImpartationProfilesOfClass[profileName]).isAValidObject();
	}





	function addAliasesForAttributesAdditionalToProfileDefinedAliases(_attributesAliasesToAdd) {
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

		if ( ! usedChiefName) {
			_dealWithTheAbsentOfTheChiefName();
			return false;
		}

		_addAliasesOfAttributesToImpartationSourceObject();
		_addAttributesDirectlyToGrantee();

		return true;
	}

	function _dealWithTheAbsentOfTheChiefName() {
		var _methodSuggestionsForNamingObjectItself = '\n\t"'+
			[
				methodNames_addAliasesForAttributes_zhCN[0],
				methodNames_addAliasesForAttributes_enUS[0]
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

	function _decideAliasesAccordingTo(_aliases, _aliasesAreToAddToImpartationSourceObject) {
		var _nonDuplicatedAliasesForAllInvolvedAttributes;
		var _flatternedRecordsForBackwardsMapping;


		if (_the(_aliases).isNotAValidObject()) {
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



		for (var _keyAsEitherAttributeNameOrAlias in _aliases) {
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
				_aliases[_keyAsEitherAttributeNameOrAlias];

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

	function _addAliasesOfAttributesToImpartationSourceObject() {
		for (var _alias in allAliasesToAddForAllAttributesFlattenedBackwardsMapping) {
			var _attributeName = allAliasesToAddForAllAttributesFlattenedBackwardsMapping[_alias];
			var _attribute = theSourceObjectToImpartAttributesFrom[_attributeName];

			if (typeof _attribute === 'function') {
				_impartOneMethodTheDefaultWay(
					_attributeName,
					_alias,
					theSourceObjectToImpartAttributesFrom
				);
			} else {
				_impartOnePropertyTheDefaultWay(
					_attributeName,
					_alias,
					theSourceObjectToImpartAttributesFrom
				);
			}
		}
	}

	function _addAttributesDirectlyToGrantee() {
		for (var _alias in allAttributesToAddDirectlyUnderGranteeFlattenedBackwardsMapping) {
			var _attributeName = allAttributesToAddDirectlyUnderGranteeFlattenedBackwardsMapping[_alias];
			var _attribute = theSourceObjectToImpartAttributesFrom[_attributeName];

			if (typeof _attribute === 'function') {
				_impartOneMethodTheDefaultWay(_attributeName, _alias, grantee);
			} else {
				_impartOnePropertyTheDefaultWay(_attributeName, _alias, grantee);
			}
		}
	}

	function _impartOneMethodTheDefaultWay(_methodName, _alias, _granteeOfMethod) {
		Object.defineProperty(_granteeOfMethod, _alias,
			{
				enumerable: true,
				get: function () {
					return theSourceObjectToImpartAttributesFrom[_methodName];
				}
				// method should have no setter
			}
		);
	}

	function _impartOnePropertyTheDefaultWay(_propertyName, _alias, _granteeOfProperty) {
		Object.defineProperty(_granteeOfProperty, _alias,
			{
				enumerable: true,
				get: function () {
					return theSourceObjectToImpartAttributesFrom[_propertyName];
				},
				set: function (newValue) {
					theSourceObjectToImpartAttributesFrom[_propertyName] = newValue;
				}
			}
		);
	}
}