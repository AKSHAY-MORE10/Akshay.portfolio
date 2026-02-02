"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const ContactSimpleForm = () => {
  const [selectedCountryPhone, setSelectedCountryPhone] = useState("US");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const countryOptions = [
    { value: "US", label: "+1", phoneMask: "(###) ###-####" },
    { value: "IN", label: "+91", phoneMask: "####-######" },
    { value: "UK", label: "+44", phoneMask: "#### ######" },
    { value: "CA", label: "+1", phoneMask: "(###) ###-####" },
    { value: "AU", label: "+61", phoneMask: "#### ######" },
  ];

  const selectedCountry = countryOptions.find(
    (c) => c.value === selectedCountryPhone
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const formElement = e.currentTarget;
      const formDataRaw = new FormData(formElement);
      
      const formData: Record<string, string> = {
        firstName: formDataRaw.get("firstName") as string,
        lastName: formDataRaw.get("lastName") as string,
        email: formDataRaw.get("email") as string,
        phone: formDataRaw.get("phone") as string || "",
        message: formDataRaw.get("message") as string,
        countryCode: selectedCountryPhone,
      };

      // Validate required fields
      if (!formData.firstName?.trim()) {
        throw new Error("First name is required");
      }
      if (!formData.lastName?.trim()) {
        throw new Error("Last name is required");
      }
      if (!formData.email?.trim()) {
        throw new Error("Email is required");
      }
      if (!formData.message?.trim()) {
        throw new Error("Message is required");
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        if (res.status === 404 && import.meta.env.DEV) {
          const devWebhook = import.meta.env.VITE_DISCORD_WEBHOOK_URL as string | undefined;
          if (!devWebhook) {
            throw new Error("Discord webhook is not configured. Please contact the admin.");
          }

          const payload = {
            username: "Website Contact Form",
            avatar_url: "https://i.imgur.com/AfFp7pu.png",
            embeds: [
              {
                title: "📩 New Contact Form Submission",
                color: 0x5865f2,
                fields: [
                  { name: "👤 Name", value: `${formData.firstName} ${formData.lastName}`, inline: true },
                  { name: "📧 Email", value: formData.email, inline: true },
                  { name: "📞 Phone", value: formData.phone || "Not provided", inline: true },
                  { name: "🌍 Country Code", value: selectedCountryPhone, inline: true },
                  { name: "💬 Message", value: formData.message || "—" },
                ],
                footer: {
                  text: "Website Contact Form Submission",
                },
                timestamp: new Date().toISOString(),
              },
            ],
          };

          const devRes = await fetch(devWebhook, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (!devRes.ok) {
            throw new Error("Discord webhook failed in dev mode");
          }
        } else {
          const errorBody = await res.json().catch(() => null);
          const message = errorBody?.error || "Failed to send message. Please try again later.";
          throw new Error(message);
        }
      }

      setSuccess(true);
      formElement.reset();
      setTimeout(() => setSuccess(false), 5000);
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to send message. Please try again later.";
      setError(errorMessage);
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto max-w-3xl px-4"
      >
        <h2 className="mb-10 text-center text-4xl font-semibold">
          Get in touch
        </h2>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 p-4"
          >
            <p className="text-sm text-red-800 dark:text-red-200">❌ {error}</p>
          </motion.div>
        )}

        {/* Success Message */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 p-4"
          >
            <p className="text-sm text-green-800 dark:text-green-200">✅ Message sent successfully! Thank you for reaching out.</p>
          </motion.div>
        )}

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          variants={fadeIn}
        >
          {/* Name Fields */}
          <div className="flex gap-4">
            <Input 
              name="firstName" 
              placeholder="First name" 
              className="bg-background opacity-70"  
              required 
            />
            <Input 
              name="lastName" 
              placeholder="Last name" 
              className="bg-background opacity-70" 
              required 
            />
          </div>

          {/* Email Field */}
          <Input 
            name="email" 
            type="email" 
            placeholder="Email" 
            className="bg-background opacity-70" 
            required 
          />

          {/* Phone Field with Country Select */}
          <div className="flex gap-2">
            <select
              value={selectedCountryPhone}
              onChange={(e) => setSelectedCountryPhone(e.target.value)}
              className={cn(
                "h-10 w-24 rounded-md border border-input bg-background px-3 text-sm opacity-70"
              )}
              aria-label="Country code"
            >
              {countryOptions.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>

            <Input
              name="phone"
              placeholder={
                selectedCountry?.phoneMask?.replace(/#/g, "0") ||
                "Phone"
              }
              className="bg-background opacity-70"
              type="tel"
            />
          </div>

          {/* Message Field */}
          <Textarea
            name="message"
            rows={5}
            placeholder="Your message..."
            required
            className="bg-background opacity-70"
          />

          {/* Privacy Policy Checkbox */}
          <div className="flex items-start gap-3">
            <input 
              type="checkbox" 
              id="privacy" 
              required 
              className="h-4 w-4 mt-1 rounded border-input bg-background text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer"
            />
            <Label htmlFor="privacy" className="text-sm opacity-70 cursor-pointer">
              I agree to the privacy policy
            </Label>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            disabled={loading} 
            className="bg-gray-500 opacity-70 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send message"}
          </Button>
        </motion.form>
      </motion.div>
    </section>
  );
};
