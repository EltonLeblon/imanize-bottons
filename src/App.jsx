import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import ConfigPanel from './components/ConfigPanel';
import { getConfig, saveConfig } from './config/marketplaceConfig';

function App() {
  const [config, setConfig] = useState(getConfig());
  const [showConfigPanel, setShowConfigPanel] = useState(false);

  const handleSaveConfig = (newConfig) => {
    setConfig(newConfig);
    saveConfig(newConfig);
    setShowConfigPanel(false);
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', config.branding.primaryColor);
  }, [config]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header config={config} onOpenConfig={() => setShowConfigPanel(true)} />
      <HeroSection config={config} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <Sidebar config={config} />
          
          <main className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">
                Produtos em Destaque
              </h2>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': config.branding.primaryColor }}
              >
                <option>Mais Relevantes</option>
                <option>Menor Preço</option>
                <option>Maior Preço</option>
                <option>Mais Vendidos</option>
                <option>Melhor Avaliação</option>
              </select>
            </div>
            
            <ProductGrid products={config.products} config={config} />
            
            <div className="mt-8 flex justify-center">
              <nav className="flex gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                  Anterior
                </button>
                <button 
                  className="px-4 py-2 text-white rounded-lg"
                  style={{ backgroundColor: config.branding.primaryColor }}
                >
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                  Próxima
                </button>
              </nav>
            </div>
          </main>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{config.branding.storeName}</h3>
              <p className="text-gray-400">
                {config.branding.description}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Institucional</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white">Trabalhe Conosco</a></li>
                <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Atendimento</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white">Trocas e Devoluções</a></li>
                <li><a href="#" className="hover:text-white">Fale Conosco</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white hover:opacity-80">Facebook</a>
                <a href="#" className="hover:text-white hover:opacity-80">Instagram</a>
                <a href="#" className="hover:text-white hover:opacity-80">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 {config.branding.storeName}. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {showConfigPanel && (
        <ConfigPanel 
          config={config}
          onSave={handleSaveConfig}
          onClose={() => setShowConfigPanel(false)}
        />
      )}
    </div>
  );
}

export default App;
