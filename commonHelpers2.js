import"./assets/modulepreload-polyfill-ec808ebb.js";const t=document.querySelector(".feedback-form"),m=localStorage.getItem("feedback-form-state");if(m){const{email:e,message:a}=JSON.parse(m);t.elements.email.value=e,t.elements.message.value=a}t.addEventListener("input",function(e){if(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA"){const a=JSON.parse(localStorage.getItem("feedback-form-state"))||{};a[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(a))}});t.addEventListener("submit",function(e){e.preventDefault();const a=t.elements.email.value.trim(),s=t.elements.message.value.trim();console.log({email:a,message:s}),localStorage.removeItem("feedback-form-state"),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
