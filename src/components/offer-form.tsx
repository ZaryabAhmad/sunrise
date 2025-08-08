"use client";

import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
import type { Job } from "@/lib/types";
// import { craftOfferAction } from "@/actions/craft-offer-action";
import { Sparkles, Loader2, ShieldAlert } from "lucide-react";
// import { GoogleGenerativeAI } from '@google/generative-ai';


// const offerSchema = z.object({
//   workerSkills: z.string().min(10, "Please describe your skills."),
//   workerExperience: z.string().min(10, "Please describe your relevant experience."),
//   offer: z.string().min(20, "Please write a compelling offer."),
// });

// type OfferFormValues = z.infer<typeof offerSchema>;

interface OfferFormProps {
  job: Job;
}

// const genAI = new GoogleGenerativeAI("YOUR_API_KEY");

export function OfferForm({ job }: OfferFormProps) {
  const [isCrafting, setIsCrafting] = useState(false);
  //   const { toast } = useToast();

  //   const form = useForm<OfferFormValues>({
  //     resolver: zodResolver(offerSchema),
  //     defaultValues: {
  //       workerSkills: "",
  //       workerExperience: "",
  //       offer: "",
  //     },
  //   });

  //   const handleCraftOffer = async () => {
  //     const { workerSkills, workerExperience } = form.getValues();
  //     if (!workerSkills || !workerExperience) {
  //       form.trigger(['workerSkills', 'workerExperience']);
  //       toast({
  //         variant: "destructive",
  //         title: "Missing Information",
  //         description: "Please fill in your skills and experience first.",
  //       });
  //       return;
  //     }

  //     setIsCrafting(true);
  //     const result = await craftOfferAction({
  //       jobDescription: job.description,
  //       customerName: job.postedBy,
  //       workerSkills,
  //       workerExperience,
  //     });
  //     setIsCrafting(false);

  //     if (result.success && result.offer) {
  //       form.setValue("offer", result.offer);
  //       toast({
  //         title: "Offer Crafted!",
  //         description: "Your AI-generated offer is ready. You can edit it before submitting.",
  //       });
  //     } else {
  //       toast({
  //         variant: "destructive",
  //         title: "Error",
  //         description: result.error,
  //       });
  //     }
  //   };

  //   const onSubmit = (data: OfferFormValues) => {
  //     console.log(data);
  //     toast({
  //       title: "Offer Submitted!",
  //       description: "Your offer has been sent to the customer.",
  //     });
  //     form.reset();
  //   };

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    // setLoading(true);
    // try {
    //   const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    //   const prompt = `Input one: "${input1}", Input two: "${input2}". Based on these inputs, generate a single summarized result.`;

    //   const response = await model.generateContent(prompt);
    //   const text = response.response.text();

    //   setResult(text);
    // } catch (error) {
    //   console.error('Error:', error);
    //   setResult('Something went wrong.');
    // }
    // setLoading(false);
  };


  return (
    <div className="card">
      <div className="cardHeader">
        <div className="text-2xl leading-none cardTitle">Make an Offer</div>
        <div className="text-sm text-[var(--muted-foreground)] mt-1.5">Stand out from the competition. Use our AI tool to help you craft the perfect pitch.</div>
      </div>
      <div className="cardContent">
        <form
          // onSubmit={() => handleSubmit(onSubmit)} 
          className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="label font-medium text-[var(--foreground)]">Your Skills</label>
              <textarea
                defaultValue={input1}
                onChange={(e) => setInput1(e.target.value)}
                className="textarea min-h-[80px] text-base md:text-sm mt-2 bg-[var(--background)]"
                placeholder="e.g., Expert in flat-pack furniture, professional painting tools..." />
              {/* <FormMessage /> */}
            </div>
            <div className="space-y-2">
              <label className="label font-medium text-[var(--foreground)]">Relevant Experience</label>
              <textarea
                defaultValue={input2}
                onChange={(e) => setInput2(e.target.value)}
                className="textarea min-h-[80px] text-base md:text-sm mt-2 bg-[var(--background)]"
                placeholder="e.g., Assembled over 50 IKEA items, 5 years of residential painting experience..." />
              {/* <FormMessage /> */}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="label font-medium text-[var(--foreground)]">Your Offer to {job.postedBy}</label>
              <button
                type="button"
                // onClick={handleCraftOffer}
                onClick={handleGenerate}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-[var(--border)] text-[var(--foreground)] bg-[var(--background)] hover:bg-[var(--accent)] hover:text-[var(--white)] h-9 rounded-md px-3"
                disabled={isCrafting}>
                {isCrafting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Craft with AI
              </button>
            </div>
            <div>
              <textarea
                rows={6}
                defaultValue={result}
                className="textarea min-h-[80px] text-base md:text-sm mt-2  bg-[var(--background)]"
                placeholder="Introduce yourself and explain why you're the best person for this job." />
              {/* <FormMessage /> */}
            </div>
          </div>

          <div className="p-4 border border-[var(--destructive-20)] bg-[var(--destructive-05)] rounded-lg space-y-2 text-xs text-[var(--destructive-90)]">
            <p className="font-bold flex items-center gap-2"><ShieldAlert className="w-5 h-5"/> Safety First!</p>
            <p>Always communicate through the SunriSurf chat and never accept direct payments. This is for your safety and ensures you are protected by our policies.</p>
            <p>If you experience any inappropriate behavior or harassment from a customer, please report it to our support team immediately. We have a zero-tolerance policy and will take swift action.</p>
          </div>
                
          <button type="submit" className="text-sm h-11 px-8 btn w-full primary-btn">Submit Your Offer</button>
        </form>
      </div>
    </div>
  );
}
