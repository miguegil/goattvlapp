import type { LucideIcon } from "lucide-react";

export function FeatureCards({
  items,
}: {
  items: Array<{ title: string; description: string; icon?: LucideIcon }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/85 transition hover:border-blue-400/40 hover:bg-white/[0.08]"
          >
            {Icon && (
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-400/10 text-blue-200">
                <Icon className="h-5 w-5" />
              </div>
            )}
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/65">{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}
