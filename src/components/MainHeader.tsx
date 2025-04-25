import { User, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const MainHeader = () => {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-md mb-4">
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="font-bold text-xl sm:text-2xl">CS:GO КЕЙСЫ</div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="text-white hover:bg-white/20">
            <User className="h-4 w-4 mr-2" />
            <span>Пользователь</span>
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/20">
            <CreditCard className="h-4 w-4 mr-2" />
            <span>100 ₽</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
