export default function Surgery() {
  return (
    <section id="surgery" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Jarrohlik bo‘limi</h1>

        <p className="text-muted-foreground leading-8">
          Jarrohlik bo‘limida zamonaviy diagnostika va operativ davolash
          usullari qo‘llaniladi. Malakali shifokorlar tomonidan rejalashtirilgan
          va shoshilinch operatsiyalar amalga oshiriladi.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold mb-2">24/7 xizmat</h3>
            <p>Shoshilinch jarrohlik yordami.</p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-semibold mb-2">Zamonaviy uskunalar</h3>
            <p>Yuqori aniqlikdagi operatsion jihozlar.</p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-semibold mb-2">Malakali mutaxassislar</h3>
            <p>Tajribali jarrohlar jamoasi.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
