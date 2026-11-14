export const SALES_EMAIL = 'sales@s2sglobalexim.com';
export const WHATSAPP_NUMBER = '919894660672';

export interface EmailDispatchPayload {
  subject: string;
  replyTo?: string;
  fields: Record<string, string>;
}

export interface EmailDispatchResult {
  mailtoUrl: string;
  whatsappUrl: string;
  formattedBody: string;
  relayStatus: 'sent' | 'mailto-only';
}

export function buildMailtoUrl(subject: string, body: string): string {
  return `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildWhatsappUrl(body: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
}

export function triggerMailto(mailtoUrl: string): void {
  try {
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.rel = 'noopener noreferrer';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch {
    // Fallback ignored if protocol handler is restricted in embedded preview
  }
}

export async function dispatchEnquiryEmail(
  payload: EmailDispatchPayload
): Promise<EmailDispatchResult> {
  const formattedLines = Object.entries(payload.fields)
    .filter(([, value]) => value && value.trim().length > 0)
    .map(([key, value]) => `${key}: ${value}`);

  const formattedBody = [
    'Dear S2S Global Exim Sales Team,',
    '',
    'Please find the commercial export enquiry details below:',
    '--------------------------------------------------',
    ...formattedLines,
    '--------------------------------------------------',
    'Sent via S2S Global Exim Official Trade Portal',
  ].join('\n');

  const mailtoUrl = buildMailtoUrl(payload.subject, formattedBody);
  const whatsappUrl = buildWhatsappUrl(formattedBody);

  // Immediately invoke mailto: so buyer's mail client opens with all enquiry details addressed to sales@s2sglobalexim.com
  triggerMailto(mailtoUrl);

  // Also attempt direct web-to-email delivery via FormSubmit AJAX relay for live website deployments
  let relayStatus: 'sent' | 'mailto-only' = 'mailto-only';
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${SALES_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: payload.subject,
        ...(payload.replyTo ? { _replyto: payload.replyTo } : {}),
        _template: 'table',
        _captcha: 'false',
        ...payload.fields,
      }),
    });

    if (response.ok) {
      const data = await response.json().catch(() => null);
      if (data && (data.success === 'true' || data.success === true)) {
        relayStatus = 'sent';
      }
    }
  } catch {
    relayStatus = 'mailto-only';
  }

  return {
    mailtoUrl,
    whatsappUrl,
    formattedBody,
    relayStatus,
  };
}
