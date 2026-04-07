export function Stats() {
  const stats = [
    { label: "Established Since", value: "2017", detail: "Trusted Expertise" },
    { label: "Product Genuine Rate", value: "100%", detail: "Authorized Partner" },
    { label: "Corporate Clients", value: "500+", detail: "Across Regions" },
    { label: "Support Response", value: "< 2hr", detail: "Expert Technical" },
  ]

  return (
    <section className="bg-[#1b47dc] py-16">
      <div className="container mx-auto px-4">
        {/* <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center md:items-start md:text-left">
              <span className="text-sm font-medium uppercase tracking-widest text-white">{stat.label}</span>
              <span className="mt-2 text-4xl font-bold tracking-tighter text-white md:text-5xl">{stat.value}</span>
              <span className="mt-2 text-sm text-white/80 font-medium">{stat.detail}</span>
            </div>
          ))}
        </div> */}
        
        <hr className="my-8 border-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-lg font-medium">Lenovo Authorization</p>
          <button className="px-6 py-3 bg-white text-[#1b47dc] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
