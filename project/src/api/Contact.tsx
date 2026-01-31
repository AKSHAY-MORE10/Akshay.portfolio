"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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

// Get Discord webhook URL from environment variables
const DISCORD_WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

if (!DISCORD_WEBHOOK_URL) {
  console.warn("⚠️ VITE_DISCORD_WEBHOOK_URL is not set in environment variables");
}

export const ContactSimpleForm = () => {
  const [selectedCountryPhone, setSelectedCountryPhone] = useState("US");
  const [loading, setLoading] = useState(false);

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

    const formData = Object.fromEntries(
      new FormData(e.currentTarget)
    ) as Record<string, string>;

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
            { name: "💬 Message", value: formData.message || "—" },
          ],
          footer: {
            text: "Website Lead",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      if (!DISCORD_WEBHOOK_URL) {
        throw new Error("Discord webhook URL is not configured");
      }

      const res = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Discord webhook failed");

      alert("✅ Message sent successfully!");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      alert("❌ Failed to send message. Please try again later.");
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

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          variants={fadeIn}
        >
          <div className="flex gap-4">
            <Input name="firstName" placeholder="First name" className="bg-background opacity-70"  required />
            <Input name="lastName" placeholder="Last name" className="bg-background opacity-70" required />
          </div>

          <Input name="email" type="email" placeholder="Email" className="bg-background opacity-70" required />

          <div className="flex gap-2">
            <select
              value={selectedCountryPhone}
              onChange={(e) => setSelectedCountryPhone(e.target.value)}
              className={cn(
                "h-10 w-24 rounded-md border border-input bg-background px-3 text-sm opacity-70"
              )}
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
            />
          </div>

          <Textarea
            name="message"
            rows={5}
            placeholder="Your message..."
            required
            className="bg-background opacity-70"
          />

          <div className="flex items-start gap-2">
            <Checkbox required className="bg-background opacity-70" />
            <Label className="text-sm opacity-70">I agree to the privacy policy</Label>
          </div>

          <Button 
            type="submit" 
            disabled={loading} 
            className="bg-gray-500 opacity-70 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 transition-colors"
          >
            {loading ? "Sending..." : "Send message"}
          </Button>
        </motion.form>
      </motion.div>
    </section>
  );
};
