import{a as f,S as p,i as a}from"./assets/vendor-DEZpR2tN.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const m="49795001-63fc88dd531083a7427250d55";function h(t){return f("https://pixabay.com/api/",{params:{key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>(console.log(r),r.data.hits)).catch(r=>[])}const u=document.querySelector(".gallery"),d=document.querySelector(".loader");let o=null;function g(t){const r=t.tags.split(",").slice(0,3).join(", ");return`
    <li class="gallery-item">
        <a href="${t.largeImageURL}" class="gallery-link">
            <img
                class="gallery-image"
                src="${t.webformatURL}"
                alt="${r}"
            />
            <div class="info">
                <div class="info-item">
                    <p class="info-label">Likes</p>
                    <span class="info-value">${t.likes}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Views</p>
                    <span class="info-value">${t.views}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Comments</p>
                    <span class="info-value">${t.comments}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Downloads</p>
                    <span class="info-value">${t.downloads}</span>
                </div>
            </div>
        </a>
    </li>
    `}function y(t){const r=t.map(g).join("");u.insertAdjacentHTML("beforeend",r),o?o.refresh():o=new p(".gallery a",{captionsData:"alt",captionDelay:250})}function v(){u.innerHTML="",o&&(o.destroy(),o=null)}function L(){d.classList.remove("hidden")}function b(){d.classList.add("hidden")}const w=document.querySelector(".form"),l=document.querySelector(".input");w.addEventListener("submit",S);function S(t){t.preventDefault();const r=l.value.trim();if(!r){a.warning({position:"topRight",title:"Warning",message:"Please enter a search query"}),l.focus();return}L(),v(),h(r).then(i=>i.data).then(i=>{if(!i.hits||i.hits.length===0){a.warning({position:"topRight",title:"Warning",message:"Sorry, no images found. Please try another query!"});return}y(i.hits)}).catch(i=>{a.error({position:"topRight",title:"Error",message:"Failed to fetch images. Please try again later."}),console.error("Error:",i)}).finally(()=>{b(),l.value=""})}
//# sourceMappingURL=index.js.map
