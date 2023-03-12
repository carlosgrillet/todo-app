(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function c(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(o){if(o.ep)return;o.ep=!0;const d=c(o);fetch(o.href,d)}})();const S=`<section class="todoapp">\r
  <header class="header">\r
    <h1>Tareas</h1>\r
    <input\r
      id="new-todo-input"\r
      class="new-todo"\r
      placeholder="¿Que tarea tienes pendiente?"\r
      autofocus\r
    />\r
  </header>\r
\r
  <section class="main">\r
    <input id="toggle-all" class="toggle-all" type="checkbox" />\r
    <label for="toggle-all">Mark all as complete</label>\r
    <ul class="todo-list"></ul>\r
  </section>\r
\r
  <footer class="footer">\r
    <span class="todo-count">\r
      <strong id="pending-count">0</strong> pendiente(s)\r
    </span>\r
    <ul class="filters">\r
      <li>\r
        <a class="filtro" class="selected" href="#/">Todos</a>\r
      </li>\r
      <li>\r
        <a class="filtro" href="#/active">Pendientes</a>\r
      </li>\r
      <li>\r
        <a class="filtro" href="#/completed">Completados</a>\r
      </li>\r
    </ul>\r
    <button class="clear-completed">Borrar completados</button>\r
  </footer>\r
</section>\r
\r
<footer class="info">\r
  <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
  <p>\r
    Creado por\r
    <a href="https://github.com/carlosgrillet"><b>Carlos Grillet</b></a>\r
  </p>\r
</footer>\r
`;let h;const C=new Uint8Array(16);function A(){if(!h&&(h=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!h))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return h(C)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function E(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}const v=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),b={randomUUID:v};function P(e,t,c){if(b.randomUUID&&!t&&!e)return b.randomUUID();e=e||{};const s=e.random||(e.rng||A)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,t){c=c||0;for(let o=0;o<16;++o)t[c+o]=s[o];return t}return E(s)}class I{constructor(t){if(!t)throw"Error: Es necesario describir la tarea";this.id=P(),this.description=t,this.done=!1,this.createdAt=new Date}}const i={All:"All",Completed:"Completed",Pending:"Pending"},l={todos:[],filter:i.All},U=()=>{L(),console.log("store initialized")},L=()=>{const e=localStorage.getItem("state"),t=JSON.parse(e);if(!e)return;const{todos:c=[],filter:s=i.All}=t;l.todos=c,l.filter=s},g=()=>{const e=JSON.stringify(l);localStorage.setItem("state",e)},F=(e=i.All)=>{switch(e){case i.All:return[...l.todos];case i.Completed:return l.todos.filter(t=>t.done);case i.Pending:return l.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} not valid`)}},k=e=>{if(!e)throw new Error("Description required");l.todos.push(new I(e)),g()},q=e=>{l.todos=l.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),g()},x=e=>{l.todos=l.todos.filter(t=>t.id!==e),g()},D=()=>{l.todos=l.todos.filter(e=>!e.done),g()},O=(e=i.All)=>{l.filter=e,g()},M=(e=i.All)=>l.filter,a={initStore:U,loadStore:L,getTodos:F,addTodo:k,toggleTodo:q,deleteTodo:x,deleteCompleted:D,setFilter:O,getCurrentFilter:M},H=e=>{if(!e)throw new Error("A todo object is required");const{done:t,description:c,id:s}=e,o=t?"completed":"view",u=`
    <div class="view">
      <input class="toggle" type="checkbox" ${t?"checked":""}>
      <label>${c}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
  `,n=document.createElement("li");return n.setAttribute("data-id",s),n.setAttribute("class",o),n.innerHTML=u,n};let f;const N=(e,t=[])=>{f||(f=document.querySelector(e)),f.innerHTML="",t.forEach(c=>{f.append(H(c))})};let y;const V=e=>{if(y||(y=document.querySelector(e)),!y)throw new Error(`Element ${e} not found`);y.innerHTML=a.getTodos(i.Pending).length,console.log(a.getTodos(i.Pending).length)},p={clearCompleted:".clear-completed",TodoList:".todo-list",newTodoInput:".new-todo",todoFilters:".filtro",pendingCountLabel:"#pending-count"},$=e=>{const t=()=>{const n=a.getTodos(a.getCurrentFilter());N(p.TodoList,n),c()},c=()=>{V(p.pendingCountLabel)};(()=>{const n=document.createElement("div");n.innerHTML=S,document.querySelector(e).append(n),t()})();const s=document.querySelector(p.newTodoInput),o=document.querySelector(p.TodoList),d=document.querySelector(p.clearCompleted),u=document.querySelectorAll(p.todoFilters);s.addEventListener("keydown",n=>{n.keyCode===13&&n.target.value.trim().lenght!==0&&(a.addTodo(n.target.value),n.target.value="",t())}),o.addEventListener("click",n=>{const m=n.target.closest("[data-id]").getAttribute("data-id"),w=n.target.className;w==="toggle"&&a.toggleTodo(m),w==="destroy"&&a.deleteTodo(m),t()}),d.addEventListener("click",()=>{a.deleteCompleted(),t()}),u.forEach(n=>{n.addEventListener("click",T=>{switch(u.forEach(m=>m.classList.remove("selected")),T.target.classList.add("selected"),T.target.text){case"Todos":a.setFilter(i.All);break;case"Pendientes":a.setFilter(i.Pending);break;case"Completados":a.setFilter(i.Completed);break}t()})})};a.initStore();$("#app");
