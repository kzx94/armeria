(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2","/release-notes/1.7.1":"v1.7.1","/release-notes/1.7.0":"v1.7.0","/release-notes/1.6.0":"v1.6.0","/release-notes/1.5.0":"v1.5.0","/release-notes/1.4.0":"v1.4.0","/release-notes/1.3.0":"v1.3.0","/release-notes/1.2.0":"v1.2.0","/release-notes/1.1.0":"v1.1.0","/release-notes/1.0.0":"v1.0.0","/release-notes/0.99.9":"v0.99.9","/release-notes/0.99.8":"v0.99.8","/release-notes/0.99.7":"v0.99.7","/release-notes/0.99.6":"v0.99.6","/release-notes/0.99.5":"v0.99.5"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,a,t){"use strict";t("tU7J");var n=t("wFql"),i=t("q1tI"),r=t.n(i),l=t("2+3N"),s=t("1lec"),o=t("+ejy"),c=t("+9zj"),b=n.a.Title;a.a=function(e){var a={},t={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(l).forEach((function(e){var t=e[0],n=e[1];a[n]=t})),Object.entries(s).forEach((function(e){var a=e[0],n=e[1];t[n]=a}));var i=Object(c.a)(e.location),p=e.version||i.substring(i.lastIndexOf("/")+1);return p.match(/^[0-9]/)||(p=void 0),r.a.createElement(o.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:p?p+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),p?r.a.createElement(b,{id:"release-notes",level:1},r.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},r.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},r.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),p," release notes"):"",e.children)}},MnIR:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return p}));var n,i=t("zLVn"),r=(t("q1tI"),t("7ljp")),l=t("JkCF"),s={},o=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),c={_frontmatter:s},b=l.a;function p(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)(b,Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",{className:"date"},"30th March 2020"),Object(r.b)("h2",{id:"-new-features",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#-new-features","aria-label":" new features permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🌟 New features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can now make your client connect via a SOCKS 4, SOCKS 5 or HTTP CONNECT proxy server. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2321"},"#2321")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2496"},"#2496"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"ClientFactory.builder()\n             .proxyConfig(ProxyConfig.socks4(socksProxyServer.address()))\n             .build();\n"))),Object(r.b)("li",{parentName:"ul"},"You can now configure to send ",Object(r.b)("inlineCode",{parentName:"li"},"PING")," on idle HTTP/2 connections. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1263"},"#1263")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2409"},"#2409"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"ClientFactory.builder()\n             .http2PingTimeoutMillis(3000)\n             .build();\n"))),Object(r.b)("li",{parentName:"ul"},"You can now make an alias for the pre-defined MDC key when using ",Object(r.b)("inlineCode",{parentName:"li"},"RequestContextExportingAppender"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2512"},"#2512")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2531"},"#2531"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-xml"},"<export>request_id=req.id</export> \x3c!-- request_id is an alias for the built-in property. --\x3e\n<export>my_foo_bar=attr:com.example.Foo#ATTR_BAR</export>    \x3c!-- my_foo_bar is an alias. --\x3e\n")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Please check out ",Object(r.b)("a",{parentName:"li",href:"http://armeria.dev/docs/advanced-logging#customizing-mdc-keys"},"http://armeria.dev/docs/advanced-logging#customizing-mdc-keys")," for more information."))),Object(r.b)("li",{parentName:"ul"},"You can now set an example path and queries for ",Object(r.b)("inlineCode",{parentName:"li"},"DocService"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2195"},"#2195")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2546"},"#2546")),Object(r.b)("li",{parentName:"ul"},"You can now customize the default log name of a service. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2626"},"#2626"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'sb.route().addRoute(...).defaultLogName("name").build(service);\n'))),Object(r.b)("li",{parentName:"ul"},"You can now access a parent log from a child log using ",Object(r.b)("inlineCode",{parentName:"li"},"RequestLogAccess.parent()"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2599"},"#2599")),Object(r.b)("li",{parentName:"ul"},"gRPC client now supports gRPC ",Object(r.b)("inlineCode",{parentName:"li"},"CallCredentials"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2619"},"#2619")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2622"},"#2622")),Object(r.b)("li",{parentName:"ul"},"You can now send customized responses from ",Object(r.b)("inlineCode",{parentName:"li"},"ThrottlingService")," using ",Object(r.b)("inlineCode",{parentName:"li"},"ThrottlingAcceptHandler")," and ",Object(r.b)("inlineCode",{parentName:"li"},"ThrottlingRejectHandler"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2482"},"#2482")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2503"},"#2503")),Object(r.b)("li",{parentName:"ul"},"You can now use advanced throttling algorithm based on Token-Bucket rate-limiting and Bucket4j library. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2566"},"#2566")),Object(r.b)("li",{parentName:"ul"},"You can now create your own storage to store ",Object(r.b)("inlineCode",{parentName:"li"},"RequestContext"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2514"},"#2514")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2610"},"#2610"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"// You should implement `RequestContextStorageProvider` and use SPI to return the `RequestContextStorage`.\npublic class CustomizedStorageProvider implements RequestContextStorageProvider {\n    @Override\n    public RequestContextStorage newStorage() {\n        return new CustomizedStorage();\n    }\n}\n")))),Object(r.b)("h2",{id:"-improvements",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"📈 Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now set timeout using ",Object(r.b)("inlineCode",{parentName:"p"},"TimeoutMode.")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2535"},"#2535")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2571"},"#2571")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"// Before\nctx.extendResponseTimeoutMillis(10000);\nctx.setResponseTimeoutAfterMillis(10000);\n\n// After\nctx.setResponseTimeoutMillis(TimeoutMode.EXTEND, 10000);\nctx.setResponseTimeoutMillis(TimeoutMode.SET_FROM_NOW, 10000);\n")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"set(Request|Response)Timeout")," is now undeprecated.")))),Object(r.b)("h2",{id:"️-bug-fixes",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🛠️ Bug fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"DNS resolution is timed out after ",Object(r.b)("inlineCode",{parentName:"li"},"queryTimeoutMillis"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2623"},"#2623")),Object(r.b)("li",{parentName:"ul"},"You can now return ",Object(r.b)("inlineCode",{parentName:"li"},"Single<HttpResponse>")," or ",Object(r.b)("inlineCode",{parentName:"li"},"Maybe<HttpResponse>")," in an annotated service. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2624"},"#2624")),Object(r.b)("li",{parentName:"ul"},"You can now register and monitor Reactor ",Object(r.b)("inlineCode",{parentName:"li"},"Scheduler")," with Prometheus in Armeria Server. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2612"},"#2612")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RequestLog.name")," and some other properties are copied to the child log in ",Object(r.b)("inlineCode",{parentName:"li"},"RetyringClient"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2551"},"#2551")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2560"},"#2560")),Object(r.b)("li",{parentName:"ul"},"You no longer see ",Object(r.b)("inlineCode",{parentName:"li"},"ClosedStreamException")," due to the stream creation reversal. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2597"},"#2597")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"IllegalStateException")," is not raised anymore while building a WebFlux response. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2613"},"#2613")),Object(r.b)("li",{parentName:"ul"},"Annotated service's log name is always set. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2626"},"#2626"))),Object(r.b)("h2",{id:"️-deprecations",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#%EF%B8%8F-deprecations","aria-label":"️ deprecations permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🏚️ Deprecations"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Deprecated ",Object(r.b)("inlineCode",{parentName:"li"},"ZooKeeperUpdatingListener.nodeValueCodec()")," in favor of ",Object(r.b)("inlineCode",{parentName:"li"},"ZooKeeperUpdatingListener.codec()"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2552"},"#2552"))),Object(r.b)("h2",{id:"️-breaking-changes",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#%EF%B8%8F-breaking-changes","aria-label":"️ breaking changes permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"☢️ Breaking changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Most of the deprecated APIs are gone. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2543"},"#2543")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If you have trouble finding APIs to replace, please upgrade to 0.98.7 first and use your IDE's advanced feature to search deprecated APIs. Then, you can easily upgrade to 0.99.0."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"armeria-dropwizard")," is now for Dropwizard 2. If you want to use Dropwizard ",Object(r.b)("inlineCode",{parentName:"p"},"1.3.x"),", use ",Object(r.b)("inlineCode",{parentName:"p"},"armeria-dropwizard1"),". ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2556"},"#2556"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"armeria-rxjava")," is now for RxJava 3. If you want to use RxJava 2, use ",Object(r.b)("inlineCode",{parentName:"p"},"armeria-rxjava2"),". ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2378"},"#2378")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2501"},"#2501"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"ClientBuilder.path(path)")," is now gone. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2525"},"#2525")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2538"},"#2538")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If you want to specify the path other than ",Object(r.b)("inlineCode",{parentName:"li"},"/"),", you should specify it when creating ",Object(r.b)("inlineCode",{parentName:"li"},"ClientBuilder"),".",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'// before\nClients.builer(SessionProtocol.HTTP, Endpoint.of("127.0.0.1"))\n       .path("/foo");\n// after\nClients.builer(SessionProtocol.HTTP, Endpoint.of("127.0.0.1"), "/foo");\n'))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"ClosedSessionException")," now extends ",Object(r.b)("inlineCode",{parentName:"p"},"ClosedStreamException"),". ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2596"},"#2596")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2616"},"#2616"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"AuthSuccessHandler<HttpRequest, HttpResponse>")," and ",Object(r.b)("inlineCode",{parentName:"p"},"AuthFailureHandler<HttpRequest, HttpResponse>")," now don't have type parameters.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The meter name ",Object(r.b)("inlineCode",{parentName:"p"},"armeriaBlockingTaskExecutor")," is now ",Object(r.b)("inlineCode",{parentName:"p"},"blockingTaskExecutor")," with the prefix ",Object(r.b)("inlineCode",{parentName:"p"},"armeria.executor"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"RequestContext.set*TimeoutAfter*()")," or ",Object(r.b)("inlineCode",{parentName:"p"},"extend*Timeout*()")," methods have been removed. Call ",Object(r.b)("inlineCode",{parentName:"p"},"set*Timeout*()")," with a ",Object(r.b)("inlineCode",{parentName:"p"},"TimeoutMode")," specified instead."))),Object(r.b)("h2",{id:"-dependencies",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"⛓ Dependencies"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Brave 5.9.5 -> 5.10.2"),Object(r.b)("li",{parentName:"ul"},"bucket4j-core 4.10.0"),Object(r.b)("li",{parentName:"ul"},"Curator 4.2.0 -> 4.3.0"),Object(r.b)("li",{parentName:"ul"},"java-jwt 3.10.0 -> 3.10.1"),Object(r.b)("li",{parentName:"ul"},"jetty-alpn-agent 2.0.9 -> 2.10.0"),Object(r.b)("li",{parentName:"ul"},"Micrometer 1.3.5 -> 1.4.0"),Object(r.b)("li",{parentName:"ul"},"Netty 4.1.37.Final -> 4.1.48.Final",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"netty-tcnative-boringssl-static 2.0.29.Final -> 2.0.30.Final"))),Object(r.b)("li",{parentName:"ul"},"Opensaml 3.4.3 -> 3.4.5"),Object(r.b)("li",{parentName:"ul"},"Reactor 3.3.3.RELEASE -> 3.3.4.RELEASE"),Object(r.b)("li",{parentName:"ul"},"Retrofit 2.7.2 -> 2.8.0"),Object(r.b)("li",{parentName:"ul"},"RxJava 3.0.0 -> 3.0.1"),Object(r.b)("li",{parentName:"ul"},"Spring Boot 2.2.4 -> 2.2.5",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Spring2.1 2.1.12.RELEASE -> 2.1.13.RELEASE"))),Object(r.b)("li",{parentName:"ul"},"Tomcat 9.0.31 -> 9.0.33",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Tomcat8.5 8.5.51 -> 8.5.53"))),Object(r.b)("li",{parentName:"ul"},"Zookeeper 3.5.7 -> 3.6.0")),Object(r.b)("h2",{id:"-thank-you",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🙇 Thank you"),Object(r.b)(o,{usernames:["alex-lx","AmosDoan","andrewom","anuraaga","codefromthecrypt","cricket007","heowc","hexoul","ikhoon","imasahiro","jyblue","joschi","jrhee17","KarboniteKream","kojilin","mauhiz","max904-github","minwoox","rstoyanchev","sivaalli","trustin"],mdxType:"ThankYou"}))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-99-0-mdx-c3095b38086c285f5f9a.js.map