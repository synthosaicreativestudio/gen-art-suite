import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-background border-t border-white/10 mt-20">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4 text-center">
        <div className="text-sm text-white/50 space-y-2">
          <p>© {new Date().getFullYear()} SYNTHOS AI. Все права защищены.</p>
          <p>
            ИП Марченко Роман Олегович • ИНН: 720302084520
          </p>
          <p>
            Email: synthosaicreativestudio@gmail.com<br />
            Телефон: +79829103943
          </p>
        </div>
        <div className="flex gap-4 text-sm text-white/70">
          <Link to="/offer" className="hover:text-white transition-colors">
            Публичная оферта
          </Link>
          <Link to="/privacy" className="hover:text-white transition-colors">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
