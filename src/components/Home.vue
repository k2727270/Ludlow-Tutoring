<script setup></script>

<template>
  <header>
    <h1>Ludlow Tutoring</h1>
    <p>Your friendly guide to academic success! 🌟</p>
  </header>

  <section class="hero">
    <h2>What We Can Do for You</h2>
    <p class="hero-subtitle">
      Hello Ludlow students, thanks for checking out our website! We're here to help you succeed
      with personalized academic support and resources!
    </p>
  </section>

  <section class="subjects">
    <div class="subject-card math">
      <div class="subject-header">
        <span class="subject-icon">📘</span>
        <h3>Math</h3>
      </div>
      <div class="subject-description">
        <p>
          From algebra to calculus, our awesome student tutors help you build confidence and master
          those tricky concepts.
        </p>
        <ul>
          <li>Algebra & Geometry</li>
          <li>Pre-Calculus & Calculus</li>
          <li>Statistics & Probability</li>
        </ul>
      </div>
    </div>

    <div class="subject-card science">
      <div class="subject-header">
        <span class="subject-icon">🧪</span>
        <h3>Science</h3>
      </div>
      <div class="subject-description">
        <p>
          Explore the wonders of science with hands-on learning! We break down complex topics into
          understandable pieces.
        </p>
        <ul>
          <li>Biology & Chemistry</li>
          <li>Physics & Anatomy</li>
          <li>AP Science Courses</li>
        </ul>
      </div>
    </div>

    <div class="subject-card english">
      <div class="subject-header">
        <span class="subject-icon">📖</span>
        <h3>English</h3>
      </div>
      <div class="subject-description">
        <p>
          Develop your writing and reading skills with personalized guidance. We help you express
          your ideas clearly and confidently.
        </p>
        <ul>
          <li>Essay Writing</li>
          <li>Literature Analysis</li>
          <li>Grammar & Composition</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <h2>Ready to Start Your Learning Journey?</h2>
    <p>Join hundreds of students who have found success with our personalized tutoring approach!</p>
    <div class="cta-buttons">
      <router-link to="/get-started" class="cta-button primary"> Get Started Today 🚀 </router-link>
      <router-link to="/resources" class="cta-button secondary"> Explore Resources 📚 </router-link>
    </div>
  </section>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #fef7f0 0%, #f0f9ff 100%);
  color: #2d3748;
  line-height: 1.6;
}

header {
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%);
  color: white;
  padding: 8rem 2rem 5rem;
  text-align: center;
  border-radius: 2rem 2rem 2rem 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
}

header h1 {
  margin: 0;
  font-size: 3rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

header p {
  margin-top: 1rem;
  font-size: 1.3rem;
  font-weight: 400;
  opacity: 0.95;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #fff5f5 0%, #f0f9ff 100%);
}

.hero h2 {
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
  font-weight: 600;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
}

.subjects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 3rem 2rem;
  width: 100%;
}

.subject-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 3px solid transparent;
  position: relative;
  overflow: hidden;
}

.subject-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1);
}

.subject-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.subject-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

.subject-icon {
  font-size: 2.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.subject-card h3 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
  color: #2d3748;
}

.subject-description {
  text-align: left;
}

.subject-description p {
  color: #4a5568;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.subject-description ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.subject-description li {
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 12px;
  border-left: 4px solid #4ecdc4;
  font-weight: 500;
  color: #2d3748;
}

.cta-section {
  background: linear-gradient(135deg, #f0f9ff 0%, #e6fffa 100%);
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 2rem;
  margin: 2rem;
}

.cta-section h2 {
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
  font-weight: 600;
}

.cta-section p {
  font-size: 1.2rem;
  color: #4a5568;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.cta-button.primary {
  background: linear-gradient(135deg, #4ecdc4 0%, #45b7d1 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);
}

.cta-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(78, 205, 196, 0.4);
}

.cta-button.secondary {
  background: white;
  color: #4ecdc4;
  border: 2px solid #4ecdc4;
  box-shadow: 0 4px 15px rgba(78, 205, 196, 0.1);
}

.cta-button.secondary:hover {
  background: #4ecdc4;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(78, 205, 196, 0.3);
}

@media (max-width: 768px) {
  header {
    padding: 5rem 1rem 3rem;
    margin: 1rem 1rem;
  }

  header h1 {
    font-size: 2.2rem;
  }

  .hero h2 {
    font-size: 2rem;
  }

  .subjects {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
  }

  .resources-grid {
    grid-template-columns: 1fr;
  }

  .subject-card,
  .resource-card {
    padding: 1.5rem;
  }
}
</style>
