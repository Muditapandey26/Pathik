import React, { useState } from 'react';
import './App.css';

// --- SVG Icons Components ---
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const HeartIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const UsersIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const BookOpenIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const LeafIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);


// --- Page Sections ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo">
          <LeafIcon size={28} />
          Pathik
        </a>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#volunteer" onClick={() => setIsOpen(false)}>Volunteer</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="#donate" className="btn-accent" onClick={() => setIsOpen(false)}>Donate Now</a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-badge">Together We Can Make a Difference</div>
        <h1 className="hero-title">Guiding lives towards hope and opportunity</h1>
        <p className="hero-subtitle">
          Pathik is dedicated to empowering underprivileged communities through education, healthcare, and sustainable livelihood programs. Join our journey to create a brighter future.
        </p>
        <div className="hero-buttons">
          <a href="#volunteer" className="btn-primary">
            Join Us <UsersIcon />
          </a>
          <a href="#donate" className="btn-secondary">
            Donate Now <HeartIcon size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container about-grid">
        <div className="about-image">
          {/* Using a placeholder for visual representation, keeping it simple */}
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Children smiling - Pathik NGO" 
          />
        </div>
        <div className="about-text">
          <h3>Our Mission & Vision</h3>
          <p>
            At Pathik, we believe that every individual deserves a fair chance at life. Our mission is to guide the marginalized towards hope by providing access to quality education, essential healthcare, and community development programs.
          </p>
          <p>
            We strive for a world where opportunity is not a privilege, but a fundamental right for all, breaking the cycle of poverty one family at a time.
          </p>
          
          <div className="about-stats">
            <div className="stat-item">
              <h4>10k+</h4>
              <p>Lives Impacted</p>
            </div>
            <div className="stat-item">
              <h4>50+</h4>
              <p>Active Projects</p>
            </div>
            <div className="stat-item">
              <h4>200+</h4>
              <p>Volunteers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      icon: <BookOpenIcon />,
      title: "Education for All",
      desc: "Providing free education and study materials to children in rural areas to bridge the learning gap."
    },
    {
      icon: <HeartIcon size={32} />,
      title: "Healthcare Camps",
      desc: "Organizing monthly medical checkups and providing free medicines to communities without access to proper healthcare."
    },
    {
      icon: <UsersIcon />,
      title: "Women Empowerment",
      desc: "Skill development workshops and micro-finance support to help women become financially independent."
    }
  ];

  return (
    <section id="projects" className="bg-light">
      <div className="container">
        <h2>Our Initiatives</h2>
        <p className="section-subtitle">Discover the programs we run to bring positive change and sustainable development to communities in need.</p>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-icon">
                {project.icon}
              </div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VolunteerForm = () => {
  return (
    <section id="volunteer" className="bg-white">
      <div className="container">
        <h2>Become a Volunteer</h2>
        <p className="section-subtitle">Join our community of changemakers. Your time and skills can transform lives.</p>
        
        <div className="form-container">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" className="form-control" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" className="form-control" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" className="form-control" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Why do you want to join Pathik?</label>
              <textarea id="message" className="form-control" placeholder="Tell us about your skills and motivation..." required></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="bg-light">
      <div className="container">
        <h2>Get in Touch</h2>
        <p className="section-subtitle">Have questions or want to collaborate? We'd love to hear from you.</p>
        
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <PhoneIcon />
            </div>
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
            <p>+91 12345 67890</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <MailIcon />
            </div>
            <h3>Email</h3>
            <p>contact@pathikngo.org</p>
            <p>support@pathikngo.org</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <MapPinIcon />
            </div>
            <h3>Location</h3>
            <p>123 Hope Street, New Delhi</p>
            <p>India - 110001</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3><LeafIcon size={24} /> Pathik</h3>
            <p>Guiding lives towards hope and opportunity. Join us in making the world a better place for everyone.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#projects">Our Projects</a></li>
              <li><a href="#volunteer">Volunteer</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Donation Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Pathik NGO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <VolunteerForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
