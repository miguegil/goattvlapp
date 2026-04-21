import { Clapperboard, Dumbbell, Play, Sparkles, Tv } from "lucide-react";

const tiles = [
  {
    label: "Deportes",
    type: "football",
    icon: Dumbbell,
  },
  {
    label: "Películas",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=80",
    icon: Clapperboard,
  },
  {
    label: "Series",
    type: "series",
    icon: Play,
  },
  {
    label: "KidsZone",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=80",
    icon: Sparkles,
  },
];

function TileBackdrop({ type, image, label }: { type?: string; image?: string; label: string }) {
  if (image) {
    return (
      <img
        src={image}
        alt={label}
        className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105"
      />
    );
  }

  if (type === "football") {
    return (
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#062b18,#0b5d2d_45%,#061f13)]">
        <div className="absolute inset-x-4 top-1/2 h-px bg-white/45" />
        <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/45" />
        <div className="absolute bottom-6 right-8 h-12 w-12 rounded-full border-4 border-white bg-neutral-100 shadow-2xl">
          <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-900" />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(25,94,150,0.85),transparent_30%),linear-gradient(135deg,#07111f,#0d223d_45%,#0a0a0a)]">
      <div className="absolute left-5 top-5 h-16 w-24 rounded-xl border border-white/15 bg-white/10 shadow-2xl" />
      <div className="absolute right-5 top-8 h-20 w-28 rounded-xl border border-white/15 bg-white/10 shadow-2xl" />
      <div className="absolute bottom-7 left-1/2 grid w-36 -translate-x-1/2 grid-cols-4 gap-1">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} className="h-8 rounded bg-blue-300/35" />
        ))}
      </div>
    </div>
  );
}

export function HeroShowcase() {
  return (
    <div className="glass-card overflow-hidden p-4 shadow-[0_0_55px_rgba(17,83,139,0.2)]">
      <div className="rounded-2xl border border-white/10 bg-black/45 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">GOAT TV</p>
            <h2 className="mt-1 text-2xl font-black">Entretenimiento total</h2>
          </div>
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500 text-white">
            <Tv className="h-5 w-5" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {tiles.map((tile) => {
            const Icon = tile.icon;

            return (
              <article key={tile.label} className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <TileBackdrop type={tile.type} image={tile.image} label={tile.label} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-bold">{tile.label}</span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            ["Desde", "$250 MXN"],
            ["Planes", "1 a 12 meses"],
            ["Pantallas", "1 o 2"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/60">{label}</p>
              <p className="text-lg font-bold">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
