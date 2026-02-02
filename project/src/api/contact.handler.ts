/**
 * Contact Form Handler
 * 
 * This file provides utilities for handling contact form submissions.
 * There are two ways to implement this:
 * 
 * 1. CLIENT-SIDE (Current Implementation - Contact.tsx):
 *    - Direct Discord webhook calls from the browser
 *    - May fail due to CORS restrictions
 *    - No backend required
 * 
 * 2. SERVER-SIDE (Recommended - Use with Node.js/Express backend):
 *    - Backend receives form data and sends to Discord
 *    - Solves CORS issues
 *    - Better security and validation
 * 
 * SETUP INSTRUCTIONS:
 * 
 * For Express.js Backend:
 * ```
 * import express from 'express';
 * import cors from 'cors';
 * 
 * const app = express();
 * app.use(cors());
 * app.use(express.json());
 * 
 * app.post('/api/contact', async (req, res) => {
 *   const { firstName, lastName, email, phone, message, countryCode } = req.body;
 *   
 *   const payload = {
 *     username: "Website Contact Form",
 *     avatar_url: "https://i.imgur.com/AfFp7pu.png",
 *     embeds: [{
 *       title: "📩 New Contact Form Submission",
 *       color: 0x5865f2,
 *       fields: [
 *         { name: "👤 Name", value: `${firstName} ${lastName}`, inline: true },
 *         { name: "📧 Email", value: email, inline: true },
 *         { name: "📞 Phone", value: phone || "Not provided", inline: true },
 *         { name: "🌍 Country Code", value: countryCode, inline: true },
 *         { name: "💬 Message", value: message },
 *       ],
 *       footer: { text: "Website Contact Form Submission" },
 *       timestamp: new Date().toISOString(),
 *     }]
 *   };
 *   
 *   try {
 *     const response = await fetch(process.env.DISCORD_WEBHOOK_URL, {
 *       method: 'POST',
 *       headers: { 'Content-Type': 'application/json' },
 *       body: JSON.stringify(payload)
 *     });
 *     
 *     if (!response.ok) throw new Error('Discord webhook failed');
 *     res.json({ success: true, message: 'Message sent successfully' });
 *   } catch (error) {
 *     res.status(500).json({ success: false, error: error.message });
 *   }
 * });
 * ```
 */

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
  countryCode?: string;
}

export interface DiscordEmbed {
  title: string;
  color: number;
  fields: Array<{
    name: string;
    value: string;
    inline?: boolean;
  }>;
  footer: {
    text: string;
  };
  timestamp: string;
}

export interface DiscordWebhookPayload {
  username: string;
  avatar_url: string;
  embeds: DiscordEmbed[];
}

export function createDiscordPayload(formData: ContactFormData): DiscordWebhookPayload {
  return {
    username: "Website Contact Form",
    avatar_url: "https://i.imgur.com/AfFp7pu.png",
    embeds: [
      {
        title: "📩 New Contact Form Submission",
        color: 0x5865f2,
        fields: [
          {
            name: "👤 Name",
            value: `${formData.firstName} ${formData.lastName}`,
            inline: true,
          },
          {
            name: "📧 Email",
            value: formData.email,
            inline: true,
          },
          {
            name: "📞 Phone",
            value: formData.phone || "Not provided",
            inline: true,
          },
          ...(formData.countryCode
            ? [{ name: "🌍 Country Code", value: formData.countryCode, inline: true }]
            : []),
          {
            name: "💬 Message",
            value: formData.message,
          },
        ],
        footer: {
          text: "Website Contact Form Submission",
        },
        timestamp: new Date().toISOString(),
      },
    ],
  };
}

export async function sendToDiscord(
  webhookUrl: string,
  formData: ContactFormData
): Promise<boolean> {
  const payload = createDiscordPayload(formData);

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return response.ok;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateContactFormData(formData: Partial<ContactFormData>): string[] {
  const errors: string[] = [];

  if (!formData.firstName?.trim()) {
    errors.push("First name is required");
  }
  if (!formData.lastName?.trim()) {
    errors.push("Last name is required");
  }
  if (!formData.email?.trim()) {
    errors.push("Email is required");
  } else if (!validateEmail(formData.email)) {
    errors.push("Please enter a valid email address");
  }
  if (!formData.message?.trim()) {
    errors.push("Message is required");
  }

  return errors;
}
