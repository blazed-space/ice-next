import Hero from '@/components/hero';
import { IActionButton } from '@/components/hero/data';

export default function Home() {
  return (
    <div>
      <Hero
        title="Blazed Ice for Next"
        body="An awesome framework for Next"
        action={{
          label: "Learn More",
          url: "/about"
        } as IActionButton}
      />
    </div>
  )
}
