(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{340:function(t,v,_){"use strict";_.r(v);var e=_(11),s=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"词条百科"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#词条百科"}},[t._v("#")]),t._v(" 词条百科")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("所有的词条都是以默认词条为基准")])]),t._v(" "),v("p",[t._v("在词条百科中可以查询到最新的词条，成就相关的信息都会有标注，当然由于插件的高度自定义化，如果你想将自己的词条加入默认词条同时分享到词条百科中，你可以前往"),v("a",{attrs:{href:"https://github.com/246859/AchievementDoc",target:"_blank",rel:"noopener noreferrer"}},[t._v("246859/AchievementDoc: Achievement plugins doc (github.com)"),v("OutboundLink")],1),t._v("。")]),t._v(" "),v("p",[t._v("词条百科中所有的页面是采用"),v("code",[t._v("art-template")]),t._v("模板引擎自动生成，并非人工编写，如有需要可以访问"),v("a",{attrs:{href:"https://github.com/246859/AutoEntry",target:"_blank",rel:"noopener noreferrer"}},[t._v("246859/AutoEntry: generate entry md file by json (github.com)"),v("OutboundLink")],1),t._v("。")]),t._v(" "),v("h2",{attrs:{id:"分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[t._v("#")]),t._v(" 分类")]),t._v(" "),v("p",[t._v("在V2版本中，把成就划分为了三大类 "),v("strong",[t._v("字符串成就")]),t._v(",，"),v("strong",[t._v("数字成就")]),t._v("，"),v("strong",[t._v("特殊成就")]),t._v(" 。")]),t._v(" "),v("h3",{attrs:{id:"字符串成就"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#字符串成就"}},[t._v("#")]),t._v(" 字符串成就")]),t._v(" "),v("p",[t._v("这一类成就的触发值大多数都是字符串，例如挖掘成就中，传入的触发值就是被挖掘方块的标准类型名，击杀成就中传入的触发值是被击杀生物的标准类型名，它们都是字符串。或者完全可以是和游戏内容不沾边的字符串，仅仅只是一个语义化的标志，例如睡眠成就中传入的触发值不属于游戏中的任何内容。这类成就处理的规律有些相同，有些则不同，具体要传入什么字符串，取决于事件处理的逻辑。而且往往不支持"),v("code",[t._v("布尔表达式")]),t._v("，"),v("code",[t._v("正则表达式")]),t._v("用到的可能会更多一些。这类成就通常需要三个参数 "),v("code",[t._v("玩家对象")]),t._v("，"),v("code",[t._v("成就类型名")]),t._v("，"),v("code",[t._v("字符串标志")]),t._v("。")]),t._v(" "),v("h3",{attrs:{id:"数字成就"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数字成就"}},[t._v("#")]),t._v(" 数字成就")]),t._v(" "),v("p",[t._v("数字成就即触发值只是单纯的数字，游戏中最常见的数字载体就是计分板，又或者是什么其他数据，当这些数据发生变化时，传入的触发值就是变化后的数字。这类成就处理都是共用的一套逻辑，都是对数字进行处理，并且它们的词条触发键值就是一个"),v("code",[t._v("布尔表达式")]),t._v("，"),v("code",[t._v("正则表达式")]),t._v("用的较少。不过也存在特殊情况，例如"),v("code",[t._v("维度成就")]),t._v("，虽然它的触发值是数字，但本质上其实还是"),v("code",[t._v("字符串成就")]),t._v("。这类成就通常需要三个参数 "),v("code",[t._v("玩家对象")]),t._v("，"),v("code",[t._v("成就类型名")]),t._v("，"),v("code",[t._v("变化后数字")]),t._v("。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("为了兼容性考虑，数字成就不支持"),v("strong",[t._v("浮点数")]),t._v("。")])]),t._v(" "),v("h3",{attrs:{id:"特殊成就"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特殊成就"}},[t._v("#")]),t._v(" 特殊成就")]),t._v(" "),v("p",[t._v("以上两种成就自定义起来都还是比较简单方便的，不需要什么很难的技术。特殊成就则完全不同，通常情况下，一个特殊成就基本上就是一个事件或者一种类型，比较复杂的成就可能会用到好几个事件配合处理，逻辑复杂度远远高于以上两种成就，并且仅能通过"),v("strong",[t._v("导出API")]),t._v("来实现自定义逻辑，对于没有编程基础的人而言可以说毫无自定义性可言，而且传入的参数不固定，没有任何规律。")])])}),[],!1,null,null,null);v.default=s.exports}}]);