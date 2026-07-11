import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicePageLayout from '../components/ServicePageLayout';

export default function ComputerTrainingPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <ServicePageLayout
          title="Computer Training"
          subtitle="Practical Computer Training to thrive in a digital world. Build your confidence and competence with technology."
          heroImage="/slide-1.png"
          introText="At AUWANCOTEK, we offer hands-on computer training tailored to students, professionals, and beginners. Whether you're learning basic computer operations or advanced software tools, our goal is to build your confidence and competence with technology. Our training programs are designed to equip you with the practical skills you need for today's tech-driven jobs and everyday life."
          servicesTitle="Our Training Programs Cover"
          services={[
            'Computer Basics (Windows, Typing, File Management)',
            'Internet & Email Usage',
            'Microsoft Office (Word, Excel, PowerPoint)',
            'Computer Maintenance & Troubleshooting',
            'Graphics Design (CorelDRAW, Photoshop)',
            'Data Entry & Office Productivity Tools',
            'ICT Skills for Job Readiness',
          ]}
          whyChooseUs={[
            'Experienced, Friendly Instructors',
            'Practical, Hands-On Learning',
            'Flexible Class Schedules (Weekday & Weekend)',
            'Certificate Upon Completion',
            'Affordable Fees for All Learners',
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
