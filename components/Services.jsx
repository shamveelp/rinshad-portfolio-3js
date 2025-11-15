import { services } from "@/constants";
import ServiceCard from "./ServiceCard";

function Services() {
  // Show only first 4 services in a 2x2 grid on mobile
  const displayedServices = services.slice(0, 4);
  
  return (
    <section id="services" className="mt-14">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 justify-center max-w-5xl mx-auto px-4">
        {displayedServices.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
