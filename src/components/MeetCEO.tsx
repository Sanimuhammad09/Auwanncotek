import { motion } from 'framer-motion';

export default function MeetCEO() {
  return (
    <section className="section" style={{ background: 'var(--color-primary)', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
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
              <img src="/ceo.png" alt="Vincent Okoye - CEO" style={{ width: '100%', height: 'auto', display: 'block' }} />
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
              Driven by Passion. <br/>
              <span className="text-gradient">Guided by Purpose.</span>
            </h2>
            
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              At the heart of Auwancotek is a visionary leader whose passion for technology and service excellence has shaped the Enterprise into a trusted name in IT and digital solutions.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', fontSize: '1.05rem' }}>
              <strong>Vincent Okoye</strong>, the Founder and CEO, is a dynamic entrepreneur and seasoned IT professional with a deep-rooted belief in the power of technology to transform lives and businesses. With a background in Humanity, IT, Business, and over 15 years of hands-on experience, Vincent founded the enterprise to bridge the digital gap in communities.
            </p>

            <blockquote style={{ 
              borderLeft: '4px solid var(--color-accent)', 
              paddingLeft: '1.5rem', 
              margin: '2rem 0',
              fontStyle: 'italic',
              fontSize: '1.2rem',
              color: 'rgba(255,255,255,0.9)'
            }}>
              "My goal has always been simple - make technology accessible, useful, and empowering for everyone, whether you're a student, a business owner, or a professional."
            </blockquote>
            
            <div style={{ marginTop: '2rem', fontWeight: 600 }}>
              — Vincent Okoye
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
