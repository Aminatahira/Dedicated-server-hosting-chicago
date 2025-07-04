import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Server,
  Shield,
  Clock,
  Zap,
  Globe,
  Users,
  Star,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Server className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">
                ARZ Host
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="https://arzhost.com/hosting/cheap-dedicated-server-chicago/"
                className="text-primary font-medium hover:text-primary/80 transition-colors"
              >
                Dedicated Server Hosting Chicago
              </a>
              <a
                href="https://arzhost.com/dedicated-servers/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Dedicated Servers
              </a>
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Lifetime Web Hosting
              </a>
              <a
                href="https://www.arzhost.com/about-us/"
                className="text-foreground hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="https://www.arzhost.com/contact-us/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Dedicated Server Hosting Chicago
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            High-Performance. Full Control. Locally Deployed.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            Take your hosting to the next level with our enterprise-grade
            dedicated servers located right in Chicago. Whether you're running
            complex applications, large-scale websites, streaming services, or
            high-volume e-commerce stores, our Chicago-based dedicated server
            hosting provides the power, speed, and reliability your business
            needs to scale with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a
                href="https://arzhost.com/dedicated-servers/"
                className="flex items-center"
              >
                View Plans & Pricing
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <a href="https://www.arzhost.com/contact-us/">
                Get Expert Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Chicago Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Chicago for Dedicated Hosting?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Chicago is not just a city—it's a strategic tech hub in the heart
              of America. Hosting your dedicated server in our Chicago data
              center gives you centralized U.S. connectivity, faster data
              delivery across all states, and exceptional uptime with
              enterprise-grade infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">Low Latency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Low latency to major U.S. regions (East, West & Midwest)
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">Better Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Better performance for nationwide visitors & clients
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">Secure Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Secure & modern facilities with redundancy and backup power
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">Mission Critical</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Trusted environment for finance, retail, SaaS, and government
                  projects
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What is Dedicated Hosting Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What is Dedicated Server Hosting?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Dedicated hosting means you get an entire physical server
                exclusively for your business—no sharing, no limitations. Unlike
                shared or{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Virtual_private_server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  VPS hosting
                </a>
                , you're in full control of the hardware, configurations, and
                resources.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                This is the gold standard for businesses that require:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>High bandwidth</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Advanced data protection</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Full root access</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Custom software setups</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Peak performance 24/7</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg">
              <Server className="h-24 w-24 text-primary mx-auto mb-6" />
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Exclusive Server Resources
                </h3>
                <p className="text-muted-foreground">
                  Get 100% dedicated CPU, RAM, storage, and bandwidth with no
                  sharing or resource limitations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Chicago Dedicated Server Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our servers are engineered for speed, security, and full
              configurability—so you can build your stack, your way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="h-6 w-6 text-primary mr-2" />
                  100% Dedicated Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No virtualization. No neighbors. Just raw, isolated
                  performance tailored to you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 text-primary mr-2" />
                  Full Root/Admin Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete control over every software and system setting.
                  Install apps, run scripts, or configure exactly how you want.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-6 w-6 text-primary mr-2" />
                  Choice of Operating System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Choose from CentOS, Ubuntu, Debian, AlmaLinux, or
                  Windows—fully installed and ready to go.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-6 w-6 text-primary mr-2" />
                  IPMI/KVM Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Out-of-band management included. Reboot, monitor, or
                  troubleshoot at the hardware level—even if the OS is down.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary mr-2" />1 Gbps
                  Dedicated Port
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your bandwidth is fully reserved. Perfect for video, VOIP,
                  real-time apps, or data-heavy APIs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  24/7/365 Live Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Real humans, real help—on standby around the clock.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Chicago Dedicated Server Plans & Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the server that fits your needs—from entry-level to
              enterprise-scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">XEON E3-1246V3</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold text-primary">$95</span>
                  <span className="text-muted-foreground">/month</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>CPU:</span>
                    <span className="font-medium">4 Cores / 8 Threads</span>
                  </div>
                  <div className="flex justify-between">
                    <span>RAM:</span>
                    <span className="font-medium">32 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Storage:</span>
                    <span className="font-medium">2× 1TB SATA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bandwidth:</span>
                    <span className="font-medium">30 TB @ 1 Gbps</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IP:</span>
                    <span className="font-medium">1 Dedicated IPv4</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ideal for lightweight applications, web servers, staging
                  environments.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <a href="https://arzhost.com/dedicated-servers/">
                    Choose Plan
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-xl">XEON E5-2670V2</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold text-primary">$120</span>
                  <span className="text-muted-foreground">/month</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>CPU:</span>
                    <span className="font-medium">10 Cores / 20 Threads</span>
                  </div>
                  <div className="flex justify-between">
                    <span>RAM:</span>
                    <span className="font-medium">64 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Storage:</span>
                    <span className="font-medium">2× 1TB SSD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bandwidth:</span>
                    <span className="font-medium">30 TB @ 1 Gbps</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IP:</span>
                    <span className="font-medium">1 Dedicated IPv4</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Best for agencies, game servers, and media streaming.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <a href="https://arzhost.com/dedicated-servers/">
                    Choose Plan
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">XEON E5-2680V4</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold text-primary">$145</span>
                  <span className="text-muted-foreground">/month</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>CPU:</span>
                    <span className="font-medium">14 Cores / 28 Threads</span>
                  </div>
                  <div className="flex justify-between">
                    <span>RAM:</span>
                    <span className="font-medium">128 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Storage:</span>
                    <span className="font-medium">2× 480 GB SSD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bandwidth:</span>
                    <span className="font-medium">30 TB @ 1 Gbps</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IP:</span>
                    <span className="font-medium">1 Dedicated IPv4</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Designed for big data processing, enterprise apps, and cloud
                  platforms.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <a href="https://arzhost.com/dedicated-servers/">
                    Choose Plan
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">XEON D-1541</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold text-primary">$165</span>
                  <span className="text-muted-foreground">/month</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>CPU:</span>
                    <span className="font-medium">8 Cores / 16 Threads</span>
                  </div>
                  <div className="flex justify-between">
                    <span>RAM:</span>
                    <span className="font-medium">64 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Storage:</span>
                    <span className="font-medium">2× 1TB NVMe</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bandwidth:</span>
                    <span className="font-medium">30 TB @ 1 Gbps</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IP:</span>
                    <span className="font-medium">1 Dedicated IPv4</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Great for high-speed I/O workloads, IaaS platforms, and
                  dynamic websites.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <a href="https://arzhost.com/dedicated-servers/">
                    Choose Plan
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">XEON D-2141I</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold text-primary">$195</span>
                  <span className="text-muted-foreground">/month</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>CPU:</span>
                    <span className="font-medium">8 Cores / 16 Threads</span>
                  </div>
                  <div className="flex justify-between">
                    <span>RAM:</span>
                    <span className="font-medium">128 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Storage:</span>
                    <span className="font-medium">2× 2TB SSD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bandwidth:</span>
                    <span className="font-medium">30 TB @ 1 Gbps</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IP:</span>
                    <span className="font-medium">1 Dedicated IPv4</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Perfect for virtual hosting, advanced backend systems, and
                  large corporate websites.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <a href="https://arzhost.com/dedicated-servers/">
                    Choose Plan
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who Is This For?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Chicago Dedicated Server Hosting is ideal for:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">E-commerce Businesses</h3>
              <p className="text-muted-foreground text-sm">
                Handling thousands of transactions daily
              </p>
            </Card>

            <Card className="text-center p-6">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Development Agencies</h3>
              <p className="text-muted-foreground text-sm">
                Running resource-hungry applications
              </p>
            </Card>

            <Card className="text-center p-6">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Enterprise Companies</h3>
              <p className="text-muted-foreground text-sm">
                Requiring secure, compliant hosting for sensitive data
              </p>
            </Card>

            <Card className="text-center p-6">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Gaming & Streaming</h3>
              <p className="text-muted-foreground text-sm">
                Game server operators and streamers needing performance +
                control
              </p>
            </Card>

            <Card className="text-center p-6">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">IT Departments</h3>
              <p className="text-muted-foreground text-sm">
                Managing complex networks, analytics, or AI workloads
              </p>
            </Card>

            <Card className="text-center p-6">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">SaaS Companies</h3>
              <p className="text-muted-foreground text-sm">
                Needing reliable infrastructure for software-as-a-service
                platforms
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4">
                "We were tired of lag and downtime. Hosting in Chicago gave us
                the edge we needed. The setup was fast, and support has been
                10/10."
              </blockquote>
              <cite className="text-sm font-medium">
                James P., CTO, Midwest Retail Group
              </cite>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4">
                "The raw power of a dedicated server, combined with Chicago's
                central location, helped us serve clients on both coasts with
                minimal latency."
              </blockquote>
              <cite className="text-sm font-medium">
                Tina R., Cloud Infrastructure Engineer
              </cite>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4">
                "Fast deployment, zero setup fees, and reliable uptime.{" "}
                <a
                  href="https://arzhost.com/"
                  className="text-primary hover:underline"
                >
                  ARZ Host's
                </a>{" "}
                Chicago servers are rock solid."
              </blockquote>
              <cite className="text-sm font-medium">
                Eric M., SaaS Startup Founder
              </cite>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions (FAQs)
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                Q1: What is the difference between a dedicated server and VPS?
              </h3>
              <p className="text-muted-foreground">
                A dedicated server is a full physical machine allocated to your
                project, offering better performance, security, and control than
                a Virtual Private Server (VPS), which is shared on a physical
                host.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                Q2: Can I use a custom OS or control panel?
              </h3>
              <p className="text-muted-foreground">
                Yes! You can install your preferred OS and management tools
                (like cPanel, Plesk, or Webmin). We also offer pre-installation
                on request.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                Q3: Is your support team available for server maintenance?
              </h3>
              <p className="text-muted-foreground">
                Yes. We offer both unmanaged and fully managed support plans
                based on your needs.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                Q4: How long does it take to deploy my server?
              </h3>
              <p className="text-muted-foreground">
                Most servers are provisioned within 1 to 4 hours after payment
                confirmation.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                Q5: Can I upgrade my server later?
              </h3>
              <p className="text-muted-foreground">
                Absolutely. We offer scalable options and migration support to
                help you grow without disruption.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get Started with Chicago Dedicated Hosting Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Your online business deserves a reliable, secure, and powerful
            hosting solution. With our Chicago-based dedicated servers, you're
            choosing top-tier security, total customization, peak server
            performance, central U.S. data location, and 24/7 technical support.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Launch your dedicated server now—no setup fees, instant
            provisioning, and full control at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4"
            >
              <a href="https://arzhost.com/dedicated-servers/">
                Order Now from ARZ Host
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-4"
            >
              <a href="https://www.arzhost.com/contact-us/">
                Contact Our Experts
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Server className="h-6 w-6" />
                <span className="text-lg font-bold">ARZ Host</span>
              </div>
              <p className="text-background/80 mb-4">
                Professional dedicated server hosting solutions with
                enterprise-grade infrastructure and 24/7 support.
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  Website:{" "}
                  <a
                    href="https://arzhost.com/"
                    className="hover:text-brand-coral transition-colors"
                  >
                    arzhost.com
                  </a>
                </p>
                <p>Phone: +1 (631) 594-8060</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a
                    href="https://arzhost.com/dedicated-servers/"
                    className="hover:text-brand-coral transition-colors"
                  >
                    Dedicated Servers
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/lifetime-web-hosting/"
                    className="hover:text-brand-coral transition-colors"
                  >
                    Lifetime Web Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/hosting/cheap-dedicated-server-chicago/"
                    className="hover:text-brand-coral transition-colors"
                  >
                    Chicago Hosting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a
                    href="https://www.arzhost.com/about-us/"
                    className="hover:text-brand-coral transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/contact-us/"
                    className="hover:text-brand-coral transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a
                    href="https://www.arzhost.com/terms-conditions/"
                    className="hover:text-brand-coral transition-colors"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/privacy-policy/"
                    className="hover:text-brand-coral transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/disclaimer/"
                    className="hover:text-brand-coral transition-colors"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/80">
            <p>
              &copy; 2024 ARZ Host. All rights reserved. Professional dedicated
              server hosting solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
