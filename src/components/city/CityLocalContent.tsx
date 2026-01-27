import { motion } from "framer-motion";
import { MapPin, Building2, Users, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { CityData } from "@/data/citiesData";

interface CityLocalContentProps {
  city: CityData;
}

// Contenu spécifique par département/région
const getLocalContent = (city: CityData) => {
  const departmentContent: Record<string, { title: string; highlights: string[]; industries: string[] }> = {
    "75": {
      title: "Capitale économique et culturelle",
      highlights: ["Siège de nombreuses entreprises du CAC 40", "Quartiers historiques à sécuriser", "Immeubles haussmanniens"],
      industries: ["Finance", "Luxe", "Tech", "Tourisme"]
    },
    "92": {
      title: "Pôle d'affaires majeur",
      highlights: ["La Défense, 1er quartier d'affaires européen", "Sièges sociaux internationaux", "Résidences de standing"],
      industries: ["Consulting", "Finance", "Énergie", "Telecom"]
    },
    "93": {
      title: "Territoire en pleine mutation",
      highlights: ["Grand Paris Express", "Zones industrielles", "Nouvelles résidences"],
      industries: ["Logistique", "Industrie", "Médias", "Sport"]
    },
    "94": {
      title: "Sud-Est parisien dynamique",
      highlights: ["Bords de Marne", "Zones pavillonnaires", "Pôles commerciaux"],
      industries: ["Commerce", "Santé", "Agroalimentaire", "Transport"]
    },
    "69": {
      title: "Métropole européenne",
      highlights: ["Part-Dieu, 2e quartier d'affaires de France", "Industries pharmaceutiques", "Gastronomie"],
      industries: ["Pharma", "Chimie", "Tech", "Textile"]
    },
    "13": {
      title: "Carrefour méditerranéen",
      highlights: ["Port de Marseille-Fos", "Pôle Euromed", "Tourisme de masse"],
      industries: ["Maritime", "Pétrochimie", "Tourisme", "Aéronautique"]
    },
    "31": {
      title: "Capitale aérospatiale",
      highlights: ["Airbus et industrie aéronautique", "Recherche spatiale", "Campus universitaires"],
      industries: ["Aéronautique", "Spatial", "Santé", "Numérique"]
    },
    "59": {
      title: "Métropole du Nord",
      highlights: ["Euralille", "Industries textiles historiques", "Commerce transfrontalier"],
      industries: ["Textile", "Commerce", "Logistique", "VPC"]
    },
    "33": {
      title: "Perle de Nouvelle-Aquitaine",
      highlights: ["Vignobles prestigieux", "Port de la Lune", "Économie numérique"],
      industries: ["Vin", "Aéronautique", "Tourisme", "Tech"]
    },
    "06": {
      title: "Côte d'Azur prestigieuse",
      highlights: ["Villas de luxe", "Événements internationaux", "Tourisme haut de gamme"],
      industries: ["Tourisme", "Événementiel", "Tech", "Immobilier"]
    }
  };

  return departmentContent[city.departmentCode] || {
    title: `Cœur du ${city.department}`,
    highlights: ["Entreprises locales dynamiques", "Tissu économique diversifié", "Projets de développement"],
    industries: ["Commerce", "Services", "Artisanat", "Industrie"]
  };
};

const CityLocalContent = ({ city }: CityLocalContentProps) => {
  const localContent = getLocalContent(city);

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Décoration de fond */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              Focus {city.name}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {localContent.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              HD Connect adapte ses solutions de sécurité aux spécificités de {city.name} et du {city.department}.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Points forts locaux */}
          <AnimatedSection animation="fade-up" delay={100}>
            <Card className="h-full border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">Spécificités locales</h3>
                </div>
                <ul className="space-y-3">
                  {localContent.highlights.map((highlight, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Industries clés */}
          <AnimatedSection animation="fade-up" delay={200}>
            <Card className="h-full border-accent/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">Secteurs d'activité</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Nos solutions protègent les acteurs clés de ces industries à {city.name} :
                </p>
                <div className="flex flex-wrap gap-2">
                  {localContent.industries.map((industry, index) => (
                    <motion.span 
                      key={industry}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium"
                    >
                      {industry}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Quartiers couverts */}
        {city.neighborhoods && city.neighborhoods.length > 0 && (
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="mt-12 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg text-foreground">Quartiers desservis à {city.name}</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
                {city.neighborhoods.map((neighborhood, index) => (
                  <motion.span 
                    key={neighborhood}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-card border border-border rounded-full text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {neighborhood}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default CityLocalContent;
