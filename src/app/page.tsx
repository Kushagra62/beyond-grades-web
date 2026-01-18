import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/about');
  // This return is technically unreachable but required by React
  return null;
}