import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast.success(
        "Message sent successfully! I'll get back to you soon.",
      );
      setFormData({ name: "", email: "", message: "" });

      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "harun@gmail.com",
      href: "mailto:harun@email.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+251 933 551 870",
      href: "tel:+251933551870",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Oromia, Bale Robe",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-blue-400",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      href: "https://instagram.com",
      color: "hover:text-pink-400",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-600",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-600 dark:hover:text-gray-400",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "Telegram",
      href: "tg://resolve?domain=Noveltei",
      color: "hover:text-blue-600 dark:hover:text-gray-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-secondary/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it.
            Send me a message and let's create something amazing
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl mb-6">
                Send Me a Message
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-teal-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className={`w-full py-6 rounded-full transition-all duration-300 ${
                    isSubmitted
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-teal-500 hover:bg-teal-600"
                  } text-white transform hover:scale-105 shadow-lg hover:shadow-xl`}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="text-teal-500 group-hover:text-teal-600 transition-colors duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="group-hover:text-teal-500 transition-colors duration-300">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl mb-6">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-all duration-300 hover:scale-105 group ${social.color}`}
                    >
                      <div className="transition-colors duration-300">
                        {social.icon}
                      </div>
                      <span className="font-medium">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <Card className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900 border-teal-200 dark:border-teal-800 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-medium text-teal-700 dark:text-teal-300 mb-2">
                  Quick Response Guaranteed
                </h4>
                <p className="text-sm text-teal-600 dark:text-teal-400">
                  I typically respond to all inquiries within 24
                  hours. Let's bring your vision to life!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}