import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-20">
      <Container>
        <div className="grid md:grid-cols-4 gap-10 py-16">
          <div>
            <h2 className="text-3xl font-black text-orange-500 mb-4">
              ShopNest
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Premium quality products with trusted
              delivery and customer satisfaction.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-gray-600">
              <a>Home</a>
              <a>Shop</a>
              <a>Bundles</a>
              <a>Contact</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">
              Support
            </h3>

            <div className="flex flex-col gap-2 text-gray-600">
              <a>Privacy Policy</a>
              <a>Terms & Conditions</a>
              <a>Refund Policy</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">
              Contact
            </h3>

            <div className="space-y-2 text-gray-600">
              <p>support@shopnest.com</p>
              <p>+880 1700-000000</p>
              <p>Khulna, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="border-t py-5 text-center text-gray-500">
          © 2026 ShopNest. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;