(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"References":{"Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb"]}')},"6qHX":function(e,a,t){"use strict";t.r(a),t.d(a,"pageTitle",(function(){return n})),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return m}));var r=t("zLVn"),i=(t("q1tI"),t("7ljp")),c=t("xCMr"),n="Browsing and invoking services with DocService",o={},s=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",a)}},l=s("Tip"),d=s("MaxWidth"),p={pageTitle:n,_frontmatter:o},b=c.a;function m(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)(b,Object.assign({},p,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"browsing-and-invoking-services-with-docservice",style:{position:"relative"}},Object(i.b)("a",{parentName:"h1",href:"#browsing-and-invoking-services-with-docservice","aria-label":"browsing and invoking services with docservice permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Browsing and invoking services with ",Object(i.b)("inlineCode",{parentName:"h1"},"DocService")),Object(i.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#debug-form"},"Debug form")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#sending-http-headers"},"Sending HTTP headers")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#including-and-excluding-service-methods"},"Including and excluding service methods"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#example-requests-and-headers"},"Example requests and headers"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#adding-docstrings"},"Adding docstrings")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#for-thrift"},"For Thrift")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#for-grpc"},"For gRPC")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#for-annotated-service"},"For annotated service"))))),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService")," is a single-page web application which provides the following useful features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Browsing the list of gRPC, Thrift or annotated services and their operations available in the server"),Object(i.b)("li",{parentName:"ul"},"Invoking a service operation from a web form"),Object(i.b)("li",{parentName:"ul"},"Creating a permalink for the invocation you've made")),Object(i.b)("p",null,"First, add ",Object(i.b)("a",{parentName:"p",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService")," to the ",Object(i.b)("a",{parentName:"p",href:"type://ServerBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerBuilder.html"},"type://ServerBuilder"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.common.grpc.GrpcSerializationFormats;\nimport com.linecorp.armeria.server.docs.DocService;\nimport com.linecorp.armeria.server.ServerBuilder;\nimport com.linecorp.armeria.server.thrift.THttpService;\n\nServerBuilder sb = Server.builder();\nsb.http(8080);\n\n// Add a Thrift service which implements \'ThriftHelloService\'.\nsb.service("/hello", THttpService.of(new MyThriftHelloService()));\n\n// Add a gRPC service which implements \'GrpcHelloService\'.\n// Unlike Thrift, you must enable unframed requests explicitly.\nsb.service(GrpcService.builder()\n                      .addService(new MyGrpcHelloService())\n                      .enableUnframedRequests(true)\n                      .build());\n// Add an annotated HTTP service.\nsb.annotatedService("/service", new MyAnnotatedService());\n// Add a DocService which scans all Thrift and gRPC services added to the server.\nsb.serviceUnder("/docs", new DocService());\nServer server = sb.build();\nserver.start().join();\n')),Object(i.b)(l,{mdxType:"Tip"},Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService")," will scan for all supported services automatically when the ",Object(i.b)("a",{parentName:"p",href:"type://Server:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Server.html"},"type://Server")," starts up.\nPlease see ",Object(i.b)("a",{parentName:"p",href:"#including-and-excluding-service-methods"},"Including and excluding service methods"),"\nto learn how to include or exclude certain services.")),Object(i.b)("p",null,"Open ",Object(i.b)("a",{parentName:"p",href:"http://127.0.0.1:8080/docs/"},"http://127.0.0.1:8080/docs/")," in your web browser and you'll see the following screen:"),Object(i.b)("p",null,Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.631901840490798%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAr0lEQVQY01WNxw6EQAxD+RvKZeD/v4I2HBAcgBu7U6iiybsTBIJIT3Yiy7EYYwiCAEaZ75N6ngfXdW+e+9Pbtn3jOA5hhWGIKIpQFAXyPCctyxJxHCPLMvA0RZIk4Jwj/XtzN95km6ZBXddEVVWEJYRE234wDAOWZcG2bTAzjiPmeSamaXpx3dd1pfy+77jGElLjKxS6rkPf91RkgkopaK1fmMzJuUsp6YEpPI6D+AEuCv/TIQQaDgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"docservice 1",title:"docservice 1",src:"/static/edbb0367cc9fd096091ee0bee93c125c/a6d36/docservice_1.png",srcSet:["/static/edbb0367cc9fd096091ee0bee93c125c/222b7/docservice_1.png 163w","/static/edbb0367cc9fd096091ee0bee93c125c/ff46a/docservice_1.png 325w","/static/edbb0367cc9fd096091ee0bee93c125c/a6d36/docservice_1.png 650w","/static/edbb0367cc9fd096091ee0bee93c125c/e548f/docservice_1.png 975w","/static/edbb0367cc9fd096091ee0bee93c125c/3c492/docservice_1.png 1300w","/static/edbb0367cc9fd096091ee0bee93c125c/9b29b/docservice_1.png 3840w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)("p",null,"The left pane of the screen shows the list of the available services and their operations. If you defined\nstructs, enums or exceptions, they will appear there as well. If you click the ",Object(i.b)("inlineCode",{parentName:"p"},"hello()")," operation, the\nright pane will show the details of the operation such as the list of the parameters, the return type and\nthe exceptions which may be thrown:"),Object(i.b)("p",null,Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.239263803680984%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABB0lEQVQoz52R2WrDQAxF/cXe/yyhD/2FNi8lfTGY4BYKjVe877e5IoK4LTR04KLRSDojzRiWZcF1Xfi+D8/z4DgObNsGzynTNMVnzj0ymqZBXVVY1xW3a55n/GcZD4cI+6cTds9v2B/e8fjygaKskGUppmlCnueo61ouaNtW9jwfhgFZmm58WumQidLpJUjLwDiOWJZFzvq+lz3Puq4TOEWfudzTckqDBQK6WsJ5W1EUUsAkwu7RFnjtkECCdMzvBX8CCVIpkCOml/dhko7Lrhln0S1YfdWvQO2QkLIsBXo+f+J4fEUYhgiCAFEUSZwxFSf6AaTlzfox+vCMJUkiiuN483kq1n0B89Oc4NfvsWsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"docservice 2",title:"docservice 2",src:"/static/f8ed6a148d2f38765d626fe0bdf3a5e1/a6d36/docservice_2.png",srcSet:["/static/f8ed6a148d2f38765d626fe0bdf3a5e1/222b7/docservice_2.png 163w","/static/f8ed6a148d2f38765d626fe0bdf3a5e1/ff46a/docservice_2.png 325w","/static/f8ed6a148d2f38765d626fe0bdf3a5e1/a6d36/docservice_2.png 650w","/static/f8ed6a148d2f38765d626fe0bdf3a5e1/e548f/docservice_2.png 975w","/static/f8ed6a148d2f38765d626fe0bdf3a5e1/3c492/docservice_2.png 1300w","/static/f8ed6a148d2f38765d626fe0bdf3a5e1/95515/docservice_2.png 3806w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)("p",null,"As you may have noticed, the 'description' column is empty. ",Object(i.b)("a",{parentName:"p",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService")," can even show the docstrings\nyou put into your ",Object(i.b)("inlineCode",{parentName:"p"},".thrift")," or ",Object(i.b)("inlineCode",{parentName:"p"},".proto")," files with a little bit of build configuration. We will visit this\nlater in this document."),Object(i.b)("h2",{id:"debug-form",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#debug-form","aria-label":"debug form permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Debug form"),Object(i.b)("p",null,"Now, scroll down the right pane. You'll find a 'debug form' which enables you to send an RPC request in\nhuman-friendly JSON format:"),Object(i.b)("p",null,Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.94478527607362%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9ElEQVQoz52RTW7CMBCFfbAkqHC13qHHYFmpFdygi6rthg2obYRIqECJf2LHyQPbTJuKECSe9OnF1sxTZszGkwnuxoE4GSGKIiRJgjiOb4Jl62+IYgd5gpcl8jwH59wjhIBSClJK7+5M3867uDv2+LLC02uK+cfGs+MaSh5DtIFUFYzR6MoYgyGxdFvgK9vj84SsQkPbtr/eNI13a633PlyNg1VKQHukx9r6rJhEjX2iWka7Iuo6BDYU2GmiPx0MdEsO/AX2FXbHujT2v0B6UW1qpD8Cy6zEZn9cwZWAwUD3uoWo8PC8wP30DbP3dRj1wph9OgCNlZNccJfmRgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"docservice 3",title:"docservice 3",src:"/static/eeec3b70c20527981c299569e9c20efa/a6d36/docservice_3.png",srcSet:["/static/eeec3b70c20527981c299569e9c20efa/222b7/docservice_3.png 163w","/static/eeec3b70c20527981c299569e9c20efa/ff46a/docservice_3.png 325w","/static/eeec3b70c20527981c299569e9c20efa/a6d36/docservice_3.png 650w","/static/eeec3b70c20527981c299569e9c20efa/e548f/docservice_3.png 975w","/static/eeec3b70c20527981c299569e9c20efa/3c492/docservice_3.png 1300w","/static/eeec3b70c20527981c299569e9c20efa/0b986/docservice_3.png 3798w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)("p",null,"Type the request parameters like the following and click the 'Submit to: /hello' button:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Armeria"\n}\n')),Object(i.b)("p",null,"The result pane right next to the text area you entered the JSON request will show the reply in JSON:"),Object(i.b)("p",null,Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.94478527607362%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABLUlEQVQoz42RQU7DMBBFc7AkiPRi3IELcAJ2SEhlywoWLNixqFQU1JKUpIk9jp04H4+bhKZSVUZ6ssYef/8ZB8ligeuESRDFVwjDEHEcI4qiCd47zc8RZJsUVJdQA1LUyPMcUpKHiNA0DZRSnjE/R/DwssLjW4qn963nR2iQrEFKQ5KCMRrHobVGZzv0fY/e2sM6wBGkeYX1d4n1tvBQY2C7DsZdbNvWF1p3kWEB5Vx87XYQ2Q5U1VDauXeu2T3XBI2S0B7ydF07czS+PCRe8DPLUJZ7qH0FcrAYt8u1gRACx0yuxlZOxI0xvm3GOBHt4G543wtKKXHgT/DU4cjY+nR2zFAzCbIYr/wSz3W1KbAthPuA+eAvMRPk4VaCcHv/jJu7JZavH96JtT3+G78jdJCYKrU8qwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"docservice 4",title:"docservice 4",src:"/static/840bf18cb3f368e29204729a1c15befd/a6d36/docservice_4.png",srcSet:["/static/840bf18cb3f368e29204729a1c15befd/222b7/docservice_4.png 163w","/static/840bf18cb3f368e29204729a1c15befd/ff46a/docservice_4.png 325w","/static/840bf18cb3f368e29204729a1c15befd/a6d36/docservice_4.png 650w","/static/840bf18cb3f368e29204729a1c15befd/e548f/docservice_4.png 975w","/static/840bf18cb3f368e29204729a1c15befd/3c492/docservice_4.png 1300w","/static/840bf18cb3f368e29204729a1c15befd/0b986/docservice_4.png 3798w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)("p",null,"The current location of your web browser should be updated like the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"http://127.0.0.1:8080/docs/#!method/com.example.ThriftHelloService/hello?args=%7B%22name%22%3A%22Armeria%22%7D"))),Object(i.b)("p",null,"Imagine you build a request that reproduces the problem using the debug form and share the URL of the request\nwith your colleagues. It's way more convenient than traditional workflow for replaying an RPC request."),Object(i.b)("h3",{id:"sending-http-headers",style:{position:"relative"}},Object(i.b)("a",{parentName:"h3",href:"#sending-http-headers","aria-label":"sending http headers permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Sending HTTP headers"),Object(i.b)("p",null,"You may want to send an additional HTTP header such as ",Object(i.b)("inlineCode",{parentName:"p"},"authorization")," when sending an RPC request via\na debug form. Click the 'Edit additional HTTP headers' link below the text area, and you'll see another\ntext area which allows you to specify the HTTP headers you want to add:"),Object(i.b)(d,{value:432,mdxType:"MaxWidth"},Object(i.b)("p",null,Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.171779141104295%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA60lEQVQoz51S2Y6EMAzj//9zjwHBlN5JD29SBnbncYnkOoorN206QcJGxvcz4mMN+BKeTcK8JzyEP7eARfLWum5F7x39xWf8ZsDEteNhCbPg5MXxwCzQ2uIZe66wuV1wgyv2JHWBiRXqNQUSIZJ0UEHMKKWAWSF5raitgYhFK0NPmZDp4EPvo1snPpEbJl1CZnjnsG0brLXYjYERBO+RUsK6rnCiO2dHrpoyEV1XTXwZduw+ySkNd+J8y3gaBllyOYqtH+3/F2+GcRje6+5vXFfWoXiBdqcPfAdjKDLxYaijNun9S9zBc3ybhh8QnMKCqCdafAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"docservice 5",title:"docservice 5",src:"/static/c02a19054aff506d73565f040d3221b4/a6d36/docservice_5.png",srcSet:["/static/c02a19054aff506d73565f040d3221b4/222b7/docservice_5.png 163w","/static/c02a19054aff506d73565f040d3221b4/ff46a/docservice_5.png 325w","/static/c02a19054aff506d73565f040d3221b4/a6d36/docservice_5.png 650w","/static/c02a19054aff506d73565f040d3221b4/e548f/docservice_5.png 975w","/static/c02a19054aff506d73565f040d3221b4/3c492/docservice_5.png 1300w","/static/c02a19054aff506d73565f040d3221b4/6774c/docservice_5.png 1391w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(i.b)("h2",{id:"including-and-excluding-service-methods",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#including-and-excluding-service-methods","aria-label":"including and excluding service methods permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Including and excluding service methods"),Object(i.b)("p",null,"You can include or exclude service methods using ",Object(i.b)("a",{parentName:"p",href:"type://DocServiceFilter:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocServiceFilter.html"},"type://DocServiceFilter")," when building a ",Object(i.b)("a",{parentName:"p",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService"),"\nwith a ",Object(i.b)("a",{parentName:"p",href:"type://DocServiceBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocServiceBuilder.html"},"type://DocServiceBuilder"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.server.docs.DocService;\nimport com.linecorp.armeria.server.docs.DocServiceFilter;\n\nServerBuilder sb = Server.builder();\n...\nsb.serviceUnder("/docs", DocService.builder()\n                                   // Include Thrift services and Annotated services.\n                                   .include(DocServiceFilter.ofThrift().or(\n                                        DocServiceFilter.ofAnnotated()))\n                                   // Exclude the method whose name is "foo" in Thrift services.\n                                   .exclude(DocServiceFilter.ofThrift().and(\n                                        DocServiceFilter.ofMethodName("foo")))\n                                   .build());\n...\n')),Object(i.b)("p",null,"The inclusion rule is as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"No ",Object(i.b)("inlineCode",{parentName:"li"},"include(DocServiceFilter)")," and ",Object(i.b)("inlineCode",{parentName:"li"},"exclude(DocServiceFilter)")," is called: include all methods."),Object(i.b)("li",{parentName:"ul"},"Only ",Object(i.b)("inlineCode",{parentName:"li"},"exclude(DocServiceFilter)")," is called: include all methods except the methods which the exclusion filter returns ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},"Only ",Object(i.b)("inlineCode",{parentName:"li"},"include(DocServiceFilter)")," is called: include the methods which the inclusion filter returns ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"include(DocServiceFilter)")," and ",Object(i.b)("inlineCode",{parentName:"li"},"exclude(DocServiceFilter)")," is called: include the methods which the inclusion filter returns ",Object(i.b)("inlineCode",{parentName:"li"},"true")," and the exclusion filter returns ",Object(i.b)("inlineCode",{parentName:"li"},"false"),".")),Object(i.b)("h2",{id:"example-requests-and-headers",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#example-requests-and-headers","aria-label":"example requests and headers permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Example requests and headers"),Object(i.b)("p",null,"You can specify the example requests and HTTP headers which will be used as the default value of the debug form\nwith a ",Object(i.b)("a",{parentName:"p",href:"type://DocServiceBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocServiceBuilder.html"},"type://DocServiceBuilder"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.common.HttpHeaders;\nimport static com.linecorp.armeria.common.HttpHeaderNames.AUTHORIZATION;\n\nServerBuilder sb = Server.builder();\n...\nsb.serviceUnder(\n    "/docs",\n    DocService.builder()\n              // HTTP headers for all services\n              .exampleHeaders(HttpHeaders.of(AUTHORIZATION, "bearer b03c4fed1a"))\n              // Thrift example request for \'ThriftHelloService.hello()\'\n              .exampleRequests(List.of(new ThriftHelloService.hello_args("Armeria")))\n              // gRPC example request for \'GrpcHelloService.Hello()\'\n              .exampleRequests(GrpcHelloServiceGrpc.SERVICE_NAME, "Hello", // Method name\n                               HelloRequest.newBuilder().setName("Armeria").build())\n              .build());\n...\n')),Object(i.b)("p",null,"By adding examples to ",Object(i.b)("a",{parentName:"p",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService"),", your users will be able to play with the services you wrote\nwithout a hassle and thus will understand them sooner and better."),Object(i.b)("h2",{id:"adding-docstrings",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#adding-docstrings","aria-label":"adding docstrings permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Adding docstrings"),Object(i.b)("p",null,"Configure your build script so that it generates the required metadata file for your ",Object(i.b)("inlineCode",{parentName:"p"},".thrift")," or ",Object(i.b)("inlineCode",{parentName:"p"},".proto"),"\nfiles into the specific location in the class path."),Object(i.b)("h3",{id:"for-thrift",style:{position:"relative"}},Object(i.b)("a",{parentName:"h3",href:"#for-thrift","aria-label":"for thrift permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"For Thrift"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use the ",Object(i.b)("inlineCode",{parentName:"li"},"--gen json")," option to generate the ",Object(i.b)("inlineCode",{parentName:"li"},".json")," file that contains the docstrings."),Object(i.b)("li",{parentName:"ul"},"Put the generated ",Object(i.b)("inlineCode",{parentName:"li"},".json")," file into the ",Object(i.b)("inlineCode",{parentName:"li"},"META-INF/armeria/thrift")," directory.")),Object(i.b)("h3",{id:"for-grpc",style:{position:"relative"}},Object(i.b)("a",{parentName:"h3",href:"#for-grpc","aria-label":"for grpc permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"For gRPC"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Configure the protobuf plugin to generate the ",Object(i.b)("inlineCode",{parentName:"p"},".dsc")," file that contains the docstrings and\nput it into the ",Object(i.b)("inlineCode",{parentName:"p"},"META-INF/armeria/grpc")," directory:"),Object(i.b)("p",{parentName:"li"},"Using Gradle:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-groovy"},'protobuf {\n    generateProtoTasks {\n        all().each { task ->\n            task.generateDescriptorSet = true\n            task.descriptorSetOptions.includeSourceInfo = true\n            task.descriptorSetOptions.includeImports = true\n            task.descriptorSetOptions.path =\n                    "${buildDir}/resources/main/META-INF/armeria/grpc/service-name.dsc"\n        }\n    }\n}\n')),Object(i.b)("p",{parentName:"li"},"Using Maven:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- See https://www.xolstice.org/protobuf-maven-plugin/usage.html for more information. --\x3e\n<plugin>\n  <groupId>org.xolstice.maven.plugins</groupId>\n  <artifactId>protobuf-maven-plugin</artifactId>\n  <version>0.6.1</version>\n  <configuration>\n    <protocArtifact>com.google.protobuf:protoc:${protoc.version}:exe:${os.detected.classifier}</protocArtifact>\n    <pluginId>grpc-java</pluginId>\n    <pluginArtifact>io.grpc:protoc-gen-grpc-java:${grpc.version}:exe:${os.detected.classifier}</pluginArtifact>\n    <writeDescriptorSet>true</writeDescriptorSet>\n    <includeDependenciesInDescriptorSet>true</includeDependenciesInDescriptorSet>\n    <includeSourceInfoInDescriptorSet>true</includeSourceInfoInDescriptorSet>\n    <descriptorSetOutputDirectory>${project.build.outputDirectory}/META-INF/armeria/grpc</descriptorSetOutputDirectory>\n    <descriptorSetFileName>${project.build.finalName}.dsc</descriptorSetFileName>\n  </configuration>\n  <executions>\n    <execution>\n      <goals>\n        <goal>compile</goal>\n        <goal>compile-custom</goal>\n      </goals>\n    </execution>\n  </executions>\n</plugin>\n")))),Object(i.b)("h3",{id:"for-annotated-service",style:{position:"relative"}},Object(i.b)("a",{parentName:"h3",href:"#for-annotated-service","aria-label":"for annotated service permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"For annotated service"),Object(i.b)("p",null,"  Using ",Object(i.b)("a",{parentName:"p",href:"type://@Description:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Description.html"},"type://@Description")," annotation:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.server.annotation.Description;\n\n@Description("A service that provides user information.")\npublic class UserService {\n\n    @Get("/users/{id}")\n    @Description("Retrieves the user information by the given user ID.")\n    public User getUser(@Param("id") @Description("the user ID") String id) { ... }\n\n    ...\n}\n')),Object(i.b)("p",null,"  Using JavaDoc:"),Object(i.b)("p",null,"  This only works with method parameters.\nTo enable it, you have to add the armeria annotation processor to your project:"),Object(i.b)("p",null,"  Gradle configuration:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  compileOnly 'com.linecorp.armeria:armeria-annotation-processor'\n  annotationProcessor 'com.linecorp.armeria:armeria-annotation-processor'\n}\n")),Object(i.b)("p",null,"  Kotlin configuration:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n  kotlin("kapt") apply true\n}\n\ndependencies {\n    configurations["kapt"].dependencies.add("com.linecorp.armeria:armeria-annotation-processor")\n}\n\nkapt {\n    annotationProcessor("com.linecorp.armeria.server.annotation.processor.DocumentationProcessor")\n}\n')))}m.isMDXComponent=!0},xCMr:function(e,a,t){"use strict";var r=t("Wbzz"),i=t("q1tI"),c=t.n(i),n=t("/94A"),o=t("+ejy");a.a=function(e){var a=Object(r.useStaticQuery)("1217743243").allMdx.nodes;return c.a.createElement(o.a,Object.assign({},e,{candidateMdxNodes:a,index:n,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-server-docservice-mdx-eb90f15e817fed57763d.js.map