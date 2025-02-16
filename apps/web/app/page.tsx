import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  RocketIcon,
  MagicWandIcon,
  LightningBoltIcon,
  DownloadIcon,
  Share2Icon,
} from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span className="text-xl font-bold">SketchFlow</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#examples"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Examples
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Pricing
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button className="hidden sm:flex">Get Started</Button>
          </div>
        </div>
      </nav>

      <section className="container py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Create Beautiful
              <br />
              <span className="animate-pulse">Drawings &</span>
              <br />
              Diagrams
            </h1>
            <p className="text-xl text-slate-600">
              An open-source tool for creating hand-drawn style diagrams and
              wireframes with collaboration in real-time.
            </p>
            <div className="flex gap-4">
              <Button className="gap-2" size="lg">
                <RocketIcon className="w-5 h-5" />
                Start Drawing
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative aspect-video bg-white rounded-xl shadow-2xl border overflow-hidden animate-float">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
              >
                {/* Animated drawing paths */}
                <path
                  d="M20 30 L50 60 L80 30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="animate-draw stroke-blue-600"
                />
                <path
                  d="M30 70 Q50 50 70 70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="animate-draw stroke-purple-600 delay-500"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <Card
              key={feature.title}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container">
          <div className="rounded-2xl border bg-gradient-to-br from-blue-50 to-purple-50 p-8">
            <div className="aspect-video bg-white rounded-lg shadow-lg border animate-fade-in">
              {/* Add your canvas preview component here */}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-20 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold">Start Creating Today</h2>
          <p className="text-xl text-slate-600">
            Join thousands of users already collaborating and creating amazing
            diagrams with SketchFlow
          </p>
          <Button size="lg" className="gap-2">
            <MagicWandIcon className="w-5 h-5" />
            Try It Free
          </Button>
        </div>
      </section>
    </div>
  );
}

const FEATURES = [
  {
    icon: Share2Icon,
    title: "Real-time Collaboration",
    description: "Work simultaneously with your team members in real-time",
  },
  {
    icon: DownloadIcon,
    title: "Export Multiple Formats",
    description: "Save your work as PNG, SVG, or JSON for later editing",
  },
  {
    icon: LightningBoltIcon,
    title: "Instant Sharing",
    description: "Share your drawings with a single click via shareable links",
  },
];
