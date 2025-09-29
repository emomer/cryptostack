export default function Particles({ amount }) {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {Array.from({ length: amount }).map((_, i) => (
        <span // Punkte sind als Span
          key={i}
          className="particle absolute block h-[3px] w-[3px] rounded-full bg-[var(--primary-color)] opacity-40"
          style={{
            //Zufällige Position
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 12}s`, // Zufallige Animationsdauer
            animationDelay: `${Math.random() * 4}s`, // Zufalliger Start der Animation
          }}
        />
      ))}
    </div>
  );
}

/*
INDEX.CSS: Definiert Schwebeanimation -> nach oben und zurück
@layer utilities {
  @keyframes float {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-30px); }
    100% { transform: translateY(0); }
  }
  .particle { animation: float linear infinite; }
}
*/
