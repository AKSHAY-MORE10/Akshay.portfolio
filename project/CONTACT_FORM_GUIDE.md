# Contact Form - Setup & Troubleshooting Guide

## ✅ What Was Fixed

### 1. **Form Validation**
- Added proper email validation using regex
- Implemented client-side validation for required fields
- Improved error messaging

### 2. **Error Handling**
- Replaced generic `alert()` with inline error messages
- Added success feedback
- Better error logging for debugging
- User-friendly error messages

### 3. **Accessibility Improvements**
- Fixed checkbox association with label using `htmlFor`
- Added `aria-label` to country select dropdown
- Proper input type for phone field (`type="tel"`)
- Better form structure with descriptive labels

### 4. **State Management**
- Added separate state for error, success, and loading
- Better form reset handling
- Proper cleanup after submission

### 5. **Security & Data Handling**
- Proper form data extraction
- All fields properly captured
- Country code included in webhook payload

---

## ⚠️ Critical Issue: CORS Restrictions

### The Problem
When you call the Discord webhook directly from the browser, it **fails due to CORS** (Cross-Origin Resource Sharing):
- Browser blocks requests from `yourwebsite.com` to `discord.com`
- The webhook seems to send but silently fails
- No error is shown to the user

### Current Solution (Client-Side)
The current implementation attempts direct webhook calls. In some browsers/environments it may work, but it's **NOT RECOMMENDED** for production.

### ✨ Recommended Solution: Backend API

Create a backend endpoint that forwards form submissions to Discord:

```typescript
// Backend (Node.js + Express example)
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message, countryCode } = req.body;
  
  // Validate on backend
  if (!email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  const payload = {
    username: "Website Contact Form",
    embeds: [{
      title: "📩 New Contact Form Submission",
      color: 0x5865f2,
      fields: [
        { name: "👤 Name", value: `${firstName} ${lastName}`, inline: true },
        { name: "📧 Email", value: email, inline: true },
        { name: "📞 Phone", value: phone || "Not provided", inline: true },
        { name: "🌍 Country Code", value: countryCode, inline: true },
        { name: "💬 Message", value: message }
      ],
      timestamp: new Date().toISOString()
    }]
  };
  
  try {
    const response = await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    if (!response.ok) throw new Error('Discord webhook failed');
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

Then update the Contact form to call your backend:

```typescript
// In Contact.tsx handleSubmit
const res = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

---

## 📋 Environment Setup

### Required Environment Variable
Create a `.env` file in the project root:

```env
# Discord Webhook URL for Contact Form
VITE_DISCORD_WEBHOOK_URL=https://discordapp.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
```

### How to Get Discord Webhook URL

1. Go to your Discord server
2. **Server Settings** → **Integrations** → **Webhooks**
3. Click **New Webhook**
4. Name it "Website Contact Form"
5. Click **Copy Webhook URL**
6. Paste into `.env` file

⚠️ **IMPORTANT**: Never commit `.env` to git! Add to `.gitignore`

---

## 🧪 Testing the Form

### Test Cases

1. **Valid Submission**
   - Fill all required fields
   - Should show success message
   - Check Discord for the message

2. **Missing Fields**
   - Leave "First Name" empty → Error: "First name is required"
   - Leave "Email" empty → Error: "Email is required"
   - Leave "Message" empty → Error: "Message is required"

3. **Invalid Email**
   - Enter: `notanemail`
   - Error: "Please enter a valid email address"

4. **Success Feedback**
   - Green success message appears for 5 seconds
   - Form resets automatically

---

## 📁 File Structure

```
src/api/
├── Contact.tsx              # Main contact form component
└── contact.handler.ts       # Helper utilities (optional, for backend integration)
```

---

## 🔧 Integration with Backend

If you're using a backend framework:

1. Copy utilities from `contact.handler.ts`
2. Create API endpoint `/api/contact`
3. Update Contact.tsx to call backend instead of Discord webhook
4. Move Discord webhook URL to backend `.env`

---

## 🐛 Troubleshooting

### Issue: "Failed to send message"
- Check if Discord webhook URL is correct
- Verify the webhook URL is still valid (tokens expire in some cases)
- Check browser console for specific error
- Try using a backend API endpoint

### Issue: Form shows error but submits
- Check `.env` file has correct `VITE_DISCORD_WEBHOOK_URL`
- Ensure environment variables are loaded

### Issue: CORS error in console
- This is expected with direct webhook calls
- Solution: Use backend API endpoint (recommended)

---

## 📝 Form Fields

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| First Name | Text | ✅ | Max length: unlimited |
| Last Name | Text | ✅ | Max length: unlimited |
| Email | Email | ✅ | Must be valid email |
| Country Code | Select | ❌ | US, IN, UK, CA, AU |
| Phone | Tel | ❌ | Format based on country |
| Message | Textarea | ✅ | 5+ characters recommended |
| Privacy Policy | Checkbox | ✅ | Must be agreed to |

---

## 🚀 Next Steps

1. **Test current implementation** with the Discord webhook
2. **If CORS errors occur**, implement backend API endpoint
3. **Consider adding**:
   - Email confirmation to user
   - Database storage of submissions
   - Admin notification email
   - Rate limiting (to prevent spam)
   - CAPTCHA for bot prevention

---

## 📚 Resources

- [Discord Webhook Documentation](https://discord.com/developers/docs/resources/webhook)
- [CORS Explained](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Form Validation Best Practices](https://www.smashingmagazine.com/2022/09/inline-validation-web-forms-ux/)

---

**Last Updated**: February 2, 2026
