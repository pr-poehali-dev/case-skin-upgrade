import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { RotateCcw, ChevronRight, Zap } from "lucide-react";

// Моковые данные для апгрейда
const availableItems = [
  { id: 1, name: "AK-47 | Redline", price: 750, rarity: "legendary" },
  { id: 2, name: "Glock-18 | Water Elemental", price: 300, rarity: "rare" },
  { id: 3, name: "USP-S | Kill Confirmed", price: 1200, rarity: "legendary" },
  { id: 4, name: "Desert Eagle | Blaze", price: 3000, rarity: "ancient" },
  { id: 5, name: "AWP | Asiimov", price: 2100, rarity: "ancient" }
];

const targetItems = [
  { id: 101, name: "M4A4 | Howl", price: 3000, rarity: "legendary" },
  { id: 102, name: "AWP | Dragon Lore (BS)", price: 4000, rarity: "ancient" },
  { id: 103, name: "Butterfly Knife | Fade", price: 4500, rarity: "ancient" },
  { id: 104, name: "M9 Bayonet | Crimson Web", price: 6000, rarity: "ancient" },
  { id: 105, name: "AK-47 | Fire Serpent", price: 2000, rarity: "legendary" },
];

const UpgradeTab = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [targetItem, setTargetItem] = useState<number | null>(null);
  const [multiplier, setMultiplier] = useState(2);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState<"win" | "lose" | null>(null);

  const handleUpgrade = () => {
    if (!selectedItem || !targetItem) return;
    
    setIsSpinning(true);
    
    // Симуляция раскрутки колеса с задержкой
    setTimeout(() => {
      // Случайный исход (40% шанс на выигрыш)
      const result = Math.random() < 0.4 ? "win" : "lose";
      setSpinResult(result);
      setIsSpinning(false);
    }, 3000);
  };

  // Расчёт шанса на успех
  const calculateChance = () => {
    if (!selectedItem || !targetItem) return 0;
    
    const selectedItemPrice = availableItems.find(item => item.id === selectedItem)?.price || 0;
    const targetItemPrice = targetItems.find(item => item.id === targetItem)?.price || 0;
    
    // Чем ближе цены, тем выше шанс
    const ratio = selectedItemPrice / targetItemPrice;
    return Math.min(Math.round(ratio * 100 * multiplier / 2), 90); // Максимум 90%
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Апгрейд предметов</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Выбор предмета для апгрейда */}
        <Card>
          <CardHeader>
            <CardTitle>Выберите предмет</CardTitle>
            <CardDescription>Выберите предмет из вашего инвентаря</CardDescription>
          </CardHeader>
          <CardContent className="max-h-[400px] overflow-y-auto">
            <div className="flex flex-col gap-2">
              {availableItems.map(item => (
                <div
                  key={item.id}
                  className={`cs-item cursor-pointer ${
                    item.rarity === "common" ? "cs-item-common" :
                    item.rarity === "uncommon" ? "cs-item-uncommon" :
                    item.rarity === "rare" ? "cs-item-rare" :
                    item.rarity === "mythical" ? "cs-item-mythical" :
                    item.rarity === "legendary" ? "cs-item-legendary" : "cs-item-ancient"
                  } ${selectedItem === item.id ? "ring-2 ring-primary" : ""}`}
                  onClick={() => setSelectedItem(item.id)}
                >
                  <div className="text-sm font-medium mb-1">{item.name}</div>
                  <div className="text-xs">{item.price} ₽</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Колесо апгрейда и настройки */}
        <Card>
          <CardHeader>
            <CardTitle>Настройки апгрейда</CardTitle>
            <CardDescription>Настройте множитель и шанс на выигрыш</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-4">
              {/* Круглое колесо апгрейда */}
              <div className="spin-wheel w-48 h-48">
                <div className="spin-wheel-inner w-full h-full flex items-center justify-center">
                  {isSpinning ? (
                    <div className="animate-spin-slow">
                      <RotateCcw className="h-16 w-16 text-accent" />
                    </div>
                  ) : spinResult ? (
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${spinResult === "win" ? "text-green-500" : "text-red-500"}`}>
                        {spinResult === "win" ? "Успех!" : "Неудача!"}
                      </div>
                      <div className="text-sm mt-2">
                        {spinResult === "win" 
                          ? "Вы получили новый предмет!" 
                          : "Попробуйте ещё раз!"}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Zap className="h-16 w-16 text-accent mx-auto" />
                      <div className="text-sm mt-2">Готов к апгрейду</div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Настройка множителя */}
              <div className="w-full mt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Множитель: {multiplier.toFixed(2)}x</span>
                  <span className="text-sm">Шанс: {calculateChance()}%</span>
                </div>
                <Slider
                  value={[multiplier]}
                  min={1}
                  max={5}
                  step={0.1}
                  onValueChange={(value) => setMultiplier(value[0])}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full" 
              disabled={!selectedItem || !targetItem || isSpinning}
              onClick={handleUpgrade}
            >
              Сделать апгрейд
            </Button>
          </CardFooter>
        </Card>
        
        {/* Выбор целевого предмета */}
        <Card>
          <CardHeader>
            <CardTitle>Выберите целевой предмет</CardTitle>
            <CardDescription>Выберите предмет, который хотите получить</CardDescription>
          </CardHeader>
          <CardContent className="max-h-[400px] overflow-y-auto">
            <div className="flex flex-col gap-2">
              {targetItems.map(item => (
                <div
                  key={item.id}
                  className={`cs-item cursor-pointer ${
                    item.rarity === "common" ? "cs-item-common" :
                    item.rarity === "uncommon" ? "cs-item-uncommon" :
                    item.rarity === "rare" ? "cs-item-rare" :
                    item.rarity === "mythical" ? "cs-item-mythical" :
                    item.rarity === "legendary" ? "cs-item-legendary" : "cs-item-ancient"
                  } ${targetItem === item.id ? "ring-2 ring-primary" : ""}`}
                  onClick={() => setTargetItem(item.id)}
                >
                  <div className="text-sm font-medium mb-1">{item.name}</div>
                  <div className="text-xs">{item.price} ₽</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {selectedItem && targetItem && (
        <div className="mt-6 flex items-center gap-4 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-border/50">
          <div className={`cs-item ${
            availableItems.find(i => i.id === selectedItem)?.rarity === "common" ? "cs-item-common" :
            availableItems.find(i => i.id === selectedItem)?.rarity === "uncommon" ? "cs-item-uncommon" :
            availableItems.find(i => i.id === selectedItem)?.rarity === "rare" ? "cs-item-rare" :
            availableItems.find(i => i.id === selectedItem)?.rarity === "mythical" ? "cs-item-mythical" :
            availableItems.find(i => i.id === selectedItem)?.rarity === "legendary" ? "cs-item-legendary" : "cs-item-ancient"
          }`}>
            <div className="text-sm font-medium mb-1">{availableItems.find(i => i.id === selectedItem)?.name}</div>
            <div className="text-xs">{availableItems.find(i => i.id === selectedItem)?.price} ₽</div>
          </div>
          
          <div className="flex items-center gap-2">
            <ChevronRight className="h-6 w-6" />
            <div className="text-sm">Шанс: {calculateChance()}%</div>
          </div>
          
          <div className={`cs-item ${
            targetItems.find(i => i.id === targetItem)?.rarity === "common" ? "cs-item-common" :
            targetItems.find(i => i.id === targetItem)?.rarity === "uncommon" ? "cs-item-uncommon" :
            targetItems.find(i => i.id === targetItem)?.rarity === "rare" ? "cs-item-rare" :
            targetItems.find(i => i.id === targetItem)?.rarity === "mythical" ? "cs-item-mythical" :
            targetItems.find(i => i.id === targetItem)?.rarity === "legendary" ? "cs-item-legendary" : "cs-item-ancient"
          }`}>
            <div className="text-sm font-medium mb-1">{targetItems.find(i => i.id === targetItem)?.name}</div>
            <div className="text-xs">{targetItems.find(i => i.id === targetItem)?.price} ₽</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpgradeTab;
