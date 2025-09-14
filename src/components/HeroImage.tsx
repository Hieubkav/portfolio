import Image from "next/image";

const HeroImage = () => {



  return (
    <div className="relative flex items-center justify-center w-full h-fit">
      {/* subtle glow behind avatar */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[62vw] w-[62vw] max-w-[440px] max-h-[440px] lg:max-w-[600px] lg:max-h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),rgba(56,189,248,0)_60%)] blur-md" />
      </div>

      {/* avatar circle */}
      <div className="relative w-[58vw] lg:w-[36vw] max-w-[380px] lg:max-w-[520px] aspect-square rounded-full overflow-hidden ring-1 ring-sky-200/60 shadow-2xl bg-white/30 backdrop-blur-[1px]">
        <Image
          src="/avatar.webp"
          alt="Portrait of Tran Manh Hieu"
          loading="eager"
          priority
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 58vw, 36vw"
        />
      </div>
    </div>
  );
}
export default HeroImage
