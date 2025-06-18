// src/components/Particles.jsx
export default function Particles({ amount }) {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {Array.from({ length: amount }).map((_, i) => (
        <span
          key={i}
          className="particle absolute block h-[3px] w-[3px] rounded-full bg-[var(--primary-color)] opacity-40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 12}s`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}
