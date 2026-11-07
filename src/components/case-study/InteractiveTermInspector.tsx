"use client";

import React, { useState } from "react";
import { Icons } from "@/components/Icons";
import { useLanguage } from "@/context/LanguageContext";
import { SpotlightCard } from "@/components/SpotlightCard";

interface TermItem {
  id: string;
  topic: string;
  word: string;
  abbreviation?: string;
  phoneticUK: string;
  phoneticUS: string;
  vietnameseMeaning: string;
  englishDefinition: string;
  fieldNote: string;
  standard: string;
  quizQuestion: {
    promptVi: string;
    promptEn: string;
    options: { textVi: string; textEn: string; isCorrect: boolean }[];
  };
}

const SAMPLE_TERMS: TermItem[] = [
  {
    id: "vav",
    topic: "HVAC & Thermal",
    word: "Variable Air Volume",
    abbreviation: "VAV Box",
    phoneticUK: "/ˈveə.ri.ə.bəl eər ˈvɒl.juːm/",
    phoneticUS: "/ˈver.i.ə.bəl er ˈvɑːl.juːm/",
    vietnameseMeaning:
      "Hộp điều chỉnh lưu lượng gió biến đổi theo tải nhiệt thực tế của khu vực phòng.",
    englishDefinition:
      "Terminal equipment that regulates supply airflow at constant supply temperature to maintain zone comfort.",
    fieldNote:
      "Thường lắp đặt phía trên trần thạch cao, tích hợp van gió điều khiển bằng actuator điện và bộ cảm biến lưu lượng vi sai.",
    standard: "ASHRAE 90.1",
    quizQuestion: {
      promptVi:
        "Chức năng chính của VAV Box trong hệ thống HVAC trung tâm là gì?",
      promptEn:
        "What is the primary function of a VAV Box in a central HVAC system?",
      options: [
        {
          textVi: "Thay đổi nhiệt độ nước lạnh cung cấp cho Chiller",
          textEn: "Varying chilled water temperature supply to chiller",
          isCorrect: false,
        },
        {
          textVi: "Điều tiết lưu lượng gió cấp tùy theo tải nhiệt từng phòng",
          textEn: "Regulating supply air volume based on zone cooling demand",
          isCorrect: true,
        },
        {
          textVi: "Lọc bụi thô tại cửa hút ngoài trời của tòa nhà",
          textEn: "Filtering coarse outdoor air dust at fresh air louvers",
          isCorrect: false,
        },
      ],
    },
  },
  {
    id: "chiller",
    topic: "HVAC & Thermal",
    word: "Centrifugal Chiller",
    abbreviation: "Water-Cooled",
    phoneticUK: "/sɛnˈtrɪf.jʊ.ɡəl ˈtʃɪl.ər/",
    phoneticUS: "/sɛnˈtrɪf.jə.ɡəl ˈtʃɪl.ɚ/",
    vietnameseMeaning:
      "Máy làm lạnh ly tâm làm mát bằng nước cho các tòa nhà và trung tâm thương mại quy mô lớn.",
    englishDefinition:
      "A refrigeration machine utilizing a high-speed rotating impeller to compress refrigerant vapor and chill water for zone distribution.",
    fieldNote:
      "Vận hành với hệ số COP từ 5.5 đến 7.0, kết hợp tuần hoàn với tháp giải nhiệt (cooling tower) trên tầng mái.",
    standard: "AHRI 550/590",
    quizQuestion: {
      promptVi:
        "Máy lạnh ly tâm Centrifugal Chiller thường được giải nhiệt bằng gì?",
      promptEn:
        "How is a large-capacity Centrifugal Chiller typically heat-rejected?",
      options: [
        {
          textVi: "Tháp giải nhiệt giải nhiệt bằng nước tuần hoàn",
          textEn: "Water-cooled via cooling towers and condenser pumps",
          isCorrect: true,
        },
        {
          textVi: "Quạt gió thổi trực tiếp từ dàn nóng cục bộ",
          textEn: "Direct air-cooled fan coils without water loop",
          isCorrect: false,
        },
        {
          textVi: "Bơm chìm xả nước ngầm trực tiếp",
          textEn: "Submersible pump dumping groundwater",
          isCorrect: false,
        },
      ],
    },
  },
  {
    id: "bms",
    topic: "Smart Building & Automation",
    word: "Building Management System",
    abbreviation: "BMS / BAS",
    phoneticUK: "/ˈbɪl.dɪŋ ˈmæn.ɪdʒ.mənt ˈsɪs.təm/",
    phoneticUS: "/ˈbɪl.dɪŋ ˈmæn.ədʒ.mənt ˈsɪs.təm/",
    vietnameseMeaning:
      "Hệ thống quản lý tòa nhà tích hợp điều khiển tự động toàn bộ MEP qua mạng vi xử lý DDC.",
    englishDefinition:
      "A computer-based control system installed in buildings that controls and monitors mechanical and electrical equipment.",
    fieldNote:
      "Giao tiếp chủ yếu qua chuẩn BACnet/IP và Modbus TCP, kết nối cảm biến nhiệt độ, áp suất và van điều khiển tự động.",
    standard: "ISO 16484 / BACnet",
    quizQuestion: {
      promptVi:
        "Giao thức truyền thông mở phổ biến nhất trong hệ thống BMS hiện đại là gì?",
      promptEn:
        "What is the most widely adopted open communication protocol in modern BMS?",
      options: [
        {
          textVi: "BACnet / IP & MS/TP",
          textEn: "BACnet / IP & MS/TP",
          isCorrect: true,
        },
        {
          textVi: "Bluetooth Low Energy 4.0",
          textEn: "Bluetooth Low Energy 4.0",
          isCorrect: false,
        },
        {
          textVi: "HTTP GET polling thuần",
          textEn: "Raw HTTP GET polling",
          isCorrect: false,
        },
      ],
    },
  },
  {
    id: "ahu",
    topic: "HVAC & Air Quality",
    word: "Air Handling Unit",
    abbreviation: "AHU",
    phoneticUK: "/eər ˈhænd.lɪŋ ˈjuː.nɪt/",
    phoneticUS: "/er ˈhænd.lɪŋ ˈjuː.nɪt/",
    vietnameseMeaning:
      "Thiết bị xử lý không khí trung tâm bao gồm quạt cấp, bầu lọc bụi và dàn coil làm lạnh/sưởi.",
    englishDefinition:
      "A central mechanical device used to re-condition and circulate air as part of a heating, ventilating, and air-conditioning system.",
    fieldNote:
      "Thường bố trí trong phòng kỹ thuật cơ điện mỗi tầng; yêu cầu kiểm tra định kỳ độ chênh áp qua màng lọc (filter differential pressure).",
    standard: "ASHRAE 62.1",
    quizQuestion: {
      promptVi:
        "Chỉ số quan trọng nào cần đo lường định kỳ để biết màng lọc AHU bị nghẹt?",
      promptEn:
        "What differential parameter is measured across AHU filters to assess clogging?",
      options: [
        {
          textVi: "Độ chênh lệch áp suất qua màng lọc (Delta-P in Pascals)",
          textEn: "Differential pressure across filter bank (Delta-P)",
          isCorrect: true,
        },
        {
          textVi: "Điện áp xoay chiều của đèn chiếu sáng phòng AHU",
          textEn: "AC line voltage of mechanical room lighting",
          isCorrect: false,
        },
        {
          textVi: "Tốc độ vòng quay của bơm nước thải tầng hầm",
          textEn: "RPM speed of basement sump pump",
          isCorrect: false,
        },
      ],
    },
  },
  {
    id: "ppm",
    topic: "Operations & Asset Care",
    word: "Planned Preventive Maintenance",
    abbreviation: "PPM Schedule",
    phoneticUK: "/plænd prɪˈven.tɪv ˈmeɪn.tən.əns/",
    phoneticUS: "/plænd prɪˈven.t̬ɪv ˈmeɪn.tən.əns/",
    vietnameseMeaning:
      "Bảo trì phòng ngừa có kế hoạch nhằm duy trì tuổi thọ thiết bị và ngăn ngừa sự cố bất ngờ.",
    englishDefinition:
      "Scheduled maintenance activities performed systematically to prevent unexpected equipment failure and preserve asset lifespan.",
    fieldNote:
      "Được lên lịch trình tự động trên CMMS/CAFM theo chu kỳ hàng tuần, tháng, quý hoặc số giờ chạy máy thực tế.",
    standard: "ISO 55000 (Asset Mgmt)",
    quizQuestion: {
      promptVi: "Mục tiêu trọng tâm của bảo trì phòng ngừa PPM là gì?",
      promptEn:
        "What is the primary objective of Planned Preventive Maintenance (PPM)?",
      options: [
        {
          textVi: "Chờ đến khi máy hỏng hoàn toàn mới thay thế để tiết kiệm",
          textEn:
            "Waiting until catastrophic failure before ordering replacement",
          isCorrect: false,
        },
        {
          textVi:
            "Chủ động kiểm tra, bảo dưỡng định kỳ để triệt tiêu sự cố dừng máy đột xuất",
          textEn:
            "Proactively servicing equipment to eliminate unplanned downtime",
          isCorrect: true,
        },
        {
          textVi: "Tăng chi phí sửa chữa đột xuất của tòa nhà",
          textEn: "Increasing emergency repair expense for the facility",
          isCorrect: false,
        },
      ],
    },
  },
];

export function InteractiveTermInspector() {
  const { isVi } = useLanguage();
  const [selectedTermId, setSelectedTermId] = useState<string>("vav");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  );

  const currentTerm =
    SAMPLE_TERMS.find((t) => t.id === selectedTermId) ?? SAMPLE_TERMS[0];

  const handleSelectTerm = (id: string) => {
    setSelectedTermId(id);
    setSelectedOptionIndex(null);
  };

  const handleSimulatePronounce = () => {
    setIsPlayingAudio(true);
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentTerm.word);
      utterance.lang = "en-US";
      utterance.rate = 0.9;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setIsPlayingAudio(false), 1200);
    }
  };

  return (
    <div className="w-full border border-black/10 dark:border-white/10 bg-cardLight dark:bg-cardDark p-6 md:p-10 space-y-8">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] opacity-60">
            <span className="w-2 h-2 bg-black dark:bg-white inline-block" />
            <span>
              {isVi
                ? "Bộ Mô Phỏng Tra Cứu Thuật Ngữ MEP / FM"
                : "Interactive MEP / FM Protocol Inspector"}
            </span>
          </div>
          <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold">
            {isVi
              ? "Trải nghiệm trực tiếp dữ liệu học tập 1.847 thuật ngữ"
              : "Live Sample from the 1,847 Term Lexicon"}
          </h3>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider opacity-60 bg-black/5 dark:bg-white/5 px-3 py-1.5 border border-black/10 dark:border-white/10 self-start sm:self-center">
          <Icons.Check size={14} className="text-emerald-500" />
          <span>ASHRAE / AHRI / ISO ALIGNED</span>
        </div>
      </div>

      {/* Term Selector Pills */}
      <div className="flex flex-wrap gap-2">
        {SAMPLE_TERMS.map((term) => {
          const isActive = term.id === selectedTermId;
          return (
            <button
              key={term.id}
              type="button"
              onClick={() => handleSelectTerm(term.id)}
              className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider border transition-all ${
                isActive
                  ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black font-bold shadow-sm"
                  : "border-black/15 dark:border-white/15 opacity-70 hover:opacity-100 hover:border-black dark:hover:border-white"
              }`}
            >
              <span>{term.abbreviation ?? term.word}</span>
            </button>
          );
        })}
      </div>

      {/* Main Term Detailed Card */}
      <SpotlightCard className="border border-black/15 dark:border-white/15 bg-bgLight dark:bg-bgDark p-6 md:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-black/10 dark:border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border border-black/20 dark:border-white/20 bg-cardLight dark:bg-cardDark font-bold opacity-80">
                {currentTerm.topic}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
                {currentTerm.standard}
              </span>
            </div>
            <h4 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              {currentTerm.word}
            </h4>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono opacity-70 pt-1">
              <span>UK: {currentTerm.phoneticUK}</span>
              <span>•</span>
              <span>US: {currentTerm.phoneticUS}</span>
            </div>
          </div>

          {/* Pronounce Simulation Button */}
          <button
            type="button"
            onClick={handleSimulatePronounce}
            disabled={isPlayingAudio}
            className="inline-flex items-center gap-2.5 border border-black dark:border-white px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shrink-0 active:scale-95 disabled:opacity-50"
            aria-label={isVi ? "Nghe phát âm chuẩn" : "Listen to pronunciation"}
          >
            <Icons.Microphone
              size={16}
              className={isPlayingAudio ? "animate-pulse" : ""}
            />
            <span>
              {isPlayingAudio
                ? isVi
                  ? "Đang phát..."
                  : "Playing..."
                : isVi
                  ? "Phát âm chuẩn"
                  : "Pronounce"}
            </span>
          </button>
        </div>

        {/* Definitions & Operational Field Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 border-l-2 border-black/30 dark:border-white/30 pl-4">
            <p className="text-[10px] font-mono uppercase tracking-widest opacity-60">
              {isVi ? "Định nghĩa kỹ thuật (English)" : "Technical Definition"}
            </p>
            <p className="text-base font-light leading-relaxed opacity-90">
              {currentTerm.englishDefinition}
            </p>
          </div>

          <div className="space-y-2 border-l-2 border-black/30 dark:border-white/30 pl-4">
            <p className="text-[10px] font-mono uppercase tracking-widest opacity-60">
              {isVi
                ? "Ý nghĩa Tiếng Việt trong vận hành"
                : "Vietnamese O&M Context"}
            </p>
            <p className="text-base font-light leading-relaxed opacity-90">
              {currentTerm.vietnameseMeaning}
            </p>
          </div>
        </div>

        {/* Real Engineering Field Note */}
        <div className="border border-black/10 dark:border-white/10 bg-cardLight dark:bg-cardDark p-5 flex items-start gap-4">
          <Icons.Bookmark size={20} className="shrink-0 opacity-60 mt-0.5" />
          <div className="space-y-1">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-70">
              {isVi
                ? "Kinh nghiệm thực địa (Field Operations Note)"
                : "Field Engineering Note"}
            </span>
            <p className="text-sm font-light leading-relaxed opacity-85">
              {currentTerm.fieldNote}
            </p>
          </div>
        </div>

        {/* Mini Quiz Protocol */}
        <div className="pt-4 border-t border-black/10 dark:border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-70">
              {isVi
                ? "Kiểm tra kiến thức nhanh (Instant Knowledge Check)"
                : "Micro-Quiz Protocol"}
            </span>
            {selectedOptionIndex !== null && (
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold">
                {currentTerm.quizQuestion.options[selectedOptionIndex]
                  .isCorrect ? (
                  <span className="text-emerald-600 dark:text-emerald-400">
                    ✓ {isVi ? "CHÍNH XÁC" : "CORRECT"}
                  </span>
                ) : (
                  <span className="text-rose-600 dark:text-rose-400">
                    ✕ {isVi ? "CHƯA ĐÚNG" : "INCORRECT"}
                  </span>
                )}
              </span>
            )}
          </div>

          <p className="text-sm font-medium">
            {isVi
              ? currentTerm.quizQuestion.promptVi
              : currentTerm.quizQuestion.promptEn}
          </p>

          <div className="grid grid-cols-1 gap-2 pt-1">
            {currentTerm.quizQuestion.options.map((opt, i) => {
              const isSelected = selectedOptionIndex === i;
              let btnClass =
                "border-black/15 dark:border-white/15 opacity-80 hover:opacity-100 hover:border-black dark:hover:border-white";
              if (isSelected) {
                btnClass = opt.isCorrect
                  ? "border-emerald-600 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200 font-bold"
                  : "border-rose-600 bg-rose-500/10 text-rose-900 dark:text-rose-200 font-bold";
              }

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedOptionIndex(i)}
                  className={`w-full text-left p-3 border text-xs font-mono transition-all flex items-center justify-between ${btnClass}`}
                >
                  <span>{isVi ? opt.textVi : opt.textEn}</span>
                  {isSelected && (
                    <span className="shrink-0 ml-3">
                      {opt.isCorrect ? "✓" : "✕"}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}
