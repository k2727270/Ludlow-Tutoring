<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-main">
        <div class="footer-brand">
          <router-link to="/" class="brand-link">
            <img src="../assets/Ludlow Logo.png" alt="Ludlow Tutoring" class="brand-icon" />
            <span class="brand-text">Ludlow Tutoring</span>
          </router-link>
          <p class="brand-description">
            Free peer tutoring for Ludlow students. Building academic confidence through personalized support.
          </p>
        </div>

        <div class="footer-links">
          <div class="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/resources">Resources</router-link></li>
              <li><router-link to="/more">More</router-link></li>
              <li><router-link to="/get-started">Get Started</router-link></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Subjects</h4>
            <ul>
              <li><a href="https://www.khanacademy.org/math" target="_blank" rel="noopener">Mathematics</a></li>
              <li><a href="https://www.khanacademy.org/science" target="_blank" rel="noopener">Science</a></li>
              <li><a href="https://owl.purdue.edu" target="_blank" rel="noopener">English & Writing</a></li>
              <li><router-link to="/more">History & More</router-link></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Location</h4>
            <div class="location-info">
              <p class="location-name">Ludlow High School</p>
              <p class="location-address">500 Chapin St<br>Ludlow, MA 01056</p>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Ludlow Tutoring. All rights reserved.</p>
        <p class="footer-tagline">Empowering students to achieve their academic goals.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: var(--ka-gray-800);
  color: var(--ka-gray-300);
  margin-top: auto;
}

.footer-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-3xl) var(--space-lg) var(--space-xl);
}

.footer-main {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: var(--space-3xl);
  padding-bottom: var(--space-2xl);
  border-bottom: 1px solid var(--ka-gray-600);
}

.footer-brand {
  max-width: 320px;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  text-decoration: none;
  color: var(--text-inverse);
  font-weight: 900;
  font-size: 1.125rem;
  margin-bottom: var(--space-md);
}

.brand-link:hover {
  opacity: 0.9;
}

.brand-icon {
  width: 36px;
  height: auto;
}

.brand-description {
  color: var(--ka-gray-400);
  font-size: 0.9375rem;
  line-height: 1.6;
  margin: 0;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.footer-section h4 {
  color: var(--text-inverse);
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--space-md);
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: var(--space-sm);
}

.footer-section a {
  color: var(--ka-gray-400);
  text-decoration: none;
  font-size: 0.9375rem;
  transition: color var(--transition-fast);
}

.footer-section a:hover {
  color: var(--text-inverse);
}

.location-info {
  color: var(--ka-gray-400);
  font-size: 0.9375rem;
  line-height: 1.6;
}

.location-name {
  color: var(--ka-gray-300);
  font-weight: 600;
  margin-bottom: var(--space-xs);
}

.location-address {
  margin: 0;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-xl);
  flex-wrap: wrap;
  gap: var(--space-md);
}

.footer-bottom p {
  color: var(--ka-gray-500);
  font-size: 0.875rem;
  margin: 0;
}

.footer-tagline {
  font-style: italic;
}

@media (max-width: 768px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-brand {
    max-width: 100%;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-links {
    grid-template-columns: 1fr;
  }
}
</style>
