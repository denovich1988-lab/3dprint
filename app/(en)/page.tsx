import HomePage from '@/components/HomePage';
import { pageMeta } from '@/lib/i18n/meta';
export const metadata = pageMeta('home', 'en');
export default function Home() { return <HomePage lang="en" />; }
