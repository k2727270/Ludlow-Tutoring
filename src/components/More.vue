<template>
  <div class="more-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="header-content">
        <h1>More Resources</h1>
        <p>Explore history, discover fun learning sites, civics resources, and internship opportunities.</p>
      </div>
    </section>

    <!-- Resource Categories -->
    <section class="resources-section">
      <div class="section-container">
        <div class="resources-grid">
          <!-- History -->
          <div class="resource-category">
            <div class="category-header">
              <div class="category-icon history">⏳</div>
              <div class="category-info">
                <h2>History & Social Studies</h2>
                <p>Explore world history, US history, and social studies resources.</p>
              </div>
            </div>
            
            <div class="resource-list">
              <a
                v-for="link in historyResources"
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

          <!-- Fun Websites -->
          <div class="resource-category">
            <div class="category-header">
              <div class="category-icon fun">✦</div>
              <div class="category-info">
                <h2>Fun Learning Sites</h2>
                <p>Educational games, interactive learning, and brain teasers.</p>
              </div>
            </div>
            
            <div class="resource-list">
              <a
                v-for="link in funResources"
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

          <!-- Government & Civics -->
          <div class="resource-category">
            <div class="category-header">
              <div class="category-icon government">⚖</div>
              <div class="category-info">
                <h2>Government & Civics</h2>
                <p>Resources for understanding government, civics, and public policy.</p>
              </div>
            </div>
            
            <div class="resource-list">
              <a
                v-for="link in governmentResources"
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

          <!-- Internships -->
          <div class="resource-category">
            <div class="category-header">
              <div class="category-icon internship">💼</div>
              <div class="category-info">
                <h2>Internship Opportunities</h2>
                <p>Find internships and work experience for high school students.</p>
              </div>
            </div>
            
            <div class="resource-list">
              <a
                v-for="link in internshipResources"
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

    <!-- Tips Section -->
    <section class="tips-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Internship Tips for High Schoolers</h2>
          <p>How to find and land your first internship or work experience.</p>
        </div>

        <div class="tips-grid">
          <div v-for="tip in internshipTips" :key="tip.id" class="tip-card">
            <div :class="['tip-icon', tip.color]">{{ tip.icon }}</div>
            <h3>{{ tip.title }}</h3>
            <p>{{ tip.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="section-container">
        <div class="cta-card">
          <h2>Need Academic Support?</h2>
          <p>Our peer tutors can help with history, social studies, and other subjects too.</p>
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

const historyResources = ref([
  {
    id: 1,
    title: 'Khan Academy History',
    description: 'World history, US history, and art history courses',
    url: 'https://www.khanacademy.org/humanities/history',
  },
  {
    id: 2,
    title: 'Crash Course History',
    description: 'Engaging video series on world and US history',
    url: 'https://www.youtube.com/playlist?list=PLBDA2E52FB1EF80C9',
  },
  {
    id: 3,
    title: 'National Archives',
    description: 'Primary source documents and historical records',
    url: 'https://www.archives.gov/education',
  },
  {
    id: 4,
    title: 'History.com',
    description: 'Articles, videos, and interactive features on historical topics',
    url: 'https://www.history.com',
  },
  {
    id: 5,
    title: 'Library of Congress',
    description: 'Digital collections and primary sources for research',
    url: 'https://www.loc.gov/collections/',
  },
])

const funResources = ref([
  {
    id: 1,
    title: 'Brilliant',
    description: 'Interactive problem solving in math, science, and CS',
    url: 'https://brilliant.org',
  },
  {
    id: 2,
    title: 'Duolingo',
    description: 'Free language learning with gamified lessons',
    url: 'https://www.duolingo.com',
  },
  {
    id: 3,
    title: 'Seterra Geography',
    description: 'Fun geography quizzes and map games',
    url: 'https://www.seterra.com',
  },
  {
    id: 4,
    title: 'Typing Club',
    description: 'Learn to type faster with free lessons',
    url: 'https://www.typingclub.com',
  },
  {
    id: 5,
    title: 'Scratch',
    description: 'Learn coding by creating games and animations',
    url: 'https://scratch.mit.edu',
  },
  {
    id: 6,
    title: 'GeoGuessr',
    description: 'Geography game using Google Street View',
    url: 'https://www.geoguessr.com',
  },
])

const governmentResources = ref([
  {
    id: 1,
    title: 'USA.gov',
    description: 'Official guide to government information and services',
    url: 'https://www.usa.gov',
  },
  {
    id: 2,
    title: 'iCivics',
    description: 'Free civics education games and resources',
    url: 'https://www.icivics.org',
  },
  {
    id: 3,
    title: 'Congress.gov',
    description: 'Track legislation and learn about Congress',
    url: 'https://www.congress.gov',
  },
  {
    id: 4,
    title: 'Massachusetts State Government',
    description: 'Official MA government services and information',
    url: 'https://www.mass.gov',
  },
  {
    id: 5,
    title: 'Constitution Center',
    description: 'Learn about the US Constitution interactively',
    url: 'https://constitutioncenter.org/interactive-constitution',
  },
])

const internshipResources = ref([
  {
    id: 1,
    title: 'Chegg Internships',
    description: 'Search engine for high school internship opportunities',
    url: 'https://www.chegg.com/internships',
  },
  {
    id: 2,
    title: 'Internships.com',
    description: 'Browse internships by location and field',
    url: 'https://www.internships.com',
  },
  {
    id: 3,
    title: 'LinkedIn Student Jobs',
    description: 'Entry-level positions and internships for students',
    url: 'https://www.linkedin.com/jobs/student-jobs',
  },
  {
    id: 4,
    title: 'Massachusetts Summer Jobs',
    description: 'State programs and summer employment for youth',
    url: 'https://www.mass.gov/topics/jobs-employment',
  },
  {
    id: 5,
    title: 'NASA Internships',
    description: 'STEM internships for high school students',
    url: 'https://intern.nasa.gov',
  },
  {
    id: 6,
    title: 'Bank of America Student Leaders',
    description: 'Paid summer internship program for juniors/seniors',
    url: 'https://about.bankofamerica.com/en/making-an-impact/student-leaders',
  },
])

const internshipTips = ref([
  {
    id: 1,
    icon: '📝',
    title: 'Build Your Resume',
    description: 'Include school activities, volunteer work, skills, and any part-time jobs or projects.',
    color: 'blue'
  },
  {
    id: 2,
    icon: '🔍',
    title: 'Start Local',
    description: 'Look for opportunities at local businesses, nonprofits, hospitals, and government offices.',
    color: 'green'
  },
  {
    id: 3,
    icon: '🤝',
    title: 'Network',
    description: 'Talk to teachers, counselors, family, and friends about potential opportunities.',
    color: 'purple'
  },
  {
    id: 4,
    icon: '📧',
    title: 'Reach Out Directly',
    description: 'Email companies you\'re interested in, even if they don\'t list internships publicly.',
    color: 'orange'
  },
])
</script>

<style scoped>
.more-page {
  padding-top: 64px;
}

/* Page Header */
.page-header {
  background: linear-gradient(135deg, var(--ka-orange) 0%, #e67520 100%);
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
  max-width: 550px;
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
  flex-shrink: 0;
}

.category-icon.history {
  background: #fef3c7;
  color: #d97706;
}

.category-icon.fun {
  background: #fce7f3;
  color: #db2777;
}

.category-icon.government {
  background: #dbeafe;
  color: #2563eb;
}

.category-icon.internship {
  background: #d1fae5;
  color: #059669;
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
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.tip-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  text-align: center;
  transition: all var(--transition-base);
}

.tip-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.tip-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto var(--space-md);
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
}
</style>

