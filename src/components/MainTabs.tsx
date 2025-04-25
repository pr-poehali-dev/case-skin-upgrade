import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileTab from "@/components/tabs/ProfileTab";
import CasesTab from "@/components/tabs/CasesTab";
import UpgradeTab from "@/components/tabs/UpgradeTab";
import { User, Package, RotateCcw } from "lucide-react";

const MainTabs = () => {
  const [activeTab, setActiveTab] = useState("cases");

  return (
    <div className="container py-6">
      <Tabs defaultValue="cases" value={activeTab} onValueChange={setActiveTab} className="tabs-container">
        <TabsList className="w-full grid grid-cols-3 bg-muted/50">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Профиль</span>
          </TabsTrigger>
          <TabsTrigger value="cases" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            <span>Кейсы</span>
          </TabsTrigger>
          <TabsTrigger value="upgrade" className="flex items-center gap-2">
            <RotateCcw className="h-4 w-4" />
            <span>Апгрейд</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="p-6">
          <ProfileTab />
        </TabsContent>
        
        <TabsContent value="cases" className="p-6">
          <CasesTab />
        </TabsContent>
        
        <TabsContent value="upgrade" className="p-6">
          <UpgradeTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MainTabs;
