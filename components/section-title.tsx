export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#ccb570]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-white/72">{description}</p>}
    </div>
  );
}
