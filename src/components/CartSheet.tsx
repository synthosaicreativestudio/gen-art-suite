import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const CartSheet = () => {
  const { items, removeItem, total, clearCart } = useCart();
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isPaying, setIsPaying] = useState(false);

  const handlePayment = () => {
    setIsPaying(true);
    // Simulate payment process
    setTimeout(() => {
      setIsPaying(false);
      clearCart();
      toast({
        title: "Оплата прошла успешно!",
        description: "Спасибо за ваш заказ. Тестовый платеж завершен.",
      });
    }, 1500);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative h-10 w-10 rounded-full bg-background/50 backdrop-blur-md border-border/50 hover:bg-accent hover:text-accent-foreground transition-all">
          <ShoppingCart className="h-5 w-5" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground font-bold">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full sm:max-w-md bg-background/95 backdrop-blur-xl border-l-border/50">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Корзина</SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground opacity-50 space-y-4">
              <ShoppingCart className="h-16 w-16" />
              <p>Ваша корзина пуста</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex justify-between items-center p-4 rounded-xl border border-border/50 bg-card/30">
                <div className="flex-1 min-w-0 pr-4">
                  <h4 className="font-medium text-sm truncate">{item.name}</h4>
                  <p className="text-primary font-semibold mt-1">{item.price.toLocaleString('ru-RU')} ₽</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="pt-6 border-t border-border/50 space-y-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Итого:</span>
              <span className="text-xl text-primary">{total.toLocaleString('ru-RU')} ₽</span>
            </div>
            <Button 
              className="w-full h-12 text-lg font-medium bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity" 
              onClick={handlePayment}
              disabled={isPaying}
            >
              {isPaying ? "Ожидание оплаты..." : "Оплатить (Тест)"}
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
