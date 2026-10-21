import { useState, useRef, useEffect, type FormEvent } from 'react';
import { gymConfig, buildWhatsAppLink } from '../config/gym';
import { MessageSquare, X, Send, ExternalLink, Bot } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}

export const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Assalam-o-Alaikum! 🌸 Main HerFit Studio ki automated assistant hoon. Fees, timings, location ya free trial booking ke baray mein sawal pooch sakti hain.',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nextIdRef = useRef(1);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const getBotResponse = (query: string): string => {
    const s = query.toLowerCase();

    if (s.includes('fee') || s.includes('price') || s.includes('rate') || s.includes('charge') || s.includes('paisa')) {
      return 'Fees Structure:\n• Basic Floor: Rs 3,000/month\n• All Classes (Zumba + Yoga): Rs 4,500/month\n• 12-Week Transformation: Rs 7,500/month\n(3 Mahine ka advance plan lene par 20% discount hai). Admission fee Rs 1,000 hai. Pehli trial class 100% FREE hai!';
    }

    if (s.includes('timing') || s.includes('time') || s.includes('waqt') || s.includes('khul') || s.includes('hour')) {
      return 'Ladies Timings:\n• Subah Session: 7:00 AM – 11:00 AM\n• Dopeher Slot: 12:00 PM – 3:00 PM\n• Shaam Session: 4:00 PM – 9:00 PM\n(Monday to Saturday). Friday ko sirf subah 7–12 PM floor khula hota hai. Sunday family day off hai.';
    }

    if (s.includes('trial') || s.includes('free') || s.includes('book') || s.includes('join') || s.includes('test')) {
      return 'Free Trial Session:\nAap bina kisi fee ke 1 full class ya floor session attend kar sakti hain. Page ke aakhir mein "Book Free Trial" form bharein ya direct WhatsApp par message karein!';
    }

    if (s.includes('location') || s.includes('kahan') || s.includes('address') || s.includes('pata') || s.includes('map')) {
      return `Hum Jinnah Town, Near Main Boulevard, Quetta mein hain. Pur-sukoon mahol, safe car parking aur separate discrete ladies entrance mojood hai. Google Maps link: ${gymConfig.identity.mapUrl}`;
    }

    if (s.includes('ladies') || s.includes('male') || s.includes('gent') || s.includes('privacy') || s.includes('parda') || s.includes('hijab')) {
      return 'Ji bilkul 100% ladies only. Floor par har waqt sirf khawateen members aur female coaches mojood hoti hain. Male staff ka dakhla sakhti se mamnoo hai. Aap hijab mein aayein ya athletic wear mein — mukammal sukoon hai.';
    }

    if (s.includes('zumba') || s.includes('yoga') || s.includes('strength') || s.includes('program') || s.includes('class')) {
      return 'Hamare Programs:\n• Zumba & Aerobics (Mon/Wed/Fri)\n• Yoga & Flexibility (Tue/Thu/Sat)\n• Strength Training & Floor Machines\n• 12-Week Transformation Program\n• 1-on-1 Personal Training';
    }

    if (s.includes('weight') || s.includes('wazan') || s.includes('motap') || s.includes('diet') || s.includes('fat')) {
      return 'Weight loss ke liye hamara 12-Hafte ka Transformation VIP program sab se zyada join hota hai. Is mein progressive cardio + strength aur Pakistani ghar ke khano ke hisaab se weekly diet plan shamil hota hai.';
    }

    if (s.includes('trainer') || s.includes('coach') || s.includes('ustad')) {
      return 'Hamari coaching team mukammal certified khawateen par mushtamil hai — Coach Sana (Head Zumba & Cardio), Coach Mahnoor (Yoga & Mobility), aur Coach Hira (Strength & Body Toning).';
    }

    if (s.includes('salam') || s.includes('hello') || s.includes('hi') || s.includes('hey')) {
      return 'Wa Alaikum Assalam! 🌸 Fees, timings, location ya free trial — kis cheez ke baray mein aap ko mazeed maloomat chahiye?';
    }

    return `Is sawal ka tafseeli jawab hamari female coaching team WhatsApp par degi: ${gymConfig.contact.phoneDisplay} (subah 9 – raat 9). Direct message karne ke liye WhatsApp icon par click karein.`;
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const uId = nextIdRef.current++;
    const userMsg: ChatMessage = {
      id: `msg-${uId}`,
      sender: 'user',
      text: query.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    setTimeout(() => {
      const replyText = getBotResponse(query);
      const bId = nextIdRef.current++;
      const botMsg: ChatMessage = {
        id: `msg-${bId}`,
        sender: 'bot',
        text: replyText,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 350);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  const chips = [
    'Fees kya hain?',
    'Timings kya hain?',
    'Free trial kese milega?',
    'Location kahan hai?',
    'Kya gym sirf ladies ke liye hai?',
  ];

  const whatsappDirectUrl = buildWhatsAppLink(
    gymConfig.contact.whatsappNumber,
    'Assalam-o-Alaikum! Mujhe HerFit Studio assistant se rabta karne ke baad mazeed maloomat leni hain.'
  );

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Open automated gym assistant chat"
        className="fixed right-4 sm:right-6 bottom-20 z-40 bg-[var(--rose)] hover:bg-[var(--rose-hover)] text-white text-xs sm:text-sm font-bold py-3 px-4 sm:px-5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer border border-white/20 active:scale-95"
      >
        <MessageSquare className="w-4 h-4 text-[#fbeaec]" aria-hidden="true" />
        <span>Chat — Fees / Timings</span>
      </button>

      {/* Floating Chat Box Dialog */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="HerFit Studio Automated Chat Assistant"
          className="fixed right-4 sm:right-6 bottom-32 z-50 w-[calc(100vw-32px)] sm:w-[360px] max-h-[500px] flex flex-col bg-[var(--surface)] border border-[var(--line)] rounded-3xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Header */}
          <div className="bg-[var(--rose)] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight text-white m-0">
                  HerFit Assistant
                </h3>
                <span className="text-[11px] text-white/80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Automated FAQ · Online
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close assistant chat"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 max-h-[260px] text-xs sm:text-sm bg-[var(--bg)]/50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-xs ${
                    m.sender === 'user'
                      ? 'bg-[var(--rose)] text-white rounded-br-xs'
                      : 'bg-[var(--surface)] text-[var(--ink)] border border-[var(--line)] rounded-bl-xs'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Chips */}
          <div className="p-2.5 bg-[var(--surface)] border-t border-[var(--line)]/60 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {chips.map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(chip)}
                className="shrink-0 text-[11px] font-semibold bg-[var(--surface2)] hover:bg-[var(--line)] text-[var(--ink)] px-2.5 py-1 rounded-full border border-[var(--line)] transition-colors cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Chat Input Form */}
          <form
            onSubmit={handleSubmit}
            className="p-2.5 bg-[var(--surface)] border-t border-[var(--line)] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Sawal likhein (e.g. fees, timings)…"
              className="flex-1 px-3.5 py-2 text-xs sm:text-sm rounded-full bg-[var(--bg)] border border-[var(--line)] text-[var(--ink)] focus-visible:outline-2 focus-visible:outline-[var(--rose)]"
            />
            <button
              type="submit"
              className="w-8 h-8 rounded-full bg-[var(--rose)] hover:bg-[var(--rose-hover)] text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
              aria-label="Send message to assistant"
            >
              <Send className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </form>

          {/* Bottom Live WhatsApp Route */}
          <div className="px-3 py-2 bg-[var(--surface2)]/80 text-[10px] text-[var(--muted)] flex items-center justify-between border-t border-[var(--line)]">
            <span>Need human support?</span>
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[var(--rose)] hover:text-[var(--rose-hover)] flex items-center gap-1"
            >
              <span>WhatsApp Coach</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
