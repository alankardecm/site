import React from "react";
import { BarChart3, LayoutDashboard, Zap, Workflow } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero com gradiente */}
      <section className="bg-gradient-to-br from-[#1B3B5F] to-[#2D9C79] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Decisões melhores começam com dados claros</h1>
          <p className="text-xl mb-6">Consultoria especializada em Power BI, Dashboards e Estratégia de Dados para Pequenas Empresas, ISPs e Startups.</p>
          <a href="https://wa.me/5519996309592" target="_blank" className="bg-white text-[#1B3B5F] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">Fale com um especialista</a>
        </div>
      </section>

      {/* Serviços com ícones */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Soluções Inteligentes</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow rounded-xl text-center">
            <BarChart3 className="w-10 h-10 mx-auto text-[#1B3B5F]" />
            <h3 className="text-xl font-semibold mt-4">Dashboards com Power BI</h3>
            <p className="text-gray-600 mt-2">Visualizações interativas que transformam dados em decisões.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl text-center">
            <Workflow className="w-10 h-10 mx-auto text-[#1B3B5F]" />
            <h3 className="text-xl font-semibold mt-4">ETL Automatizado</h3>
            <p className="text-gray-600 mt-2">Extração, transformação e carga otimizadas de dados.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl text-center">
            <LayoutDashboard className="w-10 h-10 mx-auto text-[#1B3B5F]" />
            <h3 className="text-xl font-semibold mt-4">Dashboards Personalizados</h3>
            <p className="text-gray-600 mt-2">Indicadores de desempenho sob medida para o seu negócio.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl text-center">
            <Zap className="w-10 h-10 mx-auto text-[#1B3B5F]" />
            <h3 className="text-xl font-semibold mt-4">Estratégia de Dados</h3>
            <p className="text-gray-600 mt-2">Planejamento orientado por dados com foco em resultados.</p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="bg-[#1B3B5F] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Vamos conversar?</h2>
        <p className="mb-6">Entre em contato agora mesmo e veja como a inteligência de dados pode transformar sua empresa.</p>
        <a href="https://wa.me/5519996309592" target="_blank" className="bg-[#2D9C79] px-6 py-3 rounded-xl font-semibold hover:bg-[#27a377] transition">Chamar no WhatsApp</a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} AM Consultoria. Todos os direitos reservados.
      </footer>
    </div>
  );
}