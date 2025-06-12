import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Star, Send, User, Mail, Building, Globe, Gamepad2, MessageSquare, ExternalLink, CheckCircle2, AlertCircle } from "lucide-react";
import { SiLinkedin, SiX, SiInstagram, SiYoutube, SiFacebook, SiTiktok } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { SharpButton } from "@/components/ui/sharp-button";

const testimonialSubmissionSchema = z.object({
  content: z.string().min(10, "Testimonial must be at least 10 characters").max(1000, "Testimonial cannot exceed 1000 characters"),
  author: z.string().min(2, "Name is required"),
  authorEmail: z.string().email("Valid email is required"),
  authorPosition: z.string().optional(),
  authorCompany: z.string().optional(),
  rating: z.number().min(1).max(5),
  category: z.string().min(1, "Please select a category"),
  source: z.string().min(1, "Please select how you heard about us"),
  socialMediaLink: z.string().url().optional().or(z.literal("")),
  websiteUrl: z.string().url().optional().or(z.literal("")),
  gamingPlatforms: z.array(z.string()).optional(),
  agreeToTerms: z.boolean().refine(val => val === true, "You must agree to the terms")
});

type TestimonialSubmissionForm = z.infer<typeof testimonialSubmissionSchema>;

const socialPlatforms = [
  { name: "LinkedIn", icon: SiLinkedin, placeholder: "https://linkedin.com/in/yourprofile" },
  { name: "Twitter", icon: SiX, placeholder: "https://twitter.com/yourhandle" },
  { name: "Instagram", icon: SiInstagram, placeholder: "https://instagram.com/yourhandle" },
  { name: "YouTube", icon: SiYoutube, placeholder: "https://youtube.com/@yourchannel" },
  { name: "Facebook", icon: SiFacebook, placeholder: "https://facebook.com/yourprofile" },
  { name: "TikTok", icon: SiTiktok, placeholder: "https://tiktok.com/@yourhandle" }
];

const categories = [
  "Pro Gamer", "Content Creator", "Business Professional", "Casual Gamer", "Gaming Community"
];

const sources = [
  "Google Play Store", "App Store", "Website Form", "Social Media", "Email", "Direct Contact"
];

const gamingPlatforms = [
  "PC/Steam", "PlayStation", "Xbox", "Nintendo Switch", "Mobile Gaming", "VR Gaming"
];

export function TestimonialSubmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedSocialPlatform, setSelectedSocialPlatform] = useState("");

  const form = useForm<TestimonialSubmissionForm>({
    resolver: zodResolver(testimonialSubmissionSchema),
    defaultValues: {
      rating: 5,
      gamingPlatforms: [],
      agreeToTerms: false
    }
  });

  const onSubmit = async (data: TestimonialSubmissionForm) => {
    setIsSubmitting(true);
    
    try {
      // Here we would normally submit to Sanity CMS via API
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Testimonial submission:", data);
      
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-black/90 border-2 border-[#E5042F]/50 p-8 text-center relative overflow-hidden"
        style={{
          clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
        }}
      >
        {/* Success overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-green-400/10 to-transparent opacity-80"></div>
        
        <div className="relative z-10">
          <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
          <p className="text-gray-300 mb-6">
            Your testimonial has been submitted successfully. Our team will review it and it will appear on our website once approved.
          </p>
          <SharpButton 
            variant="red" 
            onClick={() => setIsSubmitted(false)}
          >
            Submit Another Testimonial
          </SharpButton>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="group bg-black/80 border-2 border-[#E5042F]/50 p-8 relative overflow-hidden hover:border-white hover:shadow-[0_0_40px_rgba(229,4,47,0.6)] hover:bg-black/60 transition-all duration-700"
      style={{
        clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* White glassmorphic overlay */}
      <div className="absolute inset-0 bg-white/3 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/4 to-white/8 opacity-0 group-hover:opacity-90 transition-all duration-700 ease-out"></div>
      
      {/* White scanning lines animation */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={false}
        whileHover={{
          background: [
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
            "linear-gradient(90deg, transparent 100%, rgba(255,255,255,0.08) 50%, transparent 0%)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300 z-20"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300 z-20"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300 z-20"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300 z-20"></div>

      <div className="relative z-10">
        <div className="text-center mb-8">
          <h2 className="font-orbitron font-bold text-3xl text-white mb-4 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] transition-all duration-500">
            Share Your Gaming Experience
          </h2>
          <p className="text-gray-300 group-hover:text-white transition-colors duration-500">
            Help other gamers discover GAMERS TAG by sharing your experience with our platform
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Testimonial Content */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white flex items-center space-x-2 group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] transition-all duration-500">
                    <MessageSquare className="w-4 h-4 text-[#E5042F] group-hover:text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] transition-all duration-500" />
                    <span>Your Testimonial</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share your experience with GAMERS TAG..."
                      className="bg-black/60 border-[#E5042F]/30 text-white placeholder:text-gray-500 focus:border-white focus:shadow-[0_0_10px_rgba(255,255,255,0.3)] min-h-[120px] group-hover:border-white/50 transition-all duration-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Rating */}
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] transition-all duration-500">Rating</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-8 h-8 cursor-pointer transition-all duration-500 ${
                            star <= field.value
                              ? 'text-yellow-400 fill-current group-hover:text-white group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]'
                              : 'text-gray-600 hover:text-yellow-400 group-hover:text-white/60'
                          }`}
                          onClick={() => field.onChange(star)}
                        />
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Personal Information Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white flex items-center space-x-2 group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] transition-all duration-500">
                      <User className="w-4 h-4 text-[#E5042F] group-hover:text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] transition-all duration-500" />
                      <span>Your Name</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        className="bg-black/60 border-[#E5042F]/30 text-white placeholder:text-gray-500 focus:border-white focus:shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:border-white/50 transition-all duration-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="authorEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white flex items-center space-x-2 group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] transition-all duration-500">
                      <Mail className="w-4 h-4 text-[#E5042F] group-hover:text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] transition-all duration-500" />
                      <span>Email Address</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-black/60 border-[#E5042F]/30 text-white placeholder:text-gray-500 focus:border-white focus:shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:border-white/50 transition-all duration-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Professional Information Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="authorPosition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] transition-all duration-500">Position/Role (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Pro Gamer, Content Creator"
                        className="bg-black/60 border-[#E5042F]/30 text-white placeholder:text-gray-500 focus:border-white focus:shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:border-white/50 transition-all duration-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="authorCompany"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white flex items-center space-x-2 group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] transition-all duration-500">
                      <Building className="w-4 h-4 text-[#E5042F] group-hover:text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] transition-all duration-500" />
                      <span>Company/Organization (Optional)</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Team Nexus, Gaming Corp"
                        className="bg-black/60 border-[#E5042F]/30 text-white placeholder:text-gray-500 focus:border-white focus:shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:border-white/50 transition-all duration-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Category and Source Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] transition-all duration-500">Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-black/60 border-[#E5042F]/30 text-white focus:border-white focus:shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:border-white/50 transition-all duration-500">
                          <SelectValue placeholder="Select your category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-black border-[#E5042F]/30">
                        {categories.map((category) => (
                          <SelectItem key={category} value={category} className="text-white hover:bg-[#E5042F]/20">
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="source"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] transition-all duration-500">How did you hear about us?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-black/60 border-[#E5042F]/30 text-white focus:border-white focus:shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:border-white/50 transition-all duration-500">
                          <SelectValue placeholder="Select source" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-black border-[#E5042F]/30">
                        {sources.map((source) => (
                          <SelectItem key={source} value={source} className="text-white hover:bg-[#E5042F]/20">
                            {source}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <FormLabel className="text-white flex items-center space-x-2 group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] transition-all duration-500">
                <ExternalLink className="w-4 h-4 text-[#E5042F] group-hover:text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] transition-all duration-500" />
                <span>Social Media Profile (Optional)</span>
              </FormLabel>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {socialPlatforms.map((platform) => {
                  const Icon = platform.icon;
                  return (
                    <button
                      key={platform.name}
                      type="button"
                      onClick={() => setSelectedSocialPlatform(platform.name)}
                      className={`flex items-center space-x-2 p-3 border-2 transition-all duration-500 ${
                        selectedSocialPlatform === platform.name
                          ? 'border-[#E5042F] bg-[#E5042F]/20 text-[#E5042F] group-hover:border-white group-hover:bg-white/20 group-hover:text-white'
                          : 'border-[#E5042F]/30 bg-black/40 text-gray-400 hover:border-[#E5042F]/60 hover:text-white group-hover:border-white/50'
                      }`}
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                      }}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{platform.name}</span>
                    </button>
                  );
                })}
              </div>

              {selectedSocialPlatform && (
                <FormField
                  control={form.control}
                  name="socialMediaLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={socialPlatforms.find(p => p.name === selectedSocialPlatform)?.placeholder}
                          className="bg-black/60 border-[#E5042F]/30 text-white placeholder:text-gray-500 focus:border-[#E5042F]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>

            {/* Website URL */}
            <FormField
              control={form.control}
              name="websiteUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white flex items-center space-x-2 group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] transition-all duration-500">
                    <Globe className="w-4 h-4 text-[#E5042F] group-hover:text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] transition-all duration-500" />
                    <span>Personal/Company Website (Optional)</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://yourwebsite.com"
                      className="bg-black/60 border-[#E5042F]/30 text-white placeholder:text-gray-500 focus:border-white focus:shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:border-white/50 transition-all duration-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Gaming Platforms */}
            <FormField
              control={form.control}
              name="gamingPlatforms"
              render={() => (
                <FormItem>
                  <FormLabel className="text-white flex items-center space-x-2 group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] transition-all duration-500">
                    <Gamepad2 className="w-4 h-4 text-[#E5042F] group-hover:text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] transition-all duration-500" />
                    <span>Gaming Platforms You Use (Optional)</span>
                  </FormLabel>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {gamingPlatforms.map((platform) => (
                      <FormField
                        key={platform}
                        control={form.control}
                        name="gamingPlatforms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(platform)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...(field.value || []), platform])
                                    : field.onChange(
                                        field.value?.filter((value) => value !== platform)
                                      )
                                }}
                                className="border-[#E5042F]/30 data-[state=checked]:bg-[#E5042F] data-[state=checked]:border-[#E5042F] group-hover:border-white/50 transition-all duration-500"
                              />
                            </FormControl>
                            <FormLabel className="text-sm text-gray-300 font-normal group-hover:text-white transition-colors duration-500">
                              {platform}
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Terms Agreement */}
            <FormField
              control={form.control}
              name="agreeToTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-[#E5042F]/30 data-[state=checked]:bg-[#E5042F] data-[state=checked]:border-[#E5042F] group-hover:border-white/50 transition-all duration-500"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm text-gray-300 group-hover:text-white transition-colors duration-500">
                      I agree to the terms and conditions and consent to my testimonial being displayed publicly on the GAMERS TAG website and marketing materials.
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="text-center pt-4">
              <SharpButton
                type="submit"
                variant="red"
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Testimonial
                  </>
                )}
              </SharpButton>
            </div>
          </form>
        </Form>
      </div>
    </motion.div>
  );
}