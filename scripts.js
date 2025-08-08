
// ===== unified scripts.js =====
// - Menu toggle
// - Simple i18n (EN/中文)
// - Persist language to localStorage

(function(){
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  // Menu (mobile)
  const toggle = $('.menu-toggle');
  if(toggle){
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
    });
  }

  // i18n
  const dict = {
    en: {
      brand: "Krista Liu",
      home_title: "Homepage",
      case_study: "Case Study",
      projects: "Projects",
      ideation: "Ideation",
      pitch_deck: "Pitch Deck",
      prototypes: "Prototypes",
      mvp: "MVP",
      feedback: "Feedback",
      timeline: "Timeline",
      creativity: "Creativity",
      drawing_collection: "Drawing Collection",
      game: "Game",
      progress_reports: "Progress Reports",
      animation: "Animation",
      knowledge_base: "Knowledge Base",
      researches: "Researches",
      unattempted: "Unattempted Ideations & Sketches",
      writing: "Writing",
      writing_mopian: "默片人生",
      writing_xingsan: "形散神不散",
      writing_meng: "梦序列",
      writing_world: "世界",
      find_me: "Find Me Here",
      china_sub: "China: Subscription RedNote",
      us_social: "US: Discord • X • Instagram",
      linkedin_roles: "LinkedIn (Different Role's Resume)",
      hero_heading: "Readably bold. Deliberately simple.",
      hero_body: "Black & white first, geometry and soft 3D accents second. Portfolio and lab of experiments.",
      ctas_explore: "Explore Work",
      ctas_contact: "Contact",
      breadcrumb_home: "Home",
      case_studies_title: "Case Studies",
      creativity_title: "Creativity",
      knowledge_title: "Knowledge Base",
      writing_title: "Writing",
      contact_title: "Find Me Here",
      lang: "中文"
    },
    zh: {
      brand: "Krista 刘",
      home_title: "主页",
      case_study: "案例研究",
      projects: "项目集",
      ideation: "概念构思",
      pitch_deck: "路演稿",
      prototypes: "原型",
      mvp: "MVP",
      feedback: "反馈",
      timeline: "时间线",
      creativity: "创作",
      drawing_collection: "绘画合集",
      game: "游戏",
      progress_reports: "进度报告",
      animation: "动画",
      knowledge_base: "知识库",
      researches: "研究",
      unattempted: "未尝试的点子与草图",
      writing: "写作",
      writing_mopian: "默片人生",
      writing_xingsan: "形散神不散",
      writing_meng: "梦序列",
      writing_world: "世界",
      find_me: "联系我",
      china_sub: "中国：订阅号 RedNote",
      us_social: "美国：Discord • X • Instagram",
      linkedin_roles: "LinkedIn（不同岗位简历）",
      hero_heading: "易读与克制，美与简洁并存",
      hero_body: "以黑白为先，几何与柔和 3D 为辅。这里是作品集与实验室。",
      ctas_explore: "浏览作品",
      ctas_contact: "联系我",
      breadcrumb_home: "主页",
      case_studies_title: "案例研究",
      creativity_title: "创作",
      knowledge_title: "知识库",
      writing_title: "写作",
      contact_title: "社交名片",
      lang: "EN"
    }
  };

  function applyLang(lang){
    const map = dict[lang] || dict.en;
    $$("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if(map[key] !== undefined){
        el.textContent = map[key];
      }
    });
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh" : "en");
  }

  const langBtn = $(".lang-switch");
  if(langBtn){
    langBtn.addEventListener("click", () => {
      const current = localStorage.getItem("lang") || "en";
      const next = current === "en" ? "zh" : "en";
      applyLang(next);
    });
  }

  // Init
  applyLang(localStorage.getItem("lang") || "en");
})();
