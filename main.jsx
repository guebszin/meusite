import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import { motion } from "https://cdn.skypack.dev/framer-motion";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white font-sans">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-purple-400">UtopiaHost</h1>
        <nav className="flex flex-col sm:flex-row sm:gap-6 gap-4">
          <a
            href="planos.html"
            className="hover:text-purple-300 bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full shadow-md transition-all text-center"
          >
            Planos
          </a>
          <a
            href="#contato"
            className="hover:text-purple-300 bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full shadow-md transition-all text-center"
          >
            Contato
          </a>
        </nav>
      </header>

      <motion.section
        className="text-center py-32 px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-extrabold mb-6">Hospedagem poderosa para seu servidor</h2>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          Alta performance, estabilidade e suporte real. Crie seu servidor Minecraft, FiveM ou site com facilidade.
        </p>
        <a href="planos.html" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-lg rounded-2xl shadow-lg">
          Ver Planos
        </a>
      </motion.section>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
