import About from "@/components/Home/About/page";
import Contact from "@/components/Home/Contact";
import Features from "@/components/Home/Features";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/Home/HomeBanner";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Home/Testimonials/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-screen/2">
        {/* banner -- Start */}
        <HomeBanner />
        {/* banner -- end */}
        {/* Features -- Start */}
        <section>
          <Features />
        </section>
        {/* Features -- End */}
        {/* About -- Start */}
        <section className="bg-slate-300 h-fit">
          <About />
        </section>
        {/* About -- End */}
        {/* Clients -- End */}
        <section>
          <div className="bg-gray-950 h-[150px] py-6">
            <div className="container py-3">
              <div className="font-mono text-gray-300 text-4xl">
                Our Clients{" "}
              </div>
              <div className="flex flex-auto items-center justify-center gap-5">
                <div className="text-3xl font-extrabold text-gray-500 ">
                  TenX Prime
                </div>
                <div className="text-3xl font-extrabold text-gray-500 ">
                  Asian Supply Base.Sdn Bhd
                </div>
                <div className="text-3xl font-extrabold text-gray-500 ">
                  J&T
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Clients -- End */}
        {/* Testimonials -- Start */}
        <Testimonials />
        {/* Testimonials -- End */}
        {/* Contact -- start */}
        <section>
          <Contact />
        </section>
        {/* Contact -- end */}
      </main>
      <Footer />
    </>
  );
}
