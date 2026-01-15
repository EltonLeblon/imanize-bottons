const HeroSection = ({ config }) => {
  return (
    <section 
      className="text-white py-20"
      style={{
        background: `linear-gradient(to right, ${config.branding.primaryColor}, ${config.branding.secondaryColor})`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold mb-4">
            {config.hero.title}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {config.hero.subtitle}
          </p>
          <div className="flex gap-4">
            <button className="bg-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition shadow-lg"
              style={{ color: config.branding.primaryColor }}
            >
              {config.hero.ctaButton1}
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white transition"
              style={{ 
                '--hover-color': config.branding.primaryColor 
              }}
              onMouseEnter={(e) => e.target.style.color = config.branding.primaryColor}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              {config.hero.ctaButton2}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
