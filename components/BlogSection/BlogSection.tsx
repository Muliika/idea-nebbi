import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

const blogPosts = [
  {
    title: "How Climate Justice Impacts Local Communities: A Focus on Nebbi",
    category: "Technology",
    image: "/volunteer.jpg",
    date: "July 15, 2028",
  },
  {
    title: "Empowering Youth: Strategies for Sustainable Livelihoods in Uganda",
    category: "Environment",
    image: "/health.jpg",
    date: "August 3, 2028",
  },
  {
    title: "Promoting Civic Accountability: Engaging Citizens for Better Governance",
    category: "Security",
    image: "/hero.jpg",
    date: "September 21, 2028",
  },
  {
    title: "Health Equity for All: Bridging the Gap in Rural Healthcare Access",
    category: "Infrastructure",
    image: "/cta.png",
    date: "October 7, 2028",
  },
  {
    title: "Collaborative Solutions for a Sustainable Future: IDEA's Approach",
    category: "Blockchain",
    image: "/about.jpg",
    date: "November 12, 2028",
  },
];

export default function FromTheBlog() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="space-y-4 text-center mb-16">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            From the Blog
          </h1>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Dive into my latest insights and stories.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {blogPosts.map((post, index) => (
              <CarouselItem key={index} className="pl-4 sm:basis-full md:basis-1/2">
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-start justify-end gap-2 p-6 text-white">
                    <div className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      {post.category}
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">{post.title}</h3>
                    <p className="text-sm text-gray-300">{post.date}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
