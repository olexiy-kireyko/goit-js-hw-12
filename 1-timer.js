import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,i as y}from"./assets/vendor-BbbuE1sJ.js";let d;const c=document.querySelector("#datetime-picker"),n=document.querySelector("button[data-start]"),f=document.querySelector("span[data-days]"),p=document.querySelector("span[data-hours]"),S=document.querySelector("span[data-minutes]"),g=document.querySelector("span[data-seconds]");n.disabled=!0;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){new Date>t[0]?(y.show({message:"Please choose a date in the future",backgroundColor:"red",messageColor:"white",iconUrl:"../img/favicon.svg",layout:2,closeOnClick:!0,close:!1,position:"topCenter",messageSize:24,timeout:4e4}),n.disabled=!0):(d=t[0],n.disabled=!1)}};h("#datetime-picker",D);n.addEventListener("click",b);function b(){n.disabled=!0,c.disabled=!0;const t=setInterval(()=>{const a=d-new Date;a<1e3&&(clearInterval(t),c.disabled=!1);const e=C(a),r=String(e.days).length;f.textContent=r>2?e.days:o(e.days),p.textContent=o(e.hours),S.textContent=o(e.minutes),g.textContent=o(e.seconds)},1e3)}function C(t){const u=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:i,minutes:l,seconds:m}}function o(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
