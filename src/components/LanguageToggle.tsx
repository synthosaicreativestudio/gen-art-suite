import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "RU" ? "EN" : "RU")}
      className="w-auto h-9 px-3 gap-2"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">{language}</span>
    </Button>
  );
};

export default LanguageToggle;