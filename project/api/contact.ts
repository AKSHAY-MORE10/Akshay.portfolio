type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
  countryCode?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    return res.status(500).json({ error: "Discord webhook is not configured." });
  }

  const body = req.body as ContactFormData;

  if (!body?.firstName?.trim()) {
    return res.status(400).json({ error: "First name is required" });
  }
  if (!body?.lastName?.trim()) {
    return res.status(400).json({ error: "Last name is required" });
  }
  if (!body?.email?.trim()) {
    return res.status(400).json({ error: "Email is required" });
  }
  if (!emailRegex.test(body.email)) {
    return res.status(400).json({ error: "Please enter a valid email address" });
  }
  if (!body?.message?.trim()) {
    return res.status(400).json({ error: "Message is required" });
  }

  const payload = {
    username: "Website Contact Form",
    avatar_url: "https://i.imgur.com/AfFp7pu.png",
    embeds: [
      {
        title: "📩 New Contact Form Submission",
        color: 0x5865f2,
        fields: [
          { name: "👤 Name", value: `${body.firstName} ${body.lastName}`, inline: true },
          { name: "📧 Email", value: body.email, inline: true },
          { name: "📞 Phone", value: body.phone || "Not provided", inline: true },
          { name: "🌍 Country Code", value: body.countryCode || "—", inline: true },
          { name: "💬 Message", value: body.message || "—" },
        ],
        footer: { text: "Website Contact Form Submission" },
        timestamp: new Date().toISOString(),
      },
    ],
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return res.status(502).json({ error: "Discord webhook failed" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Failed to send message" });
  }
}
