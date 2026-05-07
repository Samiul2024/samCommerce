import Container from "../shared/Container";

const TrustBadges = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div>
            <h3 className="text-xl font-bold mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Quick and reliable delivery service
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Secure Payment
            </h3>
            <p className="text-gray-600">
              100% secure payment system
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Trusted Quality
            </h3>
            <p className="text-gray-600">
              Premium and verified products
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default TrustBadges;