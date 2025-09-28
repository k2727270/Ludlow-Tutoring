<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-brand">
        <router-link to="/" class="brand-link">
          <img src="../assets/Ludlow Logo.png" alt="Ludlow Tutoring" class="brand-icon" />
          <span class="brand-text">Ludlow Tutoring</span>
        </router-link>
      </div>

      <div class="nav-links">
        <router-link to="/" class="nav-link" :class="{ active: $route.name === 'Home' }">
          Home
        </router-link>
        <router-link
          to="/resources"
          class="nav-link"
          :class="{ active: $route.name === 'Resources' }"
        >
          Resources
        </router-link>
        <router-link
          to="/get-started"
          class="nav-link cta-link"
          :class="{ active: $route.name === 'GetStarted' }"
        >
          Get Started
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
// No additional logic needed for now
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%);
  padding: 1rem 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  width: calc(100% - 2rem);
  max-width: 1200px;
}

.nav-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.brand-link:hover {
  transform: scale(1.03);
}

.brand-icon {
  max-width: 50px;
  margin-bottom: 5px;
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.brand-text {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.nav-link.active {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.cta-link {
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
  border: 2px solid rgba(255, 255, 255, 0.3);
  font-weight: 700;
  animation: pulse 2s infinite;
}

.cta-link:hover {
  background: linear-gradient(135deg, #ff5252 0%, #ff7979 100%);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

/* Mobile responsive */
@media (max-width: 768px) {
  .navbar {
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 1rem);
    border-radius: 0.5rem;
  }

  .nav-container {
    padding: 0 1rem;
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-link {
    padding: 0.6rem 1rem;
    font-size: 1rem;
  }

  .brand-text {
    font-size: 1.3rem;
  }
}
</style>
