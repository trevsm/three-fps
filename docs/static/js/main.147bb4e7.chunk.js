(this["webpackJsonpminecraft-react"]=this["webpackJsonpminecraft-react"]||[]).push([[0],{60:function(e,t,n){e.exports=n.p+"static/media/height.7b7e172f.png"},61:function(e,t,n){e.exports=n.p+"static/media/normal.a90df424.png"},62:function(e,t,n){e.exports=n.p+"static/media/color.b261a21e.png"},67:function(e,t,n){e.exports=n(80)},71:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(27),o=n.n(c),i=(n(71),n(8)),u=n(81),s=n(43),l=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{distance:45e4,sunPosition:[1,1,0],inclination:0,azimuth:.25}),r.a.createElement("ambientLight",{intensity:.4}),r.a.createElement("directionalLight",{castShadow:!0,position:[2.5,8,5],intensity:1.5,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),r.a.createElement("pointLight",{position:[0,-10,0],intensity:1.5}))},m=n(9),f=n(0),d=n(60),p=n.n(d),b=n(61),h=n.n(b),j=n(62),E=n.n(j),w=function(e){var t=Object(u.e)((function(){return{position:[0,0,0],rotation:[-Math.PI/2,0,0],args:[100,100,1024,1024]}})),n=Object(m.a)(t,1)[0],a=Object(i.f)(f.TextureLoader,p.a),c=Object(i.f)(f.TextureLoader,h.a),o=Object(i.f)(f.TextureLoader,E.a);return r.a.createElement("mesh",{ref:n},r.a.createElement("planeBufferGeometry",{args:[100,100,1024,1024]}),r.a.createElement("meshStandardMaterial",{attach:"material",normalMap:c,displacementMap:a,map:o,color:"white"}))},O=n(28),v=n(10),y=function(e){var t=Object(u.d)((function(){return Object(O.a)({mass:1,type:"Dynamic",position:[0,10,0]},e)})),n=Object(m.a)(t,2),c=n[0],o=n[1],l=Object(a.useRef)([0,0,0]),d=Object(a.useRef)([0,0,0]),p=new f.Vector3,b=new f.Vector3,h=new f.Vector3,j=new f.Euler,E=function(){var e=Object(a.useState)({forward:!1,backward:!1,left:!1,right:!1,jump:!1,run:!1}),t=Object(m.a)(e,2),n=t[0],r=t[1],c={KeyW:"forward",KeyS:"backward",KeyA:"left",KeyD:"right",Space:"jump",ShiftLeft:"run"},o=function(e){return c[e]};return Object(a.useEffect)((function(){var e=function(e){return r((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(v.a)({},o(e.code),!0))}))},t=function(e){return r((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(v.a)({},o(e.code),!1))}))};return document.addEventListener("keydown",e),document.addEventListener("keyup",t),function(){document.removeEventListener("keydown",e),document.removeEventListener("keyup",t)}}),[]),n}(),w=E.forward,y=E.backward,g=E.left,L=E.right,S=E.jump,k=E.run,x=Object(i.g)().camera,z=function(){b.set(0,0,y-w),h.set(g-L,0,0),j.set(0,0,0);var e=7;g||L?e=3.5:k&&(e=10.5),p.subVectors(b,h).normalize().multiplyScalar(e).applyEuler(x.rotation),l.current[0]-=l.current[0]/5,l.current[2]-=l.current[2]/5;var t=[l.current[0]+p.x/5,l.current[1],l.current[2]+p.z/5];d.current[1]<1&&(o.velocity.set(t[0],t[1],t[2]),S&&o.velocity.set(t[0],7.5,t[2]))};return Object(a.useEffect)((function(){o.velocity.subscribe((function(e){return l.current=e})),o.position.subscribe((function(e){return d.current=e}))}),[]),Object(i.e)((function(){!function(){var e=c.current.position;x.position.y=e.y+2.5,x.position.x=e.x,x.position.z=e.z}(),z()})),r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null),r.a.createElement("mesh",{ref:c}))},g=n(63),L=n.n(g);function S(e){var t=e.showPanel,n=void 0===t?0:t,r=e.className,c=e.parent,o=Object(a.useState)((function(){return new L.a})),u=Object(m.a)(o,1)[0];return Object(a.useEffect)((function(){var e=c&&c.current||document.body;u.showPanel(n),e.appendChild(u.dom),r&&u.dom.classList.add(r);var t=Object(i.c)((function(){return u.begin()})),a=Object(i.b)((function(){return u.end()}));return function(){e.removeChild(u.dom),t(),a()}}),[c]),null}function k(){return r.a.createElement(i.a,{shadowMap:!0,gl:{alpha:!1},camera:{fov:50}},r.a.createElement(l,null),r.a.createElement(S,null),r.a.createElement(u.a,{gravity:[0,-10,0]},r.a.createElement(y,null),r.a.createElement(a.Suspense,{fallback:null},r.a.createElement(w,null))))}o.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.147bb4e7.chunk.js.map