(this.webpackJsonpaniguesser=this.webpackJsonpaniguesser||[]).push([[0],{102:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t),n.d(t,"dark_theme",(function(){return Ee}));var r=n(0),a=n.n(r),s=n(11),i=n.n(s),c=(n(95),n(14)),o=n(24),u=n(25),l=(n(102),n(176)),d=n(191),j=n(178),g=n(179),m=n(192),p=n(70),v=n(45),b={videos:[],guesses:[],index:0,guess_to_show:void 0,playing:!1,tags:[]},f=Object(v.b)({name:"app",initialState:b,reducers:{mark_played:function(e,t){var n,r=t.payload,a=e.index,s=null===(n=e.guesses[a])||void 0===n?void 0:n.guess,i=e.videos[a][r];e.guesses[a]={guess:s,answers:i.tags},i.played=!0},set_videos:function(e,t){e.videos[e.index]=t.payload},submit_guess:function(e){var t,n,r,a=e.guesses,s=e.index,i=e.videos[s];void 0!==i&&(null===(t=i[0])||void 0===t?void 0:t.played)&&(e.guess_to_show=s,a[s]||(a[s]={answers:null!==(n=null===(r=i[i.length-1])||void 0===r?void 0:r.tags)&&void 0!==n?n:[]}))},show_next_tag:function(e){var t=e.index;t+1<e.tags.length?e.index=t+1:(e.index=0,e.playing=!1),e.guess_to_show=void 0},start:function(e,t){e.index=0,e.guesses=[],e.videos=[],e.playing=!0,e.tags=t.payload},change_guess:function(e,t){var n,r,a=t.payload,s=e.index,i=e.videos[s];i&&(e.guesses[s]={guess:a,answers:null!==(n=null===(r=i[i.length-1])||void 0===r?void 0:r.tags)&&void 0!==n?n:[]})},skip_tag:function(e){e.tags.splice(e.index,1),e.index+1>=e.tags.length&&(e.index=0,e.playing=!1)}}}),h=f.actions,O=h.mark_played,x=h.show_next_tag,_=h.start,w=h.submit_guess,y=h.change_guess,C=h.skip_tag,k=h.set_videos,S=f.reducer,T=n(171),E=n(175),N=n(72),P=n(5),R=function(e){var t=e.duration,n=e.size,a=e.type,s=e.on_time_over,i=e.interval,o=void 0===i?50:i,u=e.className,l=e.count_down,d=void 0!==l&&l,j=e.show_emergency_color,g=void 0!==j&&j,m=1e3*t/o,p=Object(N.useTimer)({endTime:m,interval:o,onTimeOver:s}),v=p.time,b=p.start,f=p.reset;Object(r.useEffect)((function(){return b(),f}),[f,b]);var h=function(e){return 100*(d?m-e:e)/m},O={color:h(v)<25&&g?"secondary":"primary",variant:"determinate",value:h(v),className:u};return"linear"===a?Object(P.jsx)(T.a,Object(c.a)({},O)):Object(P.jsx)(E.a,Object(c.a)({size:n},O))},I=Object(l.a)({wrapper:{position:"relative"},fabProgress:{position:"absolute",top:-6,left:-6}}),A={keys:[function(e){return e.name}],baseSort:function(e,t){return t.item.count-e.item.count}},F=function(e,t){var n=t.inputValue;return n?Object(p.a)(e,n,A).slice(0,100):[]},H=function(e){var t=e.all_tags,n=Oe(),a=I(),s=Object(r.useState)(null),i=Object(o.a)(s,2),u=i[0],l=i[1];return Object(P.jsxs)("form",{id:"guess",onSubmit:function(e){e.preventDefault(),u&&n(w())},children:[Object(P.jsx)("div",{id:"guess-input",children:Object(P.jsx)(m.a,{selectOnFocus:!0,clearOnBlur:!0,autoHighlight:!0,autoComplete:!0,disableClearable:!0,clearOnEscape:!0,options:t,style:{width:300},filterOptions:F,getOptionLabel:function(e){return e.name},onChange:function(e,t){var r;l(t),n(y(null!==(r=null===t||void 0===t?void 0:t.name)&&void 0!==r?r:""))},renderInput:function(e){return Object(P.jsx)(d.a,Object(c.a)(Object(c.a)({},e),{},{label:"Guess the title",variant:"filled",autoFocus:!0}))}})}),Object(P.jsxs)("div",{className:a.wrapper,children:[Object(P.jsx)(R,{size:68,duration:30,on_time_over:function(){return n(w())},count_down:!0,show_emergency_color:!0,className:a.fabProgress}),Object(P.jsx)(j.a,{type:"submit","area-label":"submit",children:Object(P.jsx)(g.a,{})})]})]})},B=n(36),G=n.n(B),L=n(55);function z(){return(z=Object(L.a)(G.a.mark((function e(){var t,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/tag.json?limit=0&order=count&type="+je.COPYRIGHT);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent.map(D),e.abrupt("return",n.filter((function(e){return e.count>0})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return(Y=Object(L.a)(G.a.mark((function e(t){var n,r,a,s=arguments;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:8,r="/api/post.json?tags=rating:safe order:random ext:mp4,webm "+t.name.split(" ").join("_")+"&limit="+n,e.next=4,fetch(r);case 4:return a=e.sent,e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e){return{count:e.count,id:e.id,name:e.name.split("_").join(" ")}},J=function(e){var t,n=e.tag,s=e.videos,i=e.video_wrapper,c=Oe(),u=Object(r.useState)(!0),l=Object(o.a)(u,2),d=l[0],j=l[1],g=Object(r.useState)(0),m=Object(o.a)(g,2),p=m[0],v=m[1];Object(r.useEffect)((function(){var e=!0;return v(0),function(e){return Y.apply(this,arguments)}(n).then((function(e){return e.map(i.wrap)})).then((function(t){e&&(t.length>0?(v(0),c(k(t))):c(C()))})),function(){e=!1}}),[n,i,c]);var b=function(){if(s.length>1){var e=(p+1)%s.length;v(e)}};return Object(P.jsxs)(a.a.Fragment,{children:[(0===s.length||d)&&Object(P.jsx)(E.a,{className:"video-loading"}),Object(P.jsx)("video",{muted:!0,onWaiting:function(){return j(!0)},onCanPlay:function(){return j(!1)},onPlay:function(){return c(O(p))},preload:"auto",autoPlay:!0,loop:1===s.length,onError:b,src:null===(t=s[p])||void 0===t?void 0:t.url,onEnded:function(){console.log("video ended"),j(!0),b()}})]})},M=n(79),V=n(135),W=Object(l.a)({timer:{width:"100%"},root:{flexBasis:"400px"}}),q=function(e){return e.length>0?Object(P.jsxs)("p",{children:["it was ",Object(M.sortBy)(e,(function(e){return e.count}))[e.length-1].name]}):null},K=function(e){var t=e.guess,n=e.answers,r=e.closest_answer,a=e.result,s=e.is_exact,i=Oe(),c=W(),o=Object(P.jsx)(R,{duration:4,on_time_over:function(){return i(x())},type:"linear",className:c.timer});return Object(P.jsxs)(V.a,{id:"guess-result",className:c.root,children:["missing"!==a&&Object(P.jsx)("p",{children:t}),"correct"===a&&!s&&Object(P.jsxs)("p",{children:["(",r,")"]}),Object(P.jsx)("h1",{children:{correct:"\ud83c\udf89 is correct \ud83c\udf8a",incorrect:"is incorrect",missing:"No guess"}[a]}),"correct"!==a&&q(n),o]})},Q=function(e){var t=e.score,n=e.max_score;return Object(P.jsxs)("p",{id:"score",className:"controls",children:["Correct: ",t,"/",n]})},U=n(83),X=function(e){var t,n;if(!e.guess)return{result:"missing",is_exact:!1};var r=new U.a(e.answers.map((function(e){return e.name})),{includeScore:!0,threshold:.1}).search(e.guess);return{result:r.length>0?"correct":"incorrect",is_exact:0===(null===(t=r[0])||void 0===t?void 0:t.score),closest_answer:null===(n=r[0])||void 0===n?void 0:n.item}},Z=n(13),$=n(80),ee=function e(t){var n=this;Object(Z.a)(this,e),this.tags_by_name=void 0,this.wrap=function(e){return{tags:e.tags.split(" ").map((function(e){return e.split("_").join(" ")})).map((function(e){return n.tags_by_name.get(e)})).filter((function(e){return void 0!==e})),url:e.file_url,id:e.id,preview_url:e.preview_url}},this.tags_by_name=Object($.a)(t.map((function(e){return[e.name,e]})))},te=n(181),ne=n(182),re=n(183),ae=n(184),se=n(185),ie=n(186),ce=n(187),oe=n(180),ue=n(81),le=n.n(ue);function de(e){return ge.map((function(t){var n=t.max,r=t.min;return le()(e.filter((function(e){var t=e.count;return n>=t&&t>=r})))}))}var je,ge=[{max:1e5,min:500},{max:1e5,min:500},{max:1e5,min:500},{max:500,min:100},{max:500,min:100},{max:500,min:100},{max:500,min:100},{max:500,min:100},{max:100,min:25},{max:25,min:1},{max:25,min:1},{max:1,min:1}],me=function(e){var t=e.all_tags,n=Oe();return t.length>0?Object(P.jsx)(oe.a,{variant:"contained",onClick:function(){return n(_(de(t)))},id:"start",children:"Start"}):Object(P.jsx)(E.a,{})},pe=function(e){var t=X(e),n='"'+e.guess+'" ';return{missing:"No guess",correct:n+"\ud83c\udf89 was correct \ud83c\udf8a",incorrect:n+"was incorrect"}[t.result]},ve=Object(l.a)({root:{minHeight:250}}),be=function(e){var t=e.rounds,n=e.all_tags,r=Oe(),a=ve();return Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(te.a,{container:!0,spacing:2,children:t.map((function(e,t){return Object(P.jsx)(te.a,{item:!0,className:"round-summary",xs:12,sm:6,md:4,children:Object(P.jsx)(ne.a,{classes:a,children:Object(P.jsxs)(re.a,{href:"https://www.sakugabooru.com/post?tags="+e.tag.name.split(" ").join("_"),target:"_blank",children:[Object(P.jsx)(ae.a,{component:"img",title:"Image thumbnail of a clip from "+e.videos[0].tags[0].name,alt:"Image thumbnail of a clip from "+e.videos[0].tags[0].name,image:e.videos[0].preview_url}),Object(P.jsxs)(se.a,{children:[Object(P.jsx)(ie.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.tag.name}),Object(P.jsx)(ie.a,{variant:"body2",component:"p",children:pe(e.guess)})]})]})})},t)}))}),Object(P.jsx)("div",{id:"play-again",children:Object(P.jsx)(oe.a,{variant:"contained",onClick:function(){return r(_(de(n)))},color:"primary",children:"Play Again"})})]})};function fe(e,t){return void 0!==t?e+1:e}function he(e,t){for(var n=0,r=0;r<t;r++)"correct"===X(e[r]).result&&(n+=1);return n}!function(e){e[e.GENERAL=0]="GENERAL",e[e.ARTIST=1]="ARTIST",e[e.COPYRIGHT=3]="COPYRIGHT",e[e.CHARACTER=4]="CHARACTER"}(je||(je={}));var Oe=function(){return Object(u.b)()};var xe=function(){var e,t=Object(u.c)((function(e){return e.app})),n=t.guesses,s=t.index,i=t.videos,l=t.guess_to_show,d=t.playing,j=t.tags,g=Object(u.c)((function(e){for(var t=e.app,n=t.tags.length,r=[],a=0;a<n;a++){var s;r.push({tag:t.tags[a],videos:null===(s=t.videos[a])||void 0===s?void 0:s.filter((function(e){return e.played})),guess:t.guesses[a]})}return r})),m=Object(u.c)((function(e){var t=e.app.guess_to_show;return void 0===t?void 0:X(e.app.guesses[t])})),p=Object(r.useState)([]),v=Object(o.a)(p,2),b=v[0],f=v[1],h=Object(r.useState)(void 0),O=Object(o.a)(h,2),x=O[0],_=O[1];return Object(r.useEffect)((function(){(function(){return z.apply(this,arguments)})().then((function(e){f(e),_(new ee(e))}))}),[]),!d&&n.length>0?Object(P.jsx)(be,{rounds:g,all_tags:b}):Object(P.jsxs)("div",{id:"game",children:[d&&Object(P.jsx)(Q,{score:he(n,fe(s,l)),max_score:fe(s,l)}),!d&&0===n.length&&Object(P.jsx)(me,{all_tags:b}),d&&j.length>0&&void 0===l&&x&&Object(P.jsxs)(a.a.Fragment,{children:[Object(P.jsx)(J,{tag:j[s],videos:null!==(e=i[s])&&void 0!==e?e:[],video_wrapper:x}),i[s]&&Object(P.jsx)(H,{all_tags:b})]}),void 0!==l&&void 0!==m&&Object(P.jsx)(K,Object(c.a)(Object(c.a)({},m),n[l]))]})},_e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,193)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))},we=n(189),ye=n(82),Ce=n(188),ke=n(47),Se=Object(v.a)({reducer:{app:S}}),Te=n(190),Ee=Object(ye.a)({palette:{type:"dark",primary:Ce.a,secondary:ke.a}});i.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsxs)(we.a,{theme:Ee,children:[Object(P.jsx)(Te.a,{}),Object(P.jsx)(u.a,{store:Se,children:Object(P.jsx)(xe,{})})]})}),document.getElementById("root")),_e()},95:function(e,t,n){}},[[134,1,2]]]);
//# sourceMappingURL=main.a66d8ea7.chunk.js.map