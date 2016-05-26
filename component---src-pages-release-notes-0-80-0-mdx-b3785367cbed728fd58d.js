(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"/f20":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("JkCF"),s={},c={_frontmatter:s},l=i.a;function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(l,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",{className:"date"},"19th February 2019"),Object(r.b)("h2",{id:"new-features",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#new-features","aria-label":"new features permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"New features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"A user now can see the content of HTTP request/response in logs. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1574"},"#1574")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"ServerBuilder sb = new ServerBuilder();\n// Enables previewing the content with the maximum length of 100 for textual contents.\nsb.contentPreview(100);\n\n// A user can use their customized previewer factory.\nsb.contentPreviewerFactory((ctx, headers) -> {\n    return ContentPreviewer.ofBinary(100, byteBuf -> {\n        byte[] contents = new byte[Math.min(byteBuf.readableBytes(), 100)];\n        byteBuf.readBytes(contents);\n        return BaseEncoding.base16().encode(contents);\n    });\n});\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Added ",Object(r.b)("inlineCode",{parentName:"p"},"ClientRequestContextBuilder")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ServiceRequestContextBuilder"),". ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1548"},"#1548")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"A user can create a mock of ",Object(r.b)("inlineCode",{parentName:"li"},"RequestContext"),"."),Object(r.b)("li",{parentName:"ul"},"A user can emulate an incoming request and feed it into his or her processing pipeline.")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void testService() throws Exception {\n    // Given\n    HttpRequest req = HttpRequest.of(HttpMethod.POST, "/greet",\n                                     MediaType.JSON_UTF_8,\n                                     "{ \\"name\\": \\"foo\\" }");\n    ServiceRequestContext sctx = ServiceRequestContext.of(req);\n\n    // When\n    HttpResponse res = service.serve(sctx, req);\n\n    // Then\n    AggregatedHttpMessage aggregatedRes = res.aggregate().get();\n    assertEquals(200, aggregatedRes.status().code());\n}\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"A user can use ",Object(r.b)("inlineCode",{parentName:"p"},"@CorsDecorator")," in annotated services. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1547"},"#1547")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'sb.annotatedService("/cors6", new Object() {\n\n    @Get("/any/get")\n    @CorsDecorator(origins = "*", exposedHeaders = { "expose_header_1", "expose_header_2" },\n        allowedRequestHeaders = { "allow_request_1", "allow_request_2" },\n        allowedRequestMethods = HttpMethod.GET, maxAge = 3600,\n        preflightRequestHeaders = {\n            @AdditionalHeader(name = "x-preflight-cors", value = "Hello CORS")\n        })\n    public HttpResponse anyoneGet() {\n        return HttpResponse.of(HttpStatus.OK);\n    }\n}\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Added ",Object(r.b)("inlineCode",{parentName:"p"},"ClientFactoryBuilder.domainNameResolverCustomizer()")," so that a user can customize the resolver easily. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1553"},"#1553")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"ClientFactory f = new ClientFactoryBuilder()\n    .domainNameResolverCustomizer(resolverBuilder -> {\n        resolverBuilder.maxQueriesPerResolve(10);\n        resolverBuilder.traceEnabled(false);\n    })\n    .build();\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"A user can define a custome annotation which attaches other annotations for simplicity. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1560"},"#1560")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'// Define a custom annotation:\n@ProducesJson\n@LoggingDecorator\n@interface MyApiSpecification {}\n\n// Apply it to the annotated HTTP service:\n@Get("/api")\n@MyApiSpecification // You can use one annotation which holds other other annotations.\npublic Something getSomething() {}\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Added ",Object(r.b)("inlineCode",{parentName:"p"},"@AdditionalHeader")," and ",Object(r.b)("inlineCode",{parentName:"p"},"@AdditionalTrailer")," to insert headers easily in annotated services. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1555"},"#1555"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Added a way to add multiple gRPC services with a single method call. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1563"},"#1563")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"// Before\nGrpcService s = new GrpcServiceBuilder().addService(a)\n                                        .addService(b)\n                                        .build();\n// After\nGrpcService s = new GrpcServiceBuilder().addServices(a, b).build();\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Added more shortcut methods for convenience. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1576"},"#1576")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"HttpRequest req = ...;\nAggregatedHttpMessage aggregated = ...;\nMediaType contentType;\nString content;\n\n// Before\ncontentType = req.headers().contentType();\ncontentType = aggregated.headers().contentType();\ncontent = aggregated.content().toStringUtf8();\n\n// After\ncontentType = req.contentType();\ncontentType = aggregated.contentType();\ncontent = aggregated.contentUtf8();\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"RequestObject")," is shown in ",Object(r.b)("inlineCode",{parentName:"p"},"DocService"),". ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1557"},"#1557")," ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Added ",Object(r.b)("inlineCode",{parentName:"p"},"verboseSocketExceptions")," flag so that a user can ignore harmless socket-related error message. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1577"},"#1577"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Added automatic directory listing generation to ",Object(r.b)("inlineCode",{parentName:"p"},"HttpFileService"),". ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1573"},"#1573"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Added ",Object(r.b)("inlineCode",{parentName:"p"},"armeria-spring-boot-actuator")," dependency. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1578"},"#1578")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Works without Spring Web or Webflux."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Added metrics related to timeouts. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1589"},"#1589"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Added ",Object(r.b)("inlineCode",{parentName:"p"},"responseCauseSanitizer")," to ",Object(r.b)("inlineCode",{parentName:"p"},"LoggingDecoratorBuilder"),". ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1594"},"#1594")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"A user can sanitize the stack trace of ",Object(r.b)("inlineCode",{parentName:"li"},"RequestLog.responseCause()")," or avoid logging the stack trace completely.")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"ServerBuilder sb = ...\nfinal Function<Throwable, Throwable> responseCauseSanitizer = cause -> {\n    if (cause instanceOf AnticipatedException) {\n        return null; // Do not log when AnticipatedException is raised. \n    }\n    return cause;\n };\n\n sb.decorator(new LoggingServiceBuilder().requestLogLevel(LogLevel.INFO)                                                    \n                                         .successfulResponseLogLevel(LogLevel.INFO)                                                    \n                                         .responseCauseSanitizer(responseCauseSanitizer)\n                                         .newDecorator());\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"A user can easily send ",Object(r.b)("a",{parentName:"p",href:"https://www.w3.org/TR/2009/WD-eventsource-20090421/"},"Server-Sent Events"),". ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1551"},"#1551")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'public class MyAnnotatedService {\n    @Get("/publisher")\n    @ProducesEventStream\n    public Publisher<ServerSentEvent<?>> publisher() {\n        return Flux.just(ServerSentEvent.ofData("foo"),\n                         ServerSentEvent.ofData("bar"),\n                         ServerSentEvent.ofData("baz"),\n                         ServerSentEvent.ofData("qux"));\n    }\n}\n')))),Object(r.b)("h2",{id:"improvements",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#improvements","aria-label":"improvements permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"User-friendly message when ",Object(r.b)("inlineCode",{parentName:"li"},"400 Bad Request")," happens. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1575"},"#1575")),Object(r.b)("li",{parentName:"ul"},"Enabled DNS query traces by default. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1553"},"#1553")),Object(r.b)("li",{parentName:"ul"},"Added ",Object(r.b)("inlineCode",{parentName:"li"},"armeria-retry-count")," header when ",Object(r.b)("inlineCode",{parentName:"li"},"RetryingClient")," is used. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1593"},"#1593"))),Object(r.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Bug fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fixed a bug where ",Object(r.b)("inlineCode",{parentName:"li"},"httpStatus")," tag is not set properly. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1559"},"#1559")),Object(r.b)("li",{parentName:"ul"},"Do not set ",Object(r.b)("inlineCode",{parentName:"li"},"Content-length")," header when HTTP trailers exist. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1566"},"#1566")),Object(r.b)("li",{parentName:"ul"},"Fixed a bug where max request length is not set correctly in ",Object(r.b)("inlineCode",{parentName:"li"},"GrpcService")," when the value is ",Object(r.b)("inlineCode",{parentName:"li"},"0")," or ",Object(r.b)("inlineCode",{parentName:"li"},"Long.MAX_VALUE"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1549"},"#1549")),Object(r.b)("li",{parentName:"ul"},"Fixed a but where gRPC JSON marshaller is initialized even when unnecessary. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1558"},"#1558")),Object(r.b)("li",{parentName:"ul"},"Fixed a bug where gRPC callbacks are not executed in order. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1600"},"#1600"))),Object(r.b)("h2",{id:"breaking-change",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#breaking-change","aria-label":"breaking change permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Breaking Change"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"HttpHeaders")," in ",Object(r.b)("inlineCode",{parentName:"li"},"AggregatedHttpMessage")," is immutable.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"You should call ",Object(r.b)("inlineCode",{parentName:"li"},"headers.toMutable()")," to set or remove a header. ")))),Object(r.b)("h2",{id:"deprecations",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#deprecations","aria-label":"deprecations permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Deprecations"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RequestContext.isTimedOut()")," has been deprecated. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1589"},"#1589"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("inlineCode",{parentName:"li"},"ServiceRequestContext.isTimedOut()")," instead.")))),Object(r.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Dependencies"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Bouncy Castle 1.60 -> 1.61"),Object(r.b)("li",{parentName:"ul"},"Brave 5.6.0 -> 5.6.1"),Object(r.b)("li",{parentName:"ul"},"java-jwt 3.5.0 -> 3.7.0"),Object(r.b)("li",{parentName:"ul"},"Micrometer 1.1.2 -> 1.1.3"),Object(r.b)("li",{parentName:"ul"},"Netty 4.1.32 -> 4.1.33"),Object(r.b)("li",{parentName:"ul"},"Project Reactor 3.2.5 -> 3.2.6"),Object(r.b)("li",{parentName:"ul"},"protobuf-jackson 0.3.0 -> 0.3.1"),Object(r.b)("li",{parentName:"ul"},"RxJava 2.2.5 -> 2.2.6"),Object(r.b)("li",{parentName:"ul"},"Thrift 0.11.0 -> 0.12.0"),Object(r.b)("li",{parentName:"ul"},"Tomcat 9.0.14 -> 9.0.16, 8.5.37 -> 8.5.38"),Object(r.b)("li",{parentName:"ul"},"spring-boot-starter-actuator has benn removed from the transitive dependencies.")))}b.isMDXComponent=!0},"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2","/release-notes/1.7.1":"v1.7.1","/release-notes/1.7.0":"v1.7.0","/release-notes/1.6.0":"v1.6.0","/release-notes/1.5.0":"v1.5.0","/release-notes/1.4.0":"v1.4.0","/release-notes/1.3.0":"v1.3.0","/release-notes/1.2.0":"v1.2.0","/release-notes/1.1.0":"v1.1.0","/release-notes/1.0.0":"v1.0.0","/release-notes/0.99.9":"v0.99.9","/release-notes/0.99.8":"v0.99.8","/release-notes/0.99.7":"v0.99.7","/release-notes/0.99.6":"v0.99.6","/release-notes/0.99.5":"v0.99.5"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,t,a){"use strict";a("tU7J");var n=a("wFql"),r=a("q1tI"),i=a.n(r),s=a("2+3N"),c=a("1lec"),l=a("+ejy"),b=a("+9zj"),o=n.a.Title;t.a=function(e){var t={},a={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(s).forEach((function(e){var a=e[0],n=e[1];t[n]=a})),Object.entries(c).forEach((function(e){var t=e[0],n=e[1];a[n]=t}));var r=Object(b.a)(e.location),p=e.version||r.substring(r.lastIndexOf("/")+1);return p.match(/^[0-9]/)||(p=void 0),i.a.createElement(l.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:p?p+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),p?i.a.createElement(o,{id:"release-notes",level:1},i.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),p," release notes"):"",e.children)}}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-80-0-mdx-b3785367cbed728fd58d.js.map