'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sword, Shield, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    
    if (session) {
      router.push('/dashboard');
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-purple-600 rounded-full">
              <Sword className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            The Hero's Journal
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your life into an epic RPG adventure. Complete real-world quests, 
            gain XP, and level up your character by improving your actual life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-800/80 backdrop-blur-sm border-gray-700">
            <CardHeader className="text-center">
              <Shield className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <CardTitle className="text-white">Six Life Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Track your progress across Vitality, Intellect, Charisma, Resources, 
                Creativity, and Purpose. Each action you take levels up your character.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/80 backdrop-blur-sm border-gray-700">
            <CardHeader className="text-center">
              <Sparkles className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <CardTitle className="text-white">AI Game Master</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Meet AURA, your wise Game Master who reads your journal entries, 
                awards XP, and generates personalized quests for your growth.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/80 backdrop-blur-sm border-gray-700">
            <CardHeader className="text-center">
              <ArrowRight className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <CardTitle className="text-white">Real Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Complete daily quests, journal your experiences, and watch as your 
                real-life improvements translate into character advancement.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="space-y-4">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white mr-4">
                Start Your Adventure
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                Continue Your Quest
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}