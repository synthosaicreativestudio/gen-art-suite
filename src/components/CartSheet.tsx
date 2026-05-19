import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, CreditCard, Smartphone, QrCode } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/components/ui/use-toast";
import { useState, useRef, useEffect } from "react";

declare global {
  interface Window {
    pay: (form: HTMLFormElement) => void;
  }
}

const CartSheet = () => {
  const { items, addItem, removeItem, total, clearCart } = useCart();
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isPaying, setIsPaying] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const formRef = useRef<HTMLFormElement>(null);

  const handlePayment = () => {
    if (!window.pay) {
      toast({ title: "Ошибка", description: "Платежный шлюз недоступен. Обновите страницу.", variant: "destructive" });
      return;
    }
    
    if (formRef.current) {
      setIsPaying(true);
      window.pay(formRef.current);
      // Очистка корзины может происходить по Webhook на бэкенде, 
      // но для тестового демо-приложения мы очистим корзину локально:
      setTimeout(() => {
        clearCart();
        setIsPaying(false);
      }, 5000);
    }
  };

  // Читаем параметры из URL для интеграции с ботом
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tgId = params.get('tg_id');
    const planId = params.get('plan'); // e.g. it_consulting_1m
    
    if (tgId) {
      localStorage.setItem('tg_id', tgId);
    }

    if (planId) {
      const plans: Record<string, {name: string, price: number}> = {
        'it_consulting_1m': { name: 'IT-консалтинг и безопасность (Базовый)', price: 200 },
        'it_consulting_3m': { name: 'IT-консалтинг и безопасность (Стандарт)', price: 500 },
        'it_consulting_6m': { name: 'IT-консалтинг и безопасность (Оптимальный)', price: 1000 },
        'it_consulting_12m': { name: 'IT-консалтинг и безопасность (Премиум)', price: 1500 }
      };

      const selectedPlan = plans[planId];
      if (selectedPlan && !items.some(i => i.id === planId)) {
         addItem({ id: planId, name: selectedPlan.name, price: selectedPlan.price });
      }
    }
  }, [items, addItem]);

  const tgId = localStorage.getItem('tg_id');
  const orderId = tgId ? `TG_${tgId}_${Date.now()}` : `ORDER_${Date.now()}`;

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

            <div className="space-y-3 pb-4">
              <h4 className="text-sm font-medium text-muted-foreground">Способ оплаты</h4>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="gap-3">
                <div>
                  <RadioGroupItem value="card" id="card" className="peer sr-only" />
                  <Label
                    htmlFor="card"
                    className="flex items-center justify-between rounded-xl border-2 border-muted bg-transparent p-4 hover:bg-secondary/50 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-primary" />
                      <span className="font-medium">Банковская карта</span>
                    </div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="sbp" id="sbp" className="peer sr-only" />
                  <Label
                    htmlFor="sbp"
                    className="flex items-center justify-between rounded-xl border-2 border-muted bg-transparent p-4 hover:bg-secondary/50 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-primary" />
                      <span className="font-medium">СБП (Без ввода карты)</span>
                    </div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="qr" id="qr" className="peer sr-only" />
                  <Label
                    htmlFor="qr"
                    className="flex items-center justify-between rounded-xl border-2 border-muted bg-transparent p-4 hover:bg-secondary/50 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <QrCode className="w-5 h-5 text-primary" />
                      <span className="font-medium">QR-код (T-Pay)</span>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <form name="TinkoffPayForm" ref={formRef} className="hidden" onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
              <input type="hidden" name="terminalkey" value="1778920894454" />
              <input type="hidden" name="frame" value="false" />
              <input type="hidden" name="language" value="ru" />
              <input type="hidden" name="amount" value={total} />
              <input type="hidden" name="order" value={orderId} />
              <input type="hidden" name="description" value={items.map(i => i.name).join(', ').substring(0, 250)} />
              <input type="hidden" name="name" value="Заказ услуг" />
              <input type="hidden" name="email" value="test@example.com" />
              <input type="hidden" name="SuccessURL" value="https://synthosaicreativestudio.github.io/gen-art-suite/" />
              <input type="hidden" name="FailURL" value="https://synthosaicreativestudio.github.io/gen-art-suite/" />
              {/* Optional: payType parameter for specific method if supported by T-Bank widget, otherwise it just opens the widget */}
              <input type="hidden" name="payType" value={paymentMethod === 'sbp' ? 'O' : paymentMethod === 'qr' ? 'T' : 'O'} />
            </form>

            <Button 
              className="w-full h-12 text-lg font-medium bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity" 
              onClick={handlePayment}
              disabled={isPaying}
            >
              {isPaying ? "Открытие платежного окна..." : (
                paymentMethod === 'card' ? 'Оплатить картой' : 
                paymentMethod === 'sbp' ? 'Оплатить через СБП' : 'Получить QR-код'
              )}
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
