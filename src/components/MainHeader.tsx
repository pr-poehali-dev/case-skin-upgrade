import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Package, RotateCcw } from "lucide-react";

const MainHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              CS:GO Кейсы
            </span>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost">
            <Link to="/profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Профиль</span>
            </Link>
          </Button>

          <Button asChild variant="ghost">
            <Link to="/cases" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              <span>Кейсы</span>
            </Link>
          </Button>

          <Button asChild variant="ghost">
            <Link to="/upgrade" className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4" />
              <span>Апгрейд</span>
            </Link>
          </Button>
          
          <Button asChild variant="secondary">
            <Link to="/profile" className="flex items-center gap-2">
              <span>Баланс:</span>
              <span className="font-bold">100 ₽</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
