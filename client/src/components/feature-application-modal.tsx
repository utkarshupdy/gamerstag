import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X, Send, Download } from "lucide-react";

interface FeatureApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureType: "gt-jobs-now" | "gt-news-now";
  featureTitle: string;
}

export function FeatureApplicationModal({
  isOpen,
  onClose,
  featureType,
  featureTitle
}: FeatureApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    userType: "",
    reason: ""
  });

  const isJobsFeature = featureType === "gt-jobs-now";
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black border border-red-500/30 text-white max-w-md mx-auto">
        {/* HUD corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-red-500"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-red-500"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-red-500"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-red-500"></div>
        
        <DialogHeader className="relative">
          <DialogTitle className="text-xl font-space font-bold text-white mb-4">
            Apply for {featureTitle}
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            className="absolute -top-2 -right-2 text-gray-400 hover:text-white"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 relative">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name *
            </label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400"
              placeholder="your.email@example.com"
              required
            />
          </div>

          {/* Contact Number Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Contact Number *
            </label>
            <Input
              type="tel"
              value={formData.contactNumber}
              onChange={(e) => handleInputChange("contactNumber", e.target.value)}
              className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400"
              placeholder="+1 (555) 123-4567"
              required
            />
          </div>

          {/* User Type Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              User Type *
            </label>
            <Select onValueChange={(value) => handleInputChange("userType", value)}>
              <SelectTrigger className="bg-gray-900/50 border-gray-600 text-white">
                <SelectValue placeholder="Select user type" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-600">
                <SelectItem value="company">Company</SelectItem>
                <SelectItem value="individual">Individual</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Reason Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {isJobsFeature ? "Reason to Post Job" : "Reason to Post News"} *
            </label>
            <Textarea
              value={formData.reason}
              onChange={(e) => handleInputChange("reason", e.target.value)}
              className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 min-h-[80px]"
              placeholder={
                isJobsFeature 
                  ? "Describe the position you want to post and your hiring needs..."
                  : "Describe the news content you want to publish and its relevance..."
              }
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-red-600 hover:bg-red-500 text-white border-0"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit Application
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex-1 border-gray-600 text-gray-300 hover:text-white hover:border-gray-500"
            >
              <Download className="w-4 h-4 mr-2" />
              Download App
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}