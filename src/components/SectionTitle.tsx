export function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h2 className="font-bold text-[#1b4332] text-xl">{title}</h2>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{subtitle}</p>
      </div>
    </div>
  );
}
