import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/db';
import { DashboardClient } from '@/components/dashboard-client';

export default async function DashboardPage() {
  const session = await getServerSession();
  
  if (!session?.user?.email) {
    redirect('/auth/login');
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      characterStats: true,
      journalEntries: {
        orderBy: { createdAt: 'desc' },
        take: 3,
      },
      quests: {
        where: { status: 'ACTIVE' },
        orderBy: { createdAt: 'desc' },
        take: 4,
      },
    },
  });

  if (!user) {
    redirect('/auth/login');
  }

  if (!user.onboardingComplete) {
    redirect('/onboarding');
  }

  return <DashboardClient user={user} />;
}