/**
 * TÁBOA BRASIL - REPOSITÓRIO CENTRALIZADO DE PRODUTOS
 * Gerencia persistência local (LocalStorage) e nuvem (Firebase Firestore).
 */

(function() {
  const LOCAL_STORAGE_KEY = 'taboa_brasil_catalog_v1';

  // Catálogo Padrão Inicial da Táboa Brasil
  const INITIAL_PRODUCTS = [
    {
      id: 'cesta-cafe-manha',
      name: 'Cesta de Café da Manhã em Taboa',
      category: 'cestos',
      categoryLabel: 'Cestos & Presentes',
      price: 98.00,
      image: 'assets/cesta-cafe-manha.png',
      badge: 'Destaque',
      active: true,
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
      active: true,
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
      active: true,
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
      active: true,
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
      active: true,
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
      active: true,
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
      active: true,
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
      active: true,
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
      active: true,
      dimensions: 'Aprox. 24 cm de diâmetro x 12 cm de altura',
      material: 'Fibra de taboa estruturada',
      finish: 'Borda arredondada suave e base estável',
      description: 'Ideal para compor a mesa de café da manhã servindo pães, biscoitos e frutas, ou para organizar itens de uso diário na bancada com charme artesanal.',
      care: 'Evite o contato direto prolongado com alimentos muito gordurosos sem guardanapo de apoio.'
    }
  ];

  let cachedProducts = null;
  let isFirebaseActive = false;
  let db = null;

  class ProductsStore {
    constructor() {
      this.init();
    }

    async init() {
      // 1. Tenta inicializar Firebase se configurado
      if (window.FIREBASE_CONFIG && window.FIREBASE_CONFIG.enabled && typeof firebase !== 'undefined') {
        try {
          if (!firebase.apps.length) {
            firebase.initializeApp(window.FIREBASE_CONFIG);
          }
          db = firebase.firestore();
          isFirebaseActive = true;
          console.log('[ProductsStore] Conectado ao Firebase Firestore');
        } catch (e) {
          console.warn('[ProductsStore] Falha ao conectar ao Firebase, usando armazenamento local.', e);
          isFirebaseActive = false;
        }
      }

      // 2. Inicializa dados locais caso necessário
      this.ensureLocalSeed();
    }

    isCloudActive() {
      return isFirebaseActive;
    }

    ensureLocalSeed() {
      try {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!stored) {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS));
          cachedProducts = [...INITIAL_PRODUCTS];
        } else {
          cachedProducts = JSON.parse(stored);
        }
      } catch (e) {
        console.error('[ProductsStore] Erro ao ler localStorage:', e);
        cachedProducts = [...INITIAL_PRODUCTS];
      }
    }

    /**
     * Retorna a lista de produtos (opcionalmente apenas os ativos)
     */
    async getProducts(onlyActive = false) {
      if (isFirebaseActive && db) {
        try {
          const snapshot = await db.collection('products').get();
          if (!snapshot.empty) {
            const list = [];
            snapshot.forEach(doc => {
              list.push({ id: doc.id, ...doc.data() });
            });
            cachedProducts = list;
            // Atualiza cache local de segurança
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
          } else {
            // Se o banco remoto estiver vazio pela primeira vez, popula com os produtos iniciais
            console.log('[ProductsStore] Firestore vazio. Migrando catálogo inicial...');
            for (const prod of INITIAL_PRODUCTS) {
              await db.collection('products').doc(prod.id).set(prod);
            }
            cachedProducts = [...INITIAL_PRODUCTS];
          }
        } catch (e) {
          console.error('[ProductsStore] Erro ao buscar do Firestore, usando fallback local:', e);
          this.ensureLocalSeed();
        }
      } else {
        this.ensureLocalSeed();
      }

      if (onlyActive) {
        return cachedProducts.filter(p => p.active !== false);
      }
      return [...cachedProducts];
    }

    /**
     * Retorna produto por ID
     */
    async getById(id) {
      const all = await this.getProducts(false);
      return all.find(p => p.id === id) || null;
    }

    /**
     * Atualização instantânea de preço
     */
    async updatePrice(id, newPrice) {
      const priceNum = parseFloat(newPrice);
      if (isNaN(priceNum) || priceNum <= 0) {
        throw new Error('Valor de preço inválido.');
      }

      if (isFirebaseActive && db) {
        await db.collection('products').doc(id).update({ price: priceNum });
      }

      // Atualiza localmente
      this.ensureLocalSeed();
      const item = cachedProducts.find(p => p.id === id);
      if (item) {
        item.price = priceNum;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cachedProducts));
        this.notifyChange();
        return item;
      }
      throw new Error('Produto não encontrado.');
    }

    /**
     * Salva ou cria um produto completo
     */
    async saveProduct(product) {
      if (!product.id) {
        // Gera id amigável baseado no nome
        product.id = (product.name || 'produto')
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '') + '-' + Date.now().toString().slice(-4);
      }

      if (product.active === undefined) {
        product.active = true;
      }

      if (isFirebaseActive && db) {
        await db.collection('products').doc(product.id).set(product, { merge: true });
      }

      this.ensureLocalSeed();
      const existingIndex = cachedProducts.findIndex(p => p.id === product.id);
      if (existingIndex >= 0) {
        cachedProducts[existingIndex] = { ...cachedProducts[existingIndex], ...product };
      } else {
        cachedProducts.unshift(product);
      }

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cachedProducts));
      this.notifyChange();
      return product;
    }

    /**
     * Alterna status Ativo / Pausado (Esgotado)
     */
    async toggleStatus(id) {
      this.ensureLocalSeed();
      const item = cachedProducts.find(p => p.id === id);
      if (!item) throw new Error('Produto não encontrado.');

      item.active = !item.active;

      if (isFirebaseActive && db) {
        await db.collection('products').doc(id).update({ active: item.active });
      }

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cachedProducts));
      this.notifyChange();
      return item.active;
    }

    /**
     * Exclui produto
     */
    async deleteProduct(id) {
      if (isFirebaseActive && db) {
        await db.collection('products').doc(id).delete();
      }

      this.ensureLocalSeed();
      cachedProducts = cachedProducts.filter(p => p.id !== id);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cachedProducts));
      this.notifyChange();
      return true;
    }

    /**
     * Restaura os produtos originais de fábrica
     */
    async resetToDefaults() {
      if (isFirebaseActive && db) {
        // Limpa coleção
        const snapshot = await db.collection('products').get();
        const batch = db.batch();
        snapshot.docs.forEach(doc => batch.delete(doc.ref));
        await batch.commit();

        // Repopula
        for (const prod of INITIAL_PRODUCTS) {
          await db.collection('products').doc(prod.id).set(prod);
        }
      }

      cachedProducts = [...INITIAL_PRODUCTS];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cachedProducts));
      this.notifyChange();
      return cachedProducts;
    }

    notifyChange() {
      window.dispatchEvent(new CustomEvent('taboa:productsUpdated', { detail: { products: cachedProducts } }));
    }
  }

  window.ProductsStore = new ProductsStore();
})();
