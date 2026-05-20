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
    tr.innerHTML=`<td>${b.id}</td><td><div class="book-title">${b.title}</div><div class="book-isbn">${b.isbn}</div></td><td>${b.author}</td><td><span class="${badgeClass[b.type]}">${b.type}</span></td>`;
    tbody.appendChild(tr);
  });
  document.getElementById('showCount').textContent=shown;
  document.getElementById('emptyState').classList.toggle('show',shown===0);
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
    card.innerHTML=`<h4>${name}</h4><p class="count">${data.books.length} book(s)</p><div>${[...data.types].map(tp=>`<span class="${badgeClass[tp]}">${tp}</span>`).join(' ')}</div>`;
    card.onclick=()=>{document.getElementById('searchInput').value=name;activeType='all';document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));document.querySelector('[data-type="all"]').classList.add('active');applyFilters();};
    document.getElementById('authorGrid').appendChild(card);
  });
}
applyFilters();buildAuthors();
