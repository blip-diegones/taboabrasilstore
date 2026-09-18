/**
 * TÁBOA BRASIL - LÓGICA DO PAINEL ADMINISTRATIVO MOBILE-FIRST
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. SISTEMA DE SEGURANÇA POR PIN
  // ==========================================================================
  const PIN_STORAGE_KEY = 'taboa_admin_pin';
  const SESSION_AUTH_KEY = 'taboa_admin_auth';
  const DEFAULT_PIN = '1234';

  function getStoredPin() {
    return localStorage.getItem(PIN_STORAGE_KEY) || DEFAULT_PIN;
  }

  let enteredPin = '';
  const lockScreen = document.getElementById('admin-lock-screen');
  const errorMsgEl = document.getElementById('lock-error-msg');
  const pinDots = [
    document.getElementById('dot-0'),
    document.getElementById('dot-1'),
    document.getElementById('dot-2'),
    document.getElementById('dot-3')
  ];

  function updatePinDots() {
    pinDots.forEach((dot, index) => {
      if (index < enteredPin.length) {
        dot.classList.add('filled');
      } else {
        dot.classList.remove('filled');
      }
    });
  }

  function handleKeypadPress(key) {
    errorMsgEl.textContent = '';
    if (enteredPin.length < 4) {
      enteredPin += key;
      updatePinDots();

      if (enteredPin.length === 4) {
        verifyPin();
      }
    }
  }

  function handleBackspace() {
    errorMsgEl.textContent = '';
    if (enteredPin.length > 0) {
      enteredPin = enteredPin.slice(0, -1);
      updatePinDots();
    }
  }

  function handleClear() {
    errorMsgEl.textContent = '';
    enteredPin = '';
    updatePinDots();
  }

  function verifyPin() {
    const validPin = getStoredPin();
    if (enteredPin === validPin) {
      // Autenticado com sucesso
      sessionStorage.setItem(SESSION_AUTH_KEY, 'true');
      lockScreen.classList.add('hidden');
      enteredPin = '';
      updatePinDots();
      loadAdminData();
      showToast('Bem-vindo ao Painel Táboa Brasil!', 'success');
    } else {
      errorMsgEl.textContent = 'PIN incorreto. Tente novamente.';
      // Efeito de vibração visual
      enteredPin = '';
      setTimeout(() => updatePinDots(), 300);
    }
  }

  // Eventos do Teclado em Tela
  document.querySelectorAll('.pin-btn[data-key]').forEach(btn => {
    btn.addEventListener('click', () => handleKeypadPress(btn.getAttribute('data-key')));
  });
  document.getElementById('btn-backspace-pin')?.addEventListener('click', handleBackspace);
  document.getElementById('btn-clear-pin')?.addEventListener('click', handleClear);

  // Suporte a teclado físico
  window.addEventListener('keydown', (e) => {
    if (!lockScreen.classList.contains('hidden')) {
      if (e.key >= '0' && e.key <= '9') {
        handleKeypadPress(e.key);
      } else if (e.key === 'Backspace') {
        handleBackspace();
      } else if (e.key === 'Escape') {
        handleClear();
      }
    }
  });

  // Botão de Bloquear / Sair
  document.getElementById('btn-lock-admin')?.addEventListener('click', () => {
    sessionStorage.removeItem(SESSION_AUTH_KEY);
    lockScreen.classList.remove('hidden');
    handleClear();
  });

  // Checagem de Sessão Existente
  if (sessionStorage.getItem(SESSION_AUTH_KEY) === 'true') {
    lockScreen.classList.add('hidden');
    loadAdminData();
  }

  // ==========================================================================
  // 2. GESTÃO E RENDERIZAÇÃO DO CATÁLOGO
  // ==========================================================================
  let currentProducts = [];
  const productListEl = document.getElementById('admin-product-list');
  const searchInput = document.getElementById('admin-search-input');
  const statTotalEl = document.getElementById('stat-total-products');
  const statActiveEl = document.getElementById('stat-active-products');
  const statPausedEl = document.getElementById('stat-paused-products');
  const badgeEl = document.getElementById('storage-mode-badge');

  async function loadAdminData() {
    if (window.ProductsStore.isCloudActive()) {
      badgeEl.textContent = '☁️ Nuvem Online';
      badgeEl.style.backgroundColor = '#2e7d32';
    } else {
      badgeEl.textContent = 'Modo Local';
    }

    currentProducts = await window.ProductsStore.getProducts(false);
    updateStats();
    renderProductList(currentProducts);
  }

  function updateStats() {
    const total = currentProducts.length;
    const active = currentProducts.filter(p => p.active !== false).length;
    const paused = total - active;

    statTotalEl.textContent = total;
    statActiveEl.textContent = active;
    statPausedEl.textContent = paused;
  }

  function formatCurrency(val) {
    return Number(val || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  function renderProductList(list) {
    if (!productListEl) return;

    if (list.length === 0) {
      productListEl.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; background: #ffffff; border-radius: 14px; border: 1px dashed #dcd3c8;">
          <p style="color: #736960; font-weight: 600; margin-bottom: 12px;">Nenhuma peça encontrada.</p>
          <button type="button" class="btn-add-product" style="display: inline-flex;" onclick="document.getElementById('btn-open-create-modal').click()">
            + Cadastrar Nova Peça
          </button>
        </div>
      `;
      return;
    }

    productListEl.innerHTML = list.map(prod => {
      const isPaused = prod.active === false;
      const displayPrice = formatCurrency(prod.price);
      const imgUrl = prod.image || 'assets/cesta-cafe-manha.png';
      const categoryLabel = prod.categoryLabel || (prod.category === 'bolsas' ? 'Bolsas' : prod.category === 'cestos' ? 'Cestos' : 'Decoração');

      return `
        <article class="adm-product-card ${isPaused ? 'paused' : ''}" data-id="${prod.id}">
          <div class="prod-thumb-container">
            <img src="${imgUrl}" alt="${prod.name}" class="prod-thumb" loading="lazy" />
            ${prod.badge ? `<span class="prod-badge-tag">${prod.badge}</span>` : ''}
          </div>

          <div class="prod-info">
            <div class="prod-top-row">
              <div>
                <h4 class="prod-name">${prod.name}</h4>
                <span class="prod-category">${categoryLabel}</span>
              </div>
            </div>

            <!-- Botão de alterar preço com 1 clique -->
            <div>
              <button type="button" class="price-tag-button" data-action="quick-price" data-id="${prod.id}" data-price="${prod.price}" data-name="${encodeURIComponent(prod.name)}" title="Toque para alterar o preço">
                <span>${displayPrice}</span>
                <svg class="price-edit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </button>
            </div>
          </div>

          <!-- Ações Rápidas -->
          <div class="card-actions-row">
            <button type="button" class="btn-card-action" data-action="edit-full" data-id="${prod.id}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              <span>Editar</span>
            </button>

            <button type="button" class="btn-card-action ${isPaused ? 'btn-status-active' : 'btn-status-pause'}" data-action="toggle-status" data-id="${prod.id}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${isPaused ? '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline>' : '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>'}
              </svg>
              <span>${isPaused ? 'Ativar Peça' : 'Pausar'}</span>
            </button>

            <button type="button" class="btn-card-action btn-delete" data-action="delete" data-id="${prod.id}" title="Excluir peça">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  // Filtro de Busca
  searchInput?.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    if (!term) {
      renderProductList(currentProducts);
      return;
    }
    const filtered = currentProducts.filter(p => 
      p.name.toLowerCase().includes(term) ||
      (p.categoryLabel && p.categoryLabel.toLowerCase().includes(term)) ||
      (p.category && p.category.toLowerCase().includes(term))
    );
    renderProductList(filtered);
  });

  // ==========================================================================
  // 3. EDIÇÃO RÁPIDA DE PREÇO (1 TOQUE)
  // ==========================================================================
  const quickPriceModal = document.getElementById('quick-price-modal');
  const quickPriceName = document.getElementById('quick-price-product-name');
  const quickPriceInput = document.getElementById('quick-price-input');
  const btnSaveQuickPrice = document.getElementById('btn-save-quick-price');
  let currentEditingProductId = null;

  function openQuickPriceModal(id, name, price) {
    currentEditingProductId = id;
    quickPriceName.textContent = decodeURIComponent(name);
    quickPriceInput.value = parseFloat(price).toFixed(2);
    quickPriceModal.classList.add('active');
    quickPriceInput.focus();
    quickPriceInput.select();
  }

  function closeQuickPriceModal() {
    quickPriceModal.classList.remove('active');
    currentEditingProductId = null;
  }

  document.getElementById('btn-close-quick-price')?.addEventListener('click', closeQuickPriceModal);
  document.getElementById('btn-cancel-quick-price')?.addEventListener('click', closeQuickPriceModal);

  // Chips de acréscimo/decréscimo rápido (+5, +10, -5, -10)
  document.querySelectorAll('.chip-btn[data-add]').forEach(btn => {
    btn.addEventListener('click', () => {
      const delta = parseFloat(btn.getAttribute('data-add'));
      const current = parseFloat(quickPriceInput.value) || 0;
      const updated = Math.max(0, current + delta);
      quickPriceInput.value = updated.toFixed(2);
    });
  });

  btnSaveQuickPrice?.addEventListener('click', async () => {
    const newPrice = parseFloat(quickPriceInput.value);
    if (isNaN(newPrice) || newPrice <= 0) {
      alert('Por favor, informe um valor válido maior que zero.');
      return;
    }

    try {
      btnSaveQuickPrice.disabled = true;
      btnSaveQuickPrice.textContent = 'Salvando...';

      await window.ProductsStore.updatePrice(currentEditingProductId, newPrice);
      closeQuickPriceModal();
      await loadAdminData();
      showToast(`Preço atualizado para ${formatCurrency(newPrice)}!`, 'success');
    } catch (err) {
      alert('Erro ao atualizar preço: ' + err.message);
    } finally {
      btnSaveQuickPrice.disabled = false;
      btnSaveQuickPrice.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Salvar Preço</span>
      `;
    }
  });

  // ==========================================================================
  // 4. CADASTRO / EDIÇÃO COMPLETA (COM FOTO DA GALERIA DO CELULAR)
  // ==========================================================================
  const productFormModal = document.getElementById('product-form-modal');
  const productForm = document.getElementById('product-form');
  const formModalTitle = document.getElementById('form-modal-title');
  const formProductId = document.getElementById('form-product-id');
  const formName = document.getElementById('form-name');
  const formCategory = document.getElementById('form-category');
  const formPrice = document.getElementById('form-price');
  const formBadge = document.getElementById('form-badge');
  const formDimensions = document.getElementById('form-dimensions');
  const formDescription = document.getElementById('form-description');
  const formImageData = document.getElementById('form-image-data');
  const fileInput = document.getElementById('form-image-file');
  const photoUploadZone = document.getElementById('photo-upload-zone');
  const photoPreview = document.getElementById('photo-preview');
  const uploadPrompt = document.getElementById('upload-prompt');

  function openCreateModal() {
    productForm.reset();
    formProductId.value = '';
    formImageData.value = '';
    photoPreview.src = '';
    photoPreview.classList.remove('visible');
    uploadPrompt.style.display = 'flex';
    formModalTitle.textContent = 'Cadastrar Nova Peça';
    productFormModal.classList.add('active');
  }

  function openEditFullModal(product) {
    formProductId.value = product.id;
    formName.value = product.name || '';
    formCategory.value = product.category || 'bolsas';
    formPrice.value = parseFloat(product.price || 0).toFixed(2);
    formBadge.value = product.badge || '';
    formDimensions.value = product.dimensions || '';
    formDescription.value = product.description || '';
    formImageData.value = product.image || '';

    if (product.image) {
      photoPreview.src = product.image;
      photoPreview.classList.add('visible');
      uploadPrompt.style.display = 'none';
    } else {
      photoPreview.src = '';
      photoPreview.classList.remove('visible');
      uploadPrompt.style.display = 'flex';
    }

    formModalTitle.textContent = 'Editar Peça';
    productFormModal.classList.add('active');
  }

  function closeFormModal() {
    productFormModal.classList.remove('active');
  }

  document.getElementById('btn-open-create-modal')?.addEventListener('click', openCreateModal);
  document.getElementById('btn-close-form-modal')?.addEventListener('click', closeFormModal);
  document.getElementById('btn-cancel-form')?.addEventListener('click', closeFormModal);

  // Clique na zona de upload ativa o input de arquivo (câmera/galeria)
  photoUploadZone?.addEventListener('click', () => {
    fileInput.click();
  });

  // Processamento e compressão da foto selecionada
  fileInput?.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      showToast('Otimizando foto do celular...', 'info');
      // Comprime no celular para JPEG super leve e de altíssima qualidade
      const compressedBase64 = await window.ImageUtils.compressImage(file, {
        maxWidth: 1200,
        maxHeight: 1200,
        quality: 0.85
      });

      formImageData.value = compressedBase64;
      photoPreview.src = compressedBase64;
      photoPreview.classList.add('visible');
      uploadPrompt.style.display = 'none';
      showToast('Foto pronta!', 'success');
    } catch (err) {
      alert('Erro ao carregar imagem: ' + err.message);
    }
  });

  // Submissão do Formulário de Produto
  productForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = formName.value.trim();
    const price = parseFloat(formPrice.value);
    const category = formCategory.value;

    if (!name || isNaN(price) || price <= 0) {
      alert('Preencha os campos obrigatórios corretamente.');
      return;
    }

    const categoryLabels = {
      bolsas: 'Bolsas',
      cestos: 'Cestos',
      decoracao: 'Decoração & Mesa'
    };

    const productPayload = {
      id: formProductId.value || undefined,
      name: name,
      category: category,
      categoryLabel: categoryLabels[category] || 'Artesanato',
      price: price,
      badge: formBadge.value.trim() || undefined,
      dimensions: formDimensions.value.trim() || undefined,
      description: formDescription.value.trim() || undefined,
      image: formImageData.value || 'assets/cesta-cafe-manha.png'
    };

    const submitBtn = document.getElementById('btn-save-product');
    try {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Salvando peça...';

      await window.ProductsStore.saveProduct(productPayload);
      closeFormModal();
      await loadAdminData();
      showToast(formProductId.value ? 'Peça atualizada com sucesso!' : 'Nova peça cadastrada com sucesso!', 'success');
    } catch (err) {
      alert('Erro ao salvar produto: ' + err.message);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Salvar Peça</span>
      `;
    }
  });

  // Delegação de Eventos na Lista de Produtos
  productListEl?.addEventListener('click', async (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;

    const action = btn.getAttribute('data-action');
    const id = btn.getAttribute('data-id');

    if (action === 'quick-price') {
      const price = btn.getAttribute('data-price');
      const name = btn.getAttribute('data-name');
      openQuickPriceModal(id, name, price);
    } else if (action === 'edit-full') {
      const product = await window.ProductsStore.getById(id);
      if (product) openEditFullModal(product);
    } else if (action === 'toggle-status') {
      try {
        const newStatus = await window.ProductsStore.toggleStatus(id);
        await loadAdminData();
        showToast(newStatus ? 'Peça reativada no catálogo!' : 'Peça marcada como esgotada/pausada!', 'info');
      } catch (err) {
        alert('Erro ao alterar status: ' + err.message);
      }
    } else if (action === 'delete') {
      if (confirm('Tem certeza de que deseja remover esta peça do catálogo?')) {
        try {
          await window.ProductsStore.deleteProduct(id);
          await loadAdminData();
          showToast('Peça removida com sucesso.', 'info');
        } catch (err) {
          alert('Erro ao excluir: ' + err.message);
        }
      }
    }
  });

  // ==========================================================================
  // 5. TOAST FEEDBACK
  // ==========================================================================
  const toastEl = document.getElementById('admin-toast');
  let toastTimer = null;

  function showToast(msg, type = 'success') {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.className = 'admin-toast show';
    if (type === 'success') toastEl.classList.add('success');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3000);
  }
});
