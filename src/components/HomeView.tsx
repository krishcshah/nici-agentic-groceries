import { Mic, Keyboard, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CartState } from '../types';

export default function HomeView({ cartState, onGoToCart, onMicClick }: { cartState: CartState, onGoToCart: () => void, onMicClick: () => void }) {
  return (
    <div className="flex flex-col min-h-screen bg-white pb-24 font-sans">
      {/* Top Pink Section */}
      <div className="bg-gradient-to-b from-[#fff5f6] to-[#f49bae] rounded-b-[40px] pt-12 pb-8 px-6 relative overflow-hidden flex flex-col items-center shadow-sm">
        
        {/* Decorative Top Right Element */}
        <div className="absolute top-10 right-4 w-28 h-10 bg-[#ffe1e6] rounded-2xl opacity-60"></div>

        {/* Floating Images Container */}
        <div className="relative w-full h-56 mb-2 mt-4 flex justify-center items-start">
          {/* Left Image (Cinnamon Rolls) */}
          <div className="absolute left-0 top-6 w-[100px] h-[150px] rounded-[24px] overflow-hidden shadow-2xl z-10">
            <img src="https://images.unsplash.com/photo-1509365465994-35119d52b8d5?auto=format&fit=crop&q=80&w=400" alt="Cinnamon rolls" className="w-full h-full object-cover" />
          </div>
          
          {/* Right Image (Veggies Bowl) */}
          <div className="absolute right-0 top-16 w-[100px] h-[140px] rounded-[24px] overflow-hidden shadow-2xl z-10">
            <img src="https://images.unsplash.com/photo-1546069901-ba6a2d112d7c?auto=format&fit=crop&q=80&w=400" alt="Veggie bowl" className="w-full h-full object-cover" />
          </div>

          {/* Center Image (Noodles) */}
          <div className="absolute top-0 w-[120px] h-[160px] rounded-[28px] overflow-hidden shadow-xl z-20">
            <img src="https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=400" alt="Noodle bowl" className="w-full h-full object-cover" />
          </div>

          {/* Smiley Face */}
          <div className="absolute top-[135px] z-30 w-16 h-16 bg-[#df0016] rounded-full flex items-center justify-center border-4 border-[#fac2cd]">
            <div className="relative w-8 h-8">
              <div className="absolute top-1.5 left-1.5 w-[7px] h-[7px] bg-white rounded-full"></div>
              <div className="absolute top-1.5 right-1.5 w-[7px] h-[7px] bg-white rounded-full"></div>
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-3 border-b-[3.5px] border-white rounded-b-full"></div>
            </div>
          </div>
        </div>

        {/* Greeting Text */}
        <h2 className="text-[#b9374d] font-semibold text-xl mb-1 mt-4">Hi I'm Nici,</h2>
        <h1 className="text-[34px] font-medium text-black text-center mb-10 leading-tight tracking-tight">
          how can I help with<br/>your order?
        </h1>

        {/* Input Buttons */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onMicClick}
            className="w-20 h-20 bg-[#c51c33] rounded-full shadow-lg flex items-center justify-center relative group"
          >
            <Mic size={32} strokeWidth={1.5} className="text-white" />
            <div className="absolute inset-0 rounded-full border border-[#c51c33] opacity-20 animate-ping" style={{ animationDuration: '3s' }}></div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 bg-[#e27d8f] rounded-full shadow-md flex items-center justify-center"
          >
            <Keyboard size={24} strokeWidth={2} className="text-[#a13b4c]" />
          </motion.button>
        </div>

        {/* Suggestion Pills */}
        <div className="w-full flex gap-3 px-2 overflow-x-auto no-scrollbar mask-image-fade">
          <button className="flex items-center gap-1.5 bg-[#ad3b50] text-white px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap shadow-inner bg-opacity-95">
            <span>💸</span> Make my order cheaper
          </button>
          <button className="flex items-center bg-[#ad3b50] text-white px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap shadow-inner bg-opacity-70">
            Plan Dinner for fri...
          </button>
        </div>
      </div>

      {/* Upcoming Delivery Section */}
      <div className="px-6 mt-8">
        <h3 className="text-[17px] font-bold text-black mb-4">Your upcoming Delivery</h3>
        
        <div className="bg-white border border-gray-200 rounded-[24px] p-4 flex items-center justify-between shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] cursor-pointer" onClick={onGoToCart}>
          {/* Left: Thumbnail & Price */}
          <div className="flex items-center gap-4 w-1/2">
            <div className="relative w-16 h-16 bg-gray-50 rounded-2xl p-1 border border-gray-100 flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=200" alt="Bread" className="w-full h-full object-contain mix-blend-multiply" />
              <div className="absolute -bottom-2 -right-2 bg-[#ffde00] text-black text-xs font-bold w-6 h-6 rounded flex items-center justify-center border-2 border-white shadow-sm">
                12
              </div>
            </div>
            <div className="font-bold text-[22px] tracking-tight">45,67 €</div>
          </div>

          {/* Divider */}
          <div className="w-px h-12 bg-gray-300"></div>

          {/* Right: Date & Time */}
          <div className="flex items-center justify-between w-[45%] pl-3">
            <div className="flex flex-col">
              <div className="text-[15px] font-bold text-gray-900 mb-0.5">8. April</div>
              <div className="text-[17px] font-medium text-[#118c39]">17:00 - 18:00</div>
            </div>
            <ChevronRight className="text-gray-400" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
