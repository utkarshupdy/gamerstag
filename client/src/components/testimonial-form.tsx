import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Star, Send, X } from "lucide-react";
import { CyberpunkButton } from "./CyberpunkButton";
import { CyberpunkBox } from "./CyberpunkBox";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertTestimonialSchema } from "@shared/schema";

// All 12 GAMERS TAG features
const features = [
  { id: "pro-gaming-profile", name: "Pro Gaming Profile" },
  { id: "next-gen-onboarding", name: "Next-Gen Gaming Onboarding" },
  { id: "gaccounts", name: "GACCOUNTS" },
  { id: "gconnect", name: "GCONNECT" },
  { id: "gt-chats", name: "GT Chats" },
  { id: "gt-jobs", name: "GT Jobs" },
  { id: "gt-hire", name: "GT Hire" },
  { id: "gt-news", name: "GT News" },
  { id: "creator-voice", name: "Creator Voice" },
  { id: "gt-card", name: "GT Card" },
  { id: "gt-ui-ux", name: "GT UI/UX" },
  { id: "gt-sound", name: "GT Sound" }
];

const formSchema = insertTestimonialSchema.extend({
  rating: z.number().min(1, "Please select a rating").max(5),
  features: z.array(z.string()).min(1, "Please select at least one feature"),
  selectedFeature: z.string().optional(),
  comment: z.string().min(10, "Comment must be at least 10 characters"),
  email: z.string().email("Please enter a valid email address")
});

type FormData = z.infer<typeof formSchema>;

interface TestimonialFormProps {
  onSuccess?: () => void;
}

export function TestimonialForm({ onSuccess }: TestimonialFormProps) {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      gtId: "",
      email: "",
      comment: "",
      rating: 0,
      features: []
    }
  });

  const createTestimonialMutation = useMutation({
    mutationFn: async (data: FormData) => {
      return apiRequest("POST", "/api/testimonials", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/testimonials"] });
      toast({
        title: "Thank you!",
        description: "Your testimonial has been submitted successfully.",
      });
      form.reset();
      setSelectedFeatures([]);
      onSuccess?.();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit testimonial. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleFeatureToggle = (featureId: string) => {
    const newFeatures = selectedFeatures.includes(featureId)
      ? selectedFeatures.filter(id => id !== featureId)
      : [...selectedFeatures, featureId];
    
    setSelectedFeatures(newFeatures);
    form.setValue("features", newFeatures);
    form.clearErrors("features");
  };

  const handleStarClick = (rating: number) => {
    form.setValue("rating", rating);
    form.clearErrors("rating");
  };

  const onSubmit = (data: FormData) => {
    createTestimonialMutation.mutate(data);
  };

  return (
    <CyberpunkBox variant="panel" className="max-w-4xl mx-auto p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-space font-bold text-3xl text-white mb-4">
            Share Your <span className="text-[#E5042F]">GAMERS TAG</span> Experience
          </h2>
          <p className="text-gray-300">
            Help us improve by sharing your thoughts about GAMERS TAG features
          </p>
        </div>

        {/* Form */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-white font-medium mb-2">
                Name <span className="text-[#E5042F]">*</span>
              </label>
              <input
                {...form.register("name")}
                className="w-full bg-black/50 border border-[#E5042F]/30 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-[#E5042F] focus:outline-none transition-colors"
                placeholder="Enter your name"
              />
              {form.formState.errors.name && (
                <p className="text-[#E5042F] text-sm mt-1">{form.formState.errors.name.message}</p>
              )}
            </div>

            {/* GT ID */}
            <div>
              <label className="block text-white font-medium mb-2">
                GT ID <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                {...form.register("gtId")}
                className="w-full bg-black/50 border border-[#E5042F]/30 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-[#E5042F] focus:outline-none transition-colors"
                placeholder="Enter your GAMERS TAG ID"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-white font-medium mb-2">
              Email <span className="text-[#E5042F]">*</span>
            </label>
            <input
              {...form.register("email")}
              type="email"
              className="w-full bg-black/50 border border-[#E5042F]/30 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-[#E5042F] focus:outline-none transition-colors"
              placeholder="Enter your email address"
            />
            {form.formState.errors.email && (
              <p className="text-[#E5042F] text-sm mt-1">{form.formState.errors.email.message}</p>
            )}
          </div>

          {/* Rating */}
          <div>
            <label className="block text-white font-medium mb-4">
              Rating <span className="text-[#E5042F]">*</span>
            </label>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleStarClick(star)}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(null)}
                  className="transition-all duration-200 hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= (hoveredStar || form.watch("rating"))
                        ? "text-yellow-400 fill-current"
                        : "text-gray-600"
                    }`}
                  />
                </button>
              ))}
              <span className="ml-4 text-gray-300">
                {form.watch("rating") > 0 ? `${form.watch("rating")} star${form.watch("rating") > 1 ? 's' : ''}` : "Select rating"}
              </span>
            </div>
            {form.formState.errors.rating && (
              <p className="text-[#E5042F] text-sm mt-1">{form.formState.errors.rating.message}</p>
            )}
          </div>

          {/* Features Selection */}
          <div>
            <label className="block text-white font-medium mb-4">
              Select Features <span className="text-[#E5042F]">*</span>
              <span className="text-gray-400 text-sm font-normal ml-2">(Multiple selection allowed)</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => handleFeatureToggle(feature.id)}
                  className={`relative p-3 text-sm rounded border transition-all duration-300 ${
                    selectedFeatures.includes(feature.id)
                      ? "bg-[#E5042F]/20 border-[#E5042F] text-white"
                      : "bg-black/30 border-gray-600 text-gray-300 hover:border-[#E5042F]/50 hover:bg-[#E5042F]/10"
                  }`}
                >
                  {selectedFeatures.includes(feature.id) && (
                    <div className="absolute top-1 right-1">
                      <div className="w-2 h-2 bg-[#E5042F] rounded-full"></div>
                    </div>
                  )}
                  {feature.name}
                </button>
              ))}
            </div>
            {form.formState.errors.features && (
              <p className="text-[#E5042F] text-sm mt-1">{form.formState.errors.features.message}</p>
            )}
          </div>

          {/* Comment */}
          <div>
            <label className="block text-white font-medium mb-2">
              Comment <span className="text-[#E5042F]">*</span>
            </label>
            <textarea
              {...form.register("comment")}
              rows={5}
              className="w-full bg-black/50 border border-[#E5042F]/30 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-[#E5042F] focus:outline-none transition-colors resize-vertical"
              placeholder="Share your experience with GAMERS TAG..."
            />
            {form.formState.errors.comment && (
              <p className="text-[#E5042F] text-sm mt-1">{form.formState.errors.comment.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <CyberpunkButton
              type="submit"
              variant="cyber"
              size="lg"
              disabled={createTestimonialMutation.isPending}
              className="px-8 py-4"
            >
              {createTestimonialMutation.isPending ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>Send Testimonial</span>
                </div>
              )}
            </CyberpunkButton>
          </div>
        </form>
      </motion.div>
    </CyberpunkBox>
  );
}