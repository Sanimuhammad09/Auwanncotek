import { Link } from '@tanstack/react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function ProductCarousel() {
  const products = [
    { name: "HP Elite Dragonfly", img: "/laptop_image_1785467757151.png", link: "/laptop-sales" },
    { name: "Logitech Headset", img: "/headset_audio_image_1785467765992.png", link: "/phone-accessories" },
    { name: "Wired Keyboard", img: "/keyboard_mouse_image_1785467748647.png", link: "/pc-accessories" },
    { name: "SeaGate HDD", img: "/storage_drive_image_1785467775739.png", link: "/pc-accessories" },
    { name: "USB-C Charger", img: "/charger_power_image_1785467785339.png", link: "/phone-accessories" },
    { name: "Wired Game Pad", img: "/gaming_pad_image_1785467794724.png", link: "/pc-accessories" },
    { name: "Wireless Mouse", img: "/keyboard_mouse_image_1785467748647.png", link: "/pc-accessories" },
    { name: "MSATA SSD", img: "/storage_drive_image_1785467775739.png", link: "/pc-accessories" },
    { name: "Earbuds", img: "/headset_audio_image_1785467765992.png", link: "/phone-accessories" },
    { name: "Power Bank", img: "/charger_power_image_1785467785339.png", link: "/phone-accessories" },
  ];

  return (
    <section id="products" className="section" style={{ background: 'var(--color-surface)', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>WHAT WE SELL</span>
        <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Our Products</h2>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1rem auto 0' }}>
          Discover a wide range of high-quality phone and computer accessories designed to enhance your tech experience.
        </p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '3rem' }}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          style={{ width: '100%', paddingTop: '3rem', paddingBottom: '4rem' }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} style={{ width: '280px', height: '380px', background: 'var(--color-bg)', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <Link to={product.link} style={{ display: 'block', textDecoration: 'none', height: '100%' }}>
                <div style={{ height: '65%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
                  <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ height: '35%', padding: '1.5rem', textAlign: 'center', background: 'var(--color-bg)', borderTop: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{product.name}</h3>
                  <span style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.85rem' }}>View Category ⟶</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <style>{`
        .swiper-pagination-bullet {
          background: var(--color-primary);
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          background: var(--color-accent) !important;
          opacity: 1 !important;
          width: 24px;
          border-radius: 12px;
          transition: all 0.3s;
        }
        .swiper-slide {
          transition: border-radius 0.3s ease;
        }
      `}</style>
    </section>
  );
}
