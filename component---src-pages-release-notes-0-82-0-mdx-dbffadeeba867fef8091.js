(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2","/release-notes/1.7.1":"v1.7.1","/release-notes/1.7.0":"v1.7.0","/release-notes/1.6.0":"v1.6.0","/release-notes/1.5.0":"v1.5.0","/release-notes/1.4.0":"v1.4.0","/release-notes/1.3.0":"v1.3.0","/release-notes/1.2.0":"v1.2.0","/release-notes/1.1.0":"v1.1.0","/release-notes/1.0.0":"v1.0.0","/release-notes/0.99.9":"v0.99.9","/release-notes/0.99.8":"v0.99.8","/release-notes/0.99.7":"v0.99.7","/release-notes/0.99.6":"v0.99.6","/release-notes/0.99.5":"v0.99.5"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,a,t){"use strict";t("tU7J");var n=t("wFql"),r=t("q1tI"),i=t.n(r),s=t("2+3N"),c=t("1lec"),l=t("+ejy"),o=t("+9zj"),b=n.a.Title;a.a=function(e){var a={},t={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(s).forEach((function(e){var t=e[0],n=e[1];a[n]=t})),Object.entries(c).forEach((function(e){var a=e[0],n=e[1];t[n]=a}));var r=Object(o.a)(e.location),m=e.version||r.substring(r.lastIndexOf("/")+1);return m.match(/^[0-9]/)||(m=void 0),i.a.createElement(l.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:m?m+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),m?i.a.createElement(b,{id:"release-notes",level:1},i.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),m," release notes"):"",e.children)}},"w+VN":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return o}));var n=t("zLVn"),r=(t("q1tI"),t("7ljp")),i=t("JkCF"),s={},c={_frontmatter:s},l=i.a;function o(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(r.b)(l,Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",{className:"date"},"19th March 2019"),Object(r.b)("h2",{id:"new-features",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#new-features","aria-label":"new features permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"New features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now include or exclude service methods using ",Object(r.b)("inlineCode",{parentName:"p"},"DocServiceFilter")," when building a ",Object(r.b)("inlineCode",{parentName:"p"},"DocService"),".\nSee ",Object(r.b)("a",{parentName:"p",href:"https://armeria.dev/docs/server-docservice#including-and-excluding-service-methods"},"our documentation")," for more information. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1609"},"#1609")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'ServerBuilder sb = new ServerBuilder();\n...\nsb.serviceUnder("/docs", new DocServiceBuilder()\n        // Include Thrift services and Annotated services.\n        .include(DocServiceFilter.ofThrift().or(DocServiceFilter.ofAnnotated()))\n        // Exclude the method whose name is "foo" in Thrift services.\n        .exclude(DocServiceFilter.ofThrift().and(DocServiceFilter.ofMethodName("foo")))\n        .build());\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"HttpHeaderNames")," now forks from Guava's ",Object(r.b)("inlineCode",{parentName:"p"},"HttpHeaders")," instead of Netty's ",Object(r.b)("inlineCode",{parentName:"p"},"HttpHeaderNames"),"\nbecause it has more recent HTTP headers which may be useful to service authors.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can use ",Object(r.b)("inlineCode",{parentName:"p"},"SystemInfo")," utility class in order to get the system information. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1656"},"#1656")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"// Java version\nSystemInfo.javaVersion();\n\n// Hostname\nSystemInfo.hostname();\n\n// The current process ID\nSystemInfo.pid();\n\n// The current time in microseconds\nSystemInfo.currentTimeMicros();\n")))),Object(r.b)("h2",{id:"improvements",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#improvements","aria-label":"improvements permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Set 0.5 to the default failure rate threshold of a circuit breaker. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1657"},"#1657")),Object(r.b)("li",{parentName:"ul"},"Various documentation updates. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1657"},"#1657")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1654"},"#1654")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1651"},"#1651"))),Object(r.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Bug fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Strip a leading slash in an ",Object(r.b)("inlineCode",{parentName:"li"},"HttpFile")," resource path. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1661"},"#1661")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1650"},"#1650"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'// Will strip the leading slash\nHttpFile.ofResource(ClassLoader.getSystemClassLoader(), "/java/lang/Object.class");\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ByteBuf"),"s are no longer leaked when you use Spring WebFlux integration. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1658"},"#1658"),"\nIt was possible to leak a ",Object(r.b)("inlineCode",{parentName:"li"},"ByteBuf")," if a client closes a connection before reading the body of an HTTP response.")),Object(r.b)("h2",{id:"breaking-change",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#breaking-change","aria-label":"breaking change permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Breaking Change"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"DocServicePlugin")," interface now has ",Object(r.b)("inlineCode",{parentName:"li"},"name()")," method and ",Object(r.b)("inlineCode",{parentName:"li"},"generateSpecification()")," method signature has changed. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1609"},"#1609"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"// Before:\nServiceSpecification generateSpecification(Set<ServiceConfig> serviceConfigs);\n// After:\nString name();\nServiceSpecification generateSpecification(Set<ServiceConfig> serviceConfigs, DocServiceFilter filter);\n"))),Object(r.b)("li",{parentName:"ul"},"Some header names in ",Object(r.b)("inlineCode",{parentName:"li"},"HttpHeaderNames")," were removed, although it is very unlikely to be used by users: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1660"},"#1660")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Keep-Alive")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Proxy-Connection")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Content-Transfer-Encoding"))),Object(r.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Dependencies"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"java-jwt 3.7.0 -> 3.8.0"),Object(r.b)("li",{parentName:"ul"},"Guava 27.0.1 -> 27.1"),Object(r.b)("li",{parentName:"ul"},"Netty 4.1.33 -> 4.1.34",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Netty TCNative BoringSSL 2.0.20 -> 2.0.22"))),Object(r.b)("li",{parentName:"ul"},"Brave 5.6.1 -> 5.6.3")))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-82-0-mdx-dbffadeeba867fef8091.js.map