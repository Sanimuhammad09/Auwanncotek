import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <PageHeader
          title="Contact Us"
          subtitle="Let's talk! Send us a message and we'll get back to you."
          backgroundImage="/slide-1.png"
        />

        <section className="section" style={{ background: 'var(--color-surface)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem' }}>
              {/* Contact Form */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Send Us a Message</h2>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={e => e.preventDefault()}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--color-text)' }}>First Name</label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', fontSize: '1rem', background: 'var(--color-bg)' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--color-text)' }}>Last Name</label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', fontSize: '1rem', background: 'var(--color-bg)' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--color-text)' }}>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', fontSize: '1rem', background: 'var(--color-bg)' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--color-text)' }}>Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', fontSize: '1rem', background: 'var(--color-bg)' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--color-text)' }}>Message</label>
                    <textarea name="message" rows={5} value={formData.message} onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', fontSize: '1rem', resize: 'vertical', background: 'var(--color-bg)' }} />
                  </div>
                  <button className="btn btn-primary" type="submit" style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}>
                    <Send size={18} /> Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Visit Us!</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(246,74,0,0.1)', color: 'var(--color-accent)', padding: '0.75rem', borderRadius: '0.75rem', flexShrink: 0 }}>
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>Phone</h4>
                      <p style={{ color: 'var(--color-text-muted)' }}>+234 703 2888 915</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(246,74,0,0.1)', color: 'var(--color-accent)', padding: '0.75rem', borderRadius: '0.75rem', flexShrink: 0 }}>
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>Email</h4>
                      <p style={{ color: 'var(--color-text-muted)' }}>hello@auwancotek.ng</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(246,74,0,0.1)', color: 'var(--color-accent)', padding: '0.75rem', borderRadius: '0.75rem', flexShrink: 0 }}>
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>Visit Us</h4>
                      <p style={{ color: 'var(--color-text-muted)' }}>762 Emmanuel Adiele Street, Jabi, Abuja, Nigeria</p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div style={{
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--color-border)'
                }}>
                  <img src="/slide-4.png" alt="Office Location" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
