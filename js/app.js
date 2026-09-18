/**
 * TÁBOA BRASIL - VITRINE DIGITAL & SACOLA DE PEDIDOS VIA WHATSAPP
 * Número oficial de atendimento: +55 35 9216-2123
 */

// ==========================================================================
// 1. BASE CENTRALIZADA DE PRODUTOS REAIS
// ==========================================================================
const productsData = [
  {
    id: 'cesta-cafe-manha',
    name: 'Cesta de Café da Manhã em Taboa',
    category: 'cestos',
    categoryLabel: 'Cestos & Presentes',
    price: 98.00,
    image: 'assets/cesta-cafe-manha.jpg',
    badge: 'Destaque',
    dimensions: 'Aprox. 38 cm de comprimento x 26 cm de largura x 16 cm de altura',
    material: 'Fibra vegetal 100% pura de taboa mineira colhida ao natural',
    finish: 'Trançado artesanal oval reforçado com alças laterais firmes',
    description: 'A peça perfeita para surpreender com um café da manhã afetivo, presentear alguém especial ou fazer um piquenique inesquecível ao ar livre. Espaçosa e estruturada, acomoda guloseimas, pães, frutas e mimos com todo o encanto do artesanato mineiro.',
    care: 'Limpar com pano macio seco ou levemente umedecido. Guardar em local seco e arejado.'
  },
  {
    id: 'bolsa-meia-lua',
    name: 'Bolsa Meia Lua Média',
    category: 'bolsas',
    categoryLabel: 'Bolsas',
    price: 89.90,
    image: 'assets/bolsa-meia-lua.jpg',
    badge: 'Mais Pedida',
    dimensions: 'Aprox. 32 cm de largura x 22 cm de altura',
    material: 'Fibra vegetal 100% pura de taboa colhida ao natural',
    finish: 'Trama trançada manual com alça de ombro confortável',
    description: 'Design contemporâneo em formato meia-lua que une o charme rústico à elegância urbana. Ideal para passeios, viagens e eventos diurnos, valorizando qualquer visual com sua textura natural autêntica.',
    care: 'Limpar apenas com pano levemente umedecido e secar à sombra em local ventilado.'
  },
  {
    id: 'bolsa-amarela',
    name: 'Bolsa com Detalhes Amarelos',
    category: 'bolsas',
    categoryLabel: 'Bolsas',
    price: 79.90,
    image: 'assets/bolsa-amarela.jpg',
    badge: 'Destaque',
    dimensions: 'Aprox. 28 cm de diâmetro x 18 cm de profundidade',
    material: 'Palha de taboa natural e tingimento artesanal',
    finish: 'Trançado fechado com detalhes vibrantes na cor mostarda solar',
    description: 'Um toque de luminosidade e brasilidade. A fibra de taboa com detalhes em tom mostarda traz vida e personalidade, harmonizando a tradição do trabalho manual com uma proposta moderna e descontraída.',
    care: 'Evitar imersão em água corrente. Guardar em local seco e arejado.'
  },
  {
    id: 'bolsa-roxa',
    name: 'Bolsa com Detalhes Roxos',
    category: 'bolsas',
    categoryLabel: 'Bolsas',
    price: 79.90,
    image: 'assets/bolsa-roxa.jpg',
    badge: 'Edição Especial',
    dimensions: 'Aprox. 28 cm de diâmetro x 18 cm de profundidade',
    material: 'Palha de taboa natural e tingimento vegetal',
    finish: 'Bordas e frisos artesanais em tonalidade violeta elegante',
    description: 'Sofisticação e contraste sutil. O encontro da cor natural da palha seca com o violeta cria uma peça marcante para quem busca autenticidade no dia a dia.',
    care: 'Preservar da umidade constante para manter o brilho e a firmeza da fibra.'
  },
  {
    id: 'bolsa-tradicional',
    name: 'Bolsa de Ombro em Taboa',
    category: 'bolsas',
    categoryLabel: 'Bolsas',
    price: 69.90,
    image: 'assets/bolsa-tradicional.jpg',
    badge: 'Clássica',
    dimensions: 'Aprox. 34 cm de largura x 28 cm de altura',
    material: 'Palha de taboa trançada em ponto firme',
    finish: 'Alças duplas estruturadas e reforço de fundo',
    description: 'A clássica tote bag artesanal. Espaçosa, leve e versátil, perfeita para a feira, praia, clube ou como bolsa principal de quem ama elementos naturais.',
    care: 'Limpeza suave com escova de cerdas macias ou pano úmido.'
  },
  {
    id: 'cesto-gg',
    name: 'Cesto GG em Palha de Taboa',
    category: 'cestos',
    categoryLabel: 'Cestos',
    price: 115.00,
    image: 'assets/cesto-gg.jpg',
    badge: 'Decor & Organização',
    dimensions: 'Aprox. 40 cm de diâmetro x 38 cm de altura',
    material: 'Fibras grossas de taboa trançadas em espiral reforçada',
    finish: 'Alças laterais embutidas de alta resistência',
    description: 'O coringa da decoração afetiva. Perfeito para organizar mantas na sala, toalhas no banheiro, brinquedos no quarto infantil ou acolher um vaso de planta de grande porte (cachepô).',
    care: 'Caso receba umidade acidental, deixe secar completamente ao ar livre.'
  },
  {
    id: 'luminaria-cone',
    name: 'Luminária Cone Artesanal',
    category: 'decoracao',
    categoryLabel: 'Decoração',
    price: 139.00,
    image: 'assets/luminaria-cone.jpg',
    badge: 'Design de Luz',
    dimensions: 'Aprox. 30 cm de diâmetro da base x 45 cm de altura',
    material: 'Hastes selecionadas de taboa trançadas sobre aro',
    finish: 'Trama semiaberta que filtra a luz criando efeitos acolhedores',
    description: 'Peça escultural que projeta sombras orgânicas e calor aconchegante sobre mesas de jantar, salas e varandas cobertas. Transforma o ambiente com atmosfera acolhedora e intimista.',
    care: 'Usar com lâmpadas LED que não aquecem em excesso. Limpar periodicamente com espanador macio.'
  },
  {
    id: 'sousplat-espiral',
    name: 'Sousplat Trançado em Taboa',
    category: 'decoracao',
    categoryLabel: 'Decoração & Mesa',
    price: 22.90,
    image: 'assets/bolsa-tradicional.jpg',
    badge: 'Mesa Posta',
    dimensions: 'Aprox. 35 cm de diâmetro',
    material: 'Fibra vegetal 100% pura de taboa brasileira',
    finish: 'Trançado manual reforçado em espiral contínua',
    description: 'Protege a mesa contra o calor dos pratos e transforma refeições em momentos especiais. Harmoniza com louças claras, cerâmicas e guardanapos de linho ou algodão.',
    care: 'Higienização simples com pano levemente úmido. Não colocar na lava-louças.'
  },
  {
    id: 'cesto-redondo-medio',
    name: 'Cesto Organizador para Pães e Mesa',
    category: 'cestos',
    categoryLabel: 'Cestos',
    price: 38.00,
    image: 'assets/cesto-gg.jpg',
    badge: 'Utilitário',
    dimensions: 'Aprox. 24 cm de diâmetro x 12 cm de altura',
    material: 'Fibra de taboa estruturada',
    finish: 'Borda arredondada suave e base estável',
    description: 'Ideal para compor a mesa de café da manhã servindo pães, biscoitos e frutas, ou para organizar itens de uso diário na bancada com charme artesanal.',
    care: 'Evite o contato direto prolongado com alimentos muito gordurosos sem guardanapo de apoio.'
  }
];

// ==========================================================================
// 2. ESTADO DA SACOLA (LOCALSTORAGE)
// ==========================================================================
const STORAGE_KEY = 'taboa_brasil_order';
const WHATSAPP_PHONE = '553592162123'; // +55 35 9216-2123

// Carrinho: { [productId]: quantity }
let orderItems = {};

function loadOrderFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      orderItems = JSON.parse(saved) || {};
    }
  } catch (e) {
    console.error('Erro ao carregar pedido do localStorage', e);
    orderItems = {};
  }
}

function saveOrderToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orderItems));
  } catch (e) {
    console.error('Erro ao salvar pedido no localStorage', e);
  }
}

// ==========================================================================
// 3. ESTADO GLOBAL DO CATÁLOGO & INICIALIZAÇÃO
// ==========================================================================
let currentFilter = 'all';
let currentViewMode = 'list'; // Padrão: Lista Interativa com expansão ao clique
let expandedProductId = null; // ID da peça atualmente expandida em card
document.addEventListener('DOMContentLoaded', () => {
  loadOrderFromStorage();
  initHeader();
  initViewToggle();
  renderProducts(currentFilter, currentViewMode);
  initCategoryFilters();
  initOrderDrawer();
  initProductModal();
  initFaqAccordion();
  initSmoothScroll();
  updateOrderBadge();
});

// ==========================================================================
// 4. HEADER E NAVEGAÇÃO
// ==========================================================================
function initHeader() {
  const header = document.querySelector('.site-header');
  const cartButtons = document.querySelectorAll('.btn-open-cart');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  cartButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openOrderDrawer();
    });
  });
}

// ==========================================================================
// 5. ALTERNADOR DE VISUALIZAÇÃO (LISTA / GRADE)
// ==========================================================================
function initViewToggle() {
  const btnList = document.getElementById('view-toggle-list');
  const btnGrid = document.getElementById('view-toggle-grid');
  const gridEl = document.getElementById('products-grid');

  btnList?.addEventListener('click', () => {
    if (currentViewMode === 'list') return;
    currentViewMode = 'list';
    btnList.classList.add('active');
    btnList.setAttribute('aria-pressed', 'true');
    btnGrid?.classList.remove('active');
    btnGrid?.setAttribute('aria-pressed', 'false');
    gridEl?.classList.remove('catalog-grid-mode');
    gridEl?.classList.add('catalog-list-mode');
    renderProducts(currentFilter, 'list');
  });

  btnGrid?.addEventListener('click', () => {
    if (currentViewMode === 'grid') return;
    currentViewMode = 'grid';
    btnGrid.classList.add('active');
    btnGrid.setAttribute('aria-pressed', 'true');
    btnList?.classList.remove('active');
    btnList?.setAttribute('aria-pressed', 'false');
    gridEl?.classList.remove('catalog-list-mode');
    gridEl?.classList.add('catalog-grid-mode');
    renderProducts(currentFilter, 'grid');
  });
}

// ==========================================================================
// 6. RENDERIZAÇÃO DO CATÁLOGO DE PRODUTOS (LISTA OU GRADE)
// ==========================================================================
function renderProducts(filter = currentFilter, viewMode = currentViewMode) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  currentFilter = filter;
  currentViewMode = viewMode;

  const filtered = filter === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === filter);

  grid.innerHTML = '';

  if (viewMode === 'list') {
    renderListView(grid, filtered);
  } else {
    renderGridView(grid, filtered);
  }
}

// Renderização em Lista Interativa (Clique abre o Card)
function renderListView(container, products) {
  products.forEach(product => {
    const isExpanded = (product.id === expandedProductId);
    const row = document.createElement('article');
    row.className = `catalog-item-row ${isExpanded ? 'is-expanded' : ''}`;
    row.setAttribute('data-id', product.id);
    row.setAttribute('data-category', product.category);

    row.innerHTML = `
      <!-- Cabeçalho em Linha da Peça (Clique para abrir card) -->
      <div class="item-header-bar" role="button" tabindex="0" aria-expanded="${isExpanded}" aria-label="Abrir card de ${product.name}">
        <div class="item-header-main">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="item-list-thumb" 
            loading="lazy" 
            width="58" 
            height="58"
          />
          <div class="item-list-text">
            <div class="item-list-meta">
              <span class="item-list-category">${product.categoryLabel}</span>
              ${product.badge ? `<span class="item-list-badge">${product.badge}</span>` : ''}
            </div>
            <h3 class="item-list-title">${product.name}</h3>
            <p class="item-list-specs-preview">${product.dimensions} • 100% Pura Taboa Natural</p>
          </div>
        </div>

        <div class="item-header-action">
          <span class="item-list-price">${formatCurrency(product.price)}</span>
          <button type="button" class="btn-toggle-expand" tabindex="-1">
            <span class="btn-toggle-text">${isExpanded ? 'Recolher' : 'Ver card'}</span>
            <svg class="expand-chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <!-- Card Expandido com Animação Suave -->
      <div class="item-expand-wrapper">
        <div class="item-expand-inner">
          <div class="item-expanded-card">
            
            <!-- Coluna Visual -->
            <div class="expanded-img-col">
              ${product.badge ? `<span class="expanded-badge">${product.badge}</span>` : ''}
              <img 
                src="${product.image}" 
                alt="${product.name}" 
                class="expanded-card-img" 
                loading="lazy" 
                width="420" 
                height="420" 
              />
            </div>

            <!-- Coluna de Detalhes e Pedido -->
            <div class="expanded-info-col">
              <div class="expanded-card-top">
                <div>
                  <span class="item-list-category">${product.categoryLabel}</span>
                  <h3 class="expanded-card-title">${product.name}</h3>
                </div>
                <button type="button" class="btn-close-expanded-card" aria-label="Recolher card de ${product.name}" title="Recolher card">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <p class="expanded-card-desc">${product.description}</p>

              <!-- Especificações da Peça -->
              <div class="expanded-specs-grid">
                <div class="spec-box">
                  <span class="spec-box-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                    Dimensões
                  </span>
                  <span class="spec-box-val">${product.dimensions}</span>
                </div>

                <div class="spec-box">
                  <span class="spec-box-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    Material
                  </span>
                  <span class="spec-box-val">${product.material}</span>
                </div>

                <div class="spec-box">
                  <span class="spec-box-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    Acabamento
                  </span>
                  <span class="spec-box-val">${product.finish}</span>
                </div>

                <div class="spec-box">
                  <span class="spec-box-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                    Origem
                  </span>
                  <span class="spec-box-val">Minas Gerais • Feito à Mão</span>
                </div>
              </div>

              <!-- Dica de Cuidado -->
              <div class="expanded-care-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                <span><strong>Cuidados:</strong> ${product.care}</span>
              </div>

              <!-- Ações de Compra e Quantidade -->
              <div class="expanded-action-bar">
                <div class="expanded-price-group">
                  <span class="expanded-price-label">Preço da peça</span>
                  <span class="expanded-card-price">${formatCurrency(product.price)}</span>
                </div>

                <div class="expanded-actions-right">
                  <div class="expanded-qty-selector">
                    <button type="button" class="expanded-qty-btn btn-qty-minus" aria-label="Diminuir quantidade">−</button>
                    <span class="expanded-qty-val">1</span>
                    <button type="button" class="expanded-qty-btn btn-qty-plus" aria-label="Aumentar quantidade">+</button>
                  </div>

                  <button type="button" class="expanded-btn-add">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    <span class="btn-text">+ Adicionar ao pedido</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    `;

    // Eventos do Item da Lista e do Card Expandido
    let localQty = 1;
    const headerBar = row.querySelector('.item-header-bar');
    const closeCardBtn = row.querySelector('.btn-close-expanded-card');
    const toggleText = row.querySelector('.btn-toggle-text');
    const qtyValEl = row.querySelector('.expanded-qty-val');
    const qtyMinusBtn = row.querySelector('.btn-qty-minus');
    const qtyPlusBtn = row.querySelector('.btn-qty-plus');
    const addBtn = row.querySelector('.expanded-btn-add');

    function toggleExpand() {
      const willExpand = !row.classList.contains('is-expanded');

      // Fecha outros itens para manter o layout limpo (efeito acordeão)
      document.querySelectorAll('.catalog-item-row.is-expanded').forEach(other => {
        if (other !== row) {
          other.classList.remove('is-expanded');
          const otherBar = other.querySelector('.item-header-bar');
          otherBar?.setAttribute('aria-expanded', 'false');
          const otherText = other.querySelector('.btn-toggle-text');
          if (otherText) otherText.textContent = 'Ver card';
        }
      });

      if (willExpand) {
        row.classList.add('is-expanded');
        headerBar.setAttribute('aria-expanded', 'true');
        if (toggleText) toggleText.textContent = 'Recolher';
        expandedProductId = product.id;

        // Rolagem suave para manter o card confortável no campo de visão
        setTimeout(() => {
          const rect = row.getBoundingClientRect();
          if (rect.top < 80) {
            window.scrollBy({ top: rect.top - 80, behavior: 'smooth' });
          }
        }, 120);
      } else {
        row.classList.remove('is-expanded');
        headerBar.setAttribute('aria-expanded', 'false');
        if (toggleText) toggleText.textContent = 'Ver card';
        expandedProductId = null;
      }
    }

    headerBar.addEventListener('click', toggleExpand);
    headerBar.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleExpand();
      }
    });

    closeCardBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      row.classList.remove('is-expanded');
      headerBar.setAttribute('aria-expanded', 'false');
      if (toggleText) toggleText.textContent = 'Ver card';
      expandedProductId = null;
    });

    qtyMinusBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (localQty > 1) {
        localQty--;
        if (qtyValEl) qtyValEl.textContent = localQty;
      }
    });

    qtyPlusBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      localQty++;
      if (qtyValEl) qtyValEl.textContent = localQty;
    });

    addBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      addToOrder(product.id, localQty);
      animateAddButton(addBtn);
    });

    container.appendChild(row);
  });
}

// Renderização Tradicional em Grade de Cards
function renderGridView(container, products) {
  products.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-id', product.id);
    card.setAttribute('data-category', product.category);

    card.innerHTML = `
      <div class="product-image-container" data-action="open-modal" data-id="${product.id}" tabindex="0" role="button" aria-label="Ver detalhes de ${product.name}">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="product-image" 
          loading="lazy" 
          width="400" 
          height="400" 
        />
        <div class="product-image-overlay">
          <span class="overlay-text">Ver detalhes</span>
        </div>
      </div>

      <div class="product-body">
        <span class="product-category-tag">${product.categoryLabel}</span>
        <h3 class="product-title" data-action="open-modal" data-id="${product.id}" tabindex="0" role="button">${product.name}</h3>
        
        <div class="product-pricing">
          <span class="product-price">${formatCurrency(product.price)}</span>
        </div>

        <button type="button" class="btn-add-to-order" data-id="${product.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span class="btn-text">+ Adicionar ao pedido</span>
        </button>
      </div>
    `;

    const addBtn = card.querySelector('.btn-add-to-order');
    addBtn.addEventListener('click', () => {
      addToOrder(product.id, 1);
      animateAddButton(addBtn);
    });

    const triggerElements = card.querySelectorAll('[data-action="open-modal"]');
    triggerElements.forEach(el => {
      el.addEventListener('click', () => openProductModal(product.id));
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProductModal(product.id);
        }
      });
    });

    container.appendChild(card);
  });
}

// Animação de feedback no botão de adicionar
function animateAddButton(button) {
  const originalText = button.querySelector('.btn-text');
  if (!originalText) return;

  button.classList.add('added');
  originalText.textContent = 'Adicionado ✓';

  showToast('Peça adicionada ao seu pedido!');

  setTimeout(() => {
    button.classList.remove('added');
    originalText.textContent = '+ Adicionar ao pedido';
  }, 1500);
}

// ==========================================================================
// 7. FILTRO DE CATEGORIAS
// ==========================================================================
function initCategoryFilters() {
  const filterButtons = document.querySelectorAll('.category-pill');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category') || 'all';
      
      const grid = document.getElementById('products-grid');
      if (grid) {
        grid.style.opacity = '0.4';
        grid.style.transform = 'translateY(6px)';
        setTimeout(() => {
          renderProducts(category, currentViewMode);
          grid.style.opacity = '1';
          grid.style.transform = 'translateY(0)';
        }, 150);
      }
    });
  });
}

// ==========================================================================
// 7. GESTÃO DA SACOLA DE PEDIDOS ("MEU PEDIDO")
// ==========================================================================
function addToOrder(productId, quantity = 1) {
  const current = orderItems[productId] || 0;
  orderItems[productId] = current + quantity;
  saveOrderToStorage();
  updateOrderBadge();
  renderOrderDrawer();
}

function updateQuantity(productId, newQty) {
  if (newQty <= 0) {
    removeFromOrder(productId);
  } else {
    orderItems[productId] = newQty;
    saveOrderToStorage();
    updateOrderBadge();
    renderOrderDrawer();
  }
}

function removeFromOrder(productId) {
  delete orderItems[productId];
  saveOrderToStorage();
  updateOrderBadge();
  renderOrderDrawer();
}

function getTotalCount() {
  return Object.values(orderItems).reduce((sum, qty) => sum + qty, 0);
}

function calculateOrderTotal() {
  let total = 0;
  for (const [id, qty] of Object.entries(orderItems)) {
    const prod = productsData.find(p => p.id === id);
    if (prod) {
      total += prod.price * qty;
    }
  }
  return total;
}

function updateOrderBadge() {
  const count = getTotalCount();
  const badges = document.querySelectorAll('.order-count-badge');
  badges.forEach(badge => {
    badge.textContent = count;
    if (count > 0) {
      badge.classList.add('has-items');
    } else {
      badge.classList.remove('has-items');
    }
  });

  const cartHeaderBtnText = document.querySelector('.header-cart-text');
  if (cartHeaderBtnText) {
    cartHeaderBtnText.textContent = `Meu pedido ${count}`;
  }
}

// ==========================================================================
// 8. RENDERIZAÇÃO DO DRAWER ("MEU PEDIDO")
// ==========================================================================
function initOrderDrawer() {
  const drawer = document.getElementById('order-drawer');
  const overlay = document.getElementById('order-drawer-overlay');
  const closeBtn = document.getElementById('order-drawer-close');
  const emptyCtaBtn = document.getElementById('btn-empty-see-pieces');
  const whatsappSendBtn = document.getElementById('btn-send-whatsapp-order');

  closeBtn?.addEventListener('click', closeOrderDrawer);
  overlay?.addEventListener('click', closeOrderDrawer);

  emptyCtaBtn?.addEventListener('click', () => {
    closeOrderDrawer();
    const catalogEl = document.getElementById('catalogo');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer?.classList.contains('active')) {
      closeOrderDrawer();
    }
  });

  whatsappSendBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    sendOrderToWhatsApp();
  });
}

function openOrderDrawer() {
  const drawer = document.getElementById('order-drawer');
  const overlay = document.getElementById('order-drawer-overlay');
  renderOrderDrawer();
  drawer?.classList.add('active');
  overlay?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeOrderDrawer() {
  const drawer = document.getElementById('order-drawer');
  const overlay = document.getElementById('order-drawer-overlay');
  drawer?.classList.remove('active');
  overlay?.classList.remove('active');
  document.body.style.overflow = '';
}

function renderOrderDrawer() {
  const listContainer = document.getElementById('order-items-list');
  const emptyState = document.getElementById('order-empty-state');
  const footerContainer = document.getElementById('order-drawer-footer');
  const totalAmountEl = document.getElementById('order-total-amount');
  const totalCountEl = document.getElementById('order-total-items-count');

  if (!listContainer) return;

  const totalCount = getTotalCount();
  const entries = Object.entries(orderItems);

  if (entries.length === 0) {
    listContainer.innerHTML = '';
    emptyState?.classList.remove('hidden');
    footerContainer?.classList.add('hidden');
    if (totalCountEl) totalCountEl.textContent = '0 itens';
    return;
  }

  emptyState?.classList.add('hidden');
  footerContainer?.classList.remove('hidden');

  if (totalCountEl) {
    totalCountEl.textContent = `${totalCount} ${totalCount === 1 ? 'item' : 'itens'}`;
  }

  listContainer.innerHTML = '';

  entries.forEach(([id, qty]) => {
    const product = productsData.find(p => p.id === id);
    if (!product) return;

    const subtotal = product.price * qty;

    const row = document.createElement('div');
    row.className = 'order-item-row';
    row.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="order-item-thumb" width="64" height="64" />
      
      <div class="order-item-info">
        <h4 class="order-item-title">${product.name}</h4>
        <span class="order-item-unit">${formatCurrency(product.price)} un.</span>
        
        <div class="order-item-controls">
          <div class="qty-selector">
            <button type="button" class="qty-btn btn-minus" data-id="${product.id}" aria-label="Diminuir quantidade">−</button>
            <span class="qty-value">${qty}</span>
            <button type="button" class="qty-btn btn-plus" data-id="${product.id}" aria-label="Aumentar quantidade">+</button>
          </div>
          <span class="order-item-subtotal">${formatCurrency(subtotal)}</span>
        </div>
      </div>

      <button type="button" class="btn-remove-item" data-id="${product.id}" aria-label="Remover ${product.name} do pedido">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
      </button>
    `;

    // Eventos de quantidade
    row.querySelector('.btn-minus')?.addEventListener('click', () => updateQuantity(product.id, qty - 1));
    row.querySelector('.btn-plus')?.addEventListener('click', () => updateQuantity(product.id, qty + 1));
    row.querySelector('.btn-remove-item')?.addEventListener('click', () => removeFromOrder(product.id));

    listContainer.appendChild(row);
  });

  const total = calculateOrderTotal();
  if (totalAmountEl) {
    totalAmountEl.textContent = formatCurrency(total);
  }
}

// ==========================================================================
// 9. ENVIO DO PEDIDO ORGANIZADO PELO WHATSAPP
// ==========================================================================
function generateWhatsAppMessage() {
  const entries = Object.entries(orderItems);
  if (entries.length === 0) return '';

  let lines = [];
  lines.push('Olá! Gostaria de fazer um pedido da Táboa Brasil.\n');
  lines.push('*Meu pedido:*');

  entries.forEach(([id, qty]) => {
    const product = productsData.find(p => p.id === id);
    if (product) {
      const sub = product.price * qty;
      lines.push(`• ${qty}x ${product.name} — ${formatCurrency(product.price)} cada (Subtotal: ${formatCurrency(sub)})`);
    }
  });

  const total = calculateOrderTotal();
  lines.push(`\n*Total estimado: ${formatCurrency(total)}*`);
  lines.push('\nGostaria de confirmar a disponibilidade e os detalhes do pedido. 😊');

  return lines.join('\n');
}

function sendOrderToWhatsApp() {
  const count = getTotalCount();
  if (count === 0) {
    showToast('Seu pedido está vazio. Escolha suas peças primeiro!');
    return;
  }

  const message = generateWhatsAppMessage();
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;

  window.open(url, '_blank', 'noopener,noreferrer');
}

// ==========================================================================
// 10. MODAL DE DETALHES RÁPIDOS DO PRODUTO
// ==========================================================================
function initProductModal() {
  const modal = document.getElementById('product-modal');
  const overlay = document.getElementById('product-modal-overlay');
  const closeBtn = document.getElementById('modal-close-btn');

  const modalImg = document.getElementById('modal-product-img');
  const modalCategory = document.getElementById('modal-product-category');
  const modalTitle = document.getElementById('modal-product-title');
  const modalPrice = document.getElementById('modal-product-price');
  const modalDimensions = document.getElementById('modal-product-dimensions');
  const modalMaterial = document.getElementById('modal-product-material');
  const modalFinish = document.getElementById('modal-product-finish');
  const modalDescription = document.getElementById('modal-product-description');
  const modalCare = document.getElementById('modal-product-care');
  const modalQtyVal = document.getElementById('modal-qty-value');
  const modalMinus = document.getElementById('modal-qty-minus');
  const modalPlus = document.getElementById('modal-qty-plus');
  const modalAddBtn = document.getElementById('modal-add-to-order-btn');

  let currentModalProduct = null;
  let currentModalQty = 1;

  window.openProductModal = function(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product || !modal) return;

    currentModalProduct = product;
    currentModalQty = 1;

    if (modalImg) {
      modalImg.src = product.image;
      modalImg.alt = product.name;
    }
    if (modalCategory) modalCategory.textContent = product.categoryLabel;
    if (modalTitle) modalTitle.textContent = product.name;
    if (modalPrice) modalPrice.textContent = formatCurrency(product.price);
    if (modalDimensions) modalDimensions.textContent = product.dimensions;
    if (modalMaterial) modalMaterial.textContent = product.material;
    if (modalFinish) modalFinish.textContent = product.finish;
    if (modalDescription) modalDescription.textContent = product.description;
    if (modalCare) modalCare.textContent = product.care;
    if (modalQtyVal) modalQtyVal.textContent = '1';

    modal.classList.add('active');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    modal?.classList.remove('active');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalMinus?.addEventListener('click', () => {
    if (currentModalQty > 1) {
      currentModalQty--;
      if (modalQtyVal) modalQtyVal.textContent = currentModalQty;
    }
  });

  modalPlus?.addEventListener('click', () => {
    currentModalQty++;
    if (modalQtyVal) modalQtyVal.textContent = currentModalQty;
  });

  modalAddBtn?.addEventListener('click', () => {
    if (currentModalProduct) {
      addToOrder(currentModalProduct.id, currentModalQty);
      closeModal();
      showToast(`${currentModalQty}x ${currentModalProduct.name} adicionado ao pedido!`);
      openOrderDrawer();
    }
  });

  closeBtn?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closeModal();
    }
  });
}

// ==========================================================================
// 11. ACCORDION DE PERGUNTAS FREQUENTES (FAQ)
// ==========================================================================
function initFaqAccordion() {
  const faqButtons = document.querySelectorAll('.faq-question-btn');

  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (!item) return;

      const isActive = item.classList.contains('active');

      // Fechar os demais
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const panel = other.querySelector('.faq-answer-panel');
          if (panel) panel.style.maxHeight = null;
        }
      });

      if (!isActive) {
        item.classList.add('active');
        const panel = item.querySelector('.faq-answer-panel');
        if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        const panel = item.querySelector('.faq-answer-panel');
        if (panel) panel.style.maxHeight = null;
      }
    });
  });
}

// ==========================================================================
// 12. NOTIFICAÇÃO TOAST RÁPIDA
// ==========================================================================
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('notification-toast');
  const toastText = document.getElementById('toast-message-text');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('visible');

  if (toastTimer) clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove('visible');
  }, 2800);
}

// ==========================================================================
// 13. SCROLL SUAVE
// ==========================================================================
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href !== '#' && href.startsWith('#')) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          closeOrderDrawer();

          const headerHeight = document.querySelector('.site-header')?.offsetHeight || 70;
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// ==========================================================================
// 14. UTILITÁRIOS
// ==========================================================================
function formatCurrency(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}
