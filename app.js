/* ============================================================
   Kathiyawadi Ghar — site logic
   All shop content (name, address, phone, menu, prices) lives right
   here in the SHOP_DATA object below. Edit these values to update
   the site — no other file needs to change.

   This file is loaded with a plain <script> tag, so there is no
   fetch() and no file:// restriction: you can open the HTML file
   directly by double-clicking it, or host it anywhere, and it
   works the same way either time.
   ============================================================ */

const SHOP_DATA = {
  shop: {
    name: "Kathiyawadi Ghar",
    taglineGu: "ગાંઠિયા • ભજીયા • જલેબી",
    phoneDisplay: "+91 98765 43210",
    whatsappNumber: "919876543210",
    heroEyebrow: "🔥 Fresh from the karahi, every morning",
    heroHeadingLine1: "Garma-Garam",
    heroHeadingHighlight: "Kathiyawadi",
    heroHeadingLine2: "Nasto, Made Old-School",
    heroLead: "Crisp gathiya, hot bhajiya and syrup-soaked jalebi — the same recipe our Saurashtra kitchen has used for three generations. Order ahead, or walk in for a plate that's still crackling.",
    address: {
      line1: "Shop No. 4, Nasto Bazar",
      line2: "Opp. Cotton Market Gate, Bhavnagar, Gujarat – 364001",
      cityLine: "Bhavnagar, Gujarat – 364001",
      note: "(sample address — replace with your shop's actual location)",
      mapsQuery: "Nasto Bazar Bhavnagar Gujarat",
      mapCardTitle: "Nasto Bazar, Bhavnagar"
    },
    phoneNote: "(sample number)",
    hours: [
      { days: "Mon – Sat", time: "8:00 AM – 9:30 PM" },
      { days: "Sunday", time: "7:00 AM – 1:00 PM (Jalebi Special)" }
    ],
    story: {
      heading: "Three Generations, One Karahi",
      text: "Kathiyawadi Ghar started as a handcart outside Bhavnagar's cotton market in 1968. Today it's the same family, the same groundnut oil, and the same rule: nothing gets fried until you order it.",
      stats: [
        { num: "1968", label: "Since" },
        { num: "3rd", label: "Generation" },
        { num: "100%", label: "Fried to order" }
      ]
    },
    promo: {
      title: "Sunday Special",
      text: "Jalebi-Fafda combo, made fresh every Sunday morning from 7 AM. First 50 plates get extra rabdi, free."
    },
    footerLine: "Made with ghee, garam masala, and a little too much love for fried food.",
    footerCopyright: "© 2026 Kathiyawadi Gathiya-Bhajiya Ghar. All rights reserved."
  },
  menuCategories: [
    { id: "gathiya", name: "Gathiya", tagline: "Crisp besan sticks, roasted spice", shape: "gathiya",
      displayItems: [
        { label: "Tikha Gathiya", priceText: "₹120/kg" },
        { label: "Sev Gathiya", priceText: "₹110/kg" },
        { label: "Ratlami Jaadu Gathiya", priceText: "₹140/kg" },
        { label: "Fafda-Gathiya Combo", priceText: "₹90/plate" }
      ]},
    { id: "bhajiya", name: "Bhajiya", tagline: "Hand-dipped, fried fresh per order", shape: "bhajiya",
      displayItems: [
        { label: "Kanda (Onion) Bhajiya", priceText: "₹80/plate" },
        { label: "Bataka (Potato) Bhajiya", priceText: "₹80/plate" },
        { label: "Mirchi Bhajiya", priceText: "₹90/plate" },
        { label: "Methi-Palak Bhajiya", priceText: "₹90/plate" }
      ]},
    { id: "jalebi", name: "Jalebi", tagline: "Syrup-soaked, straight off the tawa", shape: "jalebi",
      displayItems: [
        { label: "Garam Jalebi", priceText: "₹180/kg" },
        { label: "Khova Jalebi", priceText: "₹240/kg" },
        { label: "Jalebi-Fafda Combo", priceText: "₹100/plate" },
        { label: "Rabdi Jalebi", priceText: "₹220/kg" }
      ]}
  ],
  orderItems: [
    { name: "Tikha Gathiya", pricePerKg: 120 },
    { name: "Sev Gathiya", pricePerKg: 110 },
    { name: "Ratlami Jaadu Gathiya", pricePerKg: 140 },
    { name: "Kanda Bhajiya", pricePerKg: 320 },
    { name: "Bataka Bhajiya", pricePerKg: 320 },
    { name: "Mirchi Bhajiya", pricePerKg: 360 },
    { name: "Garam Jalebi", pricePerKg: 180 },
    { name: "Khova Jalebi", pricePerKg: 240 },
    { name: "Rabdi Jalebi", pricePerKg: 220 }
  ],
  weightOptions: [100, 200, 500, 1000]
};

const SHAPES = {
  gathiya: `<svg viewBox="0 0 200 140"><g transform="translate(30,10)">
      <path d="M0,120 Q8,80 0,40 Q-8,10 0,-10" stroke="#E8A33D" stroke-width="12" fill="none" stroke-linecap="round"/>
      <path d="M24,122 Q32,82 24,42 Q16,12 24,-8" stroke="#DA9530" stroke-width="12" fill="none" stroke-linecap="round"/>
      <path d="M48,120 Q56,80 48,40 Q40,10 48,-10" stroke="#E8A33D" stroke-width="12" fill="none" stroke-linecap="round"/>
      <path d="M72,122 Q80,82 72,42 Q64,12 72,-8" stroke="#DA9530" stroke-width="12" fill="none" stroke-linecap="round"/>
      <path d="M96,120 Q104,80 96,40 Q88,10 96,-10" stroke="#E8A33D" stroke-width="12" fill="none" stroke-linecap="round"/>
      <rect x="-10" y="108" width="118" height="14" rx="6" fill="#6B1E23"/>
    </g></svg>`,
  bhajiya: `<svg viewBox="0 0 200 140"><g transform="translate(100,75)">
      <ellipse cx="-40" cy="10" rx="34" ry="26" fill="#C97F1E"/>
      <ellipse cx="5" cy="-5" rx="36" ry="28" fill="#E8A33D"/>
      <ellipse cx="42" cy="12" rx="30" ry="24" fill="#DA9530"/>
      <g fill="#8a5a1c" opacity="0.5">
        <circle cx="-46" cy="4" r="3"/><circle cx="-28" cy="18" r="3"/>
        <circle cx="0" cy="-12" r="3"/><circle cx="18" cy="4" r="3"/>
        <circle cx="38" cy="2" r="3"/><circle cx="52" cy="18" r="3"/>
      </g></g></svg>`,
  jalebi: `<svg viewBox="0 0 200 140"><g transform="translate(100,70)">
      <path d="M0,-45 m0,-4 a50,50 0 1 1 -35,85 a34,34 0 1 1 25,-58 a20,20 0 1 1 14,35 a8,8 0 1 1 -6,-14"
        fill="none" stroke="#C1440E" stroke-width="11" stroke-linecap="round"/>
      <path d="M0,-45 m0,-4 a50,50 0 1 1 -35,85 a34,34 0 1 1 25,-58 a20,20 0 1 1 14,35 a8,8 0 1 1 -6,-14"
        fill="none" stroke="#F5A623" stroke-width="5" stroke-linecap="round" opacity="0.8"/>
    </g></svg>`
};

const DATA = SHOP_DATA;
const qty = {};      // { itemName: numberOfPacks }
const weight = {};   // { itemName: gramsPerPack }

init();

function init() {
  renderBunting();
  renderBrandAndHero(DATA.shop);
  renderMenu(DATA.menuCategories);
  renderAbout(DATA.shop.story);
  renderPromo(DATA.shop.promo);
  renderLocation(DATA.shop);
  renderFooter(DATA.shop);
  renderOrderItems(DATA.orderItems, DATA.weightOptions);
  wireNav();
  wireReveal();
  wireOrderForm(DATA.shop);
}

function renderBunting() {
  const bunting = document.getElementById('bunting');
  for (let i = 0; i < 28; i++) {
    const f = document.createElement('div');
    f.className = 'flag';
    bunting.appendChild(f);
  }
}

function renderBrandAndHero(shop) {
  document.getElementById('brandNameEn').textContent = shop.name;
  document.getElementById('brandNameGu').textContent = shop.taglineGu;
  document.getElementById('callBtn').href = 'tel:' + shop.phoneDisplay.replace(/\s+/g, '');
  document.getElementById('heroEyebrow').textContent = shop.heroEyebrow;
  document.getElementById('heroHeading').innerHTML =
    `${shop.heroHeadingLine1} <span>${shop.heroHeadingHighlight}</span><br>${shop.heroHeadingLine2}`;
  document.getElementById('heroLead').textContent = shop.heroLead;
}

function renderMenu(categories) {
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = '';
  categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    const items = cat.displayItems.map(it =>
      `<li><span>${it.label}</span><span class="price">${it.priceText}</span></li>`
    ).join('');
    card.innerHTML = `
      <div class="art">${SHAPES[cat.shape] || ''}</div>
      <h3>${cat.name}</h3>
      <div class="tagline">${cat.tagline}</div>
      <ul class="menu-list">${items}</ul>
      <button type="button" class="add-btn" data-jump="${cat.name}">Add to Order</button>
    `;
    grid.appendChild(card);
  });
  grid.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => jumpToOrder(btn.dataset.jump));
  });
}

function renderAbout(story) {
  document.getElementById('storyHeading').textContent = story.heading;
  document.getElementById('storyText').textContent = story.text;
  const statRow = document.getElementById('statRow');
  statRow.innerHTML = story.stats.map(s =>
    `<div class="stat"><div class="num">${s.num}</div><div class="lbl">${s.label}</div></div>`
  ).join('');
  document.getElementById('badgeNameTop').textContent = DATA.shop.name.split(' ')[0] || DATA.shop.name;
  document.getElementById('badgeNameBottom').textContent = DATA.shop.name.split(' ').slice(1).join(' ') || '';
  const sinceStat = story.stats.find(s => /^\d{4}$/.test(s.num));
  document.getElementById('badgeSince').textContent =
    (sinceStat ? `EST. ${sinceStat.num}` : '') + ' • ' + (DATA.shop.address.cityLine.split(',')[0] || '').toUpperCase();
}

function renderPromo(promo) {
  document.getElementById('promoTitle').textContent = promo.title;
  document.getElementById('promoText').textContent = promo.text;
}

function renderLocation(shop) {
  document.getElementById('locShopName').textContent = shop.name;
  document.getElementById('addrLine1').textContent = shop.address.line1;
  document.getElementById('addrLine2').textContent = shop.address.line2;
  document.getElementById('addrNote').textContent = shop.address.note || '';
  document.getElementById('locPhone').textContent = shop.phoneDisplay;
  document.getElementById('phoneNote').textContent = shop.phoneNote || '';
  document.getElementById('mapTitle').textContent = shop.address.mapCardTitle;
  document.getElementById('mapLink').href =
    'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(shop.address.mapsQuery);

  const table = document.getElementById('hoursTable');
  table.innerHTML = shop.hours.map(h => `<tr><td>${h.days}</td><td>${h.time}</td></tr>`).join('');
}

function renderFooter(shop) {
  document.getElementById('footerName').textContent = shop.name;
  document.getElementById('footerLine').textContent = shop.footerLine;
  document.getElementById('footerCopyright').textContent = shop.footerCopyright;
}

/* ---------------- order items with weight + quantity ---------------- */

function renderOrderItems(items, weightOptions) {
  const list = document.getElementById('itemList');
  list.innerHTML = '';
  items.forEach(it => {
    qty[it.name] = 0;
    weight[it.name] = weightOptions[0];

    const row = document.createElement('div');
    row.className = 'item-row';
    row.innerHTML = `
      <div>
        <div class="name">${it.name}</div>
        <span class="per-kg">₹${it.pricePerKg}/kg</span>
      </div>
      <select class="weight-select" data-item="${it.name}">
        ${weightOptions.map(g => `<option value="${g}">${g >= 1000 ? (g / 1000) + ' kg' : g + ' g'}</option>`).join('')}
      </select>
      <div class="qty-block">
        <div class="stepper">
          <button type="button" data-item="${it.name}" data-dir="-1" aria-label="Decrease packs">−</button>
          <span id="qty-${cssSafe(it.name)}">0</span>
          <button type="button" data-item="${it.name}" data-dir="1" aria-label="Increase packs">+</button>
        </div>
        <span class="line-subtotal" id="sub-${cssSafe(it.name)}">₹0</span>
      </div>
    `;
    list.appendChild(row);
  });

  list.querySelectorAll('.weight-select').forEach(sel => {
    sel.addEventListener('change', () => {
      weight[sel.dataset.item] = Number(sel.value);
      updateLine(sel.dataset.item);
      updateTotal();
    });
  });

  list.querySelectorAll('.stepper button').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.item;
      const dir = Number(btn.dataset.dir);
      qty[name] = Math.max(0, qty[name] + dir);
      document.getElementById(`qty-${cssSafe(name)}`).textContent = qty[name];
      updateLine(name);
      updateTotal();
    });
  });
}

function cssSafe(name) {
  return name.replace(/[^a-zA-Z0-9]/g, '');
}

function lineSubtotal(itemName) {
  const item = DATA.orderItems.find(i => i.name === itemName);
  if (!item) return 0;
  return Math.round(item.pricePerKg * (weight[itemName] / 1000) * qty[itemName]);
}

function updateLine(itemName) {
  const el = document.getElementById(`sub-${cssSafe(itemName)}`);
  if (el) el.textContent = '₹' + lineSubtotal(itemName);
}

function updateTotal() {
  const total = DATA.orderItems.reduce((sum, it) => sum + lineSubtotal(it.name), 0);
  document.getElementById('totalAmt').textContent = '₹' + total;
}

function jumpToOrder(category) {
  document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
  const match = DATA.orderItems.find(it => it.name.toLowerCase().includes(category.toLowerCase().slice(0, 4)));
  if (match) {
    qty[match.name] += 1;
    document.getElementById(`qty-${cssSafe(match.name)}`).textContent = qty[match.name];
    updateLine(match.name);
    updateTotal();
  }
}

/* ---------------- nav + reveal ---------------- */

function wireNav() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navMenu');
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

function wireReveal() {
  const revealEls = document.querySelectorAll('.reveal, .menu-card');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
}

/* ---------------- order form submit -> WhatsApp ---------------- */

function wireOrderForm(shop) {
  const orderTypeRadios = document.querySelectorAll('input[name="orderType"]');
  const addressField = document.getElementById('addressField');
  orderTypeRadios.forEach(r => r.addEventListener('change', () => {
    const isDelivery = document.querySelector('input[name="orderType"]:checked').value === 'Delivery';
    addressField.classList.toggle('field-hidden', !isDelivery);
  }));

  document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const orderType = document.querySelector('input[name="orderType"]:checked').value;
    const address = document.getElementById('custAddress').value.trim();
    const note = document.getElementById('custNote').value.trim();

    const chosen = DATA.orderItems.filter(it => qty[it.name] > 0).map(it => {
      const w = weight[it.name];
      const wLabel = w >= 1000 ? (w / 1000) + 'kg' : w + 'g';
      return `- ${it.name} — ${wLabel} x${qty[it.name]} = ₹${lineSubtotal(it.name)}`;
    });

    if (chosen.length === 0) {
      alert('Please select at least one item and quantity before ordering.');
      return;
    }

    const total = DATA.orderItems.reduce((sum, it) => sum + lineSubtotal(it.name), 0);

    let msg = `🧾 *New Order — ${shop.name}*\n\n`;
    msg += `Name: ${name}\nPhone: ${phone}\nType: ${orderType}\n`;
    if (orderType === 'Delivery') msg += `Address: ${address}\n`;
    msg += `\nItems:\n${chosen.join('\n')}\n\nTotal: ₹${total}`;
    if (note) msg += `\n\nNote: ${note}`;

    const url = `https://wa.me/${shop.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  });
}
