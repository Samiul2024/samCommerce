import { motion } from "framer-motion";

import Container from "../shared/Container";
import PrimaryButton from "../ui/PrimaryButton";

const Hero = () => {
  return (
    <section className="py-16 lg:py-24 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
              Trusted Organic Products
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mt-6">
              Healthy Food
              <br />

              <span className="text-orange-500">
                Better Lifestyle
              </span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mt-6 max-w-xl">
              Discover premium quality organic products
              with trusted delivery and affordable
              pricing.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <PrimaryButton>
                Shop Now
              </PrimaryButton>

              <button className="px-6 py-3 rounded-xl border border-orange-200 font-semibold hover:bg-orange-50 transition-all">
                Explore Bundles
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://i.ibb.co/F4v3q4T/healthy-food.png"
              alt="Hero"
              className="w-full"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;