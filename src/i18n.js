import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "Home":"Home",
            "About":"About",
            "Portfolio":"Portfolio",
            "Contact":"Contact",
            "EN":"EN",
            "GE":"GE",
            "text1":"We offer you professional technical solutions!",
            "text2":"For complex equipment and provision of theater stages and concert venues.",
            "quality":"quality",
            "Guaranteed quality products":"Guaranteed quality products",
            "customers":"customers",
            "Loyalty system for regular customers":"Loyalty system for regular customers",
            "delivery":"delivery",
            "Fast and convenient delivery on time":"Fast and convenient delivery on time",
        }
    },
    ge: {
        translation: {
            "Home":"მთავარი",
            "About":"ჩვენს შესახებ",
            "Portfolio":"პორტფოლიო",
            "Contact":"კონტაქტები",
            "EN":"ინგ.",
            "GE":"ქარ.",
            "text1":"ჩვენ გთავაზობთ პროფესიონალურ ტექნიკურ გადაწყვეტილებებს!",
            "text2":"კომპლექსური აღჭურვილობისა და თეატრის სცენებისა და საკონცერტო ადგილების უზრუნველყოფისთვის.",
            "quality":"ხარისხი",
            "Guaranteed quality products":"გარანტირებული ხარისხის პროდუქცია",
            "customers":"მომხმარებელი",
            "Loyalty system for regular customers":"ლოიალური სისტემა რეგულარული მომხმარებლებისთვის",
            "delivery":"მიწოდება",
            "Fast and convenient delivery on time":"სწრაფი და მოსახერხებელი მიწოდება დროულად",
      }
    }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: `${localStorage.getItem('lang') || 'en'}`,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;


/*

*/