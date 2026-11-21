export default function Home(){
 return (
  <main className="min-h-screen bg-slate-950 text-white p-10">
   <h1 className="text-5xl font-bold">👑 لمة العائلة</h1>
   <p className="mt-4 text-xl">لعبة مسابقات عائلية عربية</p>
   <div className="grid md:grid-cols-3 gap-5 mt-10">
    <button className="glass">🎮 ابدأ اللعب</button>
    <button className="glass">🏠 إنشاء غرفة</button>
    <button className="glass">🔑 دخول غرفة</button>
   </div>
  </main>
 )
}
