'use server';
/**
 * @fileOverview This file implements an AI-powered solution recommender.
 * It takes a client's data center challenges as input and provides tailored
 * recommendations for Tektonics' DCIM solutions or a strategic approach.
 *
 * - recommendSolutions - A function that handles the solution recommendation process.
 * - AiSolutionRecommenderInput - The input type for the recommendSolutions function.
 * - AiSolutionRecommenderOutput - The return type for the recommendSolutions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiSolutionRecommenderInputSchema = z.object({
  dataCenterChallenges: z
    .string()
    .describe("A description of the client's data center challenges and needs."),
});
export type AiSolutionRecommenderInput = z.infer<typeof AiSolutionRecommenderInputSchema>;

const AiSolutionRecommenderOutputSchema = z.object({
  recommendations: z.array(z.string()).describe(
    'An array of tailored recommendations for DCIM solutions or strategic approaches based on the challenges described. '
  ),
  tektonicsSolutions: z
    .array(z.string())
    .describe('Specific Tektonics DCIM solutions referenced in the recommendations, if applicable.'),
});
export type AiSolutionRecommenderOutput = z.infer<typeof AiSolutionRecommenderOutputSchema>;

export async function recommendSolutions(
  input: AiSolutionRecommenderInput
): Promise<AiSolutionRecommenderOutput> {
  return aiSolutionRecommenderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiSolutionRecommenderPrompt',
  input: {schema: AiSolutionRecommenderInputSchema},
  output: {schema: AiSolutionRecommenderOutputSchema},
  prompt: `You are an expert in Data Center Infrastructure Management (DCIM) solutions and a representative of Tektonics Digital Gateway, a leading African company in IT and DCIM solutions.

Your mission is to analyze a prospective client's data center challenges and needs, and provide tailored recommendations using Tektonics' DCIM solutions or strategic approaches.

Tektonics' expertise includes comprehensive DCIM solutions that address various aspects of data center operations such as power management, environmental monitoring, asset tracking, security, and more. When possible, explicitly mention how Tektonics' solutions can help.

Client's Data Center Challenges and Needs: """{{{dataCenterChallenges}}}"""

Based on the client's input, provide a set of actionable recommendations. If specific Tektonics solutions are relevant, list them separately in the 'tektonicsSolutions' array. Otherwise, outline a strategic approach.
`,
});

const aiSolutionRecommenderFlow = ai.defineFlow(
  {
    name: 'aiSolutionRecommenderFlow',
    inputSchema: AiSolutionRecommenderInputSchema,
    outputSchema: AiSolutionRecommenderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
