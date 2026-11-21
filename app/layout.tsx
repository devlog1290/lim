import './globals.css';

export const metadata = {
 title:'لمة العائلة',
 description:'لعبة مسابقات عائلية عربية'
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return (
  <html lang="ar" dir="rtl">
   <body>{children}</body>
  </html>
 );
}
