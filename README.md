# 简介

以所谓“传授（impart）”的程序写法实现所谓“混入（Mixin）”功能，使得“受体”具有被传授的属性和方法函数。
并且，这些被传授的属性和方法均被包裹在getter和setter内，受到保护。

主体为一所谓“工厂函数”，用于构建一个对象。该对象包含若干属性，每一属性均为一函数。
这些函数之功能在逻辑上严格等同，但却操持不同人类语言，以便熟悉这些语言之一者采用。

# 范例

首先，创建一个类（即一个函数）。稍后将由该类创建一个实例对象，
并把实例对象之属性“传授予”某个称之为“受体”的对象。


	function 二维矢量() {
		// 此处为具体内容
	}

接着，不妨定义一些所谓“变体”，以便日后遵照一些个性化要求“传授”该类之实例对象的属性及方法。
定义这些“变体”有何益处？且听分解。

在上例中，二维矢量之实例可以表达多种意图，或者说可以有多种“变体”。
诸如“二维位置”、“二维力矢量”及“二维速度矢量”等。

编写程序以反映现实世界之现象或关系时，有人喜欢抽象——尽可能高度的抽象，并为其所达高度而自豪。
针对本例，此类人可能完全满足于将“模”一词通用于“二维位置”、“二维力”以及“二维速度”，以表达这些矢量之“大小”。
具体为“二维力.模”、“二维速度.模”，乃至“二维位置”也同样有“模”，虽然用处不大。

另有一些人，包括笔者，则热衷于模仿真实事物的特性乃至命名习惯，
以求更容易将其所写程序对应于所欲描述之真实。
于本例而言，这类人或许更愿意在其代码中如此表达：
-	于“二维力”，将“模”更名为“强度”，即有“二维力.强度”；
-	于“二维速度”，将“模”更名为“速率”，即有“二维速度.速率”；
-	于“二维位置”，隐去“模”属性，不允许外界访问；

由此可见，统一的幕后概念，在不同场合应有不同表达。这些不同表达，我称之为所谓“变体”。

另外，有时，为使用之方便，亦须将“获受”的属性或方法
直接挂载于受体对象下。形如：
	既有“二维粒子.受力.强度”，同时亦有“二维粒子.受力强度”；
	既有“二维粒子.速度.速率”，同时亦有“二维粒子.速率”；
如此种种，以为方便。

此种情形之下，仍坚持令所有“获受”之实例在“受体”上各自保留原版属性名称，显然行不通。
程序员当然可以手工解决此问题。只是，此事虽然容易，却颇为令人厌烦。
为行方便，应有更佳方案自动实现之。


	二维矢量.wulechuanImpartationProfiles = {
		'二维位置': { propertyNameForTheObjectItself: '位置', ... },
		'二维力':   { propertyNameForTheObjectItself: '受力', ... },
		'二维速度': { propertyNameForTheObjectItself: '速度', ... }
	}

	function 二维点() {
		传授(true).实例对象源于此类(二维矢量).视作('二维位置').予(this);
		// “传授(true)”中的“true”代表即便有错误也不抛出，而仅仅在控制台打印错误记录。
	}

	function 二维粒子() {
		传授().实例对象源于此类(二维矢量)
			.视作('二维位置')
			.且定名为('方位')    // 此例中故意将默认配置中的主名称“位置”改称“方位”。
			.予(this); 

		传授().实例对象源于此类(二维矢量)
			.视作('二维速度')
			.并更名以下属性({
				速率2: '速率之平方'     // 此处有意改称之，以为示例。
			})
			.且设以下直接可用之属性({
				速率: '',             // 此处采用默认名称即可，因而取值留空。
				速率2: '速率之平方'	// 此处采有意改称之，以为示例。
				方向: '移动方向'       // 此处有意将速度之“方向”改称“移动方向”。
			}).予(this);

		传授().实例对象源于此类(二维矢量)
			.视作('二维位置')
			.构建时依据({
				x: 3,
				y: -19
			})
			.并更名以下属性({
				propertyNameForTheObjectItself: '中心点',
				x: '水平位置',
				y: '垂直位置'
			})
			.予(this);

		传授().实例对象源于此类(二维矢量)
			.视作('二维力')
			.且设以下直接可用之属性({
				强度: '受力强度',
				方向: '受力方向'
			})
			.予(this);
	}


尽管上例均以另一“类”作为“受体”，准确的说是以该类之任何实例分别作为受体，
采用所谓“普通对象”，如“明文对象（一译‘字面量对象’）”，作为“受体”对象亦是可行的。

	二维粒子.wulechuanImpartationProfiles = {
		default: { propertyNameForTheObjectItself: '二维粒子', ... }
	};

	var 一个字面量对象用作受体 = { 姓名: '吴乐川', 电子邮件地址: 'wulechuan@live.com' };
	传授().对象(My2DParticle).予(一个字面量对象用作受体);


进而不难想见，所谓“普通对象”，亦可被用作传授源体，其属性和方法可传授予“受体”对象。

	var 传授源 = {
		会写CSS: true,
		挚爱: 'SOFTIMAGE XSI',
		会做饭: true
	};

	var 一个字面量对象用作受体 = { 姓名: '吴乐川', 电子邮件地址: 'wulechuan@live.com' };
	
传授().对象(传授源).予(一个字面量对象用作受体);





# Introduction

This is the factory function to build up the impartation tool,
a.k.a. the object to expose and use, which is discribed below.

# Example

First, let's write a function as a class.
Later, we will impart properties of an instance of this class to some grantee.


	function My2DVector() {
		// The definitions go here.
	}

Now, add pre-defined profiles for easier impartations.

As one might imagine, a 2d vector can be used in different ways,
such as a 2d position, a 2d force, or a 2d velocity.

Some people love to use abstract across different things.
Thus, as an example, they are often happy to use
the single term "legnth" across all possible applications,
or we can say profiles, or variants. That is, they live with
"force2D.length", "position2D.length" as well as "velocity2D.length".

While there are another type of people, they love to describ things
in there programs in a way that matches real world as much as possible.
These type of people turn to choose different terms for different things,
even though the core concept behind these things are exactly the same.
Still take the 2d vector as an example, they might be happier with:
-	for a 2d force, expose "force.strength" instead of "force2D.length";
-	for a 2d velocity, expose "velocity.speed" instead of "velocity2D.speed";
-	for a 2d position, does not expose the "length" at all.

All these means that despite the shared concept behinds, we need different
ways to express things in different siuations. And these ways,
I call them "profiles" of a concept.
A profile describs how a core/raw class should be imparted to a grantee.
Take the example above, the "position2d", "force2d", as well as the "velocity2d"
are all impartation profiles of the My2DVector class.

Note:
	Being a non-native English speaker, I might NOT pick the
	accurate word by using the term "profile".
	And I'm glad to recieve suggestions upon this.

What's more, there are cases in which we want to impart some properties or methods
directly into a grantee object. Which means, we want not only:

	particle2d.force.strength
	particle2d.velocity.speed

but also:

	particle2d.forceStrength // an imparted property directly under the grantee itself
	particle2d.speed // another imparted property directly under the grantee itself

In this situation, keeping the same term for properties of each and every imparted properties
is impossible.
As programmers, we can solve these problems by hands. But that's not a perfect way.
So we need a solution, hopefully a slightly better one.




	My2DVector.wulechuanImpartationProfiles = {
		position2D: { propertyNameForTheObjectItself: 'position', ... },
		force2D:    { propertyNameForTheObjectItself: 'force', ... },
		velocity2D: { propertyNameForTheObjectItself: 'velocity', ... }
	}

	function My2DPoint() {
		impart().theClass(My2DVector).as('position2D').to(this);
	}

	function My2DParticle() {
		impart().theClass(My2DVector).as('position2D').renamedAs('pos').to(this);

		impart().theClass(My2DVector).as('velocity2D').renamedAs({
			speed: 'velocityLength',
			speed2: 'squareSpeed'
			velocityDirection: 'movingDirection'
		}).to(this);

		impart().theClass(My2DVector)
			.as('position2D')
			.buildAccordingTo({
				x: 3,
				y: -19
			})
			.addAliasesForAttributes({
				propertyNameForTheObjectItself: 'centerPos',
				x: 'centerX',
				y: 'centerY'
			})
			.to(this);

		impart().theClass(My2DVector)
			.usingThisProfile('force2D')
			.addAliasesForAttributes({
				strength: 's',
				forceDirection: 'forceAngle'
			})
			.to(this);
	}


Although we were using other classes like "My2DParticle"
as the grantees, it shouldn't be suprising that we
can impart things into an object literal as well.
Thus the object literal gains new properties and methods.

	My2DParticle.wulechuanImpartationProfiles = {
		default: { propertyNameForTheObjectItself: 'particle2D', ... }
	};

	var myLovelyObjectLiteral = { name: '吴乐川', email: 'wulechuan@live.com' };
	impart().theClass(My2DParticle).to(myLovelyObjectLiteral);


One can imagine that an object literal can also treated
as an impartation source object, just like those who
are instantiated from a given class.
Still, the grantee can be any other object,
be it an instance, or another object literal.

	var myObjectAsImpartationSource = {
		property1: 'I love SOFTIMAGE XSI',
		isAbleToFly: true
	};

	var myObjectLiteralAsGrantee = { name: '吴乐川', email: 'wulechuan@live.com' };
	impart
		.theObject(myObjectAsImpartationSource)
		.to(myObjectLiteralAsGrantee);




# Random thoughts on API:

A profile can itself be named 'default', thus it will be taken by default.
Any profile **might** but is not forced to provide two objects, named:

	'attributesAliasesToAdd'

and

	'attributesToAddToGranteeDirectly'

.

A profile object **might** also contain a property named

	'propertyNameForTheObjectItself'

, value of whom is to decide the new name of the instance to impart.
If the 'propertyNameForTheObjectItself' is absent,
then the name of the profile is taken instead.

For example, the minimum definition of the 'force2D' profile
for the 'Vector2D' class looks like this:

	Vector2D.wulechuanImpartationProfiles = {
		force2D: {} // All instances will by default be named 'force2D'.
	};


Take another example for this:

	Vector2D.wulechuanImpartationProfiles = {
		velocity2D: {
			propertyNameForTheObjectItself: 'v' // All instances will by default be named 'v', instead of 'velocity2D'.
			attributesAliasesToAdd: {
				speed: 'rapidness' // A new attribute named 'rapidness' will be added to the intance. While the 'speed' is still available, because we only add attributes with new names, never delete existing ones.
			}
		}
	};

The 'attributesToAddToGranteeDirectly' property of a profile is optional.
When present, it looks like this:

	Vector2D.wulechuanImpartationProfiles = {
		velocity2D: {
			propertyNameForTheObjectItself: 'v',
			attributesToAddToGranteeDirectly: {
				speed: '', // added with the name 'speed', so the name can be omitted, an empty string is used instead
				x: 'speedX',
				y: 'speedY'
			}
		}
	};

 


# API

See: [API](API.md).