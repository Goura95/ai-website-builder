import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to start your journey?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
              Join over 10,000+ creators building the future with Nexus. 
              Get started for free today.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
              Create Free Account
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
