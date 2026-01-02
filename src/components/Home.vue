<script setup>
import { ref } from 'vue'

const subjects = ref([
  {
    id: 'math',
    title: 'Mathematics',
    description: 'Build strong foundations from algebra to calculus with expert guidance.',
    icon: 'π',
    color: 'math',
    topics: ['Algebra & Pre-Algebra', 'Geometry', 'Pre-Calculus & Calculus', 'Statistics'],
    resources: [
      { name: 'Khan Academy Math', url: 'https://www.khanacademy.org/math', description: 'Free courses for all levels' },
      { name: 'Desmos Calculator', url: 'https://www.desmos.com/calculator', description: 'Graphing & visualization' },
      { name: 'Wolfram Alpha', url: 'https://www.wolframalpha.com', description: 'Computational answers' },
      { name: 'Mathway', url: 'https://www.mathway.com', description: 'Step-by-step solutions' }
    ]
  },
  {
    id: 'science',
    title: 'Science',
    description: 'Explore biology, chemistry, physics, and environmental science.',
    icon: '⚗',
    color: 'science',
    topics: ['Biology', 'Chemistry', 'Physics', 'Environmental Science'],
    resources: [
      { name: 'Khan Academy Science', url: 'https://www.khanacademy.org/science', description: 'Comprehensive courses' },
      { name: 'Physics Classroom', url: 'https://www.physicsclassroom.com', description: 'Interactive physics tutorials' },
      { name: 'Crash Course', url: 'https://www.youtube.com/crashcourse', description: 'Engaging video lessons' },
      { name: 'PhET Simulations', url: 'https://phet.colorado.edu', description: 'Interactive simulations' }
    ]
  },
  {
    id: 'english',
    title: 'English & Writing',
    description: 'Develop reading comprehension, writing skills, and literary analysis.',
    icon: 'A',
    color: 'english',
    topics: ['Essay Writing', 'Literature Analysis', 'Grammar & Composition', 'Reading Comprehension'],
    resources: [
      { name: 'Purdue OWL', url: 'https://owl.purdue.edu', description: 'Writing resources & guides' },
      { name: 'Grammarly', url: 'https://www.grammarly.com', description: 'Grammar & writing assistant' },
      { name: 'SparkNotes', url: 'https://www.sparknotes.com', description: 'Literature study guides' },
      { name: 'Hemingway Editor', url: 'https://hemingwayapp.com', description: 'Improve writing clarity' }
    ]
  }
])

const featuredResources = ref([
  {
    id: 1,
    category: 'Test Prep',
    title: 'SAT Preparation',
    description: 'Free, personalized SAT practice with official College Board materials.',
    link: 'https://www.khanacademy.org/sat',
    icon: '◎',
    color: 'test-prep'
  },
  {
    id: 2,
    category: 'AP Courses',
    title: 'AP Study Materials',
    description: 'Access official College Board resources and practice exams.',
    link: 'https://apcentral.collegeboard.org',
    icon: '★',
    color: 'math'
  },
  {
    id: 3,
    category: 'Homework Help',
    title: 'Study Tools',
    description: 'Calculators, formula sheets, and study guides for all subjects.',
    link: '/resources',
    icon: '≡',
    color: 'science',
    internal: true
  },
  {
    id: 4,
    category: 'Explore More',
    title: 'History, Civics & Internships',
    description: 'History resources, fun learning sites, government info, and internship opportunities.',
    link: '/more',
    icon: '⊕',
    color: 'more',
    internal: true
  }
])

const quickLinks = ref([
  { name: 'Algebra Basics', url: 'https://www.khanacademy.org/math/algebra-basics', category: 'Math' },
  { name: 'Chemistry Library', url: 'https://www.khanacademy.org/science/chemistry', category: 'Science' },
  { name: 'Grammar Guide', url: 'https://owl.purdue.edu/owl/general_writing/grammar/', category: 'English' },
  { name: 'Geometry', url: 'https://www.khanacademy.org/math/geometry', category: 'Math' },
  { name: 'Biology Basics', url: 'https://www.khanacademy.org/science/biology', category: 'Science' },
  { name: 'Essay Writing', url: 'https://owl.purdue.edu/owl/general_writing/the_writing_process/', category: 'English' },
  { name: 'Physics Fundamentals', url: 'https://www.khanacademy.org/science/physics', category: 'Science' },
  { name: 'Pre-Calculus', url: 'https://www.khanacademy.org/math/precalculus', category: 'Math' }
])
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
  <section class="hero">
      <div class="hero-content">
        <h1>Your Path to Academic Success</h1>
    <p class="hero-subtitle">
          Free peer tutoring for Ludlow students. Get personalized help in math, science, 
          English, and test preparation from fellow students who understand your curriculum.
        </p>
        <div class="hero-actions">
          <router-link to="/get-started" class="btn btn-white">
            Start Learning
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
          <router-link to="/resources" class="btn btn-outline-white">
            Browse Resources
          </router-link>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-value">3</span>
            <span class="stat-label">Core Subjects</span>
          </div>
          <div class="stat">
            <span class="stat-value">50+</span>
            <span class="stat-label">Free Resources</span>
          </div>
          <div class="stat">
            <span class="stat-value">100%</span>
            <span class="stat-label">Free Tutoring</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Subject Cards Section -->
    <section class="subjects-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Explore Subjects</h2>
          <p>Choose a subject to get started with free resources and tutoring support.</p>
    </div>

        <div class="subjects-grid">
          <div v-for="subject in subjects" :key="subject.id" class="subject-card">
      <div class="subject-header">
              <div :class="['subject-icon', subject.color]">{{ subject.icon }}</div>
              <div class="subject-info">
                <h3>{{ subject.title }}</h3>
                <p>{{ subject.description }}</p>
              </div>
            </div>
            
            <div class="subject-topics">
              <span v-for="topic in subject.topics" :key="topic" class="topic-tag">
                {{ topic }}
              </span>
      </div>

            <div class="subject-resources">
              <h4>Popular Resources</h4>
              <ul>
                <li v-for="resource in subject.resources" :key="resource.name">
                  <a :href="resource.url" target="_blank" rel="noopener noreferrer" class="resource-link">
                    <span class="resource-name">{{ resource.name }}</span>
                    <span class="resource-desc">{{ resource.description }}</span>
                    <svg class="external-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10.5 1.5L1.5 10.5M10.5 1.5H4.5M10.5 1.5V7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                </li>
        </ul>
      </div>
    </div>
        </div>
      </div>
    </section>

    <!-- Featured Resources -->
    <section class="featured-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Featured Resources</h2>
          <p>Essential tools and materials to support your academic journey.</p>
        </div>

        <div class="featured-grid">
          <component
            v-for="resource in featuredResources"
            :key="resource.id"
            :is="resource.internal ? 'router-link' : 'a'"
            :to="resource.internal ? resource.link : undefined"
            :href="!resource.internal ? resource.link : undefined"
            :target="!resource.internal ? '_blank' : undefined"
            :rel="!resource.internal ? 'noopener noreferrer' : undefined"
            class="featured-card"
          >
            <div :class="['featured-icon', resource.color]">{{ resource.icon }}</div>
            <span class="featured-category">{{ resource.category }}</span>
            <h3>{{ resource.title }}</h3>
            <p>{{ resource.description }}</p>
            <span class="featured-link">
              Learn more
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 9L9 5M9 5H5M9 5V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </component>
        </div>
      </div>
    </section>

    <!-- Quick Links Section -->
    <section class="quick-links-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Quick Start Learning</h2>
          <p>Jump right into these popular topics and start building your skills.</p>
        </div>

        <div class="quick-links-grid">
          <a 
            v-for="link in quickLinks" 
            :key="link.name" 
            :href="link.url" 
            target="_blank" 
            rel="noopener noreferrer"
            class="quick-link"
          >
            <span :class="['quick-link-category', link.category.toLowerCase()]">{{ link.category }}</span>
            <span class="quick-link-name">{{ link.name }}</span>
            <svg class="quick-link-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 9L9 5M9 5H5M9 5V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
      </div>
    </div>
  </section>

    <!-- CTA Section -->
  <section class="cta-section">
      <div class="section-container">
        <div class="cta-content">
          <h2>Ready to Excel?</h2>
          <p>
            Connect with a peer tutor who understands your classes and can help you 
            succeed. Our tutoring is completely free for all Ludlow students.
          </p>
          <div class="cta-actions">
            <router-link to="/get-started" class="btn btn-primary btn-lg">
              Request a Tutor
            </router-link>
            <router-link to="/resources" class="btn btn-secondary btn-lg">
              Explore Resources
            </router-link>
          </div>
        </div>
    </div>
  </section>
  </div>
</template>

<style scoped>
.home {
  padding-top: 64px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, #1a4fd0 100%);
  color: var(--text-inverse);
  padding: var(--space-3xl) var(--space-lg);
  min-height: 480px;
  display: flex;
  align-items: center;
}

.hero-content {
  max-width: var(--max-width);
  margin: 0 auto;
  width: 100%;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 900;
  color: var(--text-inverse);
  margin-bottom: var(--space-lg);
  max-width: 700px;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin-bottom: var(--space-xl);
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
  margin-bottom: var(--space-2xl);
}

.btn-outline-white {
  background: transparent;
  color: var(--text-inverse);
  border: 2px solid rgba(255, 255, 255, 0.4);
}

.btn-outline-white:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.6);
  color: var(--text-inverse);
}

.hero-stats {
  display: flex;
  gap: var(--space-2xl);
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 2rem;
  font-weight: 900;
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.8;
}

/* Section Styles */
.section-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-2xl);
}

.section-header h2 {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: var(--space-sm);
}

.section-header p {
  color: var(--text-secondary);
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Subjects Section */
.subjects-section {
  padding: var(--space-3xl) 0;
  background: var(--bg-secondary);
}

.subjects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.subject-card {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  border: 1px solid var(--border-light);
  transition: all var(--transition-base);
}

.subject-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.subject-header {
  display: flex;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.subject-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 700;
  flex-shrink: 0;
}

.subject-icon.math {
  background: var(--ka-teal-light);
  color: var(--ka-teal);
}

.subject-icon.science {
  background: var(--ka-green-light);
  color: var(--ka-green);
}

.subject-icon.english {
  background: var(--ka-purple-light);
  color: var(--ka-purple);
}

.subject-info h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: var(--space-xs);
}

.subject-info p {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  margin: 0;
  line-height: 1.5;
}

.subject-topics {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--border-light);
}

.topic-tag {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  font-size: 0.8125rem;
  font-weight: 600;
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
}

.subject-resources h4 {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--space-md);
}

.subject-resources ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.resource-link {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.resource-link:hover {
  background: var(--color-primary-light);
}

.resource-name {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.9375rem;
}

.resource-desc {
  color: var(--text-secondary);
  font-size: 0.8125rem;
  flex: 1;
}

.external-icon {
  color: var(--text-muted);
  flex-shrink: 0;
}

.resource-link:hover .external-icon {
  color: var(--color-primary);
}

/* Featured Section */
.featured-section {
  padding: var(--space-3xl) 0;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.featured-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  text-decoration: none;
  transition: all var(--transition-base);
  display: block;
}

.featured-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
  border-color: var(--color-primary);
}

.featured-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--space-md);
}

.featured-icon.test-prep {
  background: var(--ka-orange-light);
  color: var(--ka-orange);
}

.featured-icon.math {
  background: var(--ka-teal-light);
  color: var(--ka-teal);
}

.featured-icon.science {
  background: var(--ka-green-light);
  color: var(--ka-green);
}

.featured-icon.more {
  background: var(--ka-orange-light);
  color: var(--ka-orange);
}

.featured-category {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-secondary);
}

.featured-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: var(--space-xs) 0 var(--space-sm);
}

.featured-card p {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  margin-bottom: var(--space-md);
  line-height: 1.5;
}

.featured-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.9375rem;
}

.featured-card:hover .featured-link {
  color: var(--color-primary-dark);
}

/* Quick Links Section */
.quick-links-section {
  padding: var(--space-3xl) 0;
  background: var(--bg-secondary);
}

.quick-links-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
}

.quick-link {
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  transition: all var(--transition-fast);
  position: relative;
}

.quick-link:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
}

.quick-link-category {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  width: fit-content;
}

.quick-link-category.math {
  background: var(--ka-teal-light);
  color: var(--ka-teal);
}

.quick-link-category.science {
  background: var(--ka-green-light);
  color: var(--ka-green);
}

.quick-link-category.english {
  background: var(--ka-purple-light);
  color: var(--ka-purple);
}

.quick-link-name {
  font-weight: 700;
  color: var(--text-primary);
  font-size: 1rem;
}

.quick-link-arrow {
  position: absolute;
  top: var(--space-lg);
  right: var(--space-lg);
  color: var(--text-muted);
  transition: all var(--transition-fast);
}

.quick-link:hover .quick-link-arrow {
  color: var(--color-primary);
  transform: translate(2px, -2px);
}

/* CTA Section */
.cta-section {
  padding: var(--space-3xl) 0;
}

.cta-content {
  background: linear-gradient(135deg, var(--ka-gray-700) 0%, var(--ka-gray-800) 100%);
  color: var(--text-inverse);
  border-radius: var(--radius-xl);
  padding: var(--space-3xl);
  text-align: center;
}

.cta-content h2 {
  color: var(--text-inverse);
  font-size: 2.25rem;
  font-weight: 900;
  margin-bottom: var(--space-md);
}

.cta-content p {
  color: var(--ka-gray-300);
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto var(--space-xl);
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
}

.btn-lg {
  padding: var(--space-md) var(--space-2xl);
  font-size: 1rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .subjects-grid {
    grid-template-columns: 1fr;
  }

  .featured-grid {
    grid-template-columns: 1fr;
  }

  .quick-links-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: var(--space-2xl) var(--space-md);
    min-height: auto;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-stats {
    gap: var(--space-xl);
  }

  .stat-value {
    font-size: 1.5rem;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .quick-links-grid {
    grid-template-columns: 1fr;
  }

  .cta-content {
    padding: var(--space-2xl) var(--space-lg);
  }

  .cta-content h2 {
    font-size: 1.75rem;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
