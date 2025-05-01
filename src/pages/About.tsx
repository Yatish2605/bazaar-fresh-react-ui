
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">About Farmer Bazaar</h1>
              
              <div className="mb-10 text-lg">
                <p className="mb-4">
                  Welcome to Farmer Bazaar, your direct connection to fresh, locally sourced produce from farmers across the region. 
                  We believe in creating a sustainable food ecosystem that benefits both farmers and consumers.
                </p>
                <p className="mb-4">
                  Our mission is to empower small-scale farmers by providing them with a digital platform to sell their products 
                  directly to consumers, eliminating middlemen and ensuring farmers receive fair compensation for their hard work.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our Vision</h2>
              <p className="mb-8 text-lg">
                We envision a world where everyone has access to fresh, healthy, locally grown food, 
                and where farmers thrive by connecting directly with the people who enjoy their produce.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-bazaar-green">For Consumers</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-bazaar-green mr-2">•</span>
                      Access to the freshest seasonal produce
                    </li>
                    <li className="flex items-start">
                      <span className="text-bazaar-green mr-2">•</span>
                      Support local farmers and sustainable agriculture
                    </li>
                    <li className="flex items-start">
                      <span className="text-bazaar-green mr-2">•</span>
                      Know exactly where your food comes from
                    </li>
                    <li className="flex items-start">
                      <span className="text-bazaar-green mr-2">•</span>
                      Enjoy competitive prices by cutting out middlemen
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-bazaar-green">For Farmers</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-bazaar-green mr-2">•</span>
                      Sell directly to consumers for better margins
                    </li>
                    <li className="flex items-start">
                      <span className="text-bazaar-green mr-2">•</span>
                      Build your brand and customer base
                    </li>
                    <li className="flex items-start">
                      <span className="text-bazaar-green mr-2">•</span>
                      Reduce food waste through precise inventory management
                    </li>
                    <li className="flex items-start">
                      <span className="text-bazaar-green mr-2">•</span>
                      Access a larger market without expensive overhead
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our Story</h2>
              <p className="mb-4 text-lg">
                Farmer Bazaar was founded in 2023 by a group of agricultural enthusiasts who saw the growing disconnect 
                between food producers and consumers. We recognized the challenges faced by small-scale farmers in reaching 
                markets and the increasing demand from consumers for transparent, sustainable food sources.
              </p>
              <p className="mb-12 text-lg">
                Today, we're proud to host hundreds of farmers on our platform, connecting them with thousands 
                of consumers who value fresh, locally grown produce.
              </p>

              <div className="bg-bazaar-green/10 p-8 rounded-xl mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Join Our Community</h2>
                <p className="mb-8 text-center text-lg">
                  Whether you're a farmer looking to expand your reach or a consumer passionate about 
                  supporting local agriculture, we invite you to join the Farmer Bazaar community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/products" className="px-8 py-3 bg-bazaar-green text-white rounded-md font-semibold hover:bg-bazaar-green-dark transition-colors shine text-center">
                    Shop Now
                  </a>
                  <a href="#contact" className="px-8 py-3 bg-white border border-bazaar-green text-bazaar-green rounded-md font-semibold hover:bg-bazaar-green hover:text-white transition-colors text-center">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
