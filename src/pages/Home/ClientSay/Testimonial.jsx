import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonial = () => {
  // Assuming you have an array of testimonials
  const testimonials = [
    {
      quote: "“I highly recommend Rezilla. They was attentive to my needs and worked tirelessly to find me the perfect home. We couldn't be happier with our new place!.”",
      author: "Steve Rogers",
      propertyTitle: "The Skay View Farm House",
      image: 'https://s3-alpha-sig.figma.com/img/de87/1a6e/5ba179d3108c0fe0313f98e990f3c24e?Expires=1701648000&Signature=WRyrjkz8IgJLkPWC9ETq51Ny~~1XArksiXHZt9yqo0slH4lSamzElt9qlafQQpOmIV6OnjMY2v3V3rnP-dqieqdASl6NKudJuerEZOaJPABNUmmmguT~oBHbN9dEfB5t8zGrz4uy29sv7o5TOJlyRl1R1f-kruGb6jlfoRTCztUWEko7ED6nkB5F7VAqbNnwFgBPDzre9EU9PdnRblVShNu~1GAE2sL1NLC5qf5TyqOGEvuCk2zeN7xAqYda7YH1iOW9Rf6NUxjx-d3QVENVes41KHDWFuEmn2sJCMatwjqH-N1hbkM7xwoh9R68vt7wqM0uTJDeUpdvuLz-uodBdQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      quote: "“Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.”",
      author: "Sarah Dayan",
      propertyTitle: "The Most Luxurious House",
      image: 'https://s3-alpha-sig.figma.com/img/738e/6e77/a92971e6075b85d18be0de93205d90cb?Expires=1701648000&Signature=RR2EhgWAQYG~7w64NMspfhEYIsd4dnAYcH3I8tSqQ1Xyv6Y4awi8rWv--XClKhnP4Me51AZiSM6972HldAC4sigLR7dLKK5rhRypu6p1As2gUQHaYLB8V5l3fJLVL4PRhvsrGpmtX7kRzCGwxluaZhY~bTuWP8jztCw--2ZJHyvFxcrSLJma5SkraFMHJxUa-xc64kRtjieAPiotpWk7exfQz~9cbQNnmQ6NaCZbvA1TWAKcADUD3Bsm7r8Lh~HAf4AJDthHwHqXiJRsLZ9OjONVUjSFsEZNvFQgptMkUtBcML8O1XCDgjdEfwHeK1M6YLkE41C92Db1sB0C7oI7qA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      quote: "“Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.”",
      author: "Tarah Shropshire",
      propertyTitle: "Serene Retreat by the Lake",
      image: 'https://s3-alpha-sig.figma.com/img/7317/01ed/f5d85723e9c37fc2597b782a416f97d9?Expires=1701648000&Signature=TdrQS9mRNQ7cGikWjfiX2nmGqpV9KCjrHXCh5vPDGIM~1Qe8pyNVsJnogxjlDQEDXVYbSmvoYYdiJgO55AxT7K4BrND34ma6y9GAo-CqYjCYjTTxwOR5e7upqf6S5JmuHdCWxh60N9GW~THs~Si2RX0ocR4d0eyL8sl5hYINzzYU9nj4HqYOdDwDN5hBewD84Y~6zQtBNmhM94vlEPF18xhsIIyVi5eOzrdbRAt~1YS7Y7K~OyAEsWwdcs1RfI3-JARCBrzlEK5l12m0Bt9~aT5XvM9-SmMdrxJC117Rq3v7ujfB80R4UN9FTBVEkcK4sQsMKB7ioI-PQjV-HRDn~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-2xl md:text-3xl font-bold mb-4 uppercase text-[#143C38]">
            What our Clients Say
          </h2>
          <p className="text-base md:text-lg text-[#737D8C]">
            There are many clients who are happy with our services. Here are some of their testimonials.
          </p>
        </div>
        <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
          type: 'progressbar',
        }}
        navigation={true}
        className="mySwiper"
      >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
               <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
                    <div className="absolute inset-0 -z-10 bg-indigo-100 opacity-20" style={{ background: 'radial-gradient(45rem 50rem at top, #E0E7FF, white)' }}></div>
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                    
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        {/* <img className="mx-auto h-12" src="/your-logo-path.svg" alt="Logo" /> */}
                        <figure className="mt-10 text-center">
                        <blockquote className="text-xl font-semibold leading-8 text-[#143C38] sm:text-xl sm:leading-9">
                            <p>“{testimonial.quote}”</p>
                        </blockquote>
                        <figcaption className="mt-10">
                        <img className="w-24 h-24 rounded-full mx-auto" src={testimonial.image} alt={testimonial.author} />

                            <div className="mt-4 items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-[#071514]">{testimonial.author}</div>
                            <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-current text-gray-900">
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                            <div className="text-[#0e1f1d]">{testimonial.propertyTitle}</div>
                            </div>
                        </figcaption>
                        </figure>
                    </div>
                    </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
