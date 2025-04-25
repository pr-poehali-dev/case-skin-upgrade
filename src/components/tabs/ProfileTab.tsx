import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Wallet, Package } from "lucide-react";

// Моковые данные для инвентаря
const inventoryItems = [
  { id: 1, name: "AK-47 | Redline", price: 750, rarity: "legendary", date: "15.08.2023", image: "https://wiki.cs.money/images/skin/wgY2lwzGZGI478g0O5OfK.png" },
  { id: 2, name: "AWP | Asiimov", price: 2100, rarity: "ancient", date: "20.08.2023", image: "https://wiki.cs.money/images/skin/ZnykbjrznKfQ0jZ8jzvym.png" },
  { id: 3, name: "USP-S | Kill Confirmed", price: 1200, rarity: "legendary", date: "25.08.2023", image: "https://wiki.cs.money/images/skin/elO4vO38gniyJ7JYLW753.png" },
  { id: 4, name: "Glock-18 | Water Elemental", price: 300, rarity: "rare", date: "30.08.2023", image: "https://wiki.cs.money/images/skin/mq1pEOm2GLCzwVZmO40PM.png" },
  { id: 5, name: "Desert Eagle | Blaze", price: 3000, rarity: "ancient", date: "05.09.2023", image: "https://wiki.cs.money/images/skin/Pxw3Y8w4ykfykQZ1zmrDL.png" }
];

const ProfileTab = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Профиль</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Личные данные</span>
            </CardTitle>
            <CardDescription>Информация о вашем аккаунте</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">Имя:</span>
                <span>Пользователь</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Дата регистрации:</span>
                <span>12.08.2023</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Открыто кейсов:</span>
                <span>12</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Сделано апгрейдов:</span>
                <span>5</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-4 w-4" />
              <span>Баланс</span>
            </CardTitle>
            <CardDescription>Информация о вашем балансе</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">Текущий баланс:</span>
                <span className="font-bold text-xl">100 ₽</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Пополнено всего:</span>
                <span>0 ₽</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Выведено всего:</span>
                <span>0 ₽</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              <span>Статистика</span>
            </CardTitle>
            <CardDescription>Ваша статистика на сайте</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">Вещей в инвентаре:</span>
                <span>{inventoryItems.length}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Суммарная стоимость:</span>
                <span>{inventoryItems.reduce((sum, item) => sum + item.price, 0)} ₽</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Лучший дроп:</span>
                <span>
                  {inventoryItems.reduce((best, item) => best.price > item.price ? best : item, { price: 0, name: "Нет" }).name}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="inventory" className="tabs-container">
        <TabsList className="w-full grid grid-cols-1 bg-muted/50">
          <TabsTrigger value="inventory" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            <span>Инвентарь</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="inventory" className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {inventoryItems.map((item) => (
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
                <div className="h-24 flex items-center justify-center mb-2">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="h-full w-auto object-contain" 
                  />
                </div>
                <div className="text-sm font-medium mb-1">{item.name}</div>
                <div className="flex justify-between items-center">
                  <div className="text-xs">{item.price} ₽</div>
                  <div className="text-xs opacity-70">Получено: {item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileTab;
