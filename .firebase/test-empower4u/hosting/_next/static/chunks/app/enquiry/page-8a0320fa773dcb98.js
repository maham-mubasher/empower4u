(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[200],{9206:(e,t,n)=>{Promise.resolve().then(n.bind(n,9803))},1956:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(306)._(n(580));function l(e,t){var n;let l={};"function"==typeof e&&(l.loader=e);let s={...l,...t};return(0,r.default)({...s,modules:null==(n=s.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9827:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return l}});let r=n(3719);function l(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},580:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let r=n(5155),l=n(2115),s=n(9827),a=n(9214);function i(e){return{default:e&&"default"in e?e.default:e}}let o={loader:()=>Promise.resolve(i(()=>null)),loading:null,ssr:!0},u=function(e){let t={...o,...e},n=(0,l.lazy)(()=>t.loader().then(i)),u=t.loading;function d(e){let i=u?(0,r.jsx)(u,{isLoading:!0,pastDelay:!0,error:null}):null,o=!t.ssr||!!t.loading,d=o?l.Suspense:l.Fragment,c=t.ssr?(0,r.jsxs)(r.Fragment,{children:["undefined"==typeof window?(0,r.jsx)(a.PreloadChunks,{moduleIds:t.modules}):null,(0,r.jsx)(n,{...e})]}):(0,r.jsx)(s.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(n,{...e})});return(0,r.jsx)(d,{...o?{fallback:i}:{},children:c})}return d.displayName="LoadableComponent",d}},9214:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return i}});let r=n(5155),l=n(7650),s=n(5861),a=n(8284);function i(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=s.workAsyncStorage.getStore();if(void 0===n)return null;let i=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files;i.push(...t)}}return 0===i.length?null:(0,r.jsx)(r.Fragment,{children:i.map(e=>{let t=n.assetPrefix+"/_next/"+(0,a.encodeURIPath)(e);return e.endsWith(".css")?(0,r.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,l.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}},9803:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var r=n(5155),l=n(2115);n(1378);var s=n(2651),a=n(1956),i=n.n(a),o=n(6046),u=n(1414),d=n(9606);n(133);let c=i()(()=>n.e(610).then(n.t.bind(n,2610,23)),{loadableGenerated:{webpack:()=>[2610]},ssr:!1}),m=()=>{let e=(0,o.useRouter)(),[t,n]=(0,l.useState)(!1),[a,i]=(0,l.useState)(!0),{register:m,handleSubmit:f,setValue:x,formState:{errors:h,isValid:p}}=(0,d.mN)({mode:"onChange"});(0,l.useEffect)(()=>{let e=setTimeout(()=>{i(!1)},1e3);return()=>clearTimeout(e)},[]);let b=async t=>{n(!0);try{let n=await s.A.post("https://us-central1-empower4u-31c1a.cloudfunctions.net/EnquiryFormApi/create-enquiry",t);200===n.status&&(u.oR.success("Enquiry sent successfully!"),e.push("/success"))}catch(e){u.oR.error("Failed to send enquiry. Please try again."),console.error(e)}finally{n(!1)}};return(0,r.jsxs)("section",{className:"py-16 px-4 text-maintext max-w-5xl mx-auto my-10 w-5/6",children:[(0,r.jsx)(u.Toaster,{position:"top-right",reverseOrder:!1}),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("h1",{className:"text-3xl font-semibold text-maintext text-left mb-2",children:"Love to hear from you,"}),(0,r.jsxs)("h1",{className:"text-3xl font-semibold text-maintext text-left mb-2",children:["Get in touch ",(0,r.jsx)("span",{role:"img","aria-label":"wave",children:"\uD83D\uDC4B"})]}),(0,r.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:f(b),children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-maintext mb-1",children:"Name"}),(0,r.jsx)("input",{type:"text",id:"name",placeholder:"Enter name",className:"w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:outline-none",...m("name",{required:"Name is required"})}),h.name&&(0,r.jsx)("p",{className:"text-red-500 text-sm",children:h.name.message})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"phone",className:"block text-sm font-medium text-maintext mb-1",children:"Phone no."}),(0,r.jsx)(c,{country:"in",onChange:e=>x("phoneNumber",e,{shouldValidate:!0}),inputProps:{required:!0,className:"ml-8 w-5/6 p-3 border border-gray-300 rounded-md focus:outline-none"}}),h.phoneNumber&&(0,r.jsx)("p",{className:"text-red-500 text-sm",children:"Phone number is required"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-maintext mb-1",children:"Email"}),(0,r.jsx)("input",{type:"email",id:"email",placeholder:"Enter email",className:"w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:outline-none",...m("email",{required:"Email is required",pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,message:"Invalid email address"}})}),h.email&&(0,r.jsx)("p",{className:"text-red-500 text-sm",children:h.email.message})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"enquiry",className:"block text-sm font-medium text-maintext mb-1",children:"Enquiry"}),(0,r.jsx)("textarea",{id:"enquiry",placeholder:"Enter enquiry",className:"w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:outline-none h-32 resize-none",...m("enquiry",{required:"Enquiry is required"})}),h.enquiry&&(0,r.jsx)("p",{className:"text-red-500 text-sm",children:h.enquiry.message})]}),(0,r.jsx)("div",{className:"flex justify-center mt-6",children:(0,r.jsx)("button",{type:"submit",className:"px-8 py-3 rounded-full text-white focus:outline-none focus:ring-2 ".concat(p&&!t?"bg-maintext hover:bg-maintext-dark":"bg-gray-300 cursor-not-allowed"),disabled:!p||t,children:t?"Sending...":"Send Enquiry"})})]})]})]})}},1378:(e,t,n)=>{"use strict";n(5155)},133:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[540,414,429,441,517,358],()=>t(9206)),_N_E=e.O()}]);