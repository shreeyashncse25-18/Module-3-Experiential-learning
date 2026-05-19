<html>
<head>
<title>Central Library Catalog</title>
<style>
:root{navy:#0D1B2A;gold:#F0A500;light:#F0F6FA;white:#ffffff;muted:#64748b;border:#e2e8f0;}
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:Arial,sans-serif;background:var(light);color:var(navy);overflow-x:hidden;}
header{background:var(--navy);padding:18px 32px;border-top:4px solid var(--gold);}
.header-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;}
.logo h1{color:var(white);font-size:1.4rem;}.logo p{color:rgba(255,255,255,0.5);font-size:0.75rem;}.meta{color:rgba(255,255,255,0.6);font-size:0.8rem;}
.hero{background:linear-gradient(135deg,var(--navy),#0f2a3a);padding:52px 32px;text-align:center;}
.hero h2{color:var(white);font-size:2.2rem;margin-bottom:8px;}.gold{color:var(gold);}.hero p{color:rgba(255,255,255,0.5);margin-bottom:28px;}
.search-wrap{max-width:680px;margin:0 auto;display:flex;border-radius:12px;overflow:hidden;border:2px solid var(gold);}
.search-wrap input{flex:1;border:none;outline:none;padding:16px;font-size:1rem;min-width:0;}
.search-wrap button{background:var(gold);color:var(navy);border:none;padding:0 28px;font-weight:700;cursor:pointer;text-transform:uppercase;white-space:nowrap;}
.main{max-width:1200px;margin:0 auto;padding:36px 32px;}
.filter-label{font-size:0.72rem;font-weight:600;text-transform:uppercase;color:var(muted);margin-bottom:10px;}
#filterTabs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:22px;}
.tab{padding:8px 18px;border-radius:30px;border:2px solid var(border);background:var(white);font-size:0.85rem;cursor:pointer;color:var(muted);}
.tab.active{background:var(navy);border-color:var(navy);color:var(white);}
.stats-bar{padding:12px 18px;background:var(white);border:1px solid var(border);border-radius:10px;margin-bottom:16px;font-size:0.9rem;}
.table-wrap{background:var(white);border-radius:14px;border:1px solid var(border);overflow-x:auto;}
table{width:100%;border-collapse:collapse;min-width:400px;}thead{background:var(navy);}
th{padding:14px 18px;text-align:left;font-size:0.72rem;text-transform:uppercase;color:rgba(255,255,255,0.6);white-space:nowrap;}
th:first-child{color:var(gold);text-align:center;}tbody tr{border-bottom:1px solid var(border);}
td{padding:14px 18px;font-size:0.9rem;vertical-align:middle;}td:first-child{text-align:center;color:var(--muted);}
.book-title{font-weight:600;}.book-isbn{font-size:0.75rem;color:var(--muted);margin-top:2px;}
.badge{display:inline-block;padding:3px 10px;border-radius:20px;font-size:0.76rem;font-weight:600;}
.badge-web{background:#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe;}.badge-cs{background:#f0fdf4;color:#15803d;border:1px solid #86efac;}
.badge-lib{background:#faf5ff;color:#7c3aed;border:1px solid #d8b4fe;}.badge-math{background:#fff7ed;color:#c2410c;border:1px solid #fed7aa;}
.empty-state{display:none;text-align:center;padding:50px;color:var(muted);}.empty-state.show{display:block;}
.section-title{font-size:1.4rem;margin:40px 0 16px;font-weight:700;}
.author-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px;}
.author-card{background:var(white);border-radius:12px;border:1px solid var(border);padding:18px;cursor:pointer;}
.author-card h4{font-size:0.95rem;font-weight:700;margin-bottom:4px;}.author-card .count{font-size:0.78rem;color:var(muted);margin-bottom:8px;}
footer{background:var(navy);color:rgba(255,255,255,0.45);text-align:center;padding:22px;font-size:0.8rem;margin-top:20px;}
footer strong{color:var(gold);}@media(max-width:700px){.hero h2{font-size:1.5rem;}.main{padding:20px 14px;}}
</style>
</head>
<body>
<header>
  <div class="header-inner">
    <div class="logo"><h1>&#128218; Central Library</h1><p>Digital Book Catalog System</p></div>
    <div class="meta">Shreeyash Naik | CS25044</div>
  </div>
</header>
<section class="hero">
  <h2>Search the <span class="gold">Book Catalog</span></h2>
  <p>Find books by title, author, ISBN or filter by subject type</p>
  <div class="search-wrap">
    <input type="text" id="searchInput" placeholder="Search by book title, author, or ISBN..." oninput="applyFilters()">
    <button onclick="applyFilters()">Search</button>
  </div>
</section>
<main class="main">
  <p class="filter-label">Filter by Subject Type</p>
  <div id="filterTabs">
    <button class="tab active" data-type="all" onclick="setTab(this)">All Books</button>
    <button class="tab" data-type="Web Technology" onclick="setTab(this)">Web Technology</button>
    <button class="tab" data-type="Computer Science" onclick="setTab(this)">Computer Science</button>
    <button class="tab" data-type="Library Science" onclick="setTab(this)">Library Science</button>
    <button class="tab" data-type="Mathematics" onclick="setTab(this)">Mathematics</button>
  </div>
  <div class="stats-bar">Showing <strong id="showCount">5</strong> of 5 books</div>
  <div class="table-wrap">
    <table>
      <thead><tr><th>#</th><th>Book Title &amp; ISBN</th><th>Author</th><th>Subject / Type</th></tr></thead>
      <tbody id="tableBody"></tbody>
    </table>
    <div class="empty-state" id="emptyState">No books found.</div>
  </div>
  <section>
    <h2 class="section-title">Author Index</h2>
    <div class="author-grid" id="authorGrid"></div>
  </section>
</main>
<footer>Central Library Catalog | Web Designing Experiential Learning | <strong>Shreeyash Naik</strong> | USN: CS25044</footer>
<script>
const books=[
  {id:'01',title:'HTML Basics',author:'Web Dev Press',isbn:'978-0-13-468599-1',type:'Web Technology'},
  {id:'02',title:'Computer Fundamentals',author:'TechLearn',isbn:'978-0-07-802564-2',type:'Computer Science'},
  {id:'03',title:'Digital Library',author:'InfoTech Books',isbn:'978-0-12-381469-5',type:'Library Science'},
  {id:'04',title:'Discrete Mathematics',author:'Kenneth Rosen',isbn:'978-0-07-288187-4',type:'Mathematics'},
  {id:'05',title:'CSS & Web Design',author:'Eric Meyer',isbn:'978-0-59-651483-2',type:'Web Technology'},
];
const badgeClass={'Web Technology':'badge badge-web','Computer Science':'badge badge-cs','Library Science':'badge badge-lib','Mathematics':'badge badge-math'};
let activeType='all';
function applyFilters(){
  const q=document.getElementById('searchInput').value.toLowerCase().trim();
  const tbody=document.getElementById('tableBody');
  tbody.innerHTML='';let shown=0;
  books.forEach(b=>{
    if((activeType!=='all'&&b.type!==activeType)||(q&&!b.title.toLowerCase().includes(q)&&!b.author.toLowerCase().includes(q)&&!b.isbn.includes(q)))return;
    shown++;
    const tr=document.createElement('tr');
    tr.innerHTML=<td>${b.id}</td><td><div class="book-title">${b.title}</div><div class="book-isbn">${b.isbn}</div></td><td>${b.author}</td><td><span class="${badgeClass[b.type]}">${b.type}</span></td>;
    tbody.appendChild(tr);
  });
  document.getElementById('showCount').textContent=shown;
  document.getElementById('emptyState').classList.toggle('show',show=0);
}
function setTab(el){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');activeType=el.dataset.type;applyFilters();
}
function buildAuthors(){
  const map={};
  books.forEach(b=>{if(!map[b.author])map[b.author]={books:[],types:new Set()};map[b.author].books.push(b.title);map[b.author].types.add(b.type);});
  Object.entries(map).forEach(([name,data])=>{
    const card=document.createElement('div');
    card.className='author-card';
    card.innerHTML=<h4>${name}</h4><p class="count">${data.books.length} book(s)</p><div>${[...data.types].map(tp=><span class="${badgeClass[tp]}">${tp}</span>).join(' ')}</div>`;
    card.onclick=()=>{document.getElementById('searchInput').value=name;activeType='all';document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));document.querySelector('[data-type="all"]').classList.add('active');applyFilters();};
    document.getElementById('authorGrid').appendChild(card);
  });
}
applyFilters();buildAuthors();
</script>
</body>
</html>
