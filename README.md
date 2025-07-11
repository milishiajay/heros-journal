# Hero's Journal 🗡️⚔️

A gamified life planner that transforms your daily tasks and goals into an epic RPG adventure. Level up your real life by completing quests, earning experience points, and progressing your character through meaningful achievements.

![Hero's Journal](https://img.shields.io/badge/Status-Active-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

## ✨ Features

### 🎮 Gamification System
- **Character Progression**: Level up your hero as you complete real-life tasks
- **Experience Points (XP)**: Earn XP for completing quests and daily activities
- **Character Stats**: Track your progress across different life areas
- **Achievement System**: Unlock badges and milestones for your accomplishments

### 🤖 AI Game Master (AURA)
- **Intelligent Quest Generation**: AI-powered suggestions for meaningful tasks
- **Personalized Guidance**: Adaptive recommendations based on your goals
- **Progress Analysis**: Smart insights into your productivity patterns
- **Motivational Support**: Encouraging feedback and celebration of achievements

### 📝 Quest Management
- **Daily Quests**: Routine tasks that build consistent habits
- **Epic Quests**: Long-term goals broken down into manageable steps
- **Side Quests**: Optional activities for skill development
- **Quest Categories**: Organize tasks by life areas (health, career, relationships, etc.)

### 📖 Journaling System
- **Reflection Entries**: Daily journaling with guided prompts
- **Progress Tracking**: Visual representation of your journey
- **Mood Tracking**: Monitor emotional patterns and growth
- **Memory Palace**: Archive of your adventures and achievements

### 🔐 User Authentication
- **Secure Login**: Protected user accounts with session management
- **Profile Customization**: Personalize your hero's appearance and stats
- **Data Privacy**: Your journey data is secure and private

### 📊 Dashboard & Analytics
- **Character Overview**: Real-time stats and progress visualization
- **Quest Board**: Organized view of active and completed quests
- **Progress Charts**: Visual analytics of your growth over time
- **Streak Tracking**: Monitor consistency in different life areas

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for responsive design
- **Database**: Prisma ORM with SQLite (easily configurable for PostgreSQL/MySQL)
- **Authentication**: NextAuth.js for secure user management
- **AI Integration**: OpenAI API for AURA Game Master
- **State Management**: React Context and custom hooks
- **Icons**: Lucide React for consistent iconography
- **Deployment Ready**: Optimized for Vercel, Netlify, or any Node.js hosting

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm, yarn, or pnpm package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/milishiajay/heros-journal.git
   cd heros-journal
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your configuration:
   ```env
   # Database
   DATABASE_URL="file:./dev.db"
   
   # NextAuth.js
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   
   # OpenAI API (for AURA Game Master)
   OPENAI_API_KEY="your-openai-api-key"
   
   # Optional: Additional AI providers
   ANTHROPIC_API_KEY="your-anthropic-key"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to start your hero's journey!

## 📁 Project Structure

```
heros-journal/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Main dashboard
│   ├── journal/           # Journaling interface
│   └── quests/            # Quest management
├── components/            # Reusable React components
│   ├── ui/               # Base UI components
│   ├── dashboard/        # Dashboard-specific components
│   ├── quests/           # Quest-related components
│   └── journal/          # Journal components
├── lib/                  # Utility functions and configurations
│   ├── auth.ts          # Authentication configuration
│   ├── db.ts            # Database connection
│   └── utils.ts         # Helper functions
├── prisma/              # Database schema and migrations
├── public/              # Static assets
└── styles/              # Global styles
```

## 🎯 Usage Guide

### Creating Your First Quest

1. **Navigate to the Quest Board** from your dashboard
2. **Click "Create New Quest"** to start
3. **Choose a category** (Health, Career, Personal, etc.)
4. **Set difficulty level** (determines XP reward)
5. **Add description and deadline**
6. **Break down into sub-tasks** if needed
7. **Save and start your adventure!**

### Using AURA Game Master

1. **Access AURA** from the dashboard or quest creation
2. **Describe your goals** in natural language
3. **Receive personalized quest suggestions**
4. **Get motivational guidance** and progress insights
5. **Ask for help** with planning and prioritization

### Tracking Progress

- **Daily Check-ins**: Mark quests as complete to earn XP
- **Journal Entries**: Reflect on your progress and challenges
- **View Analytics**: Monitor trends in your dashboard
- **Celebrate Milestones**: Unlock achievements and level up!

## 🏗️ Production Build

To create a production build:

```bash
npm run build
npm start
```

For deployment to Vercel:
```bash
vercel --prod
```

## 🤝 Contributing

We welcome contributions to make Hero's Journal even better! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI** for powering the AURA Game Master
- **Next.js Team** for the amazing framework
- **Tailwind CSS** for beautiful, responsive design
- **Prisma** for elegant database management
- **The RPG Community** for inspiration on gamification mechanics

## 📞 Support

If you encounter any issues or have questions:

- **Create an Issue** on GitHub
- **Check the Documentation** in the `/docs` folder
- **Join our Community** discussions

---

**Start your hero's journey today and transform your life into an epic adventure!** 🌟

*"The best time to plant a tree was 20 years ago. The second best time is now."* - Begin your quest today!