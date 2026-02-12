import Image from "next/image";

export default function Home() {
  return (
    <div
      className={`
    animated-conic-border rounded-2xl border border-transparent
    bg-[linear-gradient(theme(colors.slate.950),theme(colors.slate.950))_padding-box,
       conic-gradient(from_var(--angle),#c084fc_0%,#f472b6_25%,#60a5fa_50%,#34d399_75%,#c084fc_100%)_border-box]
  `}
    >
      <div className="border-amber-300 border inline-block justify-center">
        Content
      </div>
    </div>
  );
}
