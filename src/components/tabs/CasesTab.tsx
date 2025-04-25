import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Rocket, Flame, Crown, ShieldCheck, Gem, Star, Zap, Sparkles, Diamond } from "lucide-react";

// Данные о кейсах
const cases = [
  { 
    id: 1, 
    name: "Новичок", 
    price: 10, 
    icon: Package,
    items: [
      { id: 1, name: "P250 | Sand Dune", price: 5, rarity: "common" },
      { id: 2, name: "MP7 | Forest DDPAT", price: 8, rarity: "common" },
      { id: 3, name: "Nova | Predator", price: 9, rarity: "common" },
      { id: 4, name: "Dual Berettas | Colony", price: 11, rarity: "uncommon" },
      { id: 5, name: "P90 | Storm", price: 15, rarity: "uncommon" },
      { id: 6, name: "UMP-45 | Urban DDPAT", price: 20, rarity: "rare" }
    ]
  },
  { 
    id: 2, 
    name: "Охотник", 
    price: 50,
    icon: Rocket,
    items: [
      { id: 7, name: "M4A4 | Faded Zebra", price: 30, rarity: "common" },
      { id: 8, name: "AK-47 | Safari Mesh", price: 45, rarity: "uncommon" },
      { id: 9, name: "Desert Eagle | Urban Rubble", price: 55, rarity: "uncommon" },
      { id: 10, name: "Glock-18 | Blue Fissure", price: 70, rarity: "rare" },
      { id: 11, name: "AWP | Safari Mesh", price: 90, rarity: "mythical" },
      { id: 12, name: "USP-S | Stainless", price: 100, rarity: "legendary" }
    ]
  },
  { 
    id: 3, 
    name: "Синдикат", 
    price: 100,
    icon: Flame,
    items: [
      { id: 13, name: "Galil AR | Tornado", price: 60, rarity: "common" },
      { id: 14, name: "CZ75-Auto | Crimson Web", price: 85, rarity: "uncommon" },
      { id: 15, name: "P250 | Wingshot", price: 110, rarity: "rare" },
      { id: 16, name: "USP-S | Guardian", price: 140, rarity: "rare" },
      { id: 17, name: "M4A1-S | Basilisk", price: 180, rarity: "mythical" },
      { id: 18, name: "AK-47 | Elite Build", price: 220, rarity: "legendary" }
    ]
  },
  { 
    id: 4, 
    name: "Пехота", 
    price: 250,
    icon: Crown,
    items: [
      { id: 19, name: "FAMAS | Survivor Z", price: 150, rarity: "uncommon" },
      { id: 20, name: "AUG | Torque", price: 220, rarity: "rare" },
      { id: 21, name: "Tec-9 | Isaac", price: 260, rarity: "rare" },
      { id: 22, name: "P90 | Trigon", price: 350, rarity: "mythical" },
      { id: 23, name: "M4A4 | 龍王 (Dragon King)", price: 450, rarity: "legendary" },
      { id: 24, name: "AWP | Worm God", price: 550, rarity: "ancient" }
    ]
  },
  { 
    id: 5, 
    name: "Гвардия", 
    price: 500,
    icon: ShieldCheck,
    items: [
      { id: 25, name: "Glock-18 | Water Elemental", price: 300, rarity: "rare" },
      { id: 26, name: "M4A1-S | Bright Water", price: 450, rarity: "rare" },
      { id: 27, name: "USP-S | Serum", price: 550, rarity: "mythical" },
      { id: 28, name: "AK-47 | Redline", price: 750, rarity: "legendary" },
      { id: 29, name: "AWP | BOOM", price: 950, rarity: "legendary" },
      { id: 30, name: "Desert Eagle | Cobalt Disruption", price: 1100, rarity: "ancient" }
    ]
  },
  { 
    id: 6, 
    name: "Легенда", 
    price: 1000,
    icon: Gem,
    items: [
      { id: 31, name: "SSG 08 | Blood in the Water", price: 600, rarity: "rare" },
      { id: 32, name: "AK-47 | Fuel Injector", price: 900, rarity: "mythical" },
      { id: 33, name: "USP-S | Kill Confirmed", price: 1200, rarity: "legendary" },
      { id: 34, name: "M4A1-S | Golden Coil", price: 1500, rarity: "legendary" },
      { id: 35, name: "Desert Eagle | Sunset Storm", price: 1800, rarity: "ancient" },
      { id: 36, name: "AWP | Asiimov", price: 2100, rarity: "ancient" }
    ]
  },
  { 
    id: 7, 
    name: "Премиум", 
    price: 2000,
    icon: Star,
    items: [
      { id: 37, name: "AWP | Hyper Beast", price: 1200, rarity: "mythical" },
      { id: 38, name: "M4A4 | Asiimov", price: 1800, rarity: "legendary" },
      { id: 39, name: "AK-47 | Bloodsport", price: 2400, rarity: "legendary" },
      { id: 40, name: "Desert Eagle | Blaze", price: 3000, rarity: "ancient" },
      { id: 41, name: "AWP | Lightning Strike", price: 3600, rarity: "ancient" },
      { id: 42, name: "Butterfly Knife | Fade", price: 4500, rarity: "ancient" }
    ]
  },
  { 
    id: 8, 
    name: "Элитный", 
    price: 3000,
    icon: Zap,
    items: [
      { id: 43, name: "AK-47 | Fire Serpent", price: 2000, rarity: "legendary" },
      { id: 44, name: "M4A4 | Howl", price: 3000, rarity: "legendary" },
      { id: 45, name: "AWP | Dragon Lore (BS)", price: 4000, rarity: "ancient" },
      { id: 46, name: "Karambit | Fade", price: 5000, rarity: "ancient" },
      { id: 47, name: "M9 Bayonet | Crimson Web", price: 6000, rarity: "ancient" },
      { id: 48, name: "Butterfly Knife | Doppler", price: 7000, rarity: "ancient" }
    ]
  },
  { 
    id: 9, 
    name: "Драгоценный", 
    price: 5000,
    icon: Sparkles,
    items: [
      { id: 49, name: "AWP | Medusa", price: 3500, rarity: "legendary" },
      { id: 50, name: "AWP | Dragon Lore (FT)", price: 6000, rarity: "ancient" },
      { id: 51, name: "M9 Bayonet | Gamma Doppler", price: 8000, rarity: "ancient" },
      { id: 52, name: "Karambit | Lore", price: 9500, rarity: "ancient" },
      { id: 53, name: "Butterfly Knife | Marble Fade", price: 11000, rarity: "ancient" },
      { id: 54, name: "Sport Gloves | Pandora's Box", price: 12500, rarity: "ancient" }
    ]
  },
  { 
    id: 10, 
    name: "Вершина", 
    price: 7000,
    icon: Diamond,
    items: [
      { id: 55, name: "AWP | Dragon Lore (FN)", price: 8000, rarity: "ancient" },
      { id: 56, name: "M4A4 | Howl (FN)", price: 9500, rarity: "ancient" },
      { id: 57, name: "Butterfly Knife | Crimson Web (FN)", price: 11000, rarity: "ancient" },
      { id: 58, name: "Karambit | Crimson Web (FN)", price: 12500, rarity: "ancient" },
      { id: 59, name: "Sport Gloves | Vice (FN)", price: 14000, rarity: "ancient" },
      { id: 60, name: "AK-47 | Wild Lotus (FN)", price: 15000, rarity: "ancient" }
    ]
  }
];

const CasesTab = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const handleOpenCase = (caseId: number) => {
    setSelectedCase(caseId);
    // Здесь будет логика открытия кейса
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Выберите кейс</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {cases.map((caseItem) => {
          const Icon = caseItem.icon;
          return (
            <Card key={caseItem.id} className="case-card">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-accent" />
                  <span>{caseItem.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="h-32 flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 bg-orange-500/30 rounded-lg blur-lg"></div>
                    <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-yellow-300">
                      <Icon className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1 mt-2">
                  {caseItem.items.slice(0, 3).map((item) => (
                    <div 
                      key={item.id} 
                      className={`h-2 rounded-full ${
                        item.rarity === "common" ? "bg-gray-400" :
                        item.rarity === "uncommon" ? "bg-blue-400" :
                        item.rarity === "rare" ? "bg-purple-400" :
                        item.rarity === "mythical" ? "bg-pink-400" :
                        item.rarity === "legendary" ? "bg-yellow-400" : "bg-red-400"
                      }`}
                    ></div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <div className="text-sm font-medium">Цена: {caseItem.price} ₽</div>
                <Button 
                  className="w-full" 
                  onClick={() => handleOpenCase(caseItem.id)}
                >
                  Открыть кейс
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      
      {selectedCase && (
        <div className="mt-8 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-border/50">
          <h3 className="text-xl font-bold mb-4">
            Возможные предметы из кейса "{cases.find(c => c.id === selectedCase)?.name}"
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {cases.find(c => c.id === selectedCase)?.items.map((item) => (
              <div 
                key={item.id} 
                className={`cs-item ${
                  item.rarity === "common" ? "cs-item-common" :
                  item.rarity === "uncommon" ? "cs-item-uncommon" :
                  item.rarity === "rare" ? "cs-item-rare" :
                  item.rarity === "mythical" ? "cs-item-mythical" :
                  item.rarity === "legendary" ? "cs-item-legendary" : "cs-item-ancient"
                }`}
              >
                <div className="text-xs font-medium mb-1">{item.name}</div>
                <div className="text-xs">{item.price} ₽</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CasesTab;
