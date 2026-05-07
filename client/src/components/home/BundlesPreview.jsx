import Container from "../shared/Container";

const BundlesPreview = () => {
  return (
    <section className="py-20 bg-orange-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <img
            src="https://i.ibb.co/ZYW3VTp/bundle.png"
            alt="bundle"
            className="w-full"
          />

          <div>
            <h2 className="text-4xl font-black mb-4">
              Combo Packages
            </h2>

            <p className="text-gray-600 mb-6">
              Save more with our special bundle offers
              designed for your daily needs.
            </p>

            <button className="bg-orange-500 text-white px-6 py-3 rounded-xl">
              Explore Bundles
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default BundlesPreview;