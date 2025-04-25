import MainHeader from "@/components/MainHeader";
import MainTabs from "@/components/MainTabs";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />
      <main className="flex-1 py-4">
        <MainTabs />
      </main>
      <footer className="border-t py-4 bg-white/20 backdrop-blur-sm">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2023 CS:GO Кейсы. Все права защищены.</p>
          <p className="mt-1">Этот сайт не связан с Valve Corporation.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
