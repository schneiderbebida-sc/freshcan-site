/* ==========================================================================
   FreshCan — menu-dynamic.js
   Busca categorias/produtos cadastrados pelo admin (api/menu.js) e mescla
   com o catálogo fixo de products.js, sem duplicar nada (um id que já existe
   no código tem prioridade — o admin cadastra categorias/produtos NOVOS).

   Expõe window.FreshCanMenuReady: uma Promise que outros scripts (cart.js,
   render.js) aguardam antes de ler window.PRODUCTS/window.PRODUCT_CATEGORIES,
   já que a mesclagem é assíncrona (depende de uma chamada à API).
   ========================================================================== */

window.FreshCanMenuReady = (async () => {
  try {
    const apiUrl = (window.FreshCan && window.FreshCan.API_URL) || "https://freshcan-api.vercel.app";
    const res = await fetch(`${apiUrl}/api/menu`);
    const data = await res.json();
    if (!res.ok || !data.ok) return;

    window.PRODUCT_CATEGORIES = window.PRODUCT_CATEGORIES || [];
    window.PRODUCTS = window.PRODUCTS || [];

    const idsCategoriaExistentes = new Set(window.PRODUCT_CATEGORIES.map((c) => c.id));
    (data.categories || []).forEach((c) => {
      if (idsCategoriaExistentes.has(c.id)) return;
      window.PRODUCT_CATEGORIES.push({ id: c.id, label: c.label, icon: c.icon || "🫙" });
    });

    const idsProdutoExistentes = new Set(window.PRODUCTS.map((p) => p.id));
    (data.products || []).forEach((p) => {
      if (idsProdutoExistentes.has(p.id)) return;
      window.PRODUCTS.push({
        id: p.id,
        name: p.name,
        category: p.categoryId,
        price: Number(p.price),
        desc: p.description || "",
        image: p.photoUrl || null,
        badge: p.badge || undefined,
      });
    });
  } catch (err) {
    console.error("Não foi possível carregar o catálogo cadastrado no admin:", err.message);
  }
})();
