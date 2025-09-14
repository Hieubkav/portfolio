export default function AboutPage() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h1>
      <p className="mt-3 text-xl md:text-2xl text-muted-foreground">
        Full-stack Web Developer — ship đúng hạn, sạch, hiệu quả.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Giá trị đem lại
          </h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-lg md:text-xl">
            <li>Chất lượng ổn định, code dễ bảo trì</li>
            <li>Trải nghiệm tốt, hiệu năng mượt</li>
            <li>Viết docs rõ ràng, dễ hiểu</li>
            <li>Tập trung business value, đo lường được</li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Sở thích
          </h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-lg md:text-xl">
            <li>Cà phê code</li>
            <li>Gym</li>
            <li>Cầu lông</li>
            <li>Học công nghệ mới</li>
            <li>Giải quyết vấn đề bằng code</li>
            <li>Không ngừng trau dồi</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
