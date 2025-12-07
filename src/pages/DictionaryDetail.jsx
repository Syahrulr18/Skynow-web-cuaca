import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Cloud, CloudRain, Wind, CloudLightning, Droplets, Thermometer, Layers, Globe, Navigation, Tornado, Waves } from 'lucide-react';
import dictionaryData from '../data/dictionaryData';

const iconMap = {
  CloudRain,
  Cloud,
  Wind,
  CloudLightning,
  Droplets,
  Thermometer,
  Layers,
  Globe,
  Navigation,
  Tornado,
  Waves
};

const DictionaryDetail = () => {
  const { termId } = useParams();
  const navigate = useNavigate();
  
  // Find the item
  const item = dictionaryData.find(term => term.id === termId);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center px-5">
        <div className="text-center">
          <BookOpen size={80} className="text-white/50 mx-auto mb-4" />
          <h2 className="text-3xl text-white mb-4">Istilah tidak ditemukan</h2>
          <button
            onClick={() => navigate('/dictionary')}
            className="px-6 py-3 bg-white/30 hover:bg-white/40 rounded-full text-white font-semibold transition-all duration-200"
          >
            Kembali ke Kamus
          </button>
        </div>
      </div>
    );
  }

  const Icon = iconMap[item.icon] || BookOpen;

  return (
    <div className="min-h-screen px-5 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/dictionary')}
          className="flex items-center gap-2 mb-6 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white font-semibold transition-all duration-200 hover:scale-105 active:scale-95 animate-slide-right"
        >
          <ArrowLeft size={20} />
          Kembali ke Kamus
        </button>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl animate-scale-in">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8 pb-8 border-b border-white/20">
            {/* Icon */}
            <div className="bg-white/10 rounded-full p-6 animate-float">
              <Icon size={80} className="text-white" />
            </div>

            {/* Title */}
            <div className="text-center md:text-left flex-1">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-white text-sm mb-3">
                {item.category}
              </div>
              <h1 className="text-5xl font-bold text-white mb-2">{item.term}</h1>
              <p className="text-xl text-white/80">{item.shortDesc}</p>
            </div>
          </div>

          {/* Full Description */}
          <div className="space-y-6">
            {item.fullDesc.split('\n').map((line, index) => {
              const trimmedLine = line.trim();
              
              // Skip empty lines but add spacing
              if (!trimmedLine) {
                return <div key={index} className="h-4"></div>;
              }
              
              // Check for section headings with **
              if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
                const heading = trimmedLine.replace(/\*\*/g, '');
                return (
                  <h3 key={index} className="text-2xl font-bold text-white mt-8 mb-4 first:mt-0">
                    {heading}
                  </h3>
                );
              }
              
              // Check for numbered headings like "1. " or "2. " at start
              if (/^\d+\.\s+\*\*/.test(trimmedLine)) {
                const heading = trimmedLine.replace(/^\d+\.\s+/, '').replace(/\*\*/g, '');
                return (
                  <h4 key={index} className="text-xl font-bold text-white mt-6 mb-3">
                    {heading}
                  </h4>
                );
              }
              
              // Check for list items starting with -
              if (trimmedLine.startsWith('-')) {
                const item = trimmedLine.substring(1).trim().replace(/\*\*/g, '');
                return (
                  <div key={index} className="flex gap-3 text-white/90 text-lg">
                    <span className="text-white/70 mt-1.5">•</span>
                    <span className="flex-1">{item}</span>
                  </div>
                );
              }
              
              // Check for numbered list items
              if (/^\d+\./.test(trimmedLine)) {
                const match = trimmedLine.match(/^(\d+)\.\s+(.+)/);
                if (match) {
                  const [, number, text] = match;
                  const cleanText = text.replace(/\*\*/g, '');
                  return (
                    <div key={index} className="flex gap-3 text-white/90 text-lg">
                      <span className="text-white/70 font-semibold min-w-[24px]">{number}.</span>
                      <span className="flex-1">{cleanText}</span>
                    </div>
                  );
                }
              }
              
              // Regular paragraph
              const cleanText = trimmedLine.replace(/\*\*/g, '');
              return (
                <p key={index} className="text-white/90 text-lg leading-relaxed">
                  {cleanText}
                </p>
              );
            })}
          </div>

          {/* Related Terms */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Istilah Terkait</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dictionaryData
                .filter(term => term.category === item.category && term.id !== item.id)
                .slice(0, 4)
                .map((relatedItem) => {
                  const RelatedIcon = iconMap[relatedItem.icon] || BookOpen;
                  return (
                    <button
                      key={relatedItem.id}
                      onClick={() => navigate(`/dictionary/${relatedItem.id}`)}
                      className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-2xl text-left transition-all duration-200 transform hover:scale-105 active:scale-95"
                    >
                      <RelatedIcon size={32} className="text-white flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-semibold truncate">{relatedItem.term}</div>
                        <div className="text-white/70 text-sm truncate">{relatedItem.shortDesc}</div>
                      </div>
                    </button>
                  );
                })}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-8 pt-6 border-t border-white/20 flex justify-between items-center">
            <button
              onClick={() => navigate('/dictionary')}
              className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full text-white font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
            >
              ← Lihat Semua Istilah
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DictionaryDetail;
