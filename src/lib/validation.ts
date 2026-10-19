export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
  timestamp?: number;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  message?: string;
  form?: string;
}

export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const message = (data.message || "").trim();

  // Name validation
  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (name.length > 100) {
    errors.name = "Name must be under 100 characters.";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  // Message validation
  if (!message) {
    errors.message = "Please enter your message.";
  } else if (message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (message.length > 3000) {
    errors.message = "Message must be under 3000 characters.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
