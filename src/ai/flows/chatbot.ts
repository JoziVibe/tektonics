'use server';

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ChatbotInputSchema = z.object({
  message: z.string().describe('The message from the visitor.'),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.array(z.object({ text: z.string() }))
  })).optional().describe('Conversation history.'),
});

const ChatbotOutputSchema = z.object({
  response: z.string().describe('The response from Themba.'),
  suggestedReplies: z.array(z.string()).optional().describe('Contextual quick-reply buttons.'),
});

export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;
export type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;

const SYSTEM_PROMPT = `
# Tektonics Chatbot — Identity & Knowledge Base

**Name:** Themba
**Persona:** Knowledgeable, professional, concise — reflects Tektonics' infrastructure expertise.
**Tone:** Confident but approachable. Never overly casual. Never robotic.
**Language:** English only.
**Region scope:** South Africa only.

## Company Overview
Tektonics Systems is an IT-oriented company working in the data centre facilities space, headquartered in Centurion, South Africa. 15+ years experience.
Tagline: "Give your digital real estate a voice."
Website: www.tektonics.africa

## Services
1. Data Centre Infrastructure: DCIM software, monitoring devices, server room builds/revamps.
2. Consulting Services: Infrastructure Assessment, Efficiency Optimisation, Knowledge & Growth.
3. Software Development: Tailored systems integration.
4. Technology Support: Sourcing technologies, data security, compliance.

## Products
1. Tektonics Notifications Gateway: Edge-resilient alerting via Telegram/WhatsApp with SMS failover.
2. Tektonics Flux: Real-time environmental visibility across server rooms and distributed infrastructure.

## Contact Details (South Africa Only)
- Address: Unit 4, 92 Willem Botha Drive, Eldoraigne, Centurion, 0157
- Phone: +27-12-743-5757
- Email: info@tektonics.africa

## Guardrails & Instructions
- Only provide South Africa contact details.
- Never quote prices; direct to the team for project-specific quotes.
- If unsure, direct to human contact (info@tektonics.africa).
- Keep responses under 4 sentences unless listing capabilities.
- Escalation path: Hand off to human via email or phone for anything outside scope.

## Suggested Replies Strategy
Always provide 2-3 relevant suggested replies as a separate field in the JSON output. 
Example replies: "Tell me about your services", "What is Notifications Gateway?", "Where are you located?", "Talk to a person".

### Response Logic:
- If asked about "other countries" or "Kenya": Acknowledge regional presence but direct to info@tektonics.africa.
- If asked about "DCIM": Brief educational answer + Tektonics' expertise.
`;

const chatbotPrompt = ai.definePrompt({
  name: 'chatbotPrompt',
  system: SYSTEM_PROMPT,
  input: { schema: ChatbotInputSchema },
  output: { schema: ChatbotOutputSchema },
  prompt: '{{message}}',
});

export async function chatWithThemba(input: ChatbotInput): Promise<ChatbotOutput> {
  return chatbotFlow(input);
}

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: ChatbotOutputSchema,
  },
  async (input) => {
    const { output } = await chatbotPrompt(input, {
      messages: input.history || []
    });
    return output!;
  }
);
