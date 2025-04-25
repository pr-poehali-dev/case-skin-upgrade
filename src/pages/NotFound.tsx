import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="text-9xl font-bold text-orange-400">404</div>
      <div className="text-2xl font-bold text-orange-600 mt-4 mb-8">Страница не найдена</div>
      <Link to="/">
        <Button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white">
          Вернуться на главную
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
