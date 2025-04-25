import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-4xl font-bold mb-4">Страница не найдена</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Запрашиваемая страница не существует или была перемещена.
        </p>
        <Button asChild size="lg">
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            <span>Вернуться на главную</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
