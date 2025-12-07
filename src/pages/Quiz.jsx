import React, { useState } from 'react';
import { Heart, Trophy, RotateCcw, Zap } from 'lucide-react';

// Pertanyaan untuk setiap level
const quizData = {
  easy: [
    {
      question: "Apa alat untuk mengukur suhu udara?",
      options: ["Barometer", "Termometer", "Anemometer", "Hygrometer"],
      answer: 1
    },
    {
      question: "Awan yang berbentuk seperti kapas disebut?",
      options: ["Cumulus", "Stratus", "Cirrus", "Nimbus"],
      answer: 0
    },
    {
      question: "Hujan yang turun disertai butiran es disebut?",
      options: ["Hujan Asam", "Hujan Es", "Hujan Salju", "Hujan Zenit"],
      answer: 1
    },
    {
      question: "Apa warna awan yang biasanya membawa hujan?",
      options: ["Putih", "Abu-abu gelap", "Merah muda", "Kuning"],
      answer: 1
    },
    {
      question: "Angin kencang yang berputar disebut?",
      options: ["Badai", "Topan", "Angin Sepoi-sepoi", "Tornado"],
      answer: 3
    }
  ],
  medium: [
    {
      question: "Lapisan atmosfer tempat terjadinya cuaca adalah?",
      options: ["Stratosfer", "Troposfer", "Mesosfer", "Eksosfer"],
      answer: 1
    },
    {
      question: "Mengapa langit berwarna biru?",
      options: [
        "Karena pantulan cahaya dari laut",
        "Karena hamburan cahaya matahari di atmosfer",
        "Karena langit memiliki pigmen biru",
        "Karena matahari berwarna biru"
      ],
      answer: 1
    },
    {
      question: "Alat untuk mengukur kecepatan angin adalah?",
      options: ["Barometer", "Termometer", "Anemometer", "Hygrometer"],
      answer: 2
    },
    {
      question: "Proses perubahan uap air menjadi titik-titik air disebut?",
      options: ["Evaporasi", "Kondensasi", "Presipitasi", "Sublimasi"],
      answer: 1
    },
    {
      question: "Tekanan udara diukur dengan alat?",
      options: ["Barometer", "Termometer", "Anemometer", "Hygrometer"],
      answer: 0
    }
  ],
  hard: [
    {
      question: "Fenomena El Nino mempengaruhi cuaca dengan cara?",
      options: [
        "Menurunkan suhu global",
        "Meningkatkan suhu permukaan laut Pasifik",
        "Mengurangi curah hujan di seluruh dunia",
        "Mempercepat rotasi bumi"
      ],
      answer: 1
    },
    {
      question: "Lapisan ozon berada di lapisan atmosfer?",
      options: ["Troposfer", "Stratosfer", "Mesosfer", "Termosfer"],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan titik embun (dew point)?",
      options: [
        "Suhu tertinggi dalam sehari",
        "Suhu dimana uap air mulai mengembun",
        "Titik terendah tekanan udara",
        "Suhu permukaan tanah"
      ],
      answer: 1
    },
    {
      question: "Badai tropis dengan kecepatan angin minimal berapa km/jam?",
      options: ["63 km/jam", "74 km/jam", "118 km/jam", "150 km/jam"],
      answer: 2
    },
    {
      question: "Apa penyebab terjadinya petir?",
      options: [
        "Gesekan antar awan",
        "Perbedaan muatan listrik di awan",
        "Suhu udara yang sangat tinggi",
        "Tekanan udara rendah"
      ],
      answer: 1
    }
  ]
};

const Quiz = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const currentQuestions = selectedLevel ? quizData[selectedLevel] : [];

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    setCurrentQuestion(0);
    setScore(0);
    setLives(3);
    setShowResult(false);
    setGameOver(false);
    setFeedback(null);
  };

  const handleAnswer = (selectedIndex) => {
    const correctAnswer = currentQuestions[currentQuestion].answer;
    
    if (selectedIndex === correctAnswer) {
      setScore(score + 1);
      setFeedback('correct');
    } else {
      const newLives = lives - 1;
      setLives(newLives);
      setFeedback('wrong');
      
      if (newLives === 0) {
        setGameOver(true);
        setTimeout(() => {
          setShowResult(true);
        }, 1500);
        return;
      }
    }

    setTimeout(() => {
      setFeedback(null);
      const nextQuestion = currentQuestion + 1;
      
      if (nextQuestion < currentQuestions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setSelectedLevel(null);
    setCurrentQuestion(0);
    setScore(0);
    setLives(3);
    setShowResult(false);
    setGameOver(false);
    setFeedback(null);
  };

  const getLevelColor = (level) => {
    const colors = {
      easy: 'from-green-400 to-green-600',
      medium: 'from-yellow-400 to-orange-500',
      hard: 'from-red-400 to-red-600'
    };
    return colors[level];
  };

  const getLevelLabel = (level) => {
    const labels = {
      easy: 'Mudah',
      medium: 'Sedang',
      hard: 'Sulit'
    };
    return labels[level];
  };

  // Level Selection Screen
  if (!selectedLevel) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-5 py-10">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-8 sm:mb-10 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Kuis Cuaca</h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 px-4">Pilih level kesulitan untuk memulai!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
            {['easy', 'medium', 'hard'].map((level, index) => (
              <button
                key={level}
                onClick={() => handleLevelSelect(level)}
                className={`relative overflow-hidden bg-gradient-to-br ${getLevelColor(level)} rounded-3xl p-8 transform transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl hover:shadow-3xl group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <Zap size={48} className="text-white animate-float" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {getLevelLabel(level)}
                  </h3>
                  <p className="text-white/90 mb-4">
                    {level === 'easy' && '5 Pertanyaan Dasar'}
                    {level === 'medium' && '5 Pertanyaan Menengah'}
                    {level === 'hard' && '5 Pertanyaan Sulit'}
                  </p>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3].map((heart) => (
                      <Heart key={heart} size={24} className="text-white fill-white" />
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Result Screen
  if (showResult) {
    const percentage = (score / currentQuestions.length) * 100;
    const passed = percentage >= 60;

    return (
      <div className="min-h-screen flex items-center justify-center px-5 py-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 max-w-2xl w-full shadow-2xl text-center animate-scale-in">
          <div className="mb-6">
            {passed ? (
              <Trophy size={80} className="text-yellow-400 mx-auto animate-float" />
            ) : (
              <div className="text-6xl">😢</div>
            )}
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">
            {gameOver ? 'Game Over!' : passed ? 'Selamat!' : 'Coba Lagi!'}
          </h1>
          
          <div className="bg-white/10 rounded-2xl p-6 mb-6">
            <p className="text-6xl font-bold text-white mb-2">{score}/{currentQuestions.length}</p>
            <p className="text-xl text-white/80">Skor Anda</p>
            <p className="text-lg text-white/70 mt-2">{percentage.toFixed(0)}%</p>
          </div>

          {gameOver && (
            <p className="text-white/90 mb-6 text-lg">
              Anda kehabisan nyawa! Jangan menyerah, coba lagi!
            </p>
          )}

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => handleLevelSelect(selectedLevel)}
              className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full text-white font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <RotateCcw size={20} />
              Ulangi Level
            </button>
            <button
              onClick={resetQuiz}
              className="px-6 py-3 bg-white/30 hover:bg-white/40 rounded-full text-white font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Pilih Level Lain
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Screen
  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-10">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-10 max-w-4xl w-full shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className={`px-4 py-2 bg-gradient-to-r ${getLevelColor(selectedLevel)} rounded-full text-white font-bold`}>
              {getLevelLabel(selectedLevel)}
            </div>
          </div>
          
          {/* Lives */}
          <div className="flex gap-2">
            {[1, 2, 3].map((heart) => (
              <Heart
                key={heart}
                size={32}
                className={`transition-all duration-300 ${
                  heart <= lives 
                    ? 'text-red-500 fill-red-500 animate-pulse' 
                    : 'text-gray-400/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-white/80 mb-2">
            <span>Pertanyaan {currentQuestion + 1}/{currentQuestions.length}</span>
            <span>Skor: {score}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / currentQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center leading-tight">
            {currentQuestions[currentQuestion].question}
          </h2>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 gap-4">
          {currentQuestions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => !feedback && handleAnswer(index)}
              disabled={feedback !== null}
              className={`p-5 rounded-2xl text-lg font-semibold text-white transition-all duration-300 transform hover:scale-102 active:scale-98 ${
                feedback === 'correct' && index === currentQuestions[currentQuestion].answer
                  ? 'bg-green-500 shadow-lg shadow-green-500/50'
                  : feedback === 'wrong' && index === currentQuestions[currentQuestion].answer
                  ? 'bg-green-500 shadow-lg shadow-green-500/50'
                  : feedback === 'wrong'
                  ? 'bg-red-500/50'
                  : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'
              } ${feedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
