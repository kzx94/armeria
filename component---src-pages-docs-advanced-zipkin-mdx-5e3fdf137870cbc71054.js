(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"References":{"Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb"]}')},lmMv:function(e,a,t){"use strict";t.r(a),t.d(a,"pageTitle",(function(){return o})),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return d}));var r,n=t("zLVn"),i=(t("q1tI"),t("7ljp")),c=t("xCMr"),o="Zipkin integration",p={},s=(r="RequiredDependencies",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),l={pageTitle:o,_frontmatter:p},m=c.a;function d(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)(m,Object.assign({},l,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"zipkin-integration",style:{position:"relative"}},Object(i.b)("a",{parentName:"h1",href:"#zipkin-integration","aria-label":"zipkin integration permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Zipkin integration"),Object(i.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#see-also"},"See also"))),Object(i.b)("p",null,"If you want to troubleshoot latency problems in microservice architecture, you will want to use distributed\ntracing system such as ",Object(i.b)("a",{parentName:"p",href:"https://zipkin.io/"},"Zipkin"),". It gathers timing data and shows which component is\nfailing or taking more time than others in a distributed environment. Armeria supports distributed tracing via\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/openzipkin/brave/"},"Brave"),", which is a Java tracing library compatible with\n",Object(i.b)("a",{parentName:"p",href:"https://zipkin.io/"},"Zipkin"),". Let's find out how to use it to trace requests."),Object(i.b)("p",null,"First, You need the ",Object(i.b)("inlineCode",{parentName:"p"},"armeria-brave")," dependency:"),Object(i.b)(s,{boms:[{groupId:"com.linecorp.armeria",artifactId:"armeria-bom"}],dependencies:[{groupId:"com.linecorp.armeria",artifactId:"armeria-brave"}],mdxType:"RequiredDependencies"}),Object(i.b)("p",null,"Then, you need to create the ",Object(i.b)("inlineCode",{parentName:"p"},"HttpTracing"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'    import com.linecorp.armeria.common.brave.RequestContextCurrentTraceContext;\n\n    import brave.Tracing;\n    import brave.http.HttpTracing;\n    import zipkin2.reporter.Reporter;\n\n    Reporter<Span> myReporter = ...\n    Tracing tracing = Tracing.newBuilder()\n                             .localServiceName("myService")\n                             .currentTraceContext(RequestContextCurrentTraceContext.ofDefault())\n                             .spanReporter(myReporter)\n                             .build();\n    HttpTracing httpTracing = HttpTracing.create(tracing);\n')),Object(i.b)("p",null,"Please note that we specified ",Object(i.b)("a",{parentName:"p",href:"type://RequestContextCurrentTraceContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/brave/RequestContextCurrentTraceContext.html"},"type://RequestContextCurrentTraceContext"),". It stores the trace context into a\n",Object(i.b)("a",{parentName:"p",href:"type://RequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html"},"type://RequestContext")," and loads the trace context from the ",Object(i.b)("a",{parentName:"p",href:"type://RequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html"},"type://RequestContext")," automatically. Because of that,\nwe don't need to use a thread local variable which can lead to unpredictable behavior in asynchronous\nprogramming. If you want to send timing data to the span collecting server, you should specify ",Object(i.b)("inlineCode",{parentName:"p"},"spanReporter"),".\nFor more information about the ",Object(i.b)("inlineCode",{parentName:"p"},"spanReporter"),", please refer to\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/openzipkin/zipkin-reporter-java"},"Zipkin reporter")," or\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/openzipkin-contrib/zipkin-armeria-example"},"the fully working example"),"."),Object(i.b)("p",null,"Now, you can specify ",Object(i.b)("a",{parentName:"p",href:"type://BraveService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/brave/BraveService.html"},"type://BraveService")," using ",Object(i.b)("a",{parentName:"p",href:"/docs/server-decorator"},"Decorating a service")," with the\n",Object(i.b)("inlineCode",{parentName:"p"},"HttpTracing")," you just built:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'    import com.linecorp.armeria.common.HttpResponse;\n    import com.linecorp.armeria.server.Server;\n    import com.linecorp.armeria.server.brave.BraveService;\n\n    Tracing tracing = ...\n    Server server = Server.builder()\n                          .http(8081)\n                          .service("/", (ctx, res) -> HttpResponse.of(200))\n                          .decorator(BraveService.newDecorator(httpTracing))\n                          .build();\n')),Object(i.b)("p",null,"If the requests come to Armeria server and go to another backend, you can trace them using\n",Object(i.b)("a",{parentName:"p",href:"type://BraveClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/brave/BraveClient.html"},"type://BraveClient"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'    import com.linecorp.armeria.client.WebClient;\n    import com.linecorp.armeria.client.brave.BraveClient;\n    import com.linecorp.armeria.server.brave.BraveService;\n\n    Tracing tracing = ...\n    WebClient client = WebClient\n            .builder("https://myBackend.com")\n            .decorator(BraveClient.newDecorator(httpTracing.clientOf("myBackend")))\n            .build();\n\n    Server server = Server.builder()\n                          .http(8081)\n                          .service("/", (ctx, res) -> client.get("/api"))\n                          .decorator(BraveService.newDecorator(httpTracing))\n                          .build();\n')),Object(i.b)("p",null,"Please note that our ",Object(i.b)("inlineCode",{parentName:"p"},"HttpTracing")," instance used the same ",Object(i.b)("inlineCode",{parentName:"p"},"Tracing")," instance when we\ncreate ",Object(i.b)("a",{parentName:"p",href:"type://BraveClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/brave/BraveClient.html"},"type://BraveClient")," and ",Object(i.b)("a",{parentName:"p",href:"type://BraveService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/brave/BraveService.html"},"type://BraveService"),". Otherwise, there might be problems if the instances are not\nconfigured exactly the same.\nIn the same manner, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"Tracing")," instance with any\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/openzipkin/brave/tree/master/instrumentation"},"Brave instrumentation libraries"),".\nFor example, you can use it with ",Object(i.b)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Kafka")," producer:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'    import org.apache.kafka.clients.producer.KafkaProducer;\n    import org.apache.kafka.clients.producer.Producer;\n    import org.apache.kafka.clients.producer.ProducerRecord;\n\n    import brave.kafka.clients.KafkaTracing;\n\n    Tracing tracing = ...\n    KafkaTracing kafkaTracing = KafkaTracing.newBuilder(tracing)\n                                            .remoteServiceName("backend")\n                                            .writeB3SingleFormat(true)\n                                            .build();\n\n    Properties props = new Properties();\n    props.put("bootstrap.servers", "https://myKafka.com");\n    props.put("acks", "all");\n    ...\n\n    Producer<String, String> kafkaProducer = kafkaTracing.producer(new KafkaProducer<>(props));\n\n    Server server = Server.builder()\n                          .http(8081)\n                          .service("/", (ctx, req) -> {\n                              kafkaProducer.send(new ProducerRecord<>("test", "foo", "bar"));\n                              return HttpResponse.of(200);\n                          })\n                          .decorator(BraveService.newDecorator(tracing))\n                          .build();\n')),Object(i.b)("p",null,"This will trace all the requests sent from the client to the above example server to\n",Object(i.b)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Kafka"),", and report timing data using the ",Object(i.b)("inlineCode",{parentName:"p"},"spanReporter")," you specified.\nThe following screenshot shows a trace of a request:"),Object(i.b)("p",null,Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.62576687116564%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABrElEQVQoz2VRSW4bMRCcl+czufkTAYIcEi8HG7BjWYu1zMp9uI4ycipNCjIE5FDoLrK7qpusBOvBdyuw1TNsvcYsW0zsUOJRNPiTOa8Lcp6GPWyzgSPY7QtcvYIbaqi+hncWlRIcpt7AH95g9wvw5VOB3b0iNssCsyGz3W8kysNhQbULuN0L4uYRYfuMSCa628NohUoMHYSUmAGk+QNhOuJ4+otFo/BzyXD/rvBrxXG3kSW/XYty/rDVuN8a/FgMuFtzvNYaNTeoohshuxppmpBCACdxNVp0A8OuZeBj+AQzvoCP8RwJq07j6Z1hUCNOp5lW5kMRzFMKM2L4foP+6xc0D98QjMCHl4iqQ9I9ZitwchKJ+NEwzO7MJz3QPcGPqIxgUCQolYbWBqrdon97hOI90nFCP/RkJmCdg/UObdeC0bt72ma0IxriTdvA0V1MEZW+CGoNpRQ4QVkHRw25SNFDhxhKsQ8eZjQlZq6NLrD0u6UmZkF+PaFG17cwVJSmhEBNOebmjGyQm6/Pcn7NKyM59NDSJKYI5omkkvDeF9eLezGI5zUvIv8hJfwDE4umWo5NAl4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"zipkin 1",title:"zipkin 1",src:"/static/4c0eed158c7ca619c37d255151184f4a/a6d36/zipkin_1.png",srcSet:["/static/4c0eed158c7ca619c37d255151184f4a/222b7/zipkin_1.png 163w","/static/4c0eed158c7ca619c37d255151184f4a/ff46a/zipkin_1.png 325w","/static/4c0eed158c7ca619c37d255151184f4a/a6d36/zipkin_1.png 650w","/static/4c0eed158c7ca619c37d255151184f4a/e548f/zipkin_1.png 975w","/static/4c0eed158c7ca619c37d255151184f4a/3c492/zipkin_1.png 1300w","/static/4c0eed158c7ca619c37d255151184f4a/cc40b/zipkin_1.png 2394w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)("h2",{id:"see-also",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#see-also","aria-label":"see also permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"See also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/openzipkin-contrib/zipkin-armeria-example"},"Armeria Zipkin example"))))}d.isMDXComponent=!0},xCMr:function(e,a,t){"use strict";var r=t("Wbzz"),n=t("q1tI"),i=t.n(n),c=t("/94A"),o=t("+ejy");a.a=function(e){var a=Object(r.useStaticQuery)("1217743243").allMdx.nodes;return i.a.createElement(o.a,Object.assign({},e,{candidateMdxNodes:a,index:c,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-advanced-zipkin-mdx-5e3fdf137870cbc71054.js.map