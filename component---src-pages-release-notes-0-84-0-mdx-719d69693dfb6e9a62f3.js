(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2","/release-notes/1.7.1":"v1.7.1","/release-notes/1.7.0":"v1.7.0","/release-notes/1.6.0":"v1.6.0","/release-notes/1.5.0":"v1.5.0","/release-notes/1.4.0":"v1.4.0","/release-notes/1.3.0":"v1.3.0","/release-notes/1.2.0":"v1.2.0","/release-notes/1.1.0":"v1.1.0","/release-notes/1.0.0":"v1.0.0","/release-notes/0.99.9":"v0.99.9","/release-notes/0.99.8":"v0.99.8","/release-notes/0.99.7":"v0.99.7","/release-notes/0.99.6":"v0.99.6","/release-notes/0.99.5":"v0.99.5"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,t,a){"use strict";a("tU7J");var n=a("wFql"),r=a("q1tI"),i=a.n(r),l=a("2+3N"),s=a("1lec"),c=a("+ejy"),o=a("+9zj"),b=n.a.Title;t.a=function(e){var t={},a={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(l).forEach((function(e){var a=e[0],n=e[1];t[n]=a})),Object.entries(s).forEach((function(e){var t=e[0],n=e[1];a[n]=t}));var r=Object(o.a)(e.location),p=e.version||r.substring(r.lastIndexOf("/")+1);return p.match(/^[0-9]/)||(p=void 0),i.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:p?p+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),p?i.a.createElement(b,{id:"release-notes",level:1},i.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),p," release notes"):"",e.children)}},"Svt/":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));var n,r=a("zLVn"),i=(a("q1tI"),a("7ljp")),l=a("JkCF"),s={},c=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),o={_frontmatter:s},b=l.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(b,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",{className:"date"},"23rd April 2019"),Object(i.b)("h2",{id:"new-features",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#new-features","aria-label":"new features permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"New features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now access the detailed timing information for the connection attempts made by Armeria via ",Object(i.b)("inlineCode",{parentName:"p"},"RequestLog")," API, including DNS lookup and socket connect time. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1692"},"#1692")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'HttpClient client = new HttpClientBuilder("https://example.com/")\n    .decorator((delegate, ctx, req) -> {\n        ctx.log().addListener(log -> {\n            ClientConnectionTimings timings = ClientConnectionTimings.get(log);\n            System.err.printf("Total time taken: %d ns%n",\n                              timings.connectionAcquisitionDurationNanos());\n            System.err.printf("DNS lookup: %d ns%n",\n                              timings.dnsResolutionDurationNanos());\n            System.err.printf("Socket connect:: %d ns%n",\n                              timings.socketConnectDurationNanos());\n        }, RequestLogAvailability.REQUEST_START);\n        return delegate.execute(ctx, req);\n    })\n    .build();\nclient.get("/");\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now customize server-side ",Object(i.b)("inlineCode",{parentName:"p"},"SslContext")," more conveniently. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1717"},"#1717")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"ServerBuilder sb = new ServerBuilder();\nsb.tls(certChainFile, keyFile, tlsContextBuilder -> {\n    // Use JDK SSLEngine instead of OpenSSL.\n    tlsContextBuilder.sslProvider(SslProvider.JDK);\n});\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Server.stop()")," is now able to stop its ",Object(i.b)("inlineCode",{parentName:"p"},"blockingTaskExecutor"),". You have to specify whether to stop the ",Object(i.b)("inlineCode",{parentName:"p"},"blockingTaskExecutor")," you specified or not when calling ",Object(i.b)("inlineCode",{parentName:"p"},"ServerBuilder.blockingTaskExecutor()")," from this release. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1685"},"#1685")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1707"},"#1707")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"ServerBuilder sb = new ServerBuilder();\n// The thread pool will be terminated when the server stops.\nsb.blockingTaskExecutor(Executors.newFixedThreadPool(100), true);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The usability of ",Object(i.b)("inlineCode",{parentName:"p"},"RedirectService")," has been improved with some API changes. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1725"},"#1725")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1726"},"#1726")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RedirectService")," preserves the query string by default. The query string of the old location was dropped previously."),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"preserveQueryString")," constructor parameter. Specifying ",Object(i.b)("inlineCode",{parentName:"li"},"false")," will let you go back to the previous behavior."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The usability of ",Object(i.b)("inlineCode",{parentName:"p"},"SettableHealthChecker")," has been improved with some API changes. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1714"},"#1714")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SettableHealthChecker"),"'s initial healthiness is now ",Object(i.b)("inlineCode",{parentName:"li"},"true"),". It was ",Object(i.b)("inlineCode",{parentName:"li"},"false")," previously."),Object(i.b)("li",{parentName:"ul"},"You can now specify the initial healthiness when instantiating ",Object(i.b)("inlineCode",{parentName:"li"},"SettableHealthChecker"),".",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'SettableHealthChecker myHealthChecker = new SettableHealthChecker(false);\nServerBuilder sb = new ServerBuilder();\nsb.service("/monitor/health", new HttpHealthCheckService(myHealthChecker));\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SettableHealthChecker.setHealthy(boolean)")," is now chainable. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1714"},"#1714"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"// Same with: new SettableHealthChecker(false)\nSettableHealthChecker myHealthChecker = new SettableHealthChecker().setHealthy(false);\n"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now specify different path mappings for different CORS policies. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1698"},"#1698")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1699"},"#1699")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Using a builder pattern:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'ServerBuilder sb = new ServerBuilder();\n// Add two services under /foo and /bar.\nsb.service("prefix:/foo", fooService);\nsb.service("prefix:/bar", barService);\n\n// Enable CORS for:\n// - GET and POST requests for all resources under http://example.com/foo/\n// - GET request for all resources under http://example.com/bar/\nsb.decorator(CorsServiceBuilder.forOrigins("http://example.com")\n                               .pathMapping("prefix:/foo")\n                               .allowCredentials()\n                               .allowRequestMethods(HttpMethod.GET, HttpMethod.POST)\n                               .andForOrigins("http://example.com")\n                               .pathMapping("prefix:/bar")\n                               .allowCredentials()\n                               .allowRequestMethods(HttpMethod.GET)\n                               .and()\n                               .newDecorator());\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Using annotations:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'sb.annotatedService(\n    @CorsDecorator(\n        origins = "http://example.com",\n        pathPatterns = "prefix:/foo",\n        credentialsAllowed = true,\n        allowedRequestMethods = { HttpMethod.GET, HttpMethod.POST })\n    @CorsDecorator(\n        origins = "http://example.com",\n        pathPatterns = "prefix:/bar",\n        credentialsAllowed = true,\n        allowedRequestMethods = { HttpMethod.GET })\n    new Object() {\n        ...\n    });\n'))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now build a gRPC service without depending on upstream gRPC API. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1720"},"#1720")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1727"},"#1727")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Added ",Object(i.b)("inlineCode",{parentName:"p"},"armeria-grpc-protocol")," which provides a core functionality required for building a gRPC service, which does not depend on ",Object(i.b)("inlineCode",{parentName:"p"},"io.grpc:grpc-java")," but only on ",Object(i.b)("inlineCode",{parentName:"p"},"com.google.protobuf:protobuf-java"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Added ",Object(i.b)("inlineCode",{parentName:"p"},"AbstractUnaryGrpcService")," which allows you to implement a unary gRPC easily without depending on ",Object(i.b)("inlineCode",{parentName:"p"},"io.grpc:grpc-java"),"."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"class MyUnaryGrpcService extends AbstractUnaryGrpcService {\n    @Override\n    protected CompletableFuture<byte[]> handleMessage(byte[] message) {\n        final MyGrpcRequest req;\n        try {\n            req = MyGrpcRequest.parseFrom(message);\n        } catch (InvalidProtocolBufferException e) {\n            throw new UncheckedIOException(e);\n        }\n\n        MyGrpcResponse res = MyGrpcResponse.newBuilder()...build();\n        return CompletableFuture.completedFuture(res.toByteArray());\n    }\n}\n"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Spring Boot integration now has content encoding options. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1716"},"#1716")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"# Your application.yml:\narmeria:\n  ports:\n    - port: 8080\n      protocol: HTTP\n  compression:\n    enabled: true\n    mime-types: text/*, application/json\n    excluded-user-agents: some-user-agent, another-user-agent\n    minResponseSize: 1KB\n")))),Object(i.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Bug fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The default path pattern now handles a trailing slash properly. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1730"},"#1730")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1735"},"#1735")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TwoElementFixedStreamMessage")," no longer throws an ",Object(i.b)("inlineCode",{parentName:"li"},"IllegalReferenceCountException"),". ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1687"},"#1687")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1695"},"#1695")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DnsEndpointGroup")," does not ignore the ",Object(i.b)("inlineCode",{parentName:"li"},"search")," directive in ",Object(i.b)("inlineCode",{parentName:"li"},"/etc/resolv.conf")," anymore. This fix should be useful for users in Kubernetes environment. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1694"},"#1694")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1697"},"#1697")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DocService")," no longer raises a ",Object(i.b)("inlineCode",{parentName:"li"},"NullPointerException")," for a certain gRPC service metadata. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1705"},"#1705")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1715"},"#1715")),Object(i.b)("li",{parentName:"ul"},"An unframed gRPC service no longer becomes unresponsive when sending a response without content ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1723"},"#1723")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"THttpService")," no longer fails to load the service metadata when ",Object(i.b)("inlineCode",{parentName:"li"},".thrift")," file was compiled with the ",Object(i.b)("inlineCode",{parentName:"li"},"private-members")," option. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1728"},"#1728")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1729"},"#1729")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"THttpService")," no longer fails to load the service metadata when ",Object(i.b)("inlineCode",{parentName:"li"},".thrift")," file defines a service that extends other service. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1734"},"#1734")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HttpTracingClient")," and ",Object(i.b)("inlineCode",{parentName:"li"},"HttpTracingService")," do not fill service name automatically with host names or IP addresses anymore. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1706"},"#1706")),Object(i.b)("li",{parentName:"ul"},"Spring integration module now respects the ",Object(i.b)("inlineCode",{parentName:"li"},"com.linecorp.armeria.useOpenSsl")," flag properly. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1713"},"#1713"))),Object(i.b)("h2",{id:"deprecations",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#deprecations","aria-label":"deprecations permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Deprecations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ServerBuilder.blockingTaskExecutor(Executor)")," has been deprecated. Use ",Object(i.b)("inlineCode",{parentName:"li"},"ServerBuilder.blockingTaskExecutor(Executor, boolean)"),". ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1685"},"#1685")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1707"},"#1707")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TextFormatter.epoch()")," and ",Object(i.b)("inlineCode",{parentName:"li"},"appendEpoch()")," have been deprecated. Use ",Object(i.b)("inlineCode",{parentName:"li"},"TextFormatter.epochMillis()")," and ",Object(i.b)("inlineCode",{parentName:"li"},"appendEpochMillis()"),". ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1692"},"#1692"))),Object(i.b)("h2",{id:"breaking-changes",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#breaking-changes","aria-label":"breaking changes permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Breaking changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The initial healthiness of ",Object(i.b)("inlineCode",{parentName:"li"},"SettableHealthChecker")," is now ",Object(i.b)("inlineCode",{parentName:"li"},"true"),". ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1714"},"#1714")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RedirectService")," preserves the query string by default. The query string of the old location was dropped previously. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1725"},"#1725")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1726"},"#1726"))),Object(i.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Dependencies"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"gRPC 1.19.0 -> 1.20.0",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Protobuf 3.6.1 -> 3.7.1"))),Object(i.b)("li",{parentName:"ul"},"Jetty 9.4.15 -> 9.4.17"),Object(i.b)("li",{parentName:"ul"},"Micrometer 1.1.3 -> 1.1.4"),Object(i.b)("li",{parentName:"ul"},"Spring Boot 2.1.3 -> 2.1.4, 1.5.19 -> 1.5.20"),Object(i.b)("li",{parentName:"ul"},"Tomcat 9.0.17 -> 9.0.19, 8.5.39 -> 8.5.40"),Object(i.b)("li",{parentName:"ul"},"ZooKeeper 3.4.13 -> 3.4.14")),Object(i.b)("h2",{id:"thank-you",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#thank-you","aria-label":"thank you permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Thank you"),Object(i.b)(c,{usernames:["anuraaga","codefromthecrypt","dawnbreaks","edgao","geminiKim","gquintana","huydx","hyangtack","minwoox","syleeeee","tacigar","trustin"],mdxType:"ThankYou"}))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-84-0-mdx-719d69693dfb6e9a62f3.js.map