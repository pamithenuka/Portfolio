"use server";

import { validateContactForm, type ValidationErrors } from "@/lib/validation";

export interface ContactActionState {
  success: boolean;
  message?: string;
  errors?: ValidationErrors;
}

export async function sendContactMessage(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const message = String(formData.get("message") || "");
  const honeypot = String(formData.get("website_url") || "");
  const fillTime = Number(formData.get("form_load_time") || 0);

  // Spam protection 1: Honeypot field filled by bot
  if (honeypot.trim().length > 0) {
    // Silently succeed so bot does not retry with different heuristic
    return {
      success: true,
      message: "Thank you for reaching out! Your message has been received."
    };
  }

  // Spam protection 2: Form submitted unrealistically fast (< 1.5 seconds)
  if (fillTime > 0 && Date.now() - fillTime < 1500) {
    return {
      success: false,
      errors: { form: "Form submitted too quickly. Please try again." }
    };
  }

  // Input validation
  const validation = validateContactForm({ name, email, message });
  if (!validation.isValid) {
    return {
      success: false,
      errors: validation.errors
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "pamithenuka15@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  // If Resend API key is not configured, inform the user honestly
  if (!apiKey) {
    return {
      success: false,
      errors: {
        form: "Email delivery service is currently not configured. Please send an email directly to pamithenuka15@gmail.com."
      }
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `[Portfolio Contact] New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Resend API error:", errorData);
      return {
        success: false,
        errors: {
          form: "Failed to dispatch message via mail service. Please contact directly via email."
        }
      };
    }

    return {
      success: true,
      message: "Thank you for reaching out! Your message was sent successfully."
    };
  } catch (error) {
    console.error("Failed to send contact message:", error);
    return {
      success: false,
      errors: {
        form: "An unexpected network error occurred. Please reach out directly to pamithenuka15@gmail.com."
      }
    };
  }
}
