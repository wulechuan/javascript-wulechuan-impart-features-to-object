window.WulechuanImpartationOperator = require('../../source/wulechuan-impart-features-to-object');


var theOperator = new window.WulechuanImpartationOperator;

var a = {}; // the grantee;

theOperator.impart
	.anInstanceOf(
		function MyNewClass() { this.lovelyName = 'this is my original name'; }
	)
	.whenConstructed()
	.nameIt('newShiningProperty')
	.withASetterForTheChiefProperty(
		function (attributeThatStandsForAnInstanceOfMyNewClass, newValue) {
			console.log('Chief property setter invoked with "'+newValue+'"');
			attributeThatStandsForAnInstanceOfMyNewClass.lovelyName = newValue;
		}
	)
	.addAttributesDirectlyUnderGrantee({ lovelyName: '${ChiefName}DirectlyAccessibleLovelyName' })
	.to(a); // Finally!


console.log('\na.newShiningProperty.lovelyName: "'+a.newShiningProperty.lovelyName+'"');
// 'this is my original name'

console.log('\na.newShiningPropertyDirectlyAccessibleLovelyName: "'+a.newShiningProperty.lovelyName+'"');
// 'this is my original name'

console.group('Try the customized setter, which simply changes the value of the "lovelyName" property.');
console.log('a.newShiningProperty = \'wulechuan\';\n');
a.newShiningProperty = 'wulechuan';

console.log('\na.newShiningProperty.lovelyName: "'+a.newShiningProperty.lovelyName+'"\n');
// 'wulechuan'

console.log('\na.newShiningPropertyDirectlyAccessibleLovelyName: "'+a.newShiningProperty.lovelyName+'"\n');
// 'wulechuan'

console.groupEnd();

console.log('\na.newShiningPropertyDirectlyAccessibleLovelyName = \'Softimage XSI\';');
console.log('\na.newShiningProperty.lovelyName: "'+a.newShiningProperty.lovelyName+'"\n');

window.a = a;