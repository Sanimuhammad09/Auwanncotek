import { motion } from 'framer-motion';

export default function MeetCEO() {
  return (
    <section className="section" style={{ background: 'var(--color-primary)', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ 
              position: 'relative', 
              borderRadius: '1rem', 
              overflow: 'hidden',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
            }}>
              <img src="/ceo.png" alt="Muhammad Awal Usman - CEO" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>MEET OUR CEO</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1.5rem', color: 'white' }}>
              Driven by Innovation. <br/>
              <span className="text-gradient">Committed to Excellence.</span>
            </h2>
            
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              At the core of Auwancotek is a forward-thinking leader whose passion for technology, innovation, and exceptional service has built the company into a trusted provider of IT solutions and digital transformation services.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              <strong>Muhammad Awal Usman</strong>, Founder and Chief Executive Officer of Auwancotek, is an accomplished technology professional, entrepreneur, and business strategist with over 15 years of industry experience. His expertise spans Information Technology, business solutions, digital transformation, and organizational development, enabling him to deliver practical, innovative solutions that help businesses thrive in an increasingly digital world.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Inspired by a vision to bridge the technology gap and create meaningful impact, he established Auwancotek with a clear mission: to provide reliable, affordable, and innovative technology solutions that empower individuals, organizations, and government institutions to achieve sustainable growth.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', fontSize: '1.05rem' }}>
              Under his leadership, Auwancotek has remained committed to professionalism, integrity, innovation, and customer satisfaction—delivering solutions that not only solve today's challenges but also prepare clients for the opportunities of tomorrow.
            </p>

            <blockquote style={{ 
              borderLeft: '4px solid var(--color-accent)', 
              paddingLeft: '1.5rem', 
              margin: '2rem 0',
              fontStyle: 'italic',
              fontSize: '1.2rem',
              color: 'rgba(255,255,255,0.9)'
            }}>
              "Technology should not be a barrier—it should be an opportunity. My vision is to make innovative technology accessible, practical, and transformative for every individual and every organization we serve."
            </blockquote>
            
            <div style={{ marginTop: '2rem', fontWeight: 600 }}>
              — Muhammad Awal Usman <br />
              <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', fontWeight: 'normal' }}>Founder & Chief Executive Officer</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
