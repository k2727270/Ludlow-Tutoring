<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-brand">
        <router-link to="/" class="brand-link">
          <img src="../assets/Ludlow Logo.png" alt="Ludlow Tutoring" class="brand-icon" />
          <span class="brand-text">Ludlow Tutoring</span>
        </router-link>
      </div>

      <div class="nav-links desktop-nav">
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
        <router-link to="/more" class="nav-link" :class="{ active: $route.name === 'More' }">
          More
        </router-link>
        <router-link
          to="/get-started"
          class="nav-link nav-cta"
          :class="{ active: $route.name === 'GetStarted' }"
        >
          Get Started
        </router-link>
      </div>

      <div class="mobile-menu">
        <button
          class="hamburger"
          :class="{ active: isMenuOpen }"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>

        <div class="mobile-nav" :class="{ open: isMenuOpen }">
          <router-link
            to="/"
            class="mobile-nav-link"
            :class="{ active: $route.name === 'Home' }"
            @click="closeMenu"
          >
            Home
          </router-link>
          <router-link
            to="/resources"
            class="mobile-nav-link"
            :class="{ active: $route.name === 'Resources' }"
            @click="closeMenu"
          >
            Resources
          </router-link>
          <router-link
            to="/more"
            class="mobile-nav-link"
            :class="{ active: $route.name === 'More' }"
            @click="closeMenu"
          >
            More
          </router-link>
          <router-link
            to="/get-started"
            class="mobile-nav-link nav-cta"
            :class="{ active: $route.name === 'GetStarted' }"
            @click="closeMenu"
          >
            Get Started
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-light);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 64px;
}

.nav-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-lg);
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 900;
  font-size: 1.25rem;
  transition: opacity var(--transition-fast);
}

.brand-link:hover {
  opacity: 0.8;
}

.brand-icon {
  width: 40px;
  height: auto;
}

.brand-text {
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  gap: var(--space-xs);
  align-items: center;
}

.desktop-nav {
  display: flex;
}

.mobile-menu {
  display: none;
  position: relative;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all var(--transition-base);
  transform-origin: center;
}

.hamburger.active .hamburger-line:first-child {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger.active .hamburger-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.mobile-nav {
  position: absolute;
  top: calc(100% + var(--space-md));
  right: 0;
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--border-light);
  padding: var(--space-sm);
  min-width: 200px;
  transform: translateY(-8px);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-base);
}

.mobile-nav.open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.mobile-nav-link {
  display: block;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9375rem;
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.mobile-nav-link:hover {
  background: var(--bg-secondary);
  color: var(--color-primary);
}

.mobile-nav-link.active {
  background: var(--color-primary-light);
  color: var(--color-primary);
}

.mobile-nav-link.nav-cta {
  background: var(--color-primary);
  color: var(--text-inverse);
  margin-top: var(--space-sm);
}

.mobile-nav-link.nav-cta:hover {
  background: var(--color-primary-dark);
  color: var(--text-inverse);
}

.nav-link {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9375rem;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  position: relative;
}

.nav-link:hover {
  background: var(--bg-secondary);
  color: var(--color-primary);
}

.nav-link.active {
  color: var(--color-primary);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - var(--space-md));
  height: 3px;
  background: var(--color-primary);
  border-radius: 3px 3px 0 0;
}

.nav-cta {
  background: var(--color-primary);
  color: var(--text-inverse) !important;
  margin-left: var(--space-sm);
}

.nav-cta:hover {
  background: var(--color-primary-dark);
  color: var(--text-inverse) !important;
}

.nav-cta.active::after {
  display: none;
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .mobile-menu {
    display: block;
  }

  .brand-text {
    font-size: 1.1rem;
  }
}
</style>
