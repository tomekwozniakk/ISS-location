(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i=L.map("issMap").setView([0,0],1),d='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',p="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",u=L.tileLayer(p,{attribution:d}),f="https://api.wheretheiss.at/v1/satellites/25544";u.addTo(i);const m=L.icon({iconUrl:"iss.png",iconSize:[26,16],iconAnchor:[13,8]}),y=L.marker([0,0],{icon:m}).addTo(i);let c=!0;async function a(){const r=await(await fetch(f)).json(),{latitude:s,longitude:o}=r;y.setLatLng([s,o]),c&&(i.setView([s,o],2),c=!1),document.getElementById("lat").textContent=s.toFixed(2),document.getElementById("lon").textContent=o.toFixed(2)}a();setInterval(a,1e3);
