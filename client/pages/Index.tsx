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
  Building2,
  Factory,
  Wrench,
  Shield,
  CheckCircle,
  Droplets,
  Zap,
  FlaskConical,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">
                Haridas and Company
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </a>
              <a
                href="#industries"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Industries
              </a>
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <Button size="sm">Get Quote</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Industrial Piping
                <span className="text-primary block">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive FRP/GRP, GRE, and Thermoplastic piping systems for
                critical industrial applications. From design to maintenance, we
                deliver reliable solutions that keep your operations flowing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  View Projects
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-primary/20">
                    <CardContent className="p-4 text-center">
                      <Factory className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold">25+ Years</h3>
                      <p className="text-sm text-muted-foreground">
                        Experience
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20">
                    <CardContent className="p-4 text-center">
                      <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold">500+ Projects</h3>
                      <p className="text-sm text-muted-foreground">Completed</p>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20">
                    <CardContent className="p-4 text-center">
                      <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold">ISO Certified</h3>
                      <p className="text-sm text-muted-foreground">Quality</p>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20">
                    <CardContent className="p-4 text-center">
                      <Wrench className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold">24/7 Support</h3>
                      <p className="text-sm text-muted-foreground">
                        Maintenance
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Complete Piping Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial design to ongoing maintenance, we provide end-to-end
              services for industrial piping systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Factory className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Fabrication & Manufacturing</CardTitle>
                <CardDescription>
                  Custom fabrication of FRP/GRP, GRE, and thermoplastic pipes
                  and fittings to exact specifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    PVC, PP, CPVC, PPH, PVDF materials
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom dimensions & specifications
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Quality assurance testing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Installation & Erection</CardTitle>
                <CardDescription>
                  Professional installation, erection, and commissioning
                  services by certified technicians
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Site preparation & planning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Professional installation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    System commissioning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Wrench className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Maintenance & AMC</CardTitle>
                <CardDescription>
                  Comprehensive annual maintenance contracts and emergency
                  support services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Preventive maintenance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Emergency repairs
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Performance monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized piping solutions for diverse industrial applications
              across multiple sectors
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Droplets,
                title: "Water & Power",
                desc: "FGD Systems, Cooling Water, Desalination",
              },
              {
                icon: FlaskConical,
                title: "Chemical & Pharma",
                desc: "Corrosion-resistant piping systems",
              },
              {
                icon: Factory,
                title: "Pulp & Paper",
                desc: "CLO2 Plants, Caustic Soda processing",
              },
              {
                icon: Zap,
                title: "Oil & Gas",
                desc: "Offshore and onshore applications",
              },
              {
                icon: Building2,
                title: "Metallurgy",
                desc: "High-temperature resistant solutions",
              },
              {
                icon: Factory,
                title: "Fertilizers",
                desc: "Chemical processing applications",
              },
              {
                icon: Droplets,
                title: "Power Plants",
                desc: "Cooling systems and water treatment",
              },
              {
                icon: FlaskConical,
                title: "Specialty Chemicals",
                desc: "Custom chemical handling systems",
              },
            ].map((industry, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <industry.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {industry.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Engineering Excellence Since 1998
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 25 years of experience, we've established ourselves as
                a trusted partner for industrial piping solutions. Our expertise
                spans across material selection, system design, fabrication, and
                maintenance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Material Expertise</h4>
                    <p className="text-muted-foreground">
                      Deep knowledge of FRP/GRP, GRE, PVC, PP, CPVC, PPH, PVDF
                      materials
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Industry Standards</h4>
                    <p className="text-muted-foreground">
                      ISO certified processes ensuring highest quality standards
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Proven Track Record</h4>
                    <p className="text-muted-foreground">
                      500+ successful projects across various industries
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="w-full justify-center py-2"
                >
                  FRP/GRP Pipes
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-center py-2"
                >
                  PVC Systems
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-center py-2"
                >
                  PP Fittings
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-center py-2"
                >
                  CPVC Solutions
                </Badge>
              </div>
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="w-full justify-center py-2"
                >
                  PPH Systems
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-center py-2"
                >
                  PVDF Pipes
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-center py-2"
                >
                  GRE Solutions
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-center py-2"
                >
                  Thermoplastic
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Contact our experts for a consultation and custom solution for
              your industrial piping needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Call Us</h3>
                <p className="text-slate-300">+91-9421719221</p>
                <p className="text-slate-300">7020300816</p>
                <p className="text-slate-300">9966960103</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">Quaderia masjeed chock</p>
                <p className="text-slate-300">new coloney road</p>
                <p className="text-slate-300">Ballarshah - 442701</p>
                <p className="text-slate-300">Dist: Chandrapur, Maharashtra</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">
                  Business Details
                </h3>
                <p className="text-slate-300">GST No: 27ABVPB4711H1ZN</p>
                <p className="text-slate-300">info@haridasandcompany.com</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8">
              Request Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-white">
                  Haridas and Company
                </span>
              </div>
              <p className="text-sm">
                Leading provider of industrial piping solutions with expertise
                in FRP/GRP, thermoplastic, and specialized chemical-resistant
                systems.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>Fabrication</li>
                <li>Installation</li>
                <li>Commissioning</li>
                <li>Maintenance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Industries</h4>
              <ul className="space-y-2 text-sm">
                <li>Chemical & Pharma</li>
                <li>Water & Power</li>
                <li>Oil & Gas</li>
                <li>Pulp & Paper</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>24/7 Support</li>
                <li>Emergency Service</li>
                <li>Technical Consultation</li>
                <li>Custom Solutions</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Haridas and Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
