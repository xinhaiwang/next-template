import { Inter } from '@next/font/google'
import VoteNew from "./vote/VoteNew";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <VoteNew/>;
}
