(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{341:function(s,n,a){"use strict";a.r(n);var t=a(11),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"其他语言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他语言"}},[s._v("#")]),s._v(" 其他语言")]),s._v(" "),n("p",[s._v("插件默认只提供且以后也只会这两种语言的维护与支持，即"),n("code",[s._v("简体中文")]),s._v("，"),n("code",[s._v("美式英文")]),s._v("，如果有其他语言的需求可以按照本页面的教程来自定义语言。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Lang 插件语言目录\n    |\n    |---zh_CN 简体中文\n    |   |\n    |   |---Entry.json 词条文件\n    |   \n    |\n    |---en_us 美式英文\n        |\n        |---Entry.json\n        |\n        |---Menu.json\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"词条示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#词条示例"}},[s._v("#")]),s._v(" 词条示例")]),s._v(" "),n("p",[s._v("这是插件默认的语言目录结构，假设想要自定义一个日语的语言，首先创建一个代表日语的目录 ，目录建议遵循"),n("a",{attrs:{href:"https://hexingxing.cn/lang-code/",target:"_blank",rel:"noopener noreferrer"}},[s._v("(ISO 639-1)"),n("OutboundLink")],1),s._v("的标准，也可以自己随便取。这里的例子取名为:"),n("code",[s._v("ja_JP")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Lang 插件语言目录\n    |\n    |---zh_CN 简体中文\n    |   |\n    |   |---Entry.json 词条文件\n    |\n    |---en_us 美式英文\n    |   |\n    |   |---Entry.json\n    |\n    |---ja_JP 日语\n \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("随后可以将中文或者英文的词条与菜单文件自行翻译成相应的语言，然后放入对于的语言目录中。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Lang 插件语言目录\n    |\n    |---zh_CN 简体中文\n    |   |\n    |   |---Entry.json 词条文件\n    |\n    |---en_us 美式英文\n    |   |\n    |   |---Entry.json\n    |\n    |---ja_JP 日语\n        |\n        |---Entry.json\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),n("p",[s._v("翻译过后的文件必须保持JSON结构不变，并且不违法JSON语法。")])]),s._v(" "),n("p",[s._v("最后，将配置文件中的"),n("code",[s._v("language")]),s._v("配置项修改为"),n("code",[s._v("ja_JP")]),s._v("，重启插件即可。")]),s._v(" "),n("h2",{attrs:{id:"菜单示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#菜单示例"}},[s._v("#")]),s._v(" 菜单示例")]),s._v(" "),n("p",[s._v("菜单文件切换语言的原理与词条文件完全一致，只不过文件路径不同。")])])}),[],!1,null,null,null);n.default=e.exports}}]);