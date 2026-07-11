import { motion } from 'framer-motion';
import { Wrench, MonitorDot, Briefcase, FileText, ShoppingCart, UserCheck, GraduationCap, Layout, PenTool } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    { title: 'IT Technical Support', icon: <Wrench size={32} />, desc: 'Fast and effective solutions from troubleshooting, maintenance, to system upgrade, available 24/7.' },
    { title: 'PC Repairs & Services', icon: <MonitorDot size={32} />, desc: 'We fix cracked screens, slow PCs, or startup issues with expert repairs and upgrades.' },
    { title: 'Business Centre', icon: <Briefcase size={32} />, desc: 'Professional business services from printing and typing to internet access.' },
    { title: 'CAC Registrations', icon: <FileText size={32} />, desc: 'Register your business, company or Trustee with ease. We help startups get legally recognized.' },
    { title: 'Point of Sale System', icon: <ShoppingCart size={32} />, desc: 'Simplify sales and track inventory. Our POS with ERP systems grow with you.' },
    { title: 'Virtual Assistance', icon: <UserCheck size={32} />, desc: 'Delegate your tasks to our expert virtual assistants and focus on growing your business.' },
    { title: 'Computer Training', icon: <GraduationCap size={32} />, desc: 'Practical skills you need for today’s tech-driven jobs and everyday life.' },
    { title: 'Website Design', icon: <Layout size={32} />, desc: 'Stunning, user-friendly websites that attract customers and build trust.' },
    { title: 'Graphic Design', icon: <PenTool size={32} />, desc: 'Eye-catching visuals that tell your story and leave a lasting impression.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>EXPERTISE</span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Our Services</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1rem auto 0' }}>
            Whether you're a growing business, remote worker, or tech enthusiast, our expert IT services deliver tailored solutions to fit your goals and budget.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: 'var(--shadow-lg)' }}
              style={{
                background: 'var(--color-surface)',
                padding: '2.5rem 2rem',
                borderRadius: '1rem',
                boxShadow: 'var(--shadow-md)',
                transition: 'all var(--transition-normal)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}
            >
              <div style={{ 
                background: 'rgba(246, 74, 0, 0.1)', 
                color: 'var(--color-accent)', 
                padding: '1rem', 
                borderRadius: '1rem',
                marginBottom: '1.5rem'
              }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{service.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', flexGrow: 1 }}>
                {service.desc}
              </p>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, marginTop: 'auto' }}>
                Find Out More <span style={{ transition: 'transform 0.2s' }} className="arrow">⟶</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style>{`
        a:hover .arrow {
          transform: translateX(5px);
        }
      `}</style>
    </section>
  );
}
