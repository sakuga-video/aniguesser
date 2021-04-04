(this.webpackJsonpaniguesser=this.webpackJsonpaniguesser||[]).push([[0],{124:function(e,t,n){},131:function(e,t,n){},184:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(11),s=n.n(i),c=(n(124),n(17)),o=n(31),u=n(24),l=(n(131),n(222)),d=n(247),j=n(225),b=n(226),g=n(249),p=n(92),m=n(47),h=n(15),f=n(29),v=n(28),O=new(function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).rounds=void 0,r.version(2).stores({rounds:"++id,date,tag.id"}),r.rounds=r.table("rounds"),r}return n}(n(94).a))("aniguesser"),x={videos:[],guesses:[],index:0,guess_to_show:void 0,playing:!1,tags:[]},_=Object(m.b)({name:"app",initialState:x,reducers:{mark_played:function(e,t){var n,r=t.payload,a=e.index,i=null===(n=e.guesses[a])||void 0===n?void 0:n.guess,s=e.videos[a][r];e.guesses[a]={guess:i,answers:s.tags},s.played=!0},set_videos:function(e,t){e.videos[e.index]=t.payload},submit_guess:function(e,t){var n=e.index;e.guess_to_show=n,e.guesses[n]=t.payload,n+1<e.tags.length?e.index=n+1:e.playing=!1},stop_showing_guess_results:function(e){e.guess_to_show=void 0},start:function(e,t){e.index=0,e.guess_to_show=void 0,e.guesses=[],e.videos=[],e.playing=!0,e.tags=t.payload},change_guess:function(e,t){var n,r,a=t.payload,i=e.index,s=e.videos[i];s&&(e.guesses[i]={guess:a,answers:null!==(n=null===(r=s[s.length-1])||void 0===r?void 0:r.tags)&&void 0!==n?n:[]})},skip_tag:function(e){e.tags.splice(e.index,1),e.index>=e.tags.length&&(e.index=0,e.playing=!1)}}}),y=_.actions,w=y.mark_played,N=y.stop_showing_guess_results,S=y.start,C=y.submit_guess,k=y.change_guess,E=y.skip_tag,I=y.set_videos,B=function(e){return function(t,n){var r,a=n().app,i=a.guesses,s=a.index,c=a.videos[s],o=a.tags[s];if(void 0!==c&&(null===(r=c[0])||void 0===r?void 0:r.played)){var u,l,d=i[s];if(!d)d={answers:null!==(u=null===(l=c[c.length-1])||void 0===l?void 0:l.tags)&&void 0!==u?u:[]};O.rounds.put({date:Date.now(),guess:d.guess,videos:c.filter((function(e){return e.played})),time_to_guess:e,tag:o}).then((function(){return t(C(d))})).catch(console.log)}}},T=_.reducer,F=n(218),R=n(221),A=n(95),z=n(2),P=function(e){var t=e.duration,n=e.size,a=e.type,i=e.on_time_over,s=e.interval,o=void 0===s?50:s,u=e.className,l=e.count_down,d=void 0!==l&&l,j=e.show_emergency_color,b=void 0!==j&&j,g=1e3*t/o,p=Object(A.useTimer)({endTime:g,interval:o,onTimeOver:i}),m=p.time,h=p.start,f=p.reset;Object(r.useEffect)((function(){return h(),f}),[f,h]);var v=function(e){return 100*(d?g-e:e)/g},O={color:v(m)<25&&b?"secondary":"primary",variant:"determinate",value:v(m),className:u};return"linear"===a?Object(z.jsx)(F.a,Object(c.a)({},O)):Object(z.jsx)(R.a,Object(c.a)({size:n},O))},D=Object(l.a)({wrapper:{position:"relative"},fabProgress:{position:"absolute",top:-6,left:-6}}),G={keys:[function(e){return e.name}],baseSort:function(e,t){return t.item.count-e.item.count}},H=function(e,t){var n=t.inputValue;return n?Object(p.a)(e,n,G).slice(0,100):[]},L=function(e){var t=e.all_tags,n=ct(),a=D(),i=Object(r.useState)(null),s=Object(o.a)(i,2),u=s[0],l=s[1];return Object(z.jsxs)("form",{id:"guess",onSubmit:function(e){e.preventDefault(),u&&n(B(0))},children:[Object(z.jsx)("div",{id:"guess-input",children:Object(z.jsx)(g.a,{selectOnFocus:!0,clearOnBlur:!0,autoHighlight:!0,autoComplete:!0,disableClearable:!0,clearOnEscape:!0,options:t,style:{width:300},filterOptions:H,getOptionLabel:function(e){return e.name},onChange:function(e,t){var r;l(t),n(k(null!==(r=null===t||void 0===t?void 0:t.name)&&void 0!==r?r:""))},renderInput:function(e){return Object(z.jsx)(d.a,Object(c.a)(Object(c.a)({},e),{},{label:"Guess the title",variant:"filled",autoFocus:!0}))}})}),Object(z.jsxs)("div",{className:a.wrapper,children:[Object(z.jsx)(P,{size:68,duration:30,on_time_over:function(){return n(B(30))},count_down:!0,show_emergency_color:!0,className:a.fabProgress}),Object(z.jsx)(j.a,{type:"submit","area-label":"submit",children:Object(z.jsx)(b.a,{})})]})]})},Y=n(74),J=n.n(Y),M=n(53),V=n.n(M),q=n(75);function W(){return(W=Object(q.a)(V.a.mark((function e(){var t,n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/tag.json?limit=0&order=count&type="+be.COPYRIGHT);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent.map(K),e.abrupt("return",n.filter((function(e){return e.count>0})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return(X=Object(q.a)(V.a.mark((function e(t){var n,r,a,i=arguments;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:8,r="/api/post.json?tags=rating:safe order:random ext:mp4,webm "+t.name.split(" ").join("_")+"&limit="+n,e.next=4,fetch(r);case 4:return a=e.sent,e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K=function(e){return{count:e.count,id:e.id,name:e.name.split("_").join(" ")}},Q=function(e,t){return(e+1)%t},U=function(e){var t,n,i=e.tag,s=e.videos,c=e.video_wrapper,u=e.should_play,l=ct(),d=Object(r.useState)(!0),j=Object(o.a)(d,2),b=j[0],g=j[1],p=Object(r.useState)(0),m=Object(o.a)(p,2),h=m[0],f=m[1];Object(r.useEffect)((function(){var e=!0;return f(0),function(e){return X.apply(this,arguments)}(i).then((function(e){return e.map(c.wrap)})).then((function(t){e&&(t.length>0?(f(0),l(I(t))):l(E()))})),function(){e=!1}}),[i,c,l]);var v=function(){if(s.length>1){var e=Q(h,s.length);f(e)}};return Object(z.jsxs)(a.a.Fragment,{children:[(0===s.length||b)&&u&&Object(z.jsx)(R.a,{className:"video-loading"}),Object(z.jsx)(J.a,{muted:!0,onBuffer:function(){return g(!0)},onStart:function(){l(w(h)),g(!1)},onPlay:function(){return g(!1)},playing:u,loop:1===s.length,onError:v,url:null===(t=s[h])||void 0===t?void 0:t.url,style:u?{visibility:"visible"}:{},className:u?"active":"",id:"main-video",controls:!1,width:"100%",height:"auto",onEnded:function(){v()}},h),s.length>1&&Object(z.jsx)(J.a,{muted:!0,id:"preloading-video",url:null===(n=s[Q(h,s.length)])||void 0===n?void 0:n.url},Q(h,s.length))]})},Z=n(46),$=n(109),ee=n(227),te=n(228),ne=Object(l.a)({timer:{width:"100%"},root:{width:400,height:200,display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}),re=function(e){return e.length>0?Object(z.jsxs)(te.a,{variant:"body1",children:["it was ",Object(Z.sortBy)(e,(function(e){return e.count}))[e.length-1].name]}):null},ae=function(e){var t=e.guess,n=e.answers,r=e.closest_answer,a=e.result,i=e.is_exact,s=ct(),c=ne(),o=Object(z.jsx)(P,{duration:4,on_time_over:function(){return s(N())},type:"linear",className:c.timer});return Object(z.jsxs)($.a,{children:[Object(z.jsxs)(ee.a,{className:c.root,children:["missing"!==a&&Object(z.jsx)(te.a,{variant:"body1",children:t}),"correct"===a&&!i&&Object(z.jsxs)(te.a,{variant:"body1",children:["(",r,")"]}),Object(z.jsx)(te.a,{variant:"h3",component:"p",children:{correct:"\ud83c\udf89 is correct \ud83c\udf8a",incorrect:"is incorrect",missing:"No guess"}[a]}),"correct"!==a&&re(n)]}),o]})},ie=n(105),se=function(e){var t,n;if(!e.guess)return{result:"missing",is_exact:!1};var r=new ie.a(e.answers.map((function(e){return e.name})),{includeScore:!0,threshold:.1}).search(e.guess);return{result:r.length>0?"correct":"incorrect",is_exact:0===(null===(t=r[0])||void 0===t?void 0:t.score),closest_answer:null===(n=r[0])||void 0===n?void 0:n.item}},ce=n(102),oe=function e(t){var n=this;Object(h.a)(this,e),this.tags_by_name=void 0,this.wrap=function(e){return{tags:e.tags.split(" ").map((function(e){return e.split("_").join(" ")})).map((function(e){return n.tags_by_name.get(e)})).filter((function(e){return void 0!==e})),url:e.file_url,id:e.id,preview_url:e.preview_url}},this.tags_by_name=Object(ce.a)(t.map((function(e){return[e.name,e]})))},ue=n(229),le=n(103),de=n.n(le);function je(e){return ge.map((function(t){var n=t.max,r=t.min;return de()(e.filter((function(e){var t=e.count;return n>=t&&t>=r})))}))}var be,ge=[{max:1e5,min:500},{max:1e5,min:500},{max:1e5,min:500},{max:500,min:100},{max:500,min:100},{max:500,min:100},{max:500,min:100},{max:500,min:100},{max:100,min:25},{max:25,min:1},{max:25,min:1},{max:1,min:1}],pe=function(e){var t=e.all_tags,n=ct();return t.length>0?Object(z.jsx)(ue.a,{variant:"contained",onClick:function(){return n(S(je(t)))},id:"start",children:"Start"}):Object(z.jsx)(R.a,{})},me=Object(m.b)({name:"history",initialState:{rounds:[],page:0,num_rounds:0},reducers:{set_rounds:function(e,t){e.rounds=t.payload.rounds,e.page=t.payload.page},set_num_rounds:function(e,t){e.num_rounds=t.payload},set_active_tag:function(e,t){e.active_rounds=t.payload.rounds,e.active_tag=t.payload.tag}}}),he=me.actions,fe=he.set_rounds,ve=he.set_num_rounds,Oe=he.set_active_tag,xe=function(){return function(e){O.rounds.count().then((function(t){return e(ve(t))}))}},_e=function(e){var t=e.page,n=e.page_size;return function(e){return O.rounds.orderBy("date").reverse().offset(t*n).limit(n).toArray().then((function(n){return e(fe({page:t,rounds:n}))}))}},ye=me.reducer,we=n(248),Ne=n(230),Se=n(231),Ce=n(232),ke=n(233),Ee=n(40),Ie=Object(l.a)({root:{position:"fixed",zIndex:999,bottom:0,width:"100%",marginTop:-56}}),Be=function(){var e=window.location.pathname,t=Object(r.useState)(e),n=Object(o.a)(t,2),a=n[0],i=n[1],s=Ie();return Object(z.jsx)(we.a,{className:s.root,children:Object(z.jsxs)(Ne.a,{value:a,onChange:function(e,t){i(t)},showLabels:!0,children:[Object(z.jsx)(Se.a,{label:"Play",value:"/",icon:Object(z.jsx)(Ce.a,{}),component:Ee.b,to:"/"}),Object(z.jsx)(Se.a,{label:"History",value:"/history",icon:Object(z.jsx)(ke.a,{}),component:Ee.b,to:"/history"})]})})},Te=n(250),Fe=n(238),Re=n(234),Ae=n(235),ze=n(236),Pe=n(237),De=function(e){return"https://www.sakugabooru.com/post?tags="+e.name.split(" ").join("_")},Ge=Object(l.a)((function(e){return{title:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},media:{height:240},root:{textDecoration:"none",color:e.palette.text.primary}}})),He=function(e,t){var n='"'+e+'" ';return{missing:"No guess",correct:n+"\ud83c\udf89 was correct \ud83c\udf8a",incorrect:n+"was incorrect"}[se({guess:e,answers:t}).result]},Le=function(e){var t=e.round,n=Ge(),r=t.videos[t.videos.length-1],a=Object(Z.sortBy)(r.tags,["count"]),i=a[a.length-1];return Object(z.jsx)(Re.a,{children:Object(z.jsx)(Ae.a,{component:"div",children:Object(z.jsxs)(Ee.b,{to:"/tag/"+t.tag.id,className:n.root,children:[Object(z.jsx)(ze.a,{component:"img",title:"Image thumbnail of a clip from "+t.videos[0].tags[0].name,alt:"Image thumbnail of a clip from "+t.videos[0].tags[0].name,image:t.videos[0].preview_url,className:n.media}),Object(z.jsxs)(Pe.a,{children:[Object(z.jsx)(te.a,{gutterBottom:!0,variant:"h6",component:"h2",className:n.title,children:i.name}),Object(z.jsx)(te.a,{variant:"body2",component:"p",children:He(t.guess,a)})]})]})})})},Ye=function(e){var t=e.rounds;return Object(z.jsx)(Fe.a,{container:!0,spacing:2,children:t.map((function(e){return Object(z.jsx)(Fe.a,{item:!0,className:"round-summary",xs:12,sm:6,md:4,children:Object(z.jsx)(Le,{round:e})},e.id)}))})},Je=Object(l.a)({pagination:{margin:"1em 0"}}),Me=function(){var e=ct(),t=Object(u.c)((function(e){return e.history})),n=t.rounds,i=t.num_rounds,s=t.page,c=Je();Object(r.useEffect)((function(){return e(xe())}),[e]),Object(r.useEffect)((function(){return e(_e({page:0,page_size:12}))}),[e]);return Object(z.jsxs)(a.a.Fragment,{children:[Object(z.jsx)(Ye,{rounds:n}),Object(z.jsx)(Te.a,{className:c.pagination,page:s+1,count:Math.ceil(i/12),onChange:function(t,n){e(_e({page:n-1,page_size:12}))}})]})},Ve=Object(l.a)({container:{paddingBottom:56}}),qe=function(){var e=ct();Object(r.useEffect)((function(){return e(xe())}),[e]);var t=Object(u.c)((function(e){return e.history})).num_rounds,n=Ve();return Object(z.jsxs)(a.a.Fragment,{children:[Object(z.jsx)(ee.a,{className:n.container,children:t>0?Object(z.jsx)(Me,{}):Object(z.jsx)("h1",{children:"No game history"})}),Object(z.jsx)(Be,{})]})},We=Object(l.a)({root:{paddingBottom:56}}),Xe=function(e){var t=e.all_tags,n=ct(),r=We();return Object(z.jsxs)(ee.a,{classes:r,children:[Object(z.jsx)(te.a,{variant:"h3",component:"h1",gutterBottom:!0,align:"center",children:"Game Summary"}),Object(z.jsx)("div",{id:"play-again",children:Object(z.jsx)(ue.a,{variant:"contained",onClick:function(){return n(S(je(t)))},color:"primary",children:"Play Again"})}),Object(z.jsx)(qe,{})]})},Ke=n(43),Qe=n(5),Ue=n(186),Ze=n(239),$e=n(240),et=n(251),tt=n(3),nt=Object(l.a)((function(e){return{root:{display:"flex",height:22,alignItems:"center",color:e.palette.background.default},active:{color:e.palette.text.primary},circle:{width:6,height:6,borderRadius:"50%",border:"1px solid #aaa",backgroundColor:"currentColor"},completed:{color:e.palette.secondary.main,zIndex:1,fontSize:18,border:"none"},correct:{color:e.palette.primary.main}}})),rt=function(e){var t=nt();return function(n){var r=n.active,a=n.completed,i=t.circle;return a&&(i+=" "+t.completed,e&&(i+=" "+t.correct)),Object(z.jsx)("div",{className:Object(tt.a)(t.root,Object(Ke.a)({},t.active,r)),children:Object(z.jsx)("div",{className:i})})}},at=Object(l.a)({root:{background:"rgba(2, 2, 2, .5)",zIndex:1e5,height:22,padding:8,margin:5,borderRadius:"10px",position:"fixed",bottom:10,left:"50%",transform:"translateX(-50%)"}}),it=Object(Qe.a)({root:{display:"none"}})(Ue.a),st=function(e){var t=e.activeStep,n=e.steps,r=e.guesses,a=at(),i=rt(!0),s=rt(!1);return Object(z.jsx)(Ze.a,{activeStep:t,className:a.root,connector:Object(z.jsx)(it,{}),children:n.map((function(e,t){var n=r[t]&&"correct"===se(r[t]).result;return Object(z.jsx)($e.a,{children:Object(z.jsx)(et.a,{StepIconComponent:n?i:s})},t)}))})};!function(e){e[e.GENERAL=0]="GENERAL",e[e.ARTIST=1]="ARTIST",e[e.COPYRIGHT=3]="COPYRIGHT",e[e.CHARACTER=4]="CHARACTER"}(be||(be={}));var ct=function(){return Object(u.b)()};var ot=function(){var e,t=Object(u.c)((function(e){return e.app})),n=t.guesses,i=t.index,s=t.videos,l=t.guess_to_show,d=t.playing,j=t.tags,b=Object(u.c)((function(e){var t=e.app.guess_to_show;return void 0===t?void 0:se(e.app.guesses[t])})),g=Object(r.useState)([]),p=Object(o.a)(g,2),m=p[0],h=p[1],f=Object(r.useState)(void 0),v=Object(o.a)(f,2),O=v[0],x=v[1];return Object(r.useEffect)((function(){(function(){return W.apply(this,arguments)})().then((function(e){h(e),x(new oe(e))}))}),[]),!d&&n.length>0&&void 0===l?Object(z.jsxs)(a.a.Fragment,{children:[Object(z.jsx)(Xe,{all_tags:m}),Object(z.jsx)(Be,{})]}):Object(z.jsxs)("div",{id:"game",children:[!d&&0===n.length&&Object(z.jsxs)(a.a.Fragment,{children:[Object(z.jsx)(pe,{all_tags:m}),Object(z.jsx)(Be,{})]}),d&&j.length>0&&O&&Object(z.jsxs)(a.a.Fragment,{children:[Object(z.jsx)(U,{tag:j[i],videos:null!==(e=s[i])&&void 0!==e?e:[],video_wrapper:O,should_play:void 0===l}),void 0===l&&s[i]&&Object(z.jsx)(L,{all_tags:m})]}),(d||i>0)&&j.length>0&&Object(z.jsx)(st,{activeStep:i,steps:j.map((function(e){return e.name})),guesses:n}),void 0!==l&&void 0!==b&&Object(z.jsx)(ae,Object(c.a)(Object(c.a)({},b),n[l]))]})},ut=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,254)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),i(e),s(e)}))},lt=n(245),dt=Object(m.a)({reducer:{app:T,history:ye}}),jt=n(246),bt=n(13),gt=n(104),pt=n(241),mt=n(64),ht=Object(gt.a)({palette:{type:"dark",primary:pt.a,secondary:mt.a}}),ft=n(224),vt=n(243),Ot=n(252),xt=n(242),_t=n(244),yt=Object(l.a)((function(e){return{tag_wrapper:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},padded_grid:{marginBottom:e.spacing(1)}}})),wt=function(e){return e?"Your guess: "+e:"No guess"},Nt=function(e){var t=e.round,n=yt();return Object(z.jsxs)(a.a.Fragment,{children:[Object(z.jsx)(te.a,{variant:"h5",component:"h2",gutterBottom:!0,children:new Date(t.date).toDateString()}),Object(z.jsx)(te.a,{gutterBottom:!0,children:wt(t.guess)}),Object(z.jsx)(Fe.a,{container:!0,spacing:2,className:n.padded_grid,children:t.videos.map((function(e){var r=Object(Z.sortBy)(e.tags,(function(e){return e.count})),a=r[0],i=r.filter((function(e){return e.id!==t.tag.id}));return Object(z.jsx)(Fe.a,{item:!0,xs:12,sm:6,md:4,children:Object(z.jsxs)(Re.a,{children:[Object(z.jsx)(ze.a,{component:"video",title:"Video clip from "+a.name,src:e.url,controls:!0,loop:!0,poster:e.preview_url}),i.length>0&&Object(z.jsx)(Pe.a,{children:Object(z.jsx)(we.a,{className:n.tag_wrapper,children:i.map((function(e){return Object(z.jsx)(Ot.a,{label:e.name,component:"a",href:De(e),clickable:!0})}))})}),Object(z.jsxs)(xt.a,{children:[Object(z.jsx)(ft.a,{href:"https://www.sakugabooru.com/post/show/"+e.id,children:Object(z.jsx)(vt.a,{})}),Object(z.jsx)(ft.a,{href:e.url,download:a.name,children:Object(z.jsx)(_t.a,{})})]})]})},e.id)}))})]})},St=function(e){var t=e.tag,n=e.rounds;return Object(z.jsxs)(ee.a,{children:[Object(z.jsxs)(te.a,{variant:"h3",component:"h1",children:[t.name,Object(z.jsx)(ft.a,{href:De(t),children:Object(z.jsx)(vt.a,{})})]}),n.map((function(e){return Object(z.jsx)(Nt,{round:e})}))]})},Ct=function(){var e=Object(bt.f)().id,t=ct();Object(r.useEffect)((function(){return t((n=parseInt(e),function(e){return O.rounds.where("tag.id").equals(n).toArray().then((function(t){return e(Oe({rounds:t,tag:t[0].tag}))}))}));var n}),[t,e]);var n=Object(u.c)((function(e){return e.history})),a=n.active_tag,i=n.active_rounds;return void 0===a||void 0===i?Object(z.jsx)(ee.a,{children:Object(z.jsx)(te.a,{variant:"h3",component:"h1",children:"No such tag"})}):Object(z.jsx)(St,{tag:a,rounds:i})};s.a.render(Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsxs)(lt.a,{theme:ht,children:[Object(z.jsx)(jt.a,{}),Object(z.jsx)(u.a,{store:dt,children:Object(z.jsx)(Ee.a,{children:Object(z.jsxs)(bt.c,{children:[Object(z.jsx)(bt.a,{path:"/tag/:id",children:Object(z.jsx)(Ct,{})}),Object(z.jsx)(bt.a,{path:"/history",children:Object(z.jsx)(qe,{})}),Object(z.jsx)(bt.a,{path:"/",children:Object(z.jsx)(ot,{})})]})})})]})}),document.getElementById("root")),ut()}},[[184,1,2]]]);
//# sourceMappingURL=main.5a654f90.chunk.js.map