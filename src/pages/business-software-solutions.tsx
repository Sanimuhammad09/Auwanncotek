import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Layout, CheckCircle, Users, LineChart, Server, CreditCard, Stethoscope, ShoppingCart } from 'lucide-react';

export default function BusinessSoftwareSolutionsPage() {
  const solutions = [
    { title: 'Enterprise Resource Planning (ERP)', desc: 'Bring every department together on one integrated platform. Manage Finance, Procurement, Inventory, Sales, HR, Projects, and Reporting centrally.', icon: <Server size={24} /> },
    { title: 'Customer Relationship Management (CRM)', desc: 'Build stronger customer relationships and increase sales with a centralised CRM system. Track leads, manage pipelines, and automate follow-ups.', icon: <Users size={24} /> },
    { title: 'Human Resource Management (HRMS)', desc: 'Simplify employee management with an integrated HR platform covering records, leave, recruitment, performance, attendance, and onboarding.', icon: <Users size={24} /> },
    { title: 'Payroll Management System', desc: 'Reduce payroll errors and save valuable administrative time. Process salaries, taxes, pensions, and generate detailed payslips effortlessly.', icon: <CreditCard size={24} /> },
    { title: 'Inventory & Stock Management', desc: 'Gain complete control over your inventory with real-time tracking, purchase management, barcode integration, and reorder alerts.', icon: <ShoppingCart size={24} /> },
    { title: 'Accounting & Financial Management', desc: 'Manage your finances with confidence through software designed to improve financial visibility, track expenses, and manage budgets.', icon: <LineChart size={24} /> },
    { title: 'School Management System', desc: 'Digitise academic administration from admissions and student records to attendance, examinations, and fee management.', icon: <Layout size={24} /> },
    { title: 'Hospital & Clinic Management', desc: 'Improve healthcare delivery through efficient patient and administrative management, including EMR, billing, and pharmacy control.', icon: <Stethoscope size={24} /> },
  ];

  const benefits = [
    'Automate repetitive tasks',
    'Reduce paperwork',
    'Improve productivity',
    'Increase operational efficiency',
    'Minimise human error',
    'Strengthen data security',
    'Improve reporting accuracy',
    'Make informed business decisions',
    'Enhance customer satisfaction',
    'Scale operations with confidence'
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <PageHeader
          title="Business Software Solutions"
          subtitle="Smart Software Solutions That Power Business Growth"
          backgroundImage="/slide-3.png"
        />

        {/* Overview */}
        <section className="section" style={{ background: 'var(--color-surface)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>OVERVIEW</span>
                <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                  Transforming Businesses Through Intelligent Software
                </h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                  Today's organisations require more than spreadsheets and manual record-keeping. To remain competitive, businesses need software that connects departments, automates workflows, improves collaboration, and provides accurate information when it's needed most.
                </p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  At Auwancotek Limited, we help organisations embrace digital transformation by delivering secure, user-friendly, and scalable software solutions that simplify complex processes and improve operational efficiency. Whether you're replacing outdated systems or implementing software for the first time, we provide end-to-end support—from consultation and deployment to training, integration, and ongoing maintenance.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div style={{
                  background: 'var(--color-bg)',
                  padding: '2.5rem',
                  borderRadius: '1rem',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Benefits of Our Software</h3>
                  <div className="grid-responsive">
                    {benefits.map((benefit, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <CheckCircle size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="section" style={{ background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>OUR SOFTWARE SOLUTIONS</span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Comprehensive Software for Every Organisation</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
              {solutions.map((svc, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
                  style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--color-border)', transition: 'all 0.3s' }}>
                  <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(4,107,210,0.1)', color: 'var(--color-primary)', borderRadius: '1rem', marginBottom: '1.5rem' }}>
                    {svc.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{svc.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{svc.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Implementation Process */}
        <section className="section" style={{ background: 'var(--color-surface)' }}>
          <div className="container">
             <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>OUR PROCESS</span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Delivering Successful Software Projects</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
              {[
                { title: 'Discovery & Consultation', desc: 'We begin by understanding your business processes, goals, and operational challenges.' },
                { title: 'Solution Design', desc: 'Our specialists recommend or design the software solution that best fits your organisation.' },
                { title: 'Development & Configuration', desc: 'We customise, configure, and integrate your software to align with your business requirements.' },
                { title: 'Testing & Quality Assurance', desc: 'Every solution undergoes rigorous testing to ensure reliability, security, and performance.' },
                { title: 'Deployment', desc: 'We implement the software with minimal disruption to your daily operations.' },
                { title: 'User Training & Support', desc: 'We provide practical training and ongoing technical support for your team.' }
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.5rem', background: 'var(--color-bg)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
                   <div style={{ background: 'var(--color-accent)', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>
                     {i + 1}
                   </div>
                   <div>
                     <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{step.title}</h4>
                     <p style={{ color: 'var(--color-text-muted)' }}>{step.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
