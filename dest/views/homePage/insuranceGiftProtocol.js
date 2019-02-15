// { "framework": "Vue"}"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 469);
/******/ })
/************************************************************************/
/******/ ({

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(470)
)

/* script */
__vue_exports__ = __webpack_require__(471)

/* template */
var __vue_template__ = __webpack_require__(472)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/xuqiang/Desktop/weex-loader-demos/webpackConfig/src/views/homePage/insuranceGiftProtocol.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-cdb99e8a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 470:
/***/ (function(module, exports) {

module.exports = {
  "protocol": {
    "fontSize": "30",
    "paddingTop": "50",
    "paddingBottom": "100",
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "protocolTitle": {
    "fontSize": "35",
    "fontWeight": "bold"
  }
}

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'InsuranceGiftProtocol',
	data() {
		return {};
	}
});

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["protocol"]
  }, [_c('h1', [_c('text', {
    staticClass: ["protocolTitle"]
  }, [_vm._v("数据授权采集服务协议")])]), _c('p', [_c('text', [_vm._v("\n            我们（详见定义条款）尊重并保护用户隐私，在您使用本服务时，我们将按照本协议收集、使用和共享您的个人信息。请在使用本服务前，详细阅读并理解本协议的所有内容，特别是隐私权保护及授权条款、免除或者限制我们责任的条款以及争议解决和法律适用条款。以粗体下划线标识的条款，您应重点阅读并理解。一旦您以任何方式使用本服务，即视为您已充分阅读、理解并接受本协议的全部内容，并与我们达成协议。如您对本协议有任何疑问，应向盈盈有钱客服咨询。如果您不同意本协议的部分或全部约定，您应立即停止使用本服务并通过客服与盈盈有钱联系。\n        ")])]), _c('p', [_c('text', [_vm._v("\n            您与我们达成本协议后，您承诺接受并遵守本协议的约定，并不得以未阅读本协议的内容或者未获得我们对您问询的解答等理由，主张本协议无效，或要求撤销本协议。在本协议履行过程中，我们可以依其单独判断暂时停止提供、限制或改变本服务，并有权根据自身业务需要修订本协议。一旦本协议的内容发生变动，我们将提前七日通过平台公布最新的服务协议，不再向您作个别通知。如果您不同意我们对本服务协议所做的修改，您应立即停止使用本服务并通过盈盈有钱客服与我们联系。如果您继续使用本服务，则视为您接受我们对本协议所做的修改，并应遵照修改后的协议执行。\n        ")])]), _c('h5', [_c('text', [_vm._v("1.定义")])]), _c('ul', [_c('li', [_c('text', [_vm._v("我们：是指本服务的提供者，即杭州盈火网络科技有限公司，简称“盈火公司”。")])]), _c('li', [_c('text', [_vm._v("盈盈有钱：盈火公司旗下APP。")])]), _c('li', [_c('text', [_vm._v("处理：是指对任何信息的保存、整理、分析、使用、分享等各项操作。")])]), _c('li', [_c('text', [_vm._v("本服务：是指我们在用户授权和同意的前提下，将用户的信息分享给第三方用于借贷接洽和审核。")])]), _c('li', [_c('text', [_vm._v("借款：是指用户通过第三方的借贷接洽，与出借人形成的借款关系。")])])], 1), _c('h5', [_c('text', [_vm._v("2．服务规则")])]), _c('ul', [_c('li', [_c('text', [_vm._v("\n                2.1  用户是具备完全民事行为能力的自然人。无民事行为能力人、限制民事行为能力人不得使用本服务，一经发现，我们有权立即终止服务，并保留追究其使用本服务的一切法律责任。\n            ")])]), _c('li', [_c('text', [_vm._v("\n            2.2  用户应当按照法律法规的要求，根据页面的提示，准确填写其身份信息及相关资料并及时更新正确、最新及完整的资料。我们有权对用户提供的身份信息及相关资料进行核对，若有证据或有合理理由怀疑用户提供的资料错误、不实、冒用、过时或者不完整的，我们有权暂停或终止向其提供部分或者全部服务。\n            ")])]), _c('li', [_c('text', [_vm._v("\n                2.3  我们将通过公安部身份识别系统、开户银行等途径交叉验证用户姓名、身份证号及银行预留手机号的一致性，用户同意授予我们为完成上述工作所必须的授权。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        2.4 用户不得使用他人的或虚假的身份信息、银行账号等资料，由此对我们及他人造成财产损失或其他损失的，用户应当承担相应的民事或刑事责任，且我们有权立即冻结该账户，并向公安机关或其他主管部门举报。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        3. 信息采集及用户授权\n            ")])]), _c('li', [_c('text', [_vm._v("\n        3.1 使用本服务前，您同意并授权我们采集您的个人信息，并有可能将您的个人信息提供给第三方用于借贷接洽和审核。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        3.2 用户同意并授权我们采集的信息包括但不限于您的姓名、性别、民族、住址、身份证号码等基本身份信息以及学历背景、工作单位和年限、收入情况、财产状况等数据。您已经认识到您的上述信息对于您而言是相当私密而重要的。您同意我们向第三方采集并在适用的法律法规许可的范围内向信息使用者依法提供这些信息时，您已经充分理解并知晓该等信息被提供和使用的风险。这些风险包括但不限于：纳入这些信息对您的信用评级（评分）、信用报告等结果可能产生的不利影响，该等信息被我们依法提供给第三方后被他人不当利用的风险，第三方向您推销产品或服务等打扰的风险。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        3.3为评估您的信用状况、履约能力和意愿，您同意并授权我们收集您在我们可信赖的第三方合作伙伴处合法留存或形成的与本服务相关的必要信息，如您的借款信息等。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        3.4 您同意并授权我们将数据脱敏处理（隐藏姓名、身份证号码、联系方式等重要信息，模糊化年龄段、收入水平、工作状况、教育背景、征信状况等信息）后的用户信息提供给第三方信贷机构，以便于信贷机构或信贷经理为您提供信息接洽和借款审核等服务；\n            ")])]), _c('li', [_c('text', [_vm._v("\n        3.5当出借人有意向与用户接洽借款并向我们的合作机构发起申请时，我们采集的用户借款信息将向第三方信贷机构或出借人公布，用户同意并授权我们公布包括姓名、联系方式、征信状况等在内的个人信息。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        3.6 为帮助您寻找到更多的渠道资源，我们可能会和与我们服务方式类似的第三方平台（比如好贷网）合作，在这种情况下，您同意并授权我们将您的个人信息（包括姓名、身份证号、联系方式等重要信息以及年龄、所在城市、公积金、社保、信用卡、贷款额度、贷款期限等信息）提供给第三方平台。同时，您同意并授权第三方平台将您的信息提供给第三方信贷机构及信贷经理，以便于信贷机构或信贷经理为您提供信息接洽和借款审核等服务。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        4. 除外责任\n            ")])]), _c('li', [_c('text', [_vm._v("\n        4.1 因您的过错导致的任何损失，该过错包括但不限于：操作不当、遗忘或泄露密码、密码被他人破解、您使用的计算机系统被第三方侵入、您委托他人代理使用本服务时他人恶意或不当操作而造成的损失，由您自行负责。除非我们单方故意或重大过失对您造成的直接损失外，我们不承担责任。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        4.2  我们所对接的信贷机构，与我们均无管理与被管理的关系，其所做的行为、承诺均未经我们授意，与我们无关，我们亦不承担任何法律责任。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        4.4 我们仅为借贷需求双方提供交易机会与信息服务，不参与借款行为以及其他交易行为，不提供资金支付、结算或托管服务。用户应审慎对待自己的交易行为，通过跳转链接进入第三方借贷渠道后发生的行为，以及用户之间发生的借贷行为均与我们无关，该借款行为与我们无关，我们亦不提供任何形式的担保和保证。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        4.5 当司法机关、政府部门或其他监管机构根据有关法律、法规、规章及其他政府规范性文件的规定和程序，要求我们提供用户信息资料，针对据此作出的任何披露，我们不承担责任。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        4.6  由于中国法律政策的变动或监管机关的要求导致我们开展的业务不被中国法律政策、监管机关允许或认可，由此造成的损失由用户自行承担，我们不承担责任。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        4.7 我们善意提醒您，为了保护您免受身份冒用或者因为关联非本人风险事件而遭受损失，您在第三方的注册、登录或者使用相关服务过程中，第三方可能拒绝给您提供有关优惠条件或暂停、终止向您提供服务。如您因此受到上述影响，我们无须就此承担责任。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        5. 用户的禁止性行为\n            ")])]), _c('li', [_c('text', [_vm._v("\n        5.1 用户不得利用本服务制作、上载、复制、发布、传播法律、法规和政策禁止的内容，不得干扰平台运营，不得侵犯其他用户及其他第三方权益。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        5.2 用户须对利用本服务传送信息的真实性、合法性、无害性、准确性、有效性等全权负责，与用户所传播的信息相关的任何法律责任由用户自行承担，我们对此不承担任何责任。如因此给我们或第三方造成损害的，用户应当依法予以赔偿。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        5.3 用户应承诺通过我们进行借贷的借款用途合法，不得进行诈骗、盗窃、洗钱、非法集资等违法犯罪活动，以及侵犯他人人身、财产权益的活动。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        6. 服务暂停、中断或终止\n            ")])]), _c('li', [_c('text', [_vm._v("\n            我们有权基于单方独立判断，在认为可能不利于我们提供服务或涉及违法违规等情形时，可不经通知而先行暂停、中断或终止向您提供本协议项下的全部或部分服务，且无需因此对您或任何第三方承担任何责任。\n            ")])]), _c('li', [_c('text', [_vm._v("\n            前述情形包括但不限于：\n            ")])]), _c('li', [_c('text', [_vm._v("\n            （1）我们认为您提供的个人信息不真实、无效或不完整；\n            ")])]), _c('li', [_c('text', [_vm._v("\n            （2）我们发现异常情况或有合理理由怀疑操作有风险或存在违法情形；\n            ")])]), _c('li', [_c('text', [_vm._v("\n            （3）我们认为您已经违反本协议规定；\n            ")])]), _c('li', [_c('text', [_vm._v("\n            （4）我们基于上述原因之外，根据其单独判断需先行暂停、中断或终止向您提供本协议项下的全部或部分用户服务。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        7.  服务中断或故障\n            ")])]), _c('li', [_c('text', [_vm._v("\n        您同意，因下列原因导致我们无法正常提供服务的，我们不承担责任：\n            ")])]), _c('li', [_c('text', [_vm._v("\n        （1）我们承载本服务系统停机维护期间；\n            ")])]), _c('li', [_c('text', [_vm._v("\n        （2）您的电脑、手机软硬件和通信线路、供电线路出现故障的；\n            ")])]), _c('li', [_c('text', [_vm._v("\n        （3）您操作不当或通过非我们授权或认可的方式使用本服务的；\n            ")])]), _c('li', [_c('text', [_vm._v("\n        （4）因病毒、木马、恶意程序攻击、网络拥堵、系统不稳定、系统或设备故障、通讯故障、电力故障或政府行为等原因；\n            ")])]), _c('li', [_c('text', [_vm._v("\n        （5）由于黑客攻击、网络供应商技术调整或故障、网站升级、网上银行系统方面的问题等原因而造成的本服务中断或延迟；\n            ")])]), _c('li', [_c('text', [_vm._v("\n        （6）因台风、地震、海啸、洪水、停电、战争、恐怖袭击等不可抗力之因素，造成本服务系统障碍不能执行业务的。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        尽管有前款约定，我们将采取合理行动积极促使服务恢复正常。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        8. 条款的解释、法律适用及争端解决\n            ")])]), _c('li', [_c('text', [_vm._v("\n        8.1 本协议是由您与我们共同签订的，适用于您在本服务项下的全部活动。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        8.2 如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，则应认为该条款可与本协议相分割，并可被尽可能接近各方意图的、能够保留本协议要求的经济目的的、有效的新条款所取代，而且，在此情况下，本协议的其他条款仍然完全有效并具有约束力。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        8.3 本协议的有效性、履行与本协议所有事宜，将受中国法律管辖，任何争议仅适用中国法律。\n            ")])]), _c('li', [_c('text', [_vm._v("\n        8.4 本协议签订地为中国杭州市。因本协议所引起的您与我们的任何纠纷或争议，首先应友好协商解决，协商不成的，您在此完全同意将纠纷或争议提交盈火公司所在地有管辖权的人民法院诉讼解决。\n            ")])])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });