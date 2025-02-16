import Image from "next/image";
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 shadow-2xl">
      <section className="container py-16 md:py-28 px-6 text-center lg:text-left flex flex-col lg:flex-row items-center lg:items-start gap-12 m-auto">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            Transform Your Ideas into
            <br />
            <span className="text-blue-600">Beautiful Diagrams</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Create professional hand-drawn style diagrams with real-time
            collaboration. Open-source and built for teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ">
            <Button className="px-6 py-6 text-lg flex items-center gap-2">
              <RocketIcon className="w-5 h-5" /> Start Drawing Free
            </Button>
            <Button variant="outline" className="px-6 py-6 text-lg">
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <div className="relative w-full max-w-lg aspect-video bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <Image
                  alt="drawing"
                  width={100}
                  height={100}
                  src="https://static.vecteezy.com/system/resources/thumbnails/046/801/154/small_2x/hand-drawing-with-a-pencil-in-black-and-white-sketch-style-png.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container py-20 px-6 text-center m-auto mt-36"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Everything You Need to Create & Collaborate
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Powerful features designed to boost your productivity and creativity.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {FEATURES.map((feature) => (
            <Card
              key={feature.title}
              className="hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 border-gray-200 rounded-2xl p-4 bg-white "
            >
              <CardHeader className="space-y-4 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center shadow-md">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-24 text-white text-center">
        <div className="container mx-auto space-y-8 px-6">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Start Creating for Free
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Join thousands of teams already using SketchFlow to bring their
            ideas to life effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="px-8 py-5 text-lg font-semibold bg-white text-blue-600 hover:bg-blue-50 shadow-lg rounded-lg flex items-center gap-2 transition">
              <MagicWandIcon className="w-5 h-5" /> Try SketchFlow Free
            </Button>
            <Button
              variant="outline"
              className="px-8 py-5 text-lg font-semibold border-white rounded-lg transition  text-blue-600"
            >
              View Live Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

const FEATURES = [
  {
    icon: Share2Icon,
    title: "Real-time Collaboration",
    description:
      "Work simultaneously with your team with live cursor tracking and instant updates",
  },
  {
    icon: DownloadIcon,
    title: "Multi-Format Export",
    description:
      "Export as PNG, SVG, PDF, or JSON. Perfect for presentations and sharing",
  },
  {
    icon: LightningBoltIcon,
    title: "Smart Templates",
    description:
      "Jumpstart your designs with customizable templates and UI libraries",
  },
  {
    icon: RocketIcon,
    title: "Version Control",
    description: "Track changes and revert to previous versions with ease",
  },
  {
    icon: MagicWandIcon,
    title: "AI Assistance",
    description: "Get layout suggestions and auto-formatting powered by AI",
  },
  {
    icon: RocketIcon,
    title: "Cloud Storage",
    description: "Secure cloud storage with unlimited revision history",
  },
];
