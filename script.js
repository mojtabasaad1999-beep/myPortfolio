function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("show");
}

// active link while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const top = window.scrollY;
    if (top >= sec.offsetTop - 200) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});
    
function runAI(){
let t=document.getElementById("aiInput").value
let words=t.split(" ").length
let sentiment=t.includes("love")||t.includes("good")?"Positive":"Neutral"
document.getElementById("aiResult").innerHTML="Words: "+words+" | Sentiment: "+sentiment
}

function generateIdea(){
  const idea = document.getElementById("ideaInput").value;
  if(!idea) return;

  const names = ["Flow", "Pulse", "Nova", "Spark", "Boost", "Zen"];
  const features = [
    "User authentication",
    "Personalized dashboard",
    "Progress tracking",
    "Smart recommendations",
    "Cloud sync",
    "Mobile-first UI"
  ];

  const appName = names[Math.floor(Math.random()*names.length)];
  const selected = features.sort(()=>0.5 - Math.random()).slice(0,4);

  document.getElementById("ideaResult").innerHTML = `
    <h3 style="color:#74b9ff">App Name: ${appName}</h3>
    <p style="margin-top:10px">Based on: <strong>${idea}</strong></p>
    <p style="margin-top:15px"><strong>Main Features:</strong></p>
    <ul>
      ${selected.map(f => `<li>• ${f}</li>`).join("")}
    </ul>
    <p style="margin-top:15px"><strong>UI Style:</strong> Modern, clean, and mobile-first</p>
    <p><strong>Monetization:</strong> Freemium with premium features</p>
  `;
}

document.querySelectorAll(".project-card").forEach(card=>{
  card.addEventListener("mousemove", e=>{
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 15
    const rotateY = (centerX - x) / 15

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
  })

  card.addEventListener("mouseleave",()=>{
    card.style.transform = "rotateX(0) rotateY(0) scale(1)"
  })
})

const projects = [
  {
    title:"Phone Cases Store",
    desc:"A clean, modern e-commerce website for premium phone accessories.",
    story:"This project shows my ability to design beautiful shopping experiences with strong UI/UX."
  },
  {
    title:"Juice Store Website",
    desc:"A colorful and friendly website for a beverage brand.",
    story:"Here I focused on branding, colors, and making customers feel welcomed."
  },
  {
    title:"Dental Clinic Website",
    desc:"A professional booking-focused medical website.",
    story:"This project demonstrates my skill in trust-based and user-friendly layouts."
  },
  {
    title:"Electronics Store",
    desc:"A modern tech store website.",
    story:"This project reflects my ability to build scalable and clean UI systems."
  }
]

function openProject(i){
  document.querySelectorAll(".path").forEach(p=>p.classList.remove("active"))
  document.querySelector(".p"+(i+1)).classList.add("active")

  document.getElementById("projectTitle").innerText = projects[i].title
  document.getElementById("projectDesc").innerText = projects[i].desc
  document.getElementById("projectStory").innerText = projects[i].story

  document.getElementById("projectPopup").style.display="flex"
}

function closeProject(){
  document.getElementById("projectPopup").style.display="none"
  document.querySelectorAll(".path").forEach(p=>p.classList.remove("active"))
}


document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      window.open(card.dataset.link, '_blank');
    });
  });

  function openMD() {
    window.open("https://mojtabasaad1999-beep.github.io/CD_Cases/", "_blank"); 
  }

  function openJuice() {
    window.open("https://mojtabasaad1999-beep.github.io/farawla/", "_blank"); 
  }

  function openClinic() {
    window.open("https://mojtabasaad1999-beep.github.io/Dr.Lama/", "_blank"); 
  }

  function openCore() {
    window.open("https://mojtabasaad1999-beep.github.io/Core-Mobile/", "_blank"); 
  }

  function openElectro() {
    window.open("https://mojtabasaad1999-beep.github.io/Saad-Electronics/", "_blank"); 
  }

  function openHand() {
    window.open("https://mojtabasaad1999-beep.github.io/Tobias-Muller/", "_blank"); 
  }

  function openMarket() {
    window.open("https://your-website-link.com", "_blank"); 
  }
