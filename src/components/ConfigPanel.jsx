import { useState } from 'react';

const ConfigPanel = ({ config, onSave, onClose }) => {
  const [editedConfig, setEditedConfig] = useState(config);
  const [activeTab, setActiveTab] = useState('branding');

  const handleSave = () => {
    onSave(editedConfig);
    alert('Configurações salvas com sucesso!');
  };

  const updateBranding = (field, value) => {
    setEditedConfig({
      ...editedConfig,
      branding: { ...editedConfig.branding, [field]: value }
    });
  };

  const updateHero = (field, value) => {
    setEditedConfig({
      ...editedConfig,
      hero: { ...editedConfig.hero, [field]: value }
    });
  };

  const updateCategories = (index, value) => {
    const newCategories = [...editedConfig.categories];
    newCategories[index] = value;
    setEditedConfig({ ...editedConfig, categories: newCategories });
  };

  const addCategory = () => {
    setEditedConfig({
      ...editedConfig,
      categories: [...editedConfig.categories, 'Nova Categoria']
    });
  };

  const removeCategory = (index) => {
    const newCategories = editedConfig.categories.filter((_, i) => i !== index);
    setEditedConfig({ ...editedConfig, categories: newCategories });
  };

  const updateProduct = (index, field, value) => {
    const newProducts = [...editedConfig.products];
    newProducts[index] = { ...newProducts[index], [field]: value };
    setEditedConfig({ ...editedConfig, products: newProducts });
  };

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: 'Novo Produto',
      price: 0,
      rating: 5,
      reviews: 0,
      image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=500&h=500&fit=crop'
    };
    setEditedConfig({
      ...editedConfig,
      products: [...editedConfig.products, newProduct]
    });
  };

  const removeProduct = (index) => {
    const newProducts = editedConfig.products.filter((_, i) => i !== index);
    setEditedConfig({ ...editedConfig, products: newProducts });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">Painel de Configuração No-Code</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('branding')}
              className={`px-6 py-3 font-semibold ${activeTab === 'branding' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
            >
              Identidade Visual
            </button>
            <button
              onClick={() => setActiveTab('hero')}
              className={`px-6 py-3 font-semibold ${activeTab === 'hero' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
            >
              Banner Principal
            </button>
            <button
              onClick={() => setActiveTab('categories')}
              className={`px-6 py-3 font-semibold ${activeTab === 'categories' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
            >
              Categorias
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`px-6 py-3 font-semibold ${activeTab === 'products' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
            >
              Produtos
            </button>
          </div>

          <div className="p-6 max-h-96 overflow-y-auto">
            {activeTab === 'branding' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nome da Loja</label>
                  <input
                    type="text"
                    value={editedConfig.branding.storeName}
                    onChange={(e) => updateBranding('storeName', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Slogan</label>
                  <input
                    type="text"
                    value={editedConfig.branding.slogan}
                    onChange={(e) => updateBranding('slogan', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Descrição</label>
                  <textarea
                    value={editedConfig.branding.description}
                    onChange={(e) => updateBranding('description', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows="3"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Cor Principal</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={editedConfig.branding.primaryColor}
                        onChange={(e) => updateBranding('primaryColor', e.target.value)}
                        className="w-16 h-10 rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        value={editedConfig.branding.primaryColor}
                        onChange={(e) => updateBranding('primaryColor', e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Cor Secundária</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={editedConfig.branding.secondaryColor}
                        onChange={(e) => updateBranding('secondaryColor', e.target.value)}
                        className="w-16 h-10 rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        value={editedConfig.branding.secondaryColor}
                        onChange={(e) => updateBranding('secondaryColor', e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'hero' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Título do Banner</label>
                  <input
                    type="text"
                    value={editedConfig.hero.title}
                    onChange={(e) => updateHero('title', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Subtítulo</label>
                  <textarea
                    value={editedConfig.hero.subtitle}
                    onChange={(e) => updateHero('subtitle', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows="2"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Botão 1</label>
                    <input
                      type="text"
                      value={editedConfig.hero.ctaButton1}
                      onChange={(e) => updateHero('ctaButton1', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Botão 2</label>
                    <input
                      type="text"
                      value={editedConfig.hero.ctaButton2}
                      onChange={(e) => updateHero('ctaButton2', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'categories' && (
              <div className="space-y-4">
                {editedConfig.categories.map((category, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={category}
                      onChange={(e) => updateCategories(index, e.target.value)}
                      className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => removeCategory(index)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Remover
                    </button>
                  </div>
                ))}
                <button
                  onClick={addCategory}
                  className="w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-600"
                >
                  + Adicionar Categoria
                </button>
              </div>
            )}

            {activeTab === 'products' && (
              <div className="space-y-6">
                {editedConfig.products.map((product, index) => (
                  <div key={product.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">Produto {index + 1}</h4>
                      <button
                        onClick={() => removeProduct(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remover
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="col-span-2">
                        <label className="block text-xs font-semibold mb-1">Nome</label>
                        <input
                          type="text"
                          value={product.name}
                          onChange={(e) => updateProduct(index, 'name', e.target.value)}
                          className="w-full px-3 py-2 border rounded text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1">Preço (R$)</label>
                        <input
                          type="number"
                          step="0.01"
                          value={product.price}
                          onChange={(e) => updateProduct(index, 'price', parseFloat(e.target.value))}
                          className="w-full px-3 py-2 border rounded text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1">Preço Antigo (R$)</label>
                        <input
                          type="number"
                          step="0.01"
                          value={product.oldPrice || ''}
                          onChange={(e) => updateProduct(index, 'oldPrice', e.target.value ? parseFloat(e.target.value) : undefined)}
                          className="w-full px-3 py-2 border rounded text-sm"
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-xs font-semibold mb-1">URL da Imagem</label>
                        <input
                          type="text"
                          value={product.image}
                          onChange={(e) => updateProduct(index, 'image', e.target.value)}
                          className="w-full px-3 py-2 border rounded text-sm"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={addProduct}
                  className="w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-600"
                >
                  + Adicionar Produto
                </button>
              </div>
            )}
          </div>

          <div className="flex justify-end gap-3 p-6 border-t bg-gray-50">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Salvar Alterações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigPanel;
