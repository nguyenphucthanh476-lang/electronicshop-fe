import React from "react";
import { FiShield, FiTruck, FiHeadphones } from "react-icons/fi";

const AboutUs = () => {
  const styles = {
    page: {
      backgroundColor: "#faf8f5",
      color: "#1f2937",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      minHeight: "100vh",
    },
    container: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "0 24px",
    },

    // Hero Section
    hero: {
      textAlign: "center",
      padding: "120px 20px 80px",
      background: "linear-gradient(180deg, #faf8f5 0%, #ffffff 100%)",
    },
    heroTitle: {
      fontSize: "56px",
      fontWeight: "700",
      lineHeight: "1.1",
      marginBottom: "12px",
      color: "#111827",
    },
    heroSubtitle: {
      fontSize: "52px",
      fontWeight: "800",
      lineHeight: "1.1",
      marginBottom: "32px",
      color: "#111827",
    },
    heroButton: {
      display: "inline-block",
      padding: "14px 32px",
      backgroundColor: "#111827",
      color: "#ffffff",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "600",
      textDecoration: "none",
      cursor: "pointer",
      border: "none",
      transition: "transform 0.2s",
    },
    heroDesc: {
      fontSize: "18px",
      color: "#6b7280",
      maxWidth: "800px",
      margin: "48px auto 0",
      lineHeight: "1.7",
    },

    // Features Section
    featureSection: {
      padding: "80px 0",
      backgroundColor: "#ffffff",
    },
    sectionTitle: {
      textAlign: "center",
      fontSize: "42px",
      fontWeight: "700",
      marginBottom: "80px",
      color: "#111827",
      lineHeight: "1.2",
    },
    featureGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "24px",
      maxWidth: "1100px",
      margin: "0 auto",
    },
    featureCard: {
      backgroundColor: "#f9fafb",
      borderRadius: "20px",
      padding: "48px 40px",
      height: "280px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "relative",
      overflow: "hidden",
      transition: "transform 0.3s ease",
      cursor: "pointer",
    },
    featureCardLarge: {
      gridColumn: "1 / 2",
      gridRow: "1 / 2",
      backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#ffffff",
    },
    featureCardMedium1: {
      gridColumn: "2 / 3",
      gridRow: "1 / 2",
      backgroundColor: "#8b7355",
      color: "#ffffff",
    },
    featureCardMedium2: {
      gridColumn: "1 / 2",
      gridRow: "2 / 3",
      backgroundColor: "#d4c5b0",
      color: "#111827",
    },
    featureCardSmall: {
      gridColumn: "2 / 3",
      gridRow: "2 / 3",
      backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#ffffff",
    },
    featureOverlay: {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      background: "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)",
      zIndex: "1",
    },
    featureContent: {
      position: "relative",
      zIndex: "2",
    },
    featureTitle: {
      fontSize: "24px",
      fontWeight: "700",
      marginBottom: "12px",
      lineHeight: "1.3",
    },
    featureDesc: {
      fontSize: "15px",
      lineHeight: "1.6",
      opacity: "0.95",
    },
    featureIcon: {
      fontSize: "32px",
      marginBottom: "16px",
    },
    arrowIcon: {
      position: "absolute",
      bottom: "32px",
      right: "32px",
      fontSize: "28px",
      opacity: "0.8",
    },

    // Results Section
    resultSection: {
      padding: "100px 0",
      backgroundColor: "#faf8f5",
    },
    resultTitle: {
      textAlign: "center",
      fontSize: "42px",
      fontWeight: "700",
      marginBottom: "80px",
      color: "#111827",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "48px",
      maxWidth: "1100px",
      margin: "0 auto",
      textAlign: "center",
    },
    statValue: {
      fontSize: "56px",
      fontWeight: "800",
      color: "#111827",
      marginBottom: "8px",
    },
    statLabel: {
      fontSize: "16px",
      color: "#6b7280",
      fontWeight: "500",
    },

    // Map Section
    mapSection: {
      padding: "100px 0 80px",
      backgroundColor: "#ffffff",
    },
    mapTitle: {
      textAlign: "center",
      fontSize: "42px",
      fontWeight: "700",
      marginBottom: "60px",
      color: "#111827",
    },
    mapContainer: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px",
      maxWidth: "1400px",
      margin: "0 auto",
      alignItems: "start",
    },
    mapBox: {
      backgroundColor: "#f9fafb",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    },
    mapFrame: {
      width: "100%",
      height: "450px",
      border: "none",
      display: "block",
    },
    addressBox: {
      padding: "32px",
      backgroundColor: "#ffffff",
      borderTop: "3px solid #111827",
    },
    addressTitle: {
      fontSize: "20px",
      fontWeight: "700",
      marginBottom: "12px",
      color: "#111827",
    },
    addressText: {
      fontSize: "15px",
      color: "#6b7280",
      lineHeight: "1.7",
      marginBottom: "8px",
    },
  };

  return (
    <div style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.heroTitle}>ElectroStore</h1>
          <h2 style={styles.heroSubtitle}>Authentic electronics — fast delivery</h2>
          <button style={styles.heroButton}>Explore →</button>
          <p style={styles.heroDesc}>
            We are an online electronics store offering authentic devices — from smartphones
            and laptops to accessories and smart home gadgets. Our promise: transparent product
            quality, competitive prices, official warranties, and attentive customer service.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.featureSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            Why Choose Us
          </h2>

          <div style={styles.featureGrid}>
            {/* Large Card - Top Left */}
            <div style={{ ...styles.featureCard, ...styles.featureCardLarge }}>
              <div style={styles.featureOverlay}></div>
              <div style={styles.featureContent}>
                <div style={styles.featureTitle}>Authentic Products</div>
                <div style={styles.featureDesc}>
                  All products are genuine and sourced from manufacturers or authorized distributors.
                </div>
              </div>
              <div style={styles.arrowIcon}>↗</div>
            </div>

            {/* Medium Card 1 - Top Right */}
            <div style={{ ...styles.featureCard, ...styles.featureCardMedium1 }}>
              <div style={styles.featureContent}>
                <div style={styles.featureIcon}><FiShield size={32} /></div>
                <div style={styles.featureTitle}>Warranty & Aftercare</div>
                <div style={styles.featureDesc}>
                  Official warranty support, easy returns, and nationwide service centers.
                </div>
              </div>
            </div>

            {/* Medium Card 2 - Bottom Left */}
            <div style={{ ...styles.featureCard, ...styles.featureCardMedium2 }}>
              <div style={styles.featureContent}>
                <div style={styles.featureIcon}><FiTruck size={32} /></div>
                <div style={styles.featureTitle}>Fast & Secure Delivery</div>
                <div style={styles.featureDesc}>
                  Fast nationwide shipping, secure packaging, and online order tracking.
                </div>
              </div>
            </div>

            {/* Small Card - Bottom Right */}
            <div style={{ ...styles.featureCard, ...styles.featureCardSmall }}>
              <div style={styles.featureOverlay}></div>
              <div style={styles.featureContent}>
                <div style={styles.featureIcon}><FiHeadphones size={32} /></div>
                <div style={styles.featureTitle}>24/7 Support</div>
                <div style={styles.featureDesc}>
                  Our support and technical team are available to assist you anytime.
                </div>
              </div>
              <div style={styles.arrowIcon}>↗</div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section style={styles.resultSection}>
        <div style={styles.container}>
          <h2 style={styles.resultTitle}>Our Achievements</h2>

          <div style={styles.statsGrid}>
            <div>
              <div style={styles.statValue}>50K+</div>
              <div style={styles.statLabel}>Products Sold</div>
            </div>

            <div>
              <div style={styles.statValue}>98%</div>
              <div style={styles.statLabel}>Customer Satisfaction</div>
            </div>

            <div>
              <div style={styles.statValue}>200+</div>
              <div style={styles.statLabel}>Trusted Brands</div>
            </div>

            <div>
              <div style={styles.statValue}>24/7</div>
              <div style={styles.statLabel}>Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section style={styles.mapSection}>
        <div style={styles.container}>
          <h2 style={styles.mapTitle}>Visit Our Locations</h2>

          <div style={styles.mapContainer}>
            {/* Left Map */}
            <div style={styles.mapBox}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4544374621384!2d106.80730731533415!3d10.841132760950559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2sFPT%20University%20HCMC!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                style={styles.mapFrame}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FPT University HCMC Map"
              ></iframe>
              <div style={styles.addressBox}>
                <div style={styles.addressTitle}>FPT University - HCMC Campus</div>
                <div style={styles.addressText}>
                  Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ,
                </div>
                <div style={styles.addressText}>
                  Thành Phố Thủ Đức, Thành phố Hồ Chí Minh
                </div>
                <div style={styles.addressText}>
                  Phone: (028) 7300 5588
                </div>
                <div style={styles.addressText}>
                  Email: daihocfpt@fpt.edu.vn
                </div>
              </div>
            </div>

            {/* Right Map */}
            <div style={styles.mapBox}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4544374621384!2d106.80730731533415!3d10.841132760950559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2sFPT%20University%20HCMC!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                style={styles.mapFrame}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FPT University HCMC Map 2"
              ></iframe>
              <div style={styles.addressBox}>
                <div style={styles.addressTitle}>FPT Technology Building</div>
                <div style={styles.addressText}>
                  Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ,
                </div>
                <div style={styles.addressText}>
                  Thành Phố Thủ Đức, Thành phố Hồ Chí Minh
                </div>
                <div style={styles.addressText}>
                  Phone: (028) 7300 5588
                </div>
                <div style={styles.addressText}>
                  Hours: Mon-Fri 8:00 AM - 6:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;