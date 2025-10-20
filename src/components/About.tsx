import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import {
  GraduationCap,
  Award,
} from "lucide-react";
import { SkillsShowcase } from "./SkillsShowcase";
import { FadeInUp, FadeInLeft, FadeInRight, AnimationWrapper } from "./animations/ScrollAnimations";
import { HorizontalShowcase } from "./animations/HorizontalShowcase";

export function About() {
  const education = [
    {
      degree: "Graphics Design",
      school: "Info-Link Computer School",
      year: "2015 (ec)",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      degree: "Adobe Certified Expert in Creative Suite",
      school: "Info-Link Computer School",
      year: "2016 (ec)",
      icon: <Award className="w-5 h-5" />,
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
        </FadeInUp>

        {/* Biography Section */}
        <FadeInUp options={{ delay: 200 }} className="max-w-4xl mx-auto text-center mb-16">
          <div className="space-y-6">
            <AnimationWrapper animation="fadeInUp" options={{ delay: 400 }}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                With over 2 years of experience in graphic design, I specialize in creating compelling
                visual solutions for apparel, promotional products, and marketing materials. My journey began with a fascination for how colors,
                shapes, and typography can transform everyday items into powerful branding tools.
              </p>
            </AnimationWrapper>
            <AnimationWrapper animation="fadeInUp" options={{ delay: 600 }}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I believe great design is not just about making things look beautiful—it's about creating designs that work across different mediums,
                from t-shirts and mugs to banners and digital graphics, ensuring your brand message reaches your audience effectively.
              </p>
            </AnimationWrapper>
          </div>
        </FadeInUp>

        {/* Skills Showcase */}
        <div className="mb-16">
          <h3 className="text-2xl text-center mb-12">Skills & Expertise</h3>
          <SkillsShowcase />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Education */}
          <FadeInLeft className="space-y-6">
            <h3 className="text-xl mb-6">Education & Certifications</h3>
            <HorizontalShowcase direction="left" staggerDelay={200}>
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="border-l-4 border-l-teal-500 w-full"
                >
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-3">
                      <div className="text-teal-500 mt-1">
                        {edu.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">
                          {edu.degree}
                        </h4>
                        <p className="text-muted-foreground">
                          {edu.school}
                        </p>
                        <Badge
                          variant="secondary"
                          className="mt-2"
                        >
                          {edu.year}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </HorizontalShowcase>
          </FadeInLeft>

          {/* Quick Stats */}
          <FadeInRight className="space-y-6">
            <h3 className="text-xl mb-6">Quick Stats</h3>
            <AnimationWrapper animation="scaleIn" options={{ delay: 400 }}>
              <Card className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900 border-teal-200 dark:border-teal-800">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <AnimationWrapper animation="bounceIn" options={{ delay: 600 }}>
                      <div>
                        <div className="text-2xl text-teal-600">
                          100+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Projects
                        </div>
                      </div>
                    </AnimationWrapper>
                    <AnimationWrapper animation="bounceIn" options={{ delay: 700 }}>
                      <div>
                        <div className="text-2xl text-teal-600">
                          50+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Happy Clients
                        </div>
                      </div>
                    </AnimationWrapper>
                    <AnimationWrapper animation="bounceIn" options={{ delay: 800 }}>
                      <div>
                        <div className="text-2xl text-teal-600">
                          2+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Years Experience
                        </div>
                      </div>
                    </AnimationWrapper>
                  </div>
                </CardContent>
              </Card>
            </AnimationWrapper>

            <FadeInUp options={{ delay: 900 }}>
              <div className="text-center pt-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  When I'm not designing, you can find me exploring new printing techniques, experimenting with fabric textures, or
                  researching the latest trends in apparel and product design. I'm always eager to learn and push the boundaries of
                  graphic design across different mediums.
                </p>
              </div>
            </FadeInUp>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
}