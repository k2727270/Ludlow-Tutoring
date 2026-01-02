<template>
  <div class="get-started-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="header-content">
        <h1>Get Started</h1>
        <p>Connect with a peer tutor and take the first step toward academic success.</p>
      </div>
    </section>

    <!-- Forms Section -->
    <section class="forms-section">
      <div class="section-container">
        <div class="section-intro">
          <h2>Request Tutoring</h2>
          <p>
            Choose the form that matches your needs. Sign in with your <strong>school email</strong> to get started.
          </p>
        </div>

        <div class="forms-grid">
          <div v-for="form in forms" :key="form.id" class="form-card">
            <div class="form-header">
              <div :class="['form-icon', form.color]">{{ form.icon }}</div>
              <div class="form-info">
                <h3>{{ form.title }}</h3>
                <p>{{ form.description }}</p>
              </div>
            </div>
            <div class="form-embed">
              <iframe
                :src="form.url"
                width="100%"
                height="520"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                class="form-iframe"
                loading="lazy"
              >Loading...</iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="benefits-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Why Choose Peer Tutoring?</h2>
          <p>Benefits of learning from fellow students who understand your curriculum.</p>
        </div>

        <div class="benefits-grid">
          <div v-for="benefit in benefits" :key="benefit.id" class="benefit-card">
            <div :class="['benefit-icon', benefit.color]">{{ benefit.icon }}</div>
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div class="faq-list">
          <div v-for="faq in faqs" :key="faq.id" class="faq-item">
            <h3>{{ faq.question }}</h3>
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const forms = ref([
  {
    id: 1,
    icon: '🎓',
    title: 'High School Tutoring',
    description: 'Grades 9-12: Get help with any subject',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSe918jDOHl03NKab2Hs2o1y8E_I-QQr6WR4-H3pqPWMXGmkYw/viewform?embedded=true',
    color: 'blue'
  },
  {
    id: 2,
    icon: '📚',
    title: 'Middle School Tutoring',
    description: 'Grades 6-8: Support in all subjects',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSdrken7NxubkSi15DyAMFCRKRCD5yUuXeIAHZ9jFA7Ruj4NPA/viewform?embedded=true',
    color: 'green'
  },
  {
    id: 3,
    icon: '✋',
    title: 'Become a Tutor',
    description: 'Help fellow students succeed',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSdIjV4pvAl6SJnBOYc0XmXTHbs_CcC6L3s3FmlkYUIouMHXNg/viewform?embedded=true',
    color: 'purple'
  },
  {
    id: 4,
    icon: '💬',
    title: 'Questions & Feedback',
    description: 'Get in touch with our team',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLScj5w6XHEgN0eTJzOt9uAjd6X_JTaHoLEOvMWm62_VEQZPtYQ/viewform?embedded=true',
    color: 'orange'
  },
])

const benefits = ref([
  {
    id: 1,
    icon: '♡',
    title: 'Supportive Environment',
    description: 'Learn in a comfortable, judgment-free space where you can ask any question.',
    color: 'blue'
  },
  {
    id: 2,
    icon: '◎',
    title: 'Same Curriculum',
    description: 'Our tutors have taken the same classes with the same teachers you have.',
    color: 'green'
  },
  {
    id: 3,
    icon: '↻',
    title: 'Flexible Sessions',
    description: 'Meet during lunch, after school, or whenever works best for your schedule.',
    color: 'purple'
  },
  {
    id: 4,
    icon: '$',
    title: 'Completely Free',
    description: 'All tutoring services are provided at no cost to Ludlow students.',
    color: 'orange'
  },
])

const faqs = ref([
  {
    id: 1,
    question: 'Who are the tutors?',
    answer: 'Our tutors are high-achieving Ludlow students who have excelled in the subjects they teach. They\'re trained to help you understand concepts and build confidence.'
  },
  {
    id: 2,
    question: 'How do I schedule a session?',
    answer: 'Fill out the appropriate form above and we\'ll match you with a tutor. You\'ll receive an email with scheduling options within 24-48 hours.'
  },
  {
    id: 3,
    question: 'What subjects are available?',
    answer: 'We offer tutoring in Math (all levels), Science (Biology, Chemistry, Physics), English, and test preparation (SAT, AP exams).'
  },
  {
    id: 4,
    question: 'Where do sessions take place?',
    answer: 'Sessions are held at Ludlow High School, typically in the library or designated tutoring spaces. Times are flexible based on both student and tutor availability.'
  },
])
</script>

<style scoped>
.get-started-page {
  padding-top: 64px;
}

/* Page Header */
.page-header {
  background: linear-gradient(135deg, var(--ka-purple) 0%, #7040cc 100%);
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

/* Forms Section */
.forms-section {
  padding: var(--space-3xl) 0;
  background: var(--bg-secondary);
}

.section-intro {
  text-align: center;
  margin-bottom: var(--space-2xl);
}

.section-intro h2 {
  font-size: 1.75rem;
  font-weight: 900;
  margin-bottom: var(--space-sm);
}

.section-intro p {
  color: var(--text-secondary);
  font-size: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

.forms-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.form-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all var(--transition-base);
}

.form-card:hover {
  box-shadow: var(--shadow-lg);
}

.form-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-lg);
  border-bottom: 1px solid var(--border-light);
}

.form-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.form-icon.blue {
  background: var(--ka-teal-light);
}

.form-icon.green {
  background: var(--ka-green-light);
}

.form-icon.purple {
  background: var(--ka-purple-light);
}

.form-icon.orange {
  background: var(--ka-orange-light);
}

.form-info h3 {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 2px;
}

.form-info p {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin: 0;
}

.form-embed {
  background: var(--bg-primary);
}

.form-iframe {
  display: block;
  width: 100%;
  border: none;
}

/* Benefits Section */
.benefits-section {
  padding: var(--space-3xl) 0;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.benefit-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  text-align: center;
  transition: all var(--transition-base);
}

.benefit-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.benefit-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto var(--space-md);
}

.benefit-icon.blue {
  background: var(--ka-teal-light);
  color: var(--ka-teal);
}

.benefit-icon.green {
  background: var(--ka-green-light);
  color: var(--ka-green);
}

.benefit-icon.purple {
  background: var(--ka-purple-light);
  color: var(--ka-purple);
}

.benefit-icon.orange {
  background: var(--ka-orange-light);
  color: var(--ka-orange);
}

.benefit-card h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: var(--space-sm);
}

.benefit-card p {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin: 0;
  line-height: 1.6;
}

/* FAQ Section */
.faq-section {
  padding: var(--space-3xl) 0;
  background: var(--bg-secondary);
}

.faq-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
  max-width: 900px;
  margin: 0 auto;
}

.faq-item {
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
}

.faq-item h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: var(--space-sm);
  color: var(--text-primary);
}

.faq-item p {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  margin: 0;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 1024px) {
  .benefits-grid {
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

  .forms-grid {
    grid-template-columns: 1fr;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .faq-list {
    grid-template-columns: 1fr;
  }
}
</style>
