<template>
  <div class="resources-page">
    <header class="page-header">
      <h1>Helpful Resources for Students</h1>
      <p>Struggling with your studies? We've curated the best resources to help you succeed! 🌟</p>
    </header>

    <section class="resources-section">
      <div class="resources-grid">
        <div
          v-for="resource in resourceCards"
          :key="resource.id"
          class="resource-card"
          :class="resource.type"
        >
          <div class="card-header">
            <span class="card-icon">{{ resource.icon }}</span>
            <h2>{{ resource.title }}</h2>
          </div>
          <p class="card-description">{{ resource.description }}</p>
          <div class="resource-links">
            <a
              v-for="link in resource.links"
              :key="link.id"
              :href="link.url"
              target="_blank"
              class="resource-link"
            >
              <span class="link-icon">{{ link.icon }}</span>
              <div class="link-content">
                <h3>{{ link.title }}</h3>
                <p>{{ link.description }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="study-tips">
      <h2>💡 General Study Tips</h2>
      <div class="tips-grid">
        <div class="tip-card" v-for="tip in studyTips" :key="tip.id">
          <span class="tip-icon">{{ tip.icon }}</span>
          <h3>{{ tip.title }}</h3>
          <p>{{ tip.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const resourceCards = ref([
  {
    id: 1,
    type: 'science',
    icon: '🔬',
    title: 'Science Classes',
    description:
      'Struggling with chemistry or physics? Check out these helpful resources to pull through!',
    links: [
      {
        id: 1,
        icon: '📚',
        title: 'Khan Academy Science',
        description: 'Free video lessons and practice exercises',
        url: 'https://www.khanacademy.org/science',
      },
      {
        id: 2,
        icon: '🎥',
        title: 'Crash Course Chemistry',
        description: 'Fun, engaging chemistry videos',
        url: 'https://www.youtube.com/crashcourse',
      },
      {
        id: 3,
        icon: '⚗️',
        title: 'Physics Classroom',
        description: 'Interactive physics tutorials',
        url: 'https://www.physicsclassroom.com',
      },
    ],
  },
  {
    id: 2,
    type: 'ap',
    icon: '🎓',
    title: 'AP Courses',
    description:
      'Advanced Placement courses can be challenging. Here are some study aids to help you excel!',
    links: [
      {
        id: 1,
        icon: '📖',
        title: 'AP Central Resources',
        description: 'Official College Board materials',
        url: 'https://apcentral.collegeboard.org',
      },
      {
        id: 2,
        icon: '📝',
        title: 'AP Study Guides',
        description: 'Comprehensive study materials',
        url: 'https://knowt.com/exams/AP',
      },
      {
        id: 3,
        icon: '📊',
        title: 'Practice Tests',
        description: 'Test your knowledge with practice exams',
        url: 'https://www.appracticeexams.com/#google_vignette',
      },
    ],
  },
  {
    id: 3,
    type: 'sat',
    icon: '📊',
    title: 'SAT Prep',
    description: 'Get ready for the SAT with these proven study materials and strategies!',
    links: [
      {
        id: 1,
        icon: '🎯',
        title: 'Official SAT Practice',
        description: 'Free, personalized SAT prep',
        url: 'https://www.khanacademy.org/test-prep',
      },
      {
        id: 2,
        icon: '🏛️',
        title: 'College Board Resources',
        description: 'Official SAT information and tools',
        url: 'https://satsuite.collegeboard.org/practice',
      },
      {
        id: 3,
        icon: '📘',
        title: 'Download Bluebook!',
        description: 'Practice for the SAT with the official College Board Bluebook!',
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
    description:
      'Create a study schedule and stick to it. Break your study sessions into manageable chunks.',
  },
  {
    id: 2,
    icon: '🎯',
    title: 'Set Goals',
    description: 'Set specific, achievable goals for each study session. Celebrate your progress!',
  },
  {
    id: 3,
    icon: '🤝',
    title: 'Study Groups',
    description: 'Form study groups with classmates. Teaching others helps you learn better too!',
  },
  {
    id: 4,
    icon: '🔄',
    title: 'Practice Regularly',
    description:
      'Consistent practice is key. Review material regularly to keep it fresh in your mind.',
  },
  {
    id: 5,
    icon: '📝',
    title: 'Take Notes',
    description:
      'Write down key concepts and create summaries. Active note-taking improves retention and understanding.',
  },
  {
    id: 6,
    icon: '🧠',
    title: 'Active Learning',
    description:
      'Engage with the material through questions, discussions, and practical applications rather than passive reading.',
  },
])
</script>

<style scoped>
.resources-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #fef7f0 0%, #f0f9ff 100%);
}

.page-header {
  background: linear-gradient(135deg, #4ecdc4 0%, #45b7d1 100%);
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

.resources-section {
  padding: 4rem 2rem;
  width: 100%;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.resource-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 3px solid transparent;
  position: relative;
  overflow: hidden;
}

.resource-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
}

.resource-card.science::before {
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
}

.resource-card.ap::before {
  background: linear-gradient(90deg, #4ecdc4, #45b7d1);
}

.resource-card.sat::before {
  background: linear-gradient(90deg, #45b7d1, #ff6b6b);
}

.resource-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.card-icon {
  font-size: 2.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.card-header h2 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
  color: #2d3748;
}

.card-description {
  color: #4a5568;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

.resource-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.resource-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  border-radius: 12px;
  text-decoration: none;
  color: #2d3748;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.resource-link:hover {
  background: linear-gradient(135deg, #4ecdc4 0%, #45b7d1 100%);
  color: white;
  transform: translateX(5px);
  box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);
}

.link-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.link-content h3 {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.link-content p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
}

.study-tips {
  background: linear-gradient(135deg, #f0f9ff 0%, #e6fffa 100%);
  padding: 4rem 2rem;
  border-radius: 2rem;
  margin: 2rem;
}

.study-tips h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 3rem;
  font-weight: 600;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
}

.tip-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid #e2e8f0;
}

.tip-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  border-color: #4ecdc4;
}

.tip-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.tip-card h3 {
  color: #2d3748;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.tip-card p {
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

  .resources-grid {
    grid-template-columns: 1fr;
  }

  .tips-grid {
    grid-template-columns: 1fr;
  }

  .resource-card,
  .tip-card {
    padding: 1.5rem;
  }
}
</style>
