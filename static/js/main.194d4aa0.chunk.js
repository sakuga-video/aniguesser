(this.webpackJsonpaniguesser=this.webpackJsonpaniguesser||[]).push([[0],{118:function(e,t,n){},125:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(11),i=n.n(r),c=(n(118),n(17)),o=n(27),u=n(32),l=(n(125),n(198)),d=n(219),j=n(200),g=n(201),m=n(221),b=n(85),p=n(42),h=n(15),v=n(25),f=n(24),O=new(function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).guesses=void 0,a.version(1).stores({guesses:"++id,date,guess,videos,time_to_guess"}),a.guesses=a.table("guesses"),a}return n}(n(87).a))("aniguesser"),x={videos:[],guesses:[],index:0,guess_to_show:void 0,playing:!1,tags:[]},_=Object(p.b)({name:"app",initialState:x,reducers:{mark_played:function(e,t){var n,a=t.payload,s=e.index,r=null===(n=e.guesses[s])||void 0===n?void 0:n.guess,i=e.videos[s][a];e.guesses[s]={guess:r,answers:i.tags},i.played=!0},set_videos:function(e,t){e.videos[e.index]=t.payload},submit_guess:function(e,t){e.guess_to_show=e.index,e.guesses[e.index]=t.payload},show_next_tag:function(e){var t=e.index;t+1<e.tags.length?e.index=t+1:(e.index=0,e.playing=!1),e.guess_to_show=void 0},start:function(e,t){e.index=0,e.guesses=[],e.videos=[],e.playing=!0,e.tags=t.payload},change_guess:function(e,t){var n,a,s=t.payload,r=e.index,i=e.videos[r];i&&(e.guesses[r]={guess:s,answers:null!==(n=null===(a=i[i.length-1])||void 0===a?void 0:a.tags)&&void 0!==n?n:[]})},skip_tag:function(e){e.tags.splice(e.index,1),e.index>=e.tags.length&&(e.index=0,e.playing=!1)}}}),y=_.actions,w=y.mark_played,S=y.show_next_tag,C=y.start,N=y.submit_guess,k=y.change_guess,I=y.skip_tag,T=y.set_videos,E=function(e){return function(t,n){var a,s=n().app,r=s.guesses,i=s.index,c=s.videos[i];if(void 0!==c&&(null===(a=c[0])||void 0===a?void 0:a.played)){var o,u,l=r[i];if(!l)l={answers:null!==(o=null===(u=c[c.length-1])||void 0===u?void 0:u.tags)&&void 0!==o?o:[]};O.guesses.put({date:Date.now(),guess:l.guess,videos:c.filter((function(e){return e.played})),time_to_guess:e}).catch((function(e){console.log(e)})),t(N(l))}}},R=_.reducer,F=n(194),P=n(197),z=n(88),A=n(4),B=function(e){var t=e.duration,n=e.size,s=e.type,r=e.on_time_over,i=e.interval,o=void 0===i?50:i,u=e.className,l=e.count_down,d=void 0!==l&&l,j=e.show_emergency_color,g=void 0!==j&&j,m=1e3*t/o,b=Object(z.useTimer)({endTime:m,interval:o,onTimeOver:r}),p=b.time,h=b.start,v=b.reset;Object(a.useEffect)((function(){return h(),v}),[v,h]);var f=function(e){return 100*(d?m-e:e)/m},O={color:f(p)<25&&g?"secondary":"primary",variant:"determinate",value:f(p),className:u};return"linear"===s?Object(A.jsx)(F.a,Object(c.a)({},O)):Object(A.jsx)(P.a,Object(c.a)({size:n},O))},H=Object(l.a)({wrapper:{position:"relative"},fabProgress:{position:"absolute",top:-6,left:-6}}),G={keys:[function(e){return e.name}],baseSort:function(e,t){return t.item.count-e.item.count}},L=function(e,t){var n=t.inputValue;return n?Object(b.a)(e,n,G).slice(0,100):[]},D=function(e){var t=e.all_tags,n=Je(),s=H(),r=Object(a.useState)(null),i=Object(o.a)(r,2),u=i[0],l=i[1];return Object(A.jsxs)("form",{id:"guess",onSubmit:function(e){e.preventDefault(),u&&n(E(0))},children:[Object(A.jsx)("div",{id:"guess-input",children:Object(A.jsx)(m.a,{selectOnFocus:!0,clearOnBlur:!0,autoHighlight:!0,autoComplete:!0,disableClearable:!0,clearOnEscape:!0,options:t,style:{width:300},filterOptions:L,getOptionLabel:function(e){return e.name},onChange:function(e,t){var a;l(t),n(k(null!==(a=null===t||void 0===t?void 0:t.name)&&void 0!==a?a:""))},renderInput:function(e){return Object(A.jsx)(d.a,Object(c.a)(Object(c.a)({},e),{},{label:"Guess the title",variant:"filled",autoFocus:!0}))}})}),Object(A.jsxs)("div",{className:s.wrapper,children:[Object(A.jsx)(B,{size:68,duration:30,on_time_over:function(){return n(E(30))},count_down:!0,show_emergency_color:!0,className:s.fabProgress}),Object(A.jsx)(j.a,{type:"submit","area-label":"submit",children:Object(A.jsx)(g.a,{})})]})]})},Y=n(50),J=n.n(Y),M=n(70);function q(){return(q=Object(M.a)(J.a.mark((function e(){var t,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/tag.json?limit=0&order=count&type="+be.COPYRIGHT);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent.map(W),e.abrupt("return",n.filter((function(e){return e.count>0})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return(V=Object(M.a)(J.a.mark((function e(t){var n,a,s,r=arguments;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:8,a="/api/post.json?tags=rating:safe order:random ext:mp4,webm "+t.name.split(" ").join("_")+"&limit="+n,e.next=4,fetch(a);case 4:return s=e.sent,e.next=7,s.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=function(e){return{count:e.count,id:e.id,name:e.name.split("_").join(" ")}},X=function(e){var t,n=e.tag,r=e.videos,i=e.video_wrapper,c=Je(),u=Object(a.useState)(!0),l=Object(o.a)(u,2),d=l[0],j=l[1],g=Object(a.useState)(0),m=Object(o.a)(g,2),b=m[0],p=m[1];Object(a.useEffect)((function(){var e=!0;return p(0),function(e){return V.apply(this,arguments)}(n).then((function(e){return e.map(i.wrap)})).then((function(t){e&&(t.length>0?(p(0),c(T(t))):c(I()))})),function(){e=!1}}),[n,i,c]);var h=function(){if(r.length>1){var e=(b+1)%r.length;p(e)}};return Object(A.jsxs)(s.a.Fragment,{children:[(0===r.length||d)&&Object(A.jsx)(P.a,{className:"video-loading"}),Object(A.jsx)("video",{muted:!0,onWaiting:function(){return j(!0)},onCanPlay:function(){return j(!1)},onPlay:function(){return c(w(b))},preload:"auto",autoPlay:!0,loop:1===r.length,onError:h,src:null===(t=r[b])||void 0===t?void 0:t.url,onEnded:function(){console.log("video ended"),j(!0),h()}})]})},K=n(58),Q=n(102),U=n(202),Z=n(203),$=Object(l.a)({timer:{width:"100%"},root:{width:400,height:200,display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}),ee=function(e){return e.length>0?Object(A.jsxs)(Z.a,{variant:"body1",children:["it was ",Object(K.sortBy)(e,(function(e){return e.count}))[e.length-1].name]}):null},te=function(e){var t=e.guess,n=e.answers,a=e.closest_answer,s=e.result,r=e.is_exact,i=Je(),c=$(),o=Object(A.jsx)(B,{duration:4,on_time_over:function(){return i(S())},type:"linear",className:c.timer});return Object(A.jsxs)(Q.a,{children:[Object(A.jsxs)(U.a,{className:c.root,children:["missing"!==s&&Object(A.jsx)(Z.a,{variant:"body1",children:t}),"correct"===s&&!r&&Object(A.jsxs)(Z.a,{variant:"body1",children:["(",a,")"]}),Object(A.jsx)(Z.a,{variant:"h3",component:"p",children:{correct:"\ud83c\udf89 is correct \ud83c\udf8a",incorrect:"is incorrect",missing:"No guess"}[s]}),"correct"!==s&&ee(n)]}),o]})},ne=n(98),ae=function(e){var t,n;if(!e.guess)return{result:"missing",is_exact:!1};var a=new ne.a(e.answers.map((function(e){return e.name})),{includeScore:!0,threshold:.1}).search(e.guess);return{result:a.length>0?"correct":"incorrect",is_exact:0===(null===(t=a[0])||void 0===t?void 0:t.score),closest_answer:null===(n=a[0])||void 0===n?void 0:n.item}},se=n(95),re=function e(t){var n=this;Object(h.a)(this,e),this.tags_by_name=void 0,this.wrap=function(e){return{tags:e.tags.split(" ").map((function(e){return e.split("_").join(" ")})).map((function(e){return n.tags_by_name.get(e)})).filter((function(e){return void 0!==e})),url:e.file_url,id:e.id,preview_url:e.preview_url}},this.tags_by_name=Object(se.a)(t.map((function(e){return[e.name,e]})))},ie=n(205),ce=n(206),oe=n(207),ue=n(208),le=n(209),de=n(204),je=n(96),ge=n.n(je);function me(e){return pe.map((function(t){var n=t.max,a=t.min;return ge()(e.filter((function(e){var t=e.count;return n>=t&&t>=a})))}))}var be,pe=[{max:1e5,min:500},{max:1e5,min:500},{max:1e5,min:500},{max:500,min:100},{max:500,min:100},{max:500,min:100},{max:500,min:100},{max:500,min:100},{max:100,min:25},{max:25,min:1},{max:25,min:1},{max:1,min:1}],he=function(e){var t=e.all_tags,n=Je();return t.length>0?Object(A.jsx)(de.a,{variant:"contained",onClick:function(){return n(C(me(t)))},id:"start",children:"Start"}):Object(A.jsx)(P.a,{})},ve="https://www.sakugabooru.com/post?tags=",fe=function(e){var t=ae(e),n='"'+e.guess+'" ';return{missing:"No guess",correct:n+"\ud83c\udf89 was correct \ud83c\udf8a",incorrect:n+"was incorrect"}[t.result]},Oe=Object(l.a)({root:{minHeight:250}}),xe=Object(l.a)({root:{paddingBottom:56}}),_e=function(e){var t=e.rounds,n=e.all_tags,a=Je(),s=Oe(),r=xe();return Object(A.jsxs)(U.a,{classes:r,children:[Object(A.jsx)(Z.a,{variant:"h3",component:"h1",gutterBottom:!0,align:"center",children:"Game Summary"}),Object(A.jsx)("div",{id:"play-again",children:Object(A.jsx)(de.a,{variant:"contained",onClick:function(){return a(C(me(n)))},color:"primary",children:"Play Again"})}),Object(A.jsx)(ie.a,{container:!0,spacing:2,children:t.map((function(e,t){return Object(A.jsx)(ie.a,{item:!0,className:"round-summary",xs:12,sm:6,md:4,children:Object(A.jsx)(ce.a,{classes:s,children:Object(A.jsxs)(oe.a,{href:ve+e.tag.name.split(" ").join("_"),target:"_blank",children:[Object(A.jsx)(ue.a,{component:"img",title:"Image thumbnail of a clip from "+e.videos[0].tags[0].name,alt:"Image thumbnail of a clip from "+e.videos[0].tags[0].name,image:e.videos[0].preview_url}),Object(A.jsxs)(le.a,{children:[Object(A.jsx)(Z.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.tag.name}),Object(A.jsx)(Z.a,{variant:"body2",component:"p",children:fe(e.guess)})]})]})})},t)}))})]})},ye=n(40),we=n(5),Se=n(162),Ce=n(210),Ne=n(211),ke=n(223),Ie=n(2),Te=Object(l.a)((function(e){return{root:{display:"flex",height:22,alignItems:"center",color:e.palette.background.default},active:{color:e.palette.text.primary},circle:{width:6,height:6,borderRadius:"50%",border:"1px solid #aaa",backgroundColor:"currentColor"},completed:{color:e.palette.secondary.main,zIndex:1,fontSize:18,border:"none"},correct:{color:e.palette.primary.main}}})),Ee=function(e){var t=Te();return function(n){var a=n.active,s=n.completed,r=t.circle;return s&&(r+=" "+t.completed),e&&(r+=" "+t.correct),Object(A.jsx)("div",{className:Object(Ie.a)(t.root,Object(ye.a)({},t.active,a)),children:Object(A.jsx)("div",{className:r})})}},Re=Object(l.a)({root:{background:"rgba(2, 2, 2, .5)",zIndex:1e5,height:22,padding:8,margin:5,borderRadius:"10px",position:"fixed",bottom:10,left:"50%",transform:"translateX(-50%)"}}),Fe=Object(we.a)({root:{display:"none"}})(Se.a),Pe=function(e){var t=e.activeStep,n=e.steps,a=e.guesses,s=Re();return Object(A.jsx)(Ce.a,{activeStep:t,className:s.root,connector:Object(A.jsx)(Fe,{}),children:n.map((function(e,t){var n=a[t]&&"correct"===ae(a[t]).result;return Object(A.jsx)(Ne.a,{children:Object(A.jsx)(ke.a,{StepIconComponent:Ee(n)})},e)}))})},ze=n(220),Ae=n(212),Be=n(213),He=n(214),Ge=n(215),Le=n(49),De=Object(l.a)({root:{position:"fixed",zIndex:999,bottom:0,width:"100%",marginTop:-56}}),Ye=function(){var e=window.location.pathname,t=Object(a.useState)(e),n=Object(o.a)(t,2),s=n[0],r=n[1],i=De();return Object(A.jsx)(ze.a,{className:i.root,children:Object(A.jsxs)(Ae.a,{value:s,onChange:function(e,t){r(t)},showLabels:!0,children:[Object(A.jsx)(Be.a,{label:"Play",value:"/",icon:Object(A.jsx)(He.a,{}),component:Le.b,to:"/"}),Object(A.jsx)(Be.a,{label:"History",value:"/history",icon:Object(A.jsx)(Ge.a,{}),component:Le.b,to:"/history"})]})})};!function(e){e[e.GENERAL=0]="GENERAL",e[e.ARTIST=1]="ARTIST",e[e.COPYRIGHT=3]="COPYRIGHT",e[e.CHARACTER=4]="CHARACTER"}(be||(be={}));var Je=function(){return Object(u.b)()};var Me=function(){var e,t=Object(u.c)((function(e){return e.app})),n=t.guesses,r=t.index,i=t.videos,l=t.guess_to_show,d=t.playing,j=t.tags,g=Object(u.c)((function(e){for(var t=e.app,n=t.tags.length,a=[],s=0;s<n;s++){var r;a.push({tag:t.tags[s],videos:null===(r=t.videos[s])||void 0===r?void 0:r.filter((function(e){return e.played})),guess:t.guesses[s]})}return a})),m=Object(u.c)((function(e){var t=e.app.guess_to_show;return void 0===t?void 0:ae(e.app.guesses[t])})),b=Object(a.useState)([]),p=Object(o.a)(b,2),h=p[0],v=p[1],f=Object(a.useState)(void 0),O=Object(o.a)(f,2),x=O[0],_=O[1];return Object(a.useEffect)((function(){(function(){return q.apply(this,arguments)})().then((function(e){v(e),_(new re(e))}))}),[]),!d&&n.length>0?Object(A.jsxs)(s.a.Fragment,{children:[Object(A.jsx)(_e,{rounds:g,all_tags:h}),Object(A.jsx)(Ye,{})]}):Object(A.jsxs)("div",{id:"game",children:[!d&&0===n.length&&Object(A.jsxs)(s.a.Fragment,{children:[Object(A.jsx)(he,{all_tags:h}),Object(A.jsx)(Ye,{})]}),d&&j.length>0&&void 0===l&&x&&Object(A.jsxs)(s.a.Fragment,{children:[Object(A.jsx)(X,{tag:j[r],videos:null!==(e=i[r])&&void 0!==e?e:[],video_wrapper:x}),i[r]&&Object(A.jsx)(D,{all_tags:h})]}),d&&j.length>0&&void 0!==r&&Object(A.jsx)(Pe,{activeStep:r,steps:j.map((function(e){return e.name})),guesses:n}),void 0!==l&&void 0!==m&&Object(A.jsx)(te,Object(c.a)(Object(c.a)({},m),n[l]))]})},qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,225)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))},Ve=n(217),We=Object(p.b)({name:"history",initialState:{guesses:[],page:0,num_guesses:0},reducers:{set_guesses:function(e,t){e.guesses=t.payload.guesses,e.page=t.payload.page},set_num_guesses:function(e,t){e.num_guesses=t.payload}}}),Xe=We.actions,Ke=Xe.set_guesses,Qe=Xe.set_num_guesses,Ue=function(e){var t=e.page,n=e.page_size;return function(e){O.guesses.orderBy("date").reverse().offset(t*n).limit(n).toArray().then((function(n){return e(Ke({page:t,guesses:n}))}))}},Ze=We.reducer,$e=Object(p.a)({reducer:{app:R,history:Ze}}),et=n(218),tt=n(13),nt=n(222),at=Object(l.a)({pagination:{margin:"1em 0"},container:{paddingBottom:56}}),st=function(e,t){var n='"'+e+'" ';return{missing:"No guess",correct:n+"\ud83c\udf89 was correct \ud83c\udf8a",incorrect:n+"was incorrect"}[ae({guess:e,answers:t}).result]},rt=function(e){var t=e.videos[e.videos.length-1],n=Object(K.sortBy)(t.tags,["count"]),a=n[n.length-1].name;return Object(A.jsx)(ie.a,{item:!0,className:"round-summary",xs:12,sm:6,md:4,children:Object(A.jsx)(ce.a,{children:Object(A.jsxs)(oe.a,{href:ve+a.split(" ").join("_"),target:"_blank",children:[Object(A.jsx)(ue.a,{component:"img",title:"Image thumbnail of a clip from "+e.videos[0].tags[0].name,alt:"Image thumbnail of a clip from "+e.videos[0].tags[0].name,image:e.videos[0].preview_url}),Object(A.jsxs)(le.a,{children:[Object(A.jsx)(Z.a,{gutterBottom:!0,variant:"h5",component:"h2",children:a}),Object(A.jsx)(Z.a,{variant:"body2",component:"p",children:st(e.guess,n)})]})]})})},e.id)},it=function(){var e=Je(),t=Object(u.c)((function(e){return e.history})),n=t.guesses,r=t.num_guesses,i=t.page,c=at();Object(a.useEffect)((function(){return e((function(e){O.guesses.count().then((function(t){return e(Qe(t))}))}))}),[e]),Object(a.useEffect)((function(){return e(Ue({page:0,page_size:12}))}),[e]);var o=Object(A.jsxs)(s.a.Fragment,{children:[Object(A.jsx)(ie.a,{container:!0,spacing:2,children:n.map(rt)}),Object(A.jsx)(nt.a,{className:c.pagination,page:i+1,count:Math.ceil(r/12),onChange:function(t,n){e(Ue({page:n-1,page_size:12}))}})]});return Object(A.jsxs)(s.a.Fragment,{children:[Object(A.jsx)(U.a,{className:c.container,children:0===n.length?Object(A.jsx)("h1",{children:"No game history"}):o}),Object(A.jsx)(Ye,{})]})},ct=n(97),ot=n(216),ut=n(60),lt=Object(ct.a)({palette:{type:"dark",primary:ot.a,secondary:ut.a}});i.a.render(Object(A.jsx)(s.a.StrictMode,{children:Object(A.jsxs)(Ve.a,{theme:lt,children:[Object(A.jsx)(et.a,{}),Object(A.jsx)(u.a,{store:$e,children:Object(A.jsx)(Le.a,{children:Object(A.jsxs)(tt.c,{children:[Object(A.jsx)(tt.a,{path:"/history",children:Object(A.jsx)(it,{})}),Object(A.jsx)(tt.a,{path:"/",children:Object(A.jsx)(Me,{})})]})})})]})}),document.querySelector("body")),qe()}},[[160,1,2]]]);
//# sourceMappingURL=main.194d4aa0.chunk.js.map