/*
  ==========================================================================
   مستودع البيانات والتفاعل الخاص بالموقع (السرد القرآني - البراء عيد أحمد محمود)
  ==========================================================================
 */

// 1️⃣ مصفوفة بيانات جميع الأشخاص بالترتيب المطلوب
const PEOPLE_DATA = [
  // --- 1. الأصدقاء والزملاء ---
  {
    id: "friend-mohamed-mostafa",
    category: "friends",
    name: "محمد مصطفى عبدالصمد عبدالغني",
    image: "mohamed-mostafa.jpg",
    text: "جزاك الله خيراً يا رفيق الدرب، وأسأل الله أن يرزقك القبول ويثبت القرآن في قلبك."
  },
  {
    id: "friend-ahmed-omaira",
    category: "friends",
    name: "أحمد محمد علي عميره",
    image: "ahmed-omaira.jpg",
    text: "دمتَ نِعم الأخ والصديق، أدام الله عزك ونفع بك وأعلى منزلتك بالقرآن."
  },
  {
    id: "friend-adham-sabry",
    category: "friends",
    name: "أدهم صبري عبدالمنعم علي",
    image: "adham-sabry.jpg",
    text: "شديد الهمة والحرص، مبارك لك يا أدهم وبارك الله في جهودك وأسعدك في الدارين."
  },
  {
    id: "friend-albaraa-eid",
    category: "friends",
    name: "البراء عيد أحمد محمود",
    image: "writer.jpg",
    text: "الحمد لله الذي شرفني بوجودي بين هذه الثلة الطيبة المباركة من أهل القرآن."
  },
  {
    id: "friend-abdullah-mahmoud",
    category: "friends",
    name: "عبدالله محمود أحمد السيد",
    image: "abdullah-mahmoud.jpg",
    text: "صاحب القلب الخالص والابتسامة الطيبة، فتح الله عليك فتوح العارفين."
  },
  {
    id: "friend-omar-ashraf",
    category: "friends",
    name: "عمر أشرف إبراهيم أحمد",
    image: "omar-ashraf.jpg",
    text: "أسأل الله أن يرفع قدرك وأن يجعلك مباركاً أينما كنت حاملاً لكتابه."
  },
  {
    id: "friend-mohamed-ahmed",
    category: "friends",
    name: "محمد أحمد صلاح عبدالفضيل",
    image: "mohamed-ahmed.jpg",
    text: "وفقك الله ونفع بك، وجعل هذا الحفظ نوراً لك وضياءً في طريقك دائماً."
  },

  // --- 2. مؤسس المركز ---
  {
    id: "founder-asim",
    category: "founder",
    name: "الدكتور/ عاصم أحمد عبد الكريم",
    image: "asim-abd-elkareem.jpg",
    text: "يقف قلمي عاجزاً وأنا أكتب كلمات الشكر والتقدير لرجلٍ أقام بفضل الله وتوفيقه هذا الصرح القرآني المبارك؛ الدكتور الفاضل عاصم أحمد عبد الكريم.\n\nإن ما نشهده اليوم من نجاحٍ وفرحة بإتمام السرد القرآني لم يكن ليتحقق إلا برؤيةٍ مباركة، وهمةٍ عالية، وجدٍّ ودؤوب من سيادته على خدمة كتاب الله تعالى ورعاية أهله وخاصته..."
  },

  // --- 3. القطاع الإشرافي العام ---
  {
    id: "supervisor-mahmoud",
    category: "supervisors",
    name: "ش/ محمود شعبان",
    image: "supervisor1.jpg",
    text: "القطاع الإشرافي العام. جزاه الله خيراً على متابعته الدؤوبة ورعايته الإدارية والتربوية الكريمة."
  },
  {
    id: "supervisor-badr",
    category: "supervisors",
    name: "ش/ محمد بدر",
    image: "supervisor2.jpg",
    text: "القطاع الإشرافي العام. شكراً لجهوده المخلصة ودعمه المستمر لنا في مركز الإمام الإسلامي."
  },

  // --- 4. مدير الفرع ---
  {
    id: "manager-adel",
    category: "manager",
    name: "الشيخ/ عادل عبدالرحمن",
    image: "sheikh.jpg",
    text: "كلمات الشكر تقف عاجزة أمام ما قدمته لنا يا شيخنا الفاضل ومدير فرعنا الكريم.. فشكراً لجميل صبرك، وحسن توجيهك، ودقتك في التصحيح والتعليم، وحرصك الدائم على أن نتقن كتاب الله كلمةً كلمة وآيةً آية."
  },

  // --- 5. المعلمة الفاضلة ---
  {
    id: "teacher-asmaa",
    category: "teacher",
    name: "الأستاذه المعلمة/ أسماء سلامه",
    image: "",
    text: "نوافي جزيل الشكر والامتنان لمعلمتنا الفاضلة الأستاذه أسماء، على ما قدمته لنا من دعم ومتابعة وجهد مخلص كان له بالغ الأثر في استمرارنا وتوفيقنا. نسأل الله العظيم أن يكتب أجرها ويجعل كل حرف تعلمناه في ميزان حسناتها."
  },

  // --- 6. المشايخ والمعلمين ---
  {
    id: "sheikh-hassan",
    category: "sheikhs",
    name: "الشيخ/ حسن",
    image: "sheikh-hassan.jpg",
    text: "شكراً جزيلاً لشيخنا الفاضل الشيخ حسن على متابعته وحرص الدائم على توجيهنا ودعمنا طوال مسيرتنا في الكتاب، جزاك الله خيراً وبارك في جهودك."
  },
  {
    id: "sheikh-suhaib",
    category: "sheikhs",
    name: "الشيخ/ صهيب عبدالناصر",
    image: "sheikh-suhaib-abdelnasser.jpg",
    text: "كل الشكر والتقدير لشيخنا الفاضل الشيخ صهيب عبدالناصر على جهوده المباركة معنا في مرحلة السرد، ومساعدته الكريمة مع المعلمة الفاضلة في التسميع والمتابعة الدقيقة. جزاك الله عنا خير الجزاء."
  },
  {
    id: "sheikh-sherif",
    category: "sheikhs",
    name: "الشيخ/ شريف علي",
    image: "sheikh-sherif-ali.jpg",
    text: "تنساب كلمات الامتنان لشيخنا القدير الشيخ شريف علي، الذي رافقنا بحرص وصبر طوال مرحلة الـ 25 جزءاً، وحفظنا على يديه الكريمات ما يقارب 4 إلى 5 أجزاء إضافية. بفضل الله وتوفيقه خرجنا من هذه المرحلة بنجاح."
  },
  {
    id: "sheikh-hazem",
    category: "sheikhs",
    name: "الشيخ/ حازم",
    image: "sheikh-hazem.jpg",
    text: "كل الشكر والتقدير لشيخنا الفاضل الشيخ حازم على جهوده الطيبة ودعمه الدائم لنا في مركز الإمام الإسلامي، جزاك الله خيراً وبارك في جهدك ووقتك."
  },

  // --- 7. المحاسب والإدارة ---
  {
    id: "accountant-mohamed",
    category: "accountant",
    name: "الأستاذ/ محمد شحاته",
    image: "accountant-mohamed-shehata.jpg",
    text: "نتقدم بخالص الشكر والتقدير للأستاذ الفاضل محمد شحاته، محاسب الكتاب، على جهوده الدؤوبة وتعامله الخُلقي الراقي مع الجميع. إن حرصه الدائم وخدمته المخلصة لطلاب مركز الإمام كان لها بالغ الأثر في تيسير الأمور."
  }
];

// دالة توليد الكروت وتعبئتها داخل الأقسام بشكل صحيح
function renderCards() {
  const grids = {
    "friends": document.getElementById("friends-grid"),
    "founder": document.getElementById("founder-grid"),
    "supervisors": document.getElementById("supervisors-grid"),
    "manager": document.getElementById("manager-grid"),
    "teacher": document.getElementById("teacher-grid"),
    "sheikhs": document.getElementById("sheikhs-grid"),
    "accountant": document.getElementById("accountant-grid")
  };

  Object.values(grids).forEach(grid => {
    if (grid) grid.innerHTML = "";
  });

  PEOPLE_DATA.forEach((person) => {
    const gridContainer = grids[person.category];
    if (!gridContainer) return;

    const card = document.createElement("div");
    card.className = "person-card";
    
    const hasImage = person.image && person.image.trim() !== "";
    
    const previewContentHtml = hasImage ? `
      <div class="card-preview-content">
        <img src="${person.image}" alt="${person.name}" class="card-thumb" onerror="this.src='https://via.placeholder.com/150?text=صورة';">
        <div class="card-snippet">${person.text}</div>
      </div>
    ` : `
      <div class="card-preview-content no-image">
        <div class="card-snippet" style="-webkit-line-clamp: 3; max-width: 100%;">${person.text}</div>
      </div>
    `;

    const fullImageHtml = hasImage ? `
      <div class="modal-img-box" style="width: 140px; height: 140px; margin: 0 auto 15px auto; border-radius: 50%; overflow: hidden; border: 3px solid var(--accent-gold);">
        <img src="${person.image}" alt="${person.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://via.placeholder.com/150?text=صورة';">
      </div>
    ` : '';

    card.innerHTML = `
      <h4 class="person-name">${person.name}</h4>
      ${previewContentHtml}
      <div class="card-full-text">
        ${fullImageHtml}
        <p>${person.text}</p>
      </div>
      <button class="read-more-btn" onclick="toggleCard(this)">قراءة المزيد ✨</button>
    `;

    gridContainer.appendChild(card);
  });
}

// دالة التوسيع والتصغير عند الضغط
function toggleCard(button) {
  const card = button.closest(".person-card");
  card.classList.toggle("expanded");
  if (card.classList.contains("expanded")) {
    button.textContent = "إخفاء التفاصيل 🔽";
  } else {
    button.textContent = "قراءة المزيد ✨";
  }
}

function setupWriterToggle() {
  const writerCard = document.getElementById("writer-toggle-card");
  if (!writerCard) return;

  writerCard.addEventListener("click", () => {
    writerCard.classList.toggle("expanded");
  });
}

function handleSmartCounter(counterKey, elementId) {
  const counterElement = document.getElementById(elementId);
  if (!counterElement) return;

  const sessionKey = `visited_session_${counterKey}`;
  let visits = parseInt(localStorage.getItem(counterKey)) || 1;

  if (!sessionStorage.getItem(sessionKey)) {
    visits += 1;
    localStorage.setItem(counterKey, visits);
    sessionStorage.setItem(sessionKey, "true");
  }

  counterElement.textContent = visits.toLocaleString("ar-EG");
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  setupWriterToggle();

  if (document.getElementById("home-counter")) {
    handleSmartCounter("quran_home_visits_2026", "home-counter");
  }

  if (document.getElementById("contact-counter")) {
    handleSmartCounter("quran_contact_visits_2026", "contact-counter");
  }
});