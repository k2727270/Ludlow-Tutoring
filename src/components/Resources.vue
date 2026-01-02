<template>
  <div class="resources-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="header-content">
        <h1>Learning Resources</h1>
        <p>Curated study materials and tools to help you succeed in every subject.</p>
      </div>
    </section>

    <!-- Resource Categories -->
    <section class="resources-section">
      <div class="section-container">
        <div class="resources-grid">
          <div
            v-for="category in resourceCategories"
            :key="category.id"
            class="resource-category"
          >
            <div class="category-header">
              <div :class="['category-icon', category.type]">{{ category.icon }}</div>
              <div class="category-info">
                <h2>{{ category.title }}</h2>
                <p>{{ category.description }}</p>
              </div>
            </div>
            
            <div class="resource-list">
              <a
                v-for="link in category.links"
                :key="link.id"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="resource-item"
              >
                <div class="resource-content">
                  <h3>{{ link.title }}</h3>
                  <p>{{ link.description }}</p>
                </div>
                <svg class="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Study Tips -->
    <section class="tips-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Study Tips & Strategies</h2>
          <p>Proven techniques to help you learn more effectively.</p>
        </div>

        <div class="tips-grid">
          <div v-for="tip in studyTips" :key="tip.id" class="tip-card">
            <div :class="['tip-icon', tip.color]">{{ tip.icon }}</div>
            <h3>{{ tip.title }}</h3>
            <p>{{ tip.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Resources -->
    <section class="additional-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Quick Reference Tools</h2>
          <p>Essential calculators, converters, and reference materials.</p>
        </div>

        <div class="tools-grid">
          <a
            v-for="tool in quickTools"
            :key="tool.id"
            :href="tool.url"
            target="_blank"
            rel="noopener noreferrer"
            class="tool-card"
          >
            <div :class="['tool-icon', tool.color]">{{ tool.icon }}</div>
            <div class="tool-info">
              <h3>{{ tool.title }}</h3>
              <p>{{ tool.description }}</p>
            </div>
            <svg class="external-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 7.5V11.5C11 12.0523 10.5523 12.5 10 12.5H2.5C1.94772 12.5 1.5 12.0523 1.5 11.5V4C1.5 3.44772 1.94772 3 2.5 3H6.5M8.5 1.5H12.5M12.5 1.5V5.5M12.5 1.5L5.5 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- More Resources Banner -->
    <section class="more-banner-section">
      <div class="section-container">
        <router-link to="/more" class="more-banner">
          <div class="more-banner-icon">⊕</div>
          <div class="more-banner-content">
            <h3>Looking for more?</h3>
            <p>Explore history resources, fun learning sites, government & civics, and internship opportunities for high schoolers.</p>
          </div>
          <svg class="more-banner-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </router-link>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="section-container">
        <div class="cta-card">
          <h2>Need More Help?</h2>
          <p>Our peer tutors are here to provide personalized support for any subject.</p>
          <router-link to="/get-started" class="btn btn-primary">
            Request a Tutor
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const resourceCategories = ref([
  {
    id: 1,
    type: 'math',
    icon: 'π',
    title: 'Mathematics',
    description: 'From basic algebra to advanced calculus, find the help you need.',
    links: [
      {
        id: 1,
        title: 'Khan Academy Math',
        description: 'Free courses covering all math levels with practice exercises',
        url: 'https://www.khanacademy.org/math',
      },
      {
        id: 2,
        title: 'Desmos Graphing Calculator',
        description: 'Interactive graphing tool for visualizing equations',
        url: 'https://www.desmos.com/calculator',
      },
      {
        id: 3,
        title: 'Wolfram Alpha',
        description: 'Computational knowledge engine for solving complex problems',
        url: 'https://www.wolframalpha.com',
      },
      {
        id: 4,
        title: 'Mathway',
        description: 'Step-by-step math problem solver',
        url: 'https://www.mathway.com',
      },
    ],
  },
  {
    id: 2,
    type: 'science',
    icon: '⚗',
    title: 'Science',
    description: 'Explore biology, chemistry, physics, and more.',
    links: [
      {
        id: 1,
        title: 'Khan Academy Science',
        description: 'Comprehensive science courses with interactive content',
        url: 'https://www.khanacademy.org/science',
      },
      {
        id: 2,
        title: 'Physics Classroom',
        description: 'Interactive physics tutorials and concept builders',
        url: 'https://www.physicsclassroom.com',
      },
      {
        id: 3,
        title: 'Crash Course',
        description: 'Engaging educational videos on YouTube',
        url: 'https://www.youtube.com/crashcourse',
      },
      {
        id: 4,
        title: 'PhET Interactive Simulations',
        description: 'Free science and math simulations from CU Boulder',
        url: 'https://phet.colorado.edu',
      },
    ],
  },
  {
    id: 3,
    type: 'english',
    icon: 'A',
    title: 'English & Writing',
    description: 'Improve your reading, writing, and analytical skills.',
    links: [
      {
        id: 1,
        title: 'Purdue OWL',
        description: 'Comprehensive writing resources and citation guides',
        url: 'https://owl.purdue.edu',
      },
      {
        id: 2,
        title: 'Grammarly',
        description: 'AI-powered writing assistant for grammar and style',
        url: 'https://www.grammarly.com',
      },
      {
        id: 3,
        title: 'SparkNotes',
        description: 'Literature guides and study aids',
        url: 'https://www.sparknotes.com',
      },
      {
        id: 4,
        title: 'Hemingway Editor',
        description: 'Tool for clear, bold writing',
        url: 'https://hemingwayapp.com',
      },
    ],
  },
  {
    id: 4,
    type: 'test-prep',
    icon: '◎',
    title: 'Test Preparation',
    description: 'Resources for SAT, AP exams, and standardized tests.',
    links: [
      {
        id: 1,
        title: 'Khan Academy SAT Prep',
        description: 'Free, official SAT practice in partnership with College Board',
        url: 'https://www.khanacademy.org/sat',
      },
      {
        id: 2,
        title: 'College Board Practice',
        description: 'Official SAT practice tests and resources',
        url: 'https://satsuite.collegeboard.org/practice',
      },
      {
        id: 3,
        title: 'AP Central',
        description: 'Official AP course and exam information',
        url: 'https://apcentral.collegeboard.org',
      },
      {
        id: 4,
        title: 'Bluebook App',
        description: 'Practice for the digital SAT with the official app',
        url: 'https://bluebook.collegeboard.org/students/download-bluebook',
      },
    ],
  },
])

const studyTips = ref([
  {
    id: 1,
    icon: '⏰',
    title: 'Time Management',
    description: 'Create a study schedule with specific goals. Use techniques like Pomodoro (25 min focus, 5 min break) to maintain concentration.',
    color: 'blue'
  },
  {
    id: 2,
    icon: '✓',
    title: 'Active Recall',
    description: 'Test yourself regularly instead of just re-reading notes. Try to explain concepts in your own words.',
    color: 'green'
  },
  {
    id: 3,
    icon: '↻',
    title: 'Spaced Repetition',
    description: 'Review material at increasing intervals. This helps move information from short-term to long-term memory.',
    color: 'purple'
  },
  {
    id: 4,
    icon: '⚡',
    title: 'Eliminate Distractions',
    description: 'Find a quiet study space, put your phone away, and use website blockers if needed.',
    color: 'orange'
  },
  {
    id: 5,
    icon: '☽',
    title: 'Get Enough Sleep',
    description: 'Sleep is crucial for memory consolidation. Aim for 8-10 hours per night, especially before exams.',
    color: 'blue'
  },
  {
    id: 6,
    icon: '?',
    title: 'Ask Questions',
    description: 'Don\'t be afraid to ask teachers, tutors, or classmates for help when you\'re stuck.',
    color: 'green'
  },
])

const quickTools = ref([
  {
    id: 1,
    icon: '∑',
    title: 'Scientific Calculator',
    description: 'Full-featured online calculator',
    url: 'https://www.desmos.com/scientific',
    color: 'math'
  },
  {
    id: 2,
    icon: '⚖',
    title: 'Unit Converter',
    description: 'Convert between different units',
    url: 'https://www.unitconverters.net',
    color: 'science'
  },
  {
    id: 3,
    icon: '📖',
    title: 'Citation Generator',
    description: 'Create MLA, APA, Chicago citations',
    url: 'https://www.scribbr.com/citation/generator/',
    color: 'english'
  },
  {
    id: 4,
    icon: '⌘',
    title: 'Periodic Table',
    description: 'Interactive periodic table',
    url: 'https://ptable.com',
    color: 'science'
  },
  {
    id: 5,
    icon: '📅',
    title: 'Study Planner',
    description: 'Organize your study schedule',
    url: 'https://www.notion.so/templates/student-os',
    color: 'test-prep'
  },
  {
    id: 6,
    icon: '📝',
    title: 'Flashcards',
    description: 'Create and study flashcards',
    url: 'https://quizlet.com',
    color: 'math'
  },
])
</script>

<style scoped>
.resources-page {
  padding-top: 64px;
}

/* Page Header */
.page-header {
  background: linear-gradient(135deg, var(--ka-green) 0%, #15825d 100%);
  color: var(--text-inverse);
  padding: var(--space-3xl) var(--space-lg);
}

.header-content {
  max-width: var(--max-width);
  margin: 0 auto;
}

.page-header h1 {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--text-inverse);
  margin-bottom: var(--space-sm);
}

.page-header p {
  font-size: 1.125rem;
  opacity: 0.9;
  max-width: 500px;
  margin: 0;
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
  font-size: 1.75rem;
  font-weight: 900;
  margin-bottom: var(--space-sm);
}

.section-header p {
  color: var(--text-secondary);
  font-size: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

/* Resources Section */
.resources-section {
  padding: var(--space-3xl) 0;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.resource-category {
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  transition: all var(--transition-base);
}

.resource-category:hover {
  box-shadow: var(--shadow-md);
}

.category-header {
  display: flex;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--border-light);
}

.category-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  flex-shrink: 0;
}

.category-icon.math {
  background: var(--ka-teal-light);
  color: var(--ka-teal);
}

.category-icon.science {
  background: var(--ka-green-light);
  color: var(--ka-green);
}

.category-icon.english {
  background: var(--ka-purple-light);
  color: var(--ka-purple);
}

.category-icon.test-prep {
  background: var(--ka-orange-light);
  color: var(--ka-orange);
}

.category-info h2 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: var(--space-xs);
}

.category-info p {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  margin: 0;
}

.resource-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.resource-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-md);
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.resource-item:hover {
  background: var(--color-primary-light);
}

.resource-content h3 {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2px;
}

.resource-content p {
  font-size: 0.8125rem;
  color: var(--text-secondary);
  margin: 0;
}

.arrow-icon {
  color: var(--text-muted);
  flex-shrink: 0;
  transition: all var(--transition-fast);
}

.resource-item:hover .arrow-icon {
  color: var(--color-primary);
  transform: translateX(3px);
}

/* Tips Section */
.tips-section {
  padding: var(--space-3xl) 0;
  background: var(--bg-secondary);
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.tip-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  transition: all var(--transition-base);
}

.tip-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.tip-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin-bottom: var(--space-md);
}

.tip-icon.blue {
  background: var(--ka-teal-light);
  color: var(--ka-teal);
}

.tip-icon.green {
  background: var(--ka-green-light);
  color: var(--ka-green);
}

.tip-icon.purple {
  background: var(--ka-purple-light);
  color: var(--ka-purple);
}

.tip-icon.orange {
  background: var(--ka-orange-light);
  color: var(--ka-orange);
}

.tip-card h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: var(--space-sm);
}

.tip-card p {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin: 0;
  line-height: 1.6;
}

/* Additional Section */
.additional-section {
  padding: var(--space-3xl) 0;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}

.tool-card {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-lg);
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.tool-card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
}

.tool-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  font-weight: 700;
  flex-shrink: 0;
}

.tool-icon.math {
  background: var(--ka-teal-light);
  color: var(--ka-teal);
}

.tool-icon.science {
  background: var(--ka-green-light);
  color: var(--ka-green);
}

.tool-icon.english {
  background: var(--ka-purple-light);
  color: var(--ka-purple);
}

.tool-icon.test-prep {
  background: var(--ka-orange-light);
  color: var(--ka-orange);
}

.tool-info {
  flex: 1;
}

.tool-info h3 {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2px;
}

.tool-info p {
  font-size: 0.8125rem;
  color: var(--text-secondary);
  margin: 0;
}

.external-icon {
  color: var(--text-muted);
  flex-shrink: 0;
}

.tool-card:hover .external-icon {
  color: var(--color-primary);
}

/* More Banner Section */
.more-banner-section {
  padding: var(--space-xl) 0;
}

.more-banner {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  padding: var(--space-xl);
  background: linear-gradient(135deg, var(--ka-orange-light) 0%, #fff5eb 100%);
  border: 1px solid var(--ka-orange);
  border-radius: var(--radius-xl);
  text-decoration: none;
  transition: all var(--transition-base);
}

.more-banner:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.more-banner-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  background: var(--ka-orange);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 700;
  flex-shrink: 0;
}

.more-banner-content {
  flex: 1;
}

.more-banner-content h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
}

.more-banner-content p {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  margin: 0;
  line-height: 1.5;
}

.more-banner-arrow {
  color: var(--ka-orange);
  flex-shrink: 0;
  transition: transform var(--transition-fast);
}

.more-banner:hover .more-banner-arrow {
  transform: translateX(4px);
}

/* CTA Section */
.cta-section {
  padding: var(--space-2xl) 0 var(--space-3xl);
}

.cta-card {
  background: var(--color-primary);
  color: var(--text-inverse);
  border-radius: var(--radius-xl);
  padding: var(--space-2xl);
  text-align: center;
}

.cta-card h2 {
  color: var(--text-inverse);
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: var(--space-sm);
}

.cta-card p {
  opacity: 0.9;
  margin-bottom: var(--space-lg);
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.cta-card .btn {
  background: var(--bg-primary);
  color: var(--color-primary);
}

.cta-card .btn:hover {
  background: var(--ka-gray-100);
}

/* Responsive */
@media (max-width: 1024px) {
  .resources-grid {
    grid-template-columns: 1fr;
  }

  .tips-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: var(--space-2xl) var(--space-md);
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .tips-grid {
    grid-template-columns: 1fr;
  }

  .tools-grid {
    grid-template-columns: 1fr;
  }
}
</style>
