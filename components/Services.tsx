import { services } from "@/Data/Data";
export default function Services() {
  return (
    <div className="text-center my-8 md:px-8">
      <div className="uppercase font-semibold text-sm text-WhiteGray">
        - Services
      </div>
      <div className="font-semibold text-3xl mt-8 text-White uppercase">
        Here`s what I`m Good At.
      </div>
      <p className="text-WhiteGray text-sm mt-8 leading-7 max-w-3xl mx-auto">
        I offer a full range of front-end web development services, from website development to API integration. I
        specialize in creating high-quality, responsive web applications that deliver an exceptional user experience.
      </p>
      <div className="grid gap-4 mt-8 text-White ">
        {services.map(service => (
            <div key={service.id} className="p-8 bg-Blur text-center hover:scale-105 transition-all duration-300">
                <div className="flex justify-center text-5xl mb-4">{service.icon}</div>
                <div className="mb-4 text-2xl font-medium">{service.title}</div>
                <div className="text-Orange text-sm">{service.finished} projects</div>
            </div>
        ))}
      </div>
    </div>
  );
}
