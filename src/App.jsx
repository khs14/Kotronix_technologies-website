import React, { useState, useEffect } from 'react';
import { ChevronDown, Zap, Clock, Shield, Users, Mail, Phone, MapPin } from 'lucide-react';
import './App.css';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="website">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="nav-container">
            <div className="logo">
              <img src="/logo.png" alt="Kotronix Technologies Logo" className="logo-img" />
              <h2>KOTRONIX TECHNOLOGIES</h2>
            </div>
            <div className="nav-links">
              <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
              <a href="#about" onClick={() => scrollToSection('about')}>About</a>
              <a href="#services" onClick={() => scrollToSection('services')}>Services</a>
              <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'fade-in-up' : ''}`}>
            <h1>Powering the Future of Electric Transportation</h1>
            <p>Professional DC EV Charger Service & Maintenance Solutions</p>
            <button 
              className="cta-button"
              onClick={() => scrollToSection('services')}
            >
              Our Services
              <ChevronDown className="cta-icon" />
            </button>
          </div>
          <div className={`hero-image ${isVisible ? 'fade-in-right' : ''}`}>
            <div className="charging-station">
              <Zap className="charging-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2>About Kotronix Technologies</h2>
            <p>Leading the charge in EV infrastructure maintenance</p>
          </div>
          
          <div className="about-content">
            <div className="about-text fade-in-left">
              <h3>Specialized in DC EV Charger Solutions</h3>
              <p>
                At Kotronix Technologies, we specialize in the service and maintenance of DC EV chargers 
                for roadway infrastructure. With the rapid growth of electric vehicles, reliable charging 
                infrastructure is crucial for supporting sustainable transportation.
              </p>
              <p>
                DC fast chargers are essential because they can charge an EV battery to 80% capacity in 
                just 20-30 minutes, compared to AC chargers which take several hours. This makes them 
                ideal for highway rest stops, commercial locations, and urban charging hubs.
              </p>
            </div>
            
            <div className="stats fade-in-right">
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Guns Serviced</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.8%</div>
                <div className="stat-label">Uptime Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why DC Chargers Section */}
      <section className="why-dc">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2>Why DC EV Chargers Are Essential</h2>
            <p>Understanding the importance of fast charging infrastructure</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card fade-in-up">
              <Clock className="feature-icon" />
              <h3>Rapid Charging</h3>
              <p>DC chargers provide 50-350kW power output, charging EVs 10-20 times faster than standard AC chargers, making long-distance travel practical.</p>
            </div>
            
            <div className="feature-card fade-in-up">
              <Zap className="feature-icon" />
              <h3>High Power Output</h3>
              <p>Direct current bypasses the vehicle's onboard charger, delivering power directly to the battery for maximum efficiency and speed.</p>
            </div>
            
            <div className="feature-card fade-in-up">
              <Shield className="feature-icon" />
              <h3>Network Reliability</h3>
              <p>Critical for highway corridors and commercial applications where downtime directly impacts user experience and adoption rates.</p>
            </div>
            
            <div className="feature-card fade-in-up">
              <Users className="feature-icon" />
              <h3>Mass Adoption Support</h3>
              <p>Essential infrastructure for supporting the transition to electric vehicles by eliminating range anxiety and enabling convenient charging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2>Our Services</h2>
            <p>Comprehensive DC EV charger solutions</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card fade-in-left">
              <h3>Preventive Maintenance</h3>
              <p>Regular inspections, cleaning, and component testing to ensure optimal performance and prevent costly breakdowns.</p>
            </div>
            
    
            <div className="service-card fade-in-right">
              <h3>System Upgrades</h3>
              <p>Hardware and software upgrades to improve charging speeds, efficiency, and user experience.</p>
            </div>
            
            <div className="service-card fade-in-left">
              <h3>Performance Monitoring</h3>
              <p>Remote monitoring and diagnostics to identify issues before they impact service availability.</p>
            </div>
            
            <div className="service-card fade-in-up">
              <h3>Installation Support</h3>
              <p>Expert installation services for new DC charging infrastructure projects.</p>
            </div>
            
            <div className="service-card fade-in-right">
              <h3>Compliance Testing</h3>
              <p>Safety and regulatory compliance testing to ensure your chargers meet industry standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2>Contact Us</h2>
            <p>Get in touch for all your DC EV charger service needs</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info fade-in-left">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>kotronix.technologies@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <Phone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+91 9205004891</p>
                </div>
              </div>
              
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div>
                  <h4>Address</h4>
                  <p>A-12 New Friends Colony</p>
                  <p>New Delhi 110025, India</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form fade-in-right">
              <div className="contact-card">
                <h3>Ready to Get Started?</h3>
                <p>Contact us today for reliable DC EV charger maintenance services. Our expert team is ready to keep your charging infrastructure running at peak performance.</p>
                <div className="contact-buttons">
                  <a href="mailto:kotronix.technologies@gmail.com" className="contact-btn primary">
                    <Mail className="btn-icon" />
                    Email Us
                  </a>
                  <a href="tel:+919205004891" className="contact-btn secondary">
                    <Phone className="btn-icon" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img src="/logo.png" alt="Kotronix Technologies Logo" className="footer-logo-img" />
                <div>
                  <h3>KOTRONIX TECHNOLOGIES</h3>
                  <p>Professional DC EV Charger Service & Maintenance</p>
                </div>
              </div>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <p>Maintenance • Repairs • Upgrades • Monitoring</p>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>kotronix.technologies@gmail.com</p>
              <p>+91 9205004891</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Kotronix Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;