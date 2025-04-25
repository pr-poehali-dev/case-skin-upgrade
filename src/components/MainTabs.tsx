import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Package, Zap } from "lucide-react";
import ProfileTab from "./tabs/ProfileTab";
import CasesTab from "./tabs/CasesTab";
import UpgradeTab from "./tabs/UpgradeTab";

const MainTabs = () => {
  return (
    <Tabs defaultValue="cases" className="container mx-auto">
      <TabsList className="w-full grid grid-cols-3 my-6">
        <TabsTrigger value="profile" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>Профиль</span>
        </TabsTrigger>
        <TabsTrigger value="cases" className="flex items-center gap-2">
          <Package className="h-4 w-4" />
          <span>Кейсы</span>
        </TabsTrigger>
        <TabsTrigger value="upgrade" className="flex items-center gap-2">
          <Zap className="h-4 w-4" />
          <span>Апгрейд</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="focus-visible:outline-none">
        <ProfileTab />
      </TabsContent>
      <TabsContent value="cases" className="focus-visible:outline-none">
        <CasesTab />
      </TabsContent>
      <TabsContent value="upgrade" className="focus-visible:outline-none">
        <UpgradeTab />
      </TabsContent>
    </Tabs>
  );
};

export default MainTabs;
