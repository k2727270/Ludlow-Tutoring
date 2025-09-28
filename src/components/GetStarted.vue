<template>
  <div class="get-started-page">
    <header class="page-header">
      <h1>Ready to Get Started? 🚀</h1>
      <p>We'd love to help you succeed! Let's start your learning journey together.</p>
    </header>

    <section class="forms-section">
      <div class="forms-container">
        <h2>Get Started Today</h2>
        <p>
          Choose the form that best fits your needs to continue powering your academic journey! (log
          in with your <i>school email</i>)
        </p>

        <div class="forms-grid">
          <div class="form-slot">
            <div class="form-header">
              <h3>📝 Need help with something specific?</h3>
              <p>Tell us about your academic goals and needs</p>
            </div>
            <div class="form-embed">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSe918jDOHl03NKab2Hs2o1y8E_I-QQr6WR4-H3pqPWMXGmkYw/viewform?embedded=true"
                width="100%"
                height="600"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                class="form-iframe"
                >Loading…</iframe
              >
            </div>
          </div>

          <div class="form-slot">
            <div class="form-header">
              <h3>👩‍🏫 Want to become a tutor?</h3>
              <p>Get started by filling out the form below</p>
            </div>
            <div class="form-embed">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdIjV4pvAl6SJnBOYc0XmXTHbs_CcC6L3s3FmlkYUIouMHXNg/viewform?embedded=true"
                width="100%"
                height="600"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                class="form-iframe"
                >Loading…</iframe
              >
            </div>
          </div>

          <div class="form-slot full-width">
            <div class="form-header">
              <h3>💭 General Inquiries & Feedback</h3>
              <p>We're always looking for feedback and suggestions to improve our services</p>
            </div>
            <div class="form-embed">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScj5w6XHEgN0eTJzOt9uAjd6X_JTaHoLEOvMWm62_VEQZPtYQ/viewform?embedded=true"
                width="100%"
                height="700"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                class="form-iframe"
                >Loading…</iframe
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="why-choose-us">
      <h2>Why You Should Work With Us</h2>
      <div class="features-grid">
        <div class="feature-card">
          <span class="feature-icon">💙</span>
          <h3>Warm & Supportive</h3>
          <p>
            We create a safe, encouraging environment where you can learn without fear of judgment.
          </p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">🎯</span>
          <h3>Goal-Oriented</h3>
          <p>We help you set realistic goals and celebrate every milestone along the way.</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">🔄</span>
          <h3>Flexible Approach</h3>
          <p>We adapt our teaching methods to match your learning style and pace.</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">📚</span>
          <h3>Comprehensive Support</h3>
          <p>From homework help to test prep, we cover all your academic needs.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.get-started-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #fef7f0 0%, #f0f9ff 100%);
}

.page-header {
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%);
  color: white;
  padding: 7rem 2rem 4rem;
  text-align: center;
  border-radius: 2rem 2rem 2rem 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
}

.page-header h1 {
  font-size: 3rem;
  margin: 0 0 1rem 0;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.page-header p {
  font-size: 1.3rem;
  margin: 0;
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto;
}

.cta-section {
  padding: 4rem 2rem;
  width: 100%;
}

.cta-content {
  text-align: center;
  margin-bottom: 3rem;
}

.cta-content h2 {
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
  font-weight: 600;
}

.cta-content p {
  font-size: 1.2rem;
  color: #4a5568;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.benefits {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
}

.benefit-item {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid #e2e8f0;
}

.benefit-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  border-color: #4ecdc4;
}

.benefit-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.benefit-item h3 {
  color: #2d3748;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.benefit-item p {
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
}

.forms-section {
  background: linear-gradient(135deg, #f0f9ff 0%, #e6fffa 100%);
  padding: 4rem 2rem;
  border-radius: 2rem;
  margin: 2rem;
}

.forms-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.forms-container h2 {
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
  font-weight: 600;
}

.forms-container p {
  font-size: 1.2rem;
  color: #4a5568;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.forms-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.form-slot {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.form-slot:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: #4ecdc4;
}

.form-slot.full-width {
  grid-column: 1 / -1;
}

.form-header {
  background: linear-gradient(135deg, #4ecdc4 0%, #45b7d1 100%);
  color: white;
  padding: 2rem;
  text-align: center;
}

.form-header h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.form-header p {
  font-size: 1rem;
  opacity: 0.9;
  text-align: center;
}

.form-embed {
  padding: 0;
  background: white;
}

.form-iframe {
  border: none;
  border-radius: 0 0 20px 20px;
  display: block;
  width: 100%;
}

.form-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.form-container h2 {
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
  font-weight: 600;
}

.form-container p {
  font-size: 1.2rem;
  color: #4a5568;
  margin-bottom: 2rem;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #2d3748;
  font-size: 1.1rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4ecdc4;
  box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.1);
}

.checkbox-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  padding: 0.8rem;
  border-radius: 8px;
  background: #f7fafc;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.checkbox-label:hover {
  background: #e6fffa;
  border-color: #4ecdc4;
}

.checkbox-label input[type='checkbox'] {
  width: auto;
  margin-right: 0.5rem;
}

.checkmark {
  font-weight: 500;
  color: #2d3748;
}

.submit-btn {
  width: 100%;
  background: linear-gradient(135deg, #4ecdc4 0%, #45b7d1 100%);
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(78, 205, 196, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Grade Select Styling */
.grade-select {
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  font-family: inherit;
  color: #2d3748;
}

.grade-select:focus {
  outline: none;
  border-color: #4ecdc4;
  box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.1);
}

/* Success Dialog Styling */
.success-content {
  background: white;
  border-radius: 2rem;
  padding: 2rem 3rem 2rem;
  text-align: center;
  overflow: hidden;
  box-shadow: inset 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.02);
}

.success-content:hover {
  transition: all 0.3s ease;
  background: #e6fffa;
}

.success-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: bounce 1s ease-in-out;
}

.success-content p {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.success-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.close-btn {
  background: linear-gradient(135deg, #4ecdc4 0%, #45b7d1 100%) !important;
  border: none !important;
  border-radius: 8px !important;
  padding: 0.8rem 2rem !important;
  font-weight: 600 !important;
  transition: all 0.3s ease !important;
}

.close-btn:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3) !important;
  color: white !important;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.why-choose-us {
  padding: 4rem 2rem;
  width: 100%;
  text-align: center;
}

.why-choose-us h2 {
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 3rem;
  font-weight: 600;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid #e2e8f0;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  border-color: #4ecdc4;
}

.feature-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #2d3748;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.feature-card p {
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .page-header {
    padding: 6rem 1rem 4rem;
    margin-top: 1rem;
  }

  .page-header h1 {
    font-size: 2.2rem;
  }

  .forms-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .form-slot.full-width {
    grid-column: 1;
  }

  .form-header {
    padding: 1.5rem;
  }

  .form-header h3 {
    font-size: 1.3rem;
  }

  .benefits,
  .features-grid {
    grid-template-columns: 1fr;
  }

  .checkbox-group {
    grid-template-columns: 1fr;
  }

  .contact-form {
    padding: 1.5rem;
  }
}
</style>
