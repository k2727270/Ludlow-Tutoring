<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section brand">
        <div class="brand-header">
          <img src="../assets/Ludlow Logo.png" alt="Ludlow Tutoring" class="brand-icon" />
          <h3>Ludlow Tutoring</h3>
        </div>
        <p>Making learning fun and accessible for every student! 🌟</p>
      </div>

      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><router-link to="/" class="footer-link">🏠 Home</router-link></li>
          <li><router-link to="/resources" class="footer-link">📚 Resources</router-link></li>
          <li><router-link to="/get-started" class="footer-link">🚀 Get Started</router-link></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Locations</h4>
        <div class="location-item">
          <span class="location-icon">💻</span>
          <div class="location-details">
            <span class="location-type">Remote Sessions</span>
            <span class="location-desc">Available worldwide</span>
          </div>
        </div>
        <div class="location-item">
          <span class="location-icon">🙋</span>
          <div class="location-details">
            <span class="location-type">In-Person</span>
            <span class="location-desc">Ludlow, MA area</span>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p>&copy; 2025 Ludlow Tutoring - Making learning fun and accessible! 💙</p>
        <div class="footer-decoration">
          <span class="decoration">✨</span>
          <span class="decoration">🌟</span>
          <span class="decoration">✨</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No additional logic needed for now
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  color: white;
  padding: 4rem 0 1rem;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
  border-radius: 2rem 2rem 0 0;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-section.brand {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.brand-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.brand-icon {
  max-width: 80px;
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.footer-section h3 {
  font-size: 1.8rem;
  margin-left: -5px;
  color: #4ecdc4;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.footer-section h4 {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #4ecdc4;
  font-weight: 600;
  position: relative;
}

.footer-section h4::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 2rem;
  height: 2px;
  background: linear-gradient(90deg, #4ecdc4, #45b7d1);
  border-radius: 1px;
}

.footer-section p {
  color: #e2e8f0;
  line-height: 1.6;
  margin: 0;
  font-size: 1.1rem;
}

.location-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(78, 205, 196, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(78, 205, 196, 0.2);
  transition: all 0.3s ease;
}

.location-item:hover {
  background: rgba(78, 205, 196, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(78, 205, 196, 0.2);
}

.location-icon {
  font-size: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.location-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.location-type {
  color: #4ecdc4;
  font-weight: 600;
  font-size: 1rem;
}

.location-desc {
  color: #a0aec0;
  font-size: 0.9rem;
  font-weight: 500;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-link {
  color: #e2e8f0;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.footer-link:hover {
  color: #4ecdc4;
  background: rgba(78, 205, 196, 0.1);
  padding-left: 0.5rem;
  transform: translateX(5px);
}

.footer-bottom {
  border-top: 1px solid #4a5568;
  padding: 2rem 0;
  background: rgba(0, 0, 0, 0.1);
}

.footer-bottom-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  color: #a0aec0;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
}

.footer-decoration {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.decoration {
  font-size: 1rem;
  animation: sparkle 2s ease-in-out infinite;
}

.decoration:nth-child(2) {
  animation-delay: 0.5s;
}

.decoration:nth-child(3) {
  animation-delay: 1s;
}

@keyframes sparkle {
  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

/* Mobile responsive */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .footer {
    padding: 3rem 0 1rem;
  }

  .brand-header {
    justify-content: center;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .footer-section ul {
    align-items: center;
  }

  .location-item {
    justify-content: center;
    text-align: center;
  }
}
</style>
