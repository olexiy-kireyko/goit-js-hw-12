import{a as p,S as P,i as d}from"./assets/vendor-D73Uttp0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const S="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%3e%3cg%20fill='%23FAFAFB'%20clip-path='url(%23a)'%3e%3cpath%20d='M6.81.219A.75.75%200%200%201%207.34%200h9.32a.75.75%200%200%201%20.53.219l6.591%206.591a.75.75%200%200%201%20.219.53v9.32a.75.75%200%200%201-.219.53l-6.591%206.591a.75.75%200%200%201-.53.219H7.34a.75.75%200%200%201-.53-.219L.219%2017.19A.75.75%200%200%201%200%2016.66V7.34a.75.75%200%200%201%20.219-.53L6.81.219ZM7.65%201.5%201.5%207.65v8.7l6.15%206.15h8.7l6.15-6.15v-8.7L16.35%201.5h-8.7Z'/%3e%3cpath%20d='M6.969%206.97a.75.75%200%200%201%201.062%200L12%2010.94l3.969-3.97a.75.75%200%201%201%201.062%201.061l-3.97%203.97%203.97%203.968a.753.753%200%200%201%200%201.062.749.749%200%200%201-1.062%200L12%2013.061l-3.969%203.97a.75.75%200%200%201-1.225-.243.751.751%200%200%201%20.163-.819L10.939%2012%206.97%208.031a.75.75%200%200%201%200-1.062Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h24v24H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";let g;async function f(r,t){p.defaults.baseURL="https://pixabay.com";const s={key:"46785976-efe48924e46a3ec0e24bd3bdc",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15},o=await p.get("/api/",{params:s});if(o.data.total===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return g=Math.ceil(o.data.totalHits/s.per_page),o.data}function y(r,t){const s=r.map(({largeImageURL:o,webformatURL:e,tags:a,likes:l,views:b,comments:w,downloads:v})=>`
        <li class="gallery-item">
          <a href=${o} class="gallery-ref">
            <img class="gallery-img" src=${e} alt="${a}" title=""/>
          </a>
            <ul class="gallery-descrip">
          <li><b>likes</b><span>${l}</span></li>
          <li><b>views</b><span>${b}</span></li>
          <li><b>comments</b><span>${w}</span></li>
          <li><b>downloads</b><span>${v}</span></li>
             </ul>
        </li>`).join("");t.insertAdjacentHTML("beforeend",s)}const M=document.querySelector(".search"),u=document.querySelector(".gallery"),h=document.querySelector(".spinner"),i=document.querySelector(".load-more");M.addEventListener("submit",$);i.addEventListener("click",O);let L=new P(".gallery a",{captionType:"attr",captionsData:"alt",captionPosition:"bottom"});const m={iconUrl:S,backgroundColor:"red",messageColor:"white",layout:2,closeOnClick:!0,close:!1,position:"center",messageSize:24,timeout:3e3};let c,n;async function $(r){if(r.preventDefault(),n=r.currentTarget.elements.searchInput.value.trim(),!n){d.show({message:"Sorry, you are not enter search parametrs!",...m});return}c=1,u.innerHTML="",i.classList.add("hide"),h.classList.add("loader");try{const t=await f(n,c);y(t.hits,u),L.refresh(),i.classList.remove("hide")}catch(t){d.show({message:`${t}`,...m})}h.classList.remove("loader"),r.target.reset()}async function O(){c+=1,i.classList.add("hide"),h.classList.add("loader");try{const s=await f(n,c);y(s.hits,u),L.refresh()}catch(s){d.show({message:`${s}`,...m})}h.classList.remove("loader");const t=u.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:t*2,left:0,behavior:"smooth"}),c===g?(i.classList.add("hide"),d.show({message:"We're sorry, but you've reached the end of search results.",...m})):i.classList.remove("hide")}
//# sourceMappingURL=index.js.map
