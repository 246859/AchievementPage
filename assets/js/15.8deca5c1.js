(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{329:function(t,s,a){"use strict";a.r(s);var n=a(11),_=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),s("p",[t._v("十分建议仔细阅读文档后，再使用插件！")])]),t._v(" "),s("h2",{attrs:{id:"准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),s("p",[t._v("在使用此插件之前，你"),s("strong",[t._v("至少需要具备")]),t._v("以下知识:")]),t._v(" "),s("ul",[s("li",[t._v("熟悉BDS服务端")]),t._v(" "),s("li",[t._v("熟悉LLBDS服务端")]),t._v(" "),s("li",[t._v("熟悉JSON语法")]),t._v(" "),s("li",[t._v("熟悉正则的基本使用")]),t._v(" "),s("li",[t._v("基本看懂控制台报错信息")]),t._v(" "),s("li",[t._v("会使用截图工具")]),t._v(" "),s("li",[t._v("懂得怎么提问题")]),t._v(" "),s("li",[t._v("以及一个耐心的心态")])]),t._v(" "),s("h2",{attrs:{id:"版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[t._v("#")]),t._v(" 版本")]),t._v(" "),s("p",[t._v("V2版本的插件仅支持"),s("code",[t._v("BDS v1.19.30")]),t._v(" "),s("code",[t._v("LL v2.7.0")]),t._v("及以上的版本，低于此版本的请使用V1版本的插件，")]),t._v(" "),s("p",[t._v("V1版本的插件的部分功能可能会因为LL API的变动导致部分事件监听已经失效。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("V3版本未来将会使用"),s("code",[t._v("c++")]),t._v("原生插件重写")])]),t._v(" "),s("h2",{attrs:{id:"下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[t._v("#")]),t._v(" 下载")]),t._v(" "),s("p",[s("strong",[t._v("如果想使用稳定版本：")])]),t._v(" "),s("p",[t._v("Minebbs："),s("a",{attrs:{href:"https://www.minebbs.com/resources/3434/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LLSE - 成就系统 | MineBBS 我的世界中文论坛"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("如果想使用最新版本")]),t._v("：")]),t._v(" "),s("p",[t._v("Github："),s("a",{attrs:{href:"https://github.com/246859/Achievement/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Releases · 246859/Achievement (github.com)"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Minebbs版本经过了JS压缩，没有任何注释，没有格式化，基本没有可读性可言。")]),t._v(" "),s("p",[t._v("如果有阅读源代码的需求，可以下载GitHub版本。")])]),t._v(" "),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("p",[t._v("将安装得到的"),s("code",[t._v("Zip")]),t._v("文件解压至"),s("code",[t._v("./plugins")]),t._v("目录下，点击"),s("code",[t._v("bedrock_server_mod.exe")]),t._v("启动LLBDS服务端，在控制台中看到如下提示内容即代表插件成功加载。")]),t._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("              _     _                                     _          ___    ___   ___\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("__ \\  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" _ \\ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" _ \\\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("  \\   ___"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("__  _  _____   _____ _ __ ___   ___ _ __ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("_  __   __ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\ \\ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" __"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_ \\| |/ _ \\ \\ / / _ \\ '")]),t._v("_ ` _ \\ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" _ \\ '_ \\"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" __"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" \\ \\ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" ____ \\ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("  __/\\ V "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("  __/ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("  __/ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("_   \\ V "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("_ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("_/    \\_\\___"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("\\___"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" \\_/ \\___"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("\\___"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("\\__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("   \\_/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("____"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("___"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("___/    By Stranger\n\n19:01:47 INFO "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[Achievement]")]),t._v(" v2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0\n19:01:47 INFO "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[Achievement]")]),t._v(" MineBBS: https:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minebbs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com/resources/3434/\n19:01:47 INFO "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[Achievement]")]),t._v(" Github: https:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com/246859/Achievement\n19:01:47 INFO "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[LiteLoader]")]),t._v(" Js 插件 <Achievement> 已加载。\n19:01:47 INFO "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[Achievement]")]),t._v(" 当前语言为: zh_CN\n19:01:47 INFO "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[Achievement]")]),t._v(" 成就插件成功加载"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("总计12种成就类型"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("145个成就词条"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("19个事件监听\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])])])}),[],!1,null,null,null);s.default=_.exports}}]);