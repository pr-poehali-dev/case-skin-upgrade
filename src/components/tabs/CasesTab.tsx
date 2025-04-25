import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Rocket, Flame, Crown, ShieldCheck, Gem, Star, Zap, Sparkles, Diamond } from "lucide-react";

// Данные о кейсах с реальными скинами CS:GO
const cases = [
  { 
    id: 1, 
    name: "Ржавый зверь", 
    price: 10, 
    icon: Package,
    items: [
      { id: 1, name: "P250 | Песчаная дюна", price: 5, rarity: "common", image: "https://wiki.cs.money/images/skin/EOa0RDX0ApCFRZn3Hq2z3.png" },
      { id: 2, name: "MP7 | Лесной DDPAT", price: 8, rarity: "common", image: "https://wiki.cs.money/images/skin/ZLz7zx9y95ixT9XnOEjml.png" },
      { id: 3, name: "Nova | Хищник", price: 9, rarity: "common", image: "https://wiki.cs.money/images/skin/FdxuR209yc7h1Suw9HN2Q.png" },
      { id: 4, name: "Dual Berettas | Колония", price: 11, rarity: "uncommon", image: "https://wiki.cs.money/images/skin/lEb4eXAw59cRKP4Jy6B2q.png" },
      { id: 5, name: "P90 | Буря", price: 15, rarity: "uncommon", image: "https://wiki.cs.money/images/skin/zO9KQkGaYpcR7Z8JbKv3Y.png" },
      { id: 6, name: "UMP-45 | Городской DDPAT", price: 20, rarity: "rare", image: "https://wiki.cs.money/images/skin/fA1gk6W1Oafy66O2mAqEW.png" }
    ]
  },
  { 
    id: 2, 
    name: "Огненная пасть", 
    price: 50,
    icon: Rocket,
    items: [
      { id: 7, name: "M4A4 | Пиксельный камуфляж", price: 30, rarity: "common", image: "https://wiki.cs.money/images/skin/dL4lPn1NDYt3wYZYkO6Pq.png" },
      { id: 8, name: "AK-47 | Сафари", price: 45, rarity: "uncommon", image: "https://wiki.cs.money/images/skin/zyDJeqaMJ1T4b1lK5N0E3.png" },
      { id: 9, name: "Desert Eagle | Городской щебень", price: 55, rarity: "uncommon", image: "https://wiki.cs.money/images/skin/N27eKJn0vkSPl7PG7qLOR.png" },
      { id: 10, name: "Glock-18 | Синяя трещина", price: 70, rarity: "rare", image: "https://wiki.cs.money/images/skin/k3LJNMgO1NsR5qgEPDEGj.png" },
      { id: 11, name: "AWP | Сафари", price: 90, rarity: "mythical", image: "https://wiki.cs.money/images/skin/4kRgnx7NEKt4qNMvxmJk2.png" },
      { id: 12, name: "USP-S | Нержавейка", price: 100, rarity: "legendary", image: "https://wiki.cs.money/images/skin/RzZKnLDgk5fj88x1qeA0K.png" }
    ]
  },
  { 
    id: 3, 
    name: "Кровавый беспредел", 
    price: 100,
    icon: Flame,
    items: [
      { id: 13, name: "Galil AR | Торнадо", price: 60, rarity: "common", image: "https://wiki.cs.money/images/skin/xM8Q0YMM6oF91qY5Py5DL.png" },
      { id: 14, name: "CZ75-Auto | Кровавая паутина", price: 85, rarity: "uncommon", image: "https://wiki.cs.money/images/skin/GE56njL5eoIzPjemDnlPK.png" },
      { id: 15, name: "P250 | Покойник", price: 110, rarity: "rare", image: "https://wiki.cs.money/images/skin/O8gGxN59nkU7e23GyY1KP.png" },
      { id: 16, name: "USP-S | Страж", price: 140, rarity: "rare", image: "https://wiki.cs.money/images/skin/6n1MgbLJqpcRO81AYMVOB.png" },
      { id: 17, name: "M4A1-S | Василиск", price: 180, rarity: "mythical", image: "https://wiki.cs.money/images/skin/M8GbYPLB7NUQgWEGrZOzD.png" },
      { id: 18, name: "AK-47 | Элитное снаряжение", price: 220, rarity: "legendary", image: "https://wiki.cs.money/images/skin/XNyEgwOA90tjPq7GpkeGR.png" }
    ]
  },
  { 
    id: 4, 
    name: "Адский призрак", 
    price: 250,
    icon: Crown,
    items: [
      { id: 19, name: "FAMAS | Выживший Z", price: 150, rarity: "uncommon", image: "https://wiki.cs.money/images/skin/qwKkJBWpJ6i5YLn9QkvEN.png" },
      { id: 20, name: "AUG | Закрученный", price: 220, rarity: "rare", image: "https://wiki.cs.money/images/skin/KM1Pn4bQ3eCnBaA0VxR5m.png" },
      { id: 21, name: "Tec-9 | Исаак", price: 260, rarity: "rare", image: "https://wiki.cs.money/images/skin/gnWLb6B8Odt1lJ3PqD5Gz.png" },
      { id: 22, name: "P90 | Тригон", price: 350, rarity: "mythical", image: "https://wiki.cs.money/images/skin/LQrgY7ZE3KiOYDZpbX1GJ.png" },
      { id: 23, name: "M4A4 | Король драконов", price: 450, rarity: "legendary", image: "https://wiki.cs.money/images/skin/lnPOnMbqyDtZr0yb7wk5j.png" },
      { id: 24, name: "AWP | Червь", price: 550, rarity: "ancient", image: "https://wiki.cs.money/images/skin/KP39NX2DQkI4PaPGJRGZ8.png" }
    ]
  },
  { 
    id: 5, 
    name: "Инфернальный шторм", 
    price: 500,
    icon: ShieldCheck,
    items: [
      { id: 25, name: "Glock-18 | Водяной элементаль", price: 300, rarity: "rare", image: "https://wiki.cs.money/images/skin/mq1pEOm2GLCzwVZmO40PM.png" },
      { id: 26, name: "M4A1-S | Светлая вода", price: 450, rarity: "rare", image: "https://wiki.cs.money/images/skin/pZ2Rjk1MZWtyPxQGK3mN0.png" },
      { id: 27, name: "USP-S | Сыворотка", price: 550, rarity: "mythical", image: "https://wiki.cs.money/images/skin/EZaYewEjBRTeZLMkNX7MA.png" },
      { id: 28, name: "AK-47 | Красная линия", price: 750, rarity: "legendary", image: "https://wiki.cs.money/images/skin/wgY2lwzGZGI478g0O5OfK.png" },
      { id: 29, name: "AWP | БУМ", price: 950, rarity: "legendary", image: "https://wiki.cs.money/images/skin/YM9E2OJ8wxsqOxGM5bkPZ.png" },
      { id: 30, name: "Desert Eagle | Кобальтовое нарушение", price: 1100, rarity: "ancient", image: "https://wiki.cs.money/images/skin/7KQvl3MjG6izP1gZY5mqr.png" }
    ]
  },
  { 
    id: 6, 
    name: "Кровавый рассвет", 
    price: 1000,
    icon: Gem,
    items: [
      { id: 31, name: "SSG 08 | Кровь в воде", price: 600, rarity: "rare", image: "https://wiki.cs.money/images/skin/plvwZ4P7NyHdg0K5PYA9y.png" },
      { id: 32, name: "AK-47 | Fuel Injector", price: 900, rarity: "mythical", image: "https://wiki.cs.money/images/skin/Y6jABr8MJwtnkxKJJLN1w.png" },
      { id: 33, name: "USP-S | Убийство подтверждено", price: 1200, rarity: "legendary", image: "https://wiki.cs.money/images/skin/elO4vO38gniyJ7JYLW753.png" },
      { id: 34, name: "M4A1-S | Golden Coil", price: 1500, rarity: "legendary", image: "https://wiki.cs.money/images/skin/97lnlnVnxqfGnVJr6wzMy.png" },
      { id: 35, name: "Desert Eagle | Закат", price: 1800, rarity: "ancient", image: "https://wiki.cs.money/images/skin/XBnq9pDq9zT8nDqAY1L21.png" },
      { id: 36, name: "AWP | Asiimov", price: 2100, rarity: "ancient", image: "https://wiki.cs.money/images/skin/ZnykbjrznKfQ0jZ8jzvym.png" }
    ]
  },
  { 
    id: 7, 
    name: "Неистовый зверь", 
    price: 2000,
    icon: Star,
    items: [
      { id: 37, name: "AWP | Гипер зверь", price: 1200, rarity: "mythical", image: "https://wiki.cs.money/images/skin/lzlvNPjxXmi2kJQGnv5RZ.png" },
      { id: 38, name: "M4A4 | Asiimov", price: 1800, rarity: "legendary", image: "https://wiki.cs.money/images/skin/qYlZMDOAzrHNPwZlOV8mL.png" },
      { id: 39, name: "AK-47 | Bloodsport", price: 2400, rarity: "legendary", image: "https://wiki.cs.money/images/skin/36N5ZNmlOEhjgGZWK4jwA.png" },
      { id: 40, name: "Desert Eagle | Пламя", price: 3000, rarity: "ancient", image: "https://wiki.cs.money/images/skin/Pxw3Y8w4ykfykQZ1zmrDL.png" },
      { id: 41, name: "AWP | Электрический улей", price: 3600, rarity: "ancient", image: "https://wiki.cs.money/images/skin/dwOvA8WwgMun5erJwENMy.png" },
      { id: 42, name: "Нож-бабочка | Градиент", price: 4500, rarity: "ancient", image: "https://wiki.cs.money/images/skin/GlW78Q9eQYTEaL6n3NnM2.png" }
    ]
  },
  { 
    id: 8, 
    name: "Смертельный арсенал", 
    price: 3000,
    icon: Zap,
    items: [
      { id: 43, name: "AK-47 | Огненный змей", price: 2000, rarity: "legendary", image: "https://wiki.cs.money/images/skin/R1wzjdjnYnuPB5gMOZOgE.png" },
      { id: 44, name: "M4A4 | Вой", price: 3000, rarity: "legendary", image: "https://wiki.cs.money/images/skin/jvZVAd2RlKHQxaKrG0Mz3.png" },
      { id: 45, name: "AWP | Dragon Lore (BS)", price: 4000, rarity: "ancient", image: "https://wiki.cs.money/images/skin/OeB9y3jA3kIwnYrjNBMLZ.png" },
      { id: 46, name: "Керамбит | Градиент", price: 5000, rarity: "ancient", image: "https://wiki.cs.money/images/skin/GrYgV4QGXyHLPYKGY98lv.png" },
      { id: 47, name: "M9 Bayonet | Кровавая паутина", price: 6000, rarity: "ancient", image: "https://wiki.cs.money/images/skin/1qpwz7nX3PTpOmXa7X1qK.png" },
      { id: 48, name: "Нож-бабочка | Драгоценный сапфир", price: 7000, rarity: "ancient", image: "https://wiki.cs.money/images/skin/Ewja9qdpAqfYxbN6lXvRr.png" }
    ]
  },
  { 
    id: 9, 
    name: "Потустороннее сияние", 
    price: 5000,
    icon: Sparkles,
    items: [
      { id: 49, name: "AWP | Медуза", price: 3500, rarity: "legendary", image: "https://wiki.cs.money/images/skin/YL5zq2egp7t8xyB3N1jrx.png" },
      { id: 50, name: "AWP | Dragon Lore (FT)", price: 6000, rarity: "ancient", image: "https://wiki.cs.money/images/skin/OeB9y3jA3kIwnYrjNBMLZ.png" },
      { id: 51, name: "M9 Bayonet | Gamma Doppler", price: 8000, rarity: "ancient", image: "https://wiki.cs.money/images/skin/Y6OApQGAKOSXnq0OYlW2D.png" },
      { id: 52, name: "Керамбит | Лор", price: 9500, rarity: "ancient", image: "https://wiki.cs.money/images/skin/p1YnMRqlZxFlPk1A5lp7B.png" },
      { id: 53, name: "Нож-бабочка | Мраморный градиент", price: 11000, rarity: "ancient", image: "https://wiki.cs.money/images/skin/wQOlaMvx2OT5jGnq5Kg7Z.png" },
      { id: 54, name: "Спортивные перчатки | Ящик Пандоры", price: 12500, rarity: "ancient", image: "https://wiki.cs.money/images/skin/a6QqzX1b3MCD3aMnwdqrR.png" }
    ]
  },
  { 
    id: 10, 
    name: "Легендарный хаос", 
    price: 7000,
    icon: Diamond,
    items: [
      { id: 55, name: "AWP | Dragon Lore (FN)", price: 8000, rarity: "ancient", image: "https://wiki.cs.money/images/skin/OeB9y3jA3kIwnYrjNBMLZ.png" },
      { id: 56, name: "M4A4 | Вой (FN)", price: 9500, rarity: "ancient", image: "https://wiki.cs.money/images/skin/jvZVAd2RlKHQxaKrG0Mz3.png" },
      { id: 57, name: "Нож-бабочка | Кровавая паутина (FN)", price: 11000, rarity: "ancient", image: "https://wiki.cs.money/images/skin/3OzqjleLgxc5aBP6X7qeE.png" },
      { id: 58, name: "Керамбит | Кровавая паутина (FN)", price: 12500, rarity: "ancient", image: "https://wiki.cs.money/images/skin/JdnVnXnkZYFkA6RzMgWna.png" },
      { id: 59, name: "Спортивные перчатки | Vice (FN)", price: 14000, rarity: "ancient", image: "https://wiki.cs.money/images/skin/mYQq7kAJd4S1g01n7wLGl.png" },
      { id: 60, name: "AK-47 | Дикий лотос (FN)", price: 15000, rarity: "ancient", image: "https://wiki.cs.money/images/skin/XD3W7eJNbwfeXpd5E6jRa.png" }
    ]
  }
];

const CasesTab = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [openingCase, setOpeningCase] = useState<boolean>(false);
  const [winItem, setWinItem] = useState<any>(null);

  const handleOpenCase = (caseId: number) => {
    setSelectedCase(caseId);
    // Здесь будет логика открытия кейса
  };

  const startOpenCase = () => {
    if (!selectedCase) return;
    
    setOpeningCase(true);
    
    // Имитация открытия кейса
    setTimeout(() => {
      const currentCase = cases.find(c => c.id === selectedCase);
      if (currentCase) {
        const randomIndex = Math.floor(Math.random() * currentCase.items.length);
        setWinItem(currentCase.items[randomIndex]);
      }
      setOpeningCase(false);
    }, 3000);
  };

  const closeWinItem = () => {
    setWinItem(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Выберите кейс</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {cases.map((caseItem) => {
          const Icon = caseItem.icon;
          return (
            <Card 
              key={caseItem.id} 
              className={`case-card ${selectedCase === caseItem.id ? 'ring-2 ring-accent' : ''}`}
              onClick={() => handleOpenCase(caseItem.id)}
            >
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
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenCase(caseItem.id);
                  }}
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
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">
              Кейс "{cases.find(c => c.id === selectedCase)?.name}"
            </h3>
            <Button 
              variant="gradient" 
              className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white"
              onClick={startOpenCase}
              disabled={openingCase}
            >
              {openingCase ? "Открывается..." : `Открыть за ${cases.find(c => c.id === selectedCase)?.price} ₽`}
            </Button>
          </div>
          
          <h4 className="text-lg font-medium mb-2">Возможные предметы:</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {cases.find(c => c.id === selectedCase)?.items.map((item) => (
              <div 
                key={item.id} 
                className={`cs-item group relative overflow-hidden ${
                  item.rarity === "common" ? "cs-item-common" :
                  item.rarity === "uncommon" ? "cs-item-uncommon" :
                  item.rarity === "rare" ? "cs-item-rare" :
                  item.rarity === "mythical" ? "cs-item-mythical" :
                  item.rarity === "legendary" ? "cs-item-legendary" : "cs-item-ancient"
                }`}
              >
                <div className="h-24 flex items-center justify-center mb-2 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-auto h-full object-contain transition-transform group-hover:scale-110" 
                  />
                </div>
                <div className="text-xs font-medium mb-1 line-clamp-1">{item.name}</div>
                <div className="text-xs font-bold">{item.price} ₽</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {openingCase && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-full max-w-4xl">
            <div className="relative h-32 overflow-hidden">
              <div className="absolute left-0 top-0 h-full flex animate-spin-wheel">
                {/* Дублируем элементы для непрерывной анимации */}
                {cases.find(c => c.id === selectedCase)?.items.map((item) => (
                  <div key={`scroll-${item.id}`} className="h-32 w-32 flex-shrink-0 p-1">
                    <div className={`h-full w-full cs-item flex flex-col items-center justify-center p-2 ${
                      item.rarity === "common" ? "cs-item-common" :
                      item.rarity === "uncommon" ? "cs-item-uncommon" :
                      item.rarity === "rare" ? "cs-item-rare" :
                      item.rarity === "mythical" ? "cs-item-mythical" :
                      item.rarity === "legendary" ? "cs-item-legendary" : "cs-item-ancient"
                    }`}>
                      <img src={item.image} alt={item.name} className="h-20 w-auto object-contain" />
                      <div className="text-[10px] truncate w-full text-center mt-1">{item.name}</div>
                    </div>
                  </div>
                ))}
                {cases.find(c => c.id === selectedCase)?.items.map((item) => (
                  <div key={`scroll2-${item.id}`} className="h-32 w-32 flex-shrink-0 p-1">
                    <div className={`h-full w-full cs-item flex flex-col items-center justify-center p-2 ${
                      item.rarity === "common" ? "cs-item-common" :
                      item.rarity === "uncommon" ? "cs-item-uncommon" :
                      item.rarity === "rare" ? "cs-item-rare" :
                      item.rarity === "mythical" ? "cs-item-mythical" :
                      item.rarity === "legendary" ? "cs-item-legendary" : "cs-item-ancient"
                    }`}>
                      <img src={item.image} alt={item.name} className="h-20 w-auto object-contain" />
                      <div className="text-[10px] truncate w-full text-center mt-1">{item.name}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute top-0 left-1/2 h-full w-0.5 bg-accent z-10"></div>
              <div className="absolute top-0 left-1/2 -ml-4 w-8 h-full bg-gradient-to-r from-transparent via-accent/50 to-transparent blur z-10"></div>
            </div>
          </div>
        </div>
      )}
      
      {winItem && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-orange-400 to-yellow-300 p-1 rounded-lg max-w-md w-full">
            <div className="bg-white/90 backdrop-blur-sm rounded p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Поздравляем!</h3>
              <p className="mb-4">Вы выиграли:</p>
              <div className={`cs-item mx-auto max-w-xs ${
                winItem.rarity === "common" ? "cs-item-common" :
                winItem.rarity === "uncommon" ? "cs-item-uncommon" :
                winItem.rarity === "rare" ? "cs-item-rare" :
                winItem.rarity === "mythical" ? "cs-item-mythical" :
                winItem.rarity === "legendary" ? "cs-item-legendary" : "cs-item-ancient"
              }`}>
                <div className="h-48 flex items-center justify-center mb-2">
                  <img src={winItem.image} alt={winItem.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="text-lg font-bold mb-1">{winItem.name}</div>
                <div className="text-md font-bold mb-4">{winItem.price} ₽</div>
              </div>
              <div className="flex space-x-2 mt-4">
                <Button 
                  className="flex-1"
                  onClick={closeWinItem}
                >
                  В инвентарь
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={closeWinItem}
                >
                  Продать за {winItem.price} ₽
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CasesTab;
