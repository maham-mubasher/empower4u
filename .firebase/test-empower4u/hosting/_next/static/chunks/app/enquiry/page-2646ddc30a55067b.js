(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[200],{39206:(e,t,n)=>{Promise.resolve().then(n.bind(n,39803))},21956:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(60306)._(n(30580));function l(e,t){var n;let l={};"function"==typeof e&&(l.loader=e);let s={...l,...t};return(0,r.default)({...s,modules:null==(n=s.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},39827:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return l}});let r=n(93719);function l(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},30580:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let r=n(95155),l=n(12115),s=n(39827),a=n(79214);function i(e){return{default:e&&"default"in e?e.default:e}}let o={loader:()=>Promise.resolve(i(()=>null)),loading:null,ssr:!0},d=function(e){let t={...o,...e},n=(0,l.lazy)(()=>t.loader().then(i)),d=t.loading;function u(e){let i=d?(0,r.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,o=!t.ssr||!!t.loading,u=o?l.Suspense:l.Fragment,c=t.ssr?(0,r.jsxs)(r.Fragment,{children:["undefined"==typeof window?(0,r.jsx)(a.PreloadChunks,{moduleIds:t.modules}):null,(0,r.jsx)(n,{...e})]}):(0,r.jsx)(s.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(n,{...e})});return(0,r.jsx)(u,{...o?{fallback:i}:{},children:c})}return u.displayName="LoadableComponent",u}},79214:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return i}});let r=n(95155),l=n(47650),s=n(75861),a=n(18284);function i(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=s.workAsyncStorage.getStore();if(void 0===n)return null;let i=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files;i.push(...t)}}return 0===i.length?null:(0,r.jsx)(r.Fragment,{children:i.map(e=>{let t=n.assetPrefix+"/_next/"+(0,a.encodeURIPath)(e);return e.endsWith(".css")?(0,r.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,l.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}},39803:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var r=n(95155),l=n(12115),s=n(67109);n(31378);var a=n(82651),i=n(21956),o=n.n(i),d=n(76046),u=n(11414),c=n(69606);n(30133);let m=o()(()=>n.e(610).then(n.t.bind(n,52610,23)),{loadableGenerated:{webpack:()=>[52610]},ssr:!1}),f=()=>{let e=(0,d.useRouter)(),[t,n]=(0,l.useState)(!1),[i,o]=(0,l.useState)(!0),{register:f,handleSubmit:p,setValue:x,formState:{errors:h,isValid:y}}=(0,c.mN)({mode:"onChange"});(0,l.useEffect)(()=>{let e=setTimeout(()=>{o(!1)},1e3);return()=>clearTimeout(e)},[]);let b=async t=>{n(!0);try{let n=await a.A.post("https://us-central1-empower4u-31c1a.cloudfunctions.net/EnquiryFormApi/create-enquiry",t);200===n.status&&(u.oR.success("Enquiry sent successfully!"),e.push("/success"))}catch(e){u.oR.error("Failed to send enquiry. Please try again."),console.error(e)}finally{n(!1)}};return(0,r.jsxs)("section",{className:"py-16 px-4 text-maintext max-w-5xl mx-auto my-10 w-5/6",children:[(0,r.jsx)(u.Toaster,{position:"top-right",reverseOrder:!1}),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("h1",{className:"text-3xl font-semibold text-maintext text-left mb-2",children:"Love to hear from you,"}),(0,r.jsxs)("h1",{className:"text-3xl font-semibold text-maintext text-left mb-2",children:["Get in touch ",(0,r.jsx)("span",{role:"img","aria-label":"wave",children:"\uD83D\uDC4B"})]}),(0,r.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:p(b),children:[(0,r.jsxs)(s.P.div,{initial:{opacity:0,scale:1.4},whileInView:{opacity:1,scale:1},transition:{duration:.3,scale:{type:"spring",damping:15,stiffness:200,restDelta:.001}},children:[(0,r.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-maintext mb-1",children:"Name"}),(0,r.jsx)("input",{type:"text",id:"name",placeholder:"Enter name",className:"w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:outline-none",...f("name",{required:"Name is required"})}),h.name&&(0,r.jsx)("p",{className:"text-red-500 text-sm",children:h.name.message})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,r.jsxs)(s.P.div,{initial:{opacity:0,scale:1.4},whileInView:{opacity:1,scale:1},transition:{duration:.3,scale:{type:"spring",damping:15,stiffness:200,restDelta:.001}},children:[(0,r.jsx)("label",{htmlFor:"phone",className:"block text-sm font-medium text-maintext mb-1",children:"Phone no."}),(0,r.jsx)(m,{country:"in",onChange:e=>x("phoneNumber",e,{shouldValidate:!0}),inputProps:{required:!0,className:"ml-8 w-5/6 p-3 border border-gray-300 rounded-md focus:outline-none"}}),h.phoneNumber&&(0,r.jsx)("p",{className:"text-red-500 text-sm",children:"Phone number is required"})]}),(0,r.jsxs)(s.P.div,{initial:{opacity:0,scale:1.4},whileInView:{opacity:1,scale:1},transition:{duration:.3,scale:{type:"spring",damping:15,stiffness:200,restDelta:.001}},children:[(0,r.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-maintext mb-1",children:"Email"}),(0,r.jsx)("input",{type:"email",id:"email",placeholder:"Enter email",className:"w-full border border-gray-300 p-3 rounded-md focus:outline-none",...f("email",{required:"Email is required",pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,message:"Invalid email address"}})}),h.email&&(0,r.jsx)("p",{className:"text-red-500 text-sm",children:h.email.message})]})]}),(0,r.jsxs)(s.P.div,{initial:{opacity:0,scale:1.4},whileInView:{opacity:1,scale:1},transition:{duration:.3,scale:{type:"spring",damping:15,stiffness:200,restDelta:.001}},children:[(0,r.jsx)("label",{htmlFor:"enquiry",className:"block text-sm font-medium text-maintext mb-1",children:"Enquiry"}),(0,r.jsx)("textarea",{id:"enquiry",placeholder:"Enter enquiry",className:"w-full border border-gray-300 p-3 rounded-md focus:outline-none h-32 resize-none",...f("enquiry",{required:"Enquiry is required"})}),h.enquiry&&(0,r.jsx)("p",{className:"text-red-500 text-sm",children:h.enquiry.message})]}),(0,r.jsx)("div",{className:"flex justify-center mt-6",children:(0,r.jsx)("button",{type:"submit",className:"px-8 py-3 rounded-full text-white focus:outline-none focus:ring-2 ".concat(y&&!t?"bg-maintext hover:bg-maintext-dark":"bg-gray-300 cursor-not-allowed"),disabled:!y||t,children:t?"Sending...":"Send Enquiry"})})]})]})]})}},31378:(e,t,n)=>{"use strict";n(95155)},30133:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[540,109,414,429,441,517,358],()=>t(39206)),_N_E=e.O()}]);