import { Store, Heart, BookOpen, Search, ShoppingBasket } from 'lucide-react';

export default function Navigation({ currentTab, setTab }: { currentTab: string, setTab: (t: string) => void }) {
  const navItems = [
    { id: 'home', icon: Store, label: 'Entdecken' },
    { id: 'favorites', icon: Heart, label: 'Favoriten' },
    { id: 'recipes', icon: BookOpen, label: 'Kochen' },
    { id: 'browse', icon: Search, label: 'Suchen' },
    { id: 'basket', icon: ShoppingBasket, label: 'Warenkorb' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id || (currentTab === 'cart' && item.id === 'basket');
          return (
            <button
              key={item.id}
              onClick={() => setTab(item.id === 'basket' ? 'cart' : 'home')} // Only home and cart are really implemented
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 relative ${
                isActive ? 'text-[#e50016]' : 'text-gray-500 hover:text-gray-600'
              }`}
            >
              <div className="relative">
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                {item.id === 'basket' && (
                  <div className="absolute -top-2 -right-3 bg-[#e50016] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-white">
                    0.99
                  </div>
                )}
              </div>
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
