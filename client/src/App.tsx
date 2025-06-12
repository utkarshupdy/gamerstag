import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { PageWrapper } from "@/components/page-wrapper";
import { BrandSettingsProvider } from "@/hooks/use-brand-settings";
import { LoadingScreen } from "@/components/LoadingScreen";
import { WebVitalsOptimizer, CriticalCSSInjector, ResourcePreloader, ServiceWorkerManager, LayoutShiftPreventer } from "@/components/performance/WebVitalsOptimizer";
import { SEOManager, PerformanceOptimizer } from "@/lib/seo/comprehensive-seo";
import { initializeGlobalClickSounds } from "@/lib/sound-effects";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Home from "@/pages/home";
import About from "@/pages/about";
import Features from "@/pages/features";
import TeamOverviewPage from "@/pages/TeamOverviewPage";
import CoreMemberDetail from "@/pages/team/core/member-detail";
import TeamMemberDetail from "@/pages/team-member-detail";
import JoshuaProfile from "@/pages/team/joshua-profile";
import AdeshKumarPatraProfile from "@/pages/team/core/core-002";
import HarshSinghProfile from "@/pages/team/core/core-003";
import PaulDickinsonProfile from "@/pages/team/core/core-004";
import HemanthJosephProfile from "@/pages/team/core/hemanth-joseph";
import Connect from "@/pages/connect";
import Terms from "@/pages/terms";
import Testimonials from "@/pages/testimonials";
import Journey from "@/pages/journey";
import Mentors from "@/pages/mentors";
import NotFound from "@/pages/not-found";
import Incubators from "@/pages/incubators";
import Dashboard from "@/pages/dashboard";
import ContentManagementDemo from "@/pages/ContentManagementDemo";
import TechStack from "@/pages/tech-stack";
import Gallery from "@/pages/gallery";
import News from "@/pages/news";
import NewsArticle from "@/pages/news-article";
import Search from "@/pages/search";
import AppUpdatesFixed from "@/pages/app-updates-fixed";
import AppUpdateDetail from "@/pages/app-update-detail";
import MentorList from "@/pages/mentor-list";
import MentorProfile from "@/pages/mentors/[id]";
import ButtonShowcase from "@/pages/button-showcase";

// Connect Application Forms
import ContactForm from "@/pages/connect/contact";
import CareersForm from "@/pages/connect/careers";
import PartnershipForm from "@/pages/connect/partnership";
import MentorForm from "@/pages/connect/mentor";
import InvestForm from "@/pages/connect/invest";
import CollegeForm from "@/pages/connect/college";
import EsportsForm from "@/pages/connect/esports";
import BrandForm from "@/pages/connect/brand";
import AmbassadorForm from "@/pages/connect/ambassador";
import test from "@/pages/test/test";
import test2 from "@/pages/test/test2";
import test3 from "@/pages/test/test3";
import test4 from "@/pages/test/test4";

// Feature Detail Page
import FeatureDetail from "@/pages/feature-detail";

// Individual Feature Pages
import GTUI from "@/pages/features/gt-ui";





function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/features" component={Features} />
      <Route path="/team" component={TeamOverviewPage} />
      <Route path="/connect" component={Connect} />
      <Route path="/terms" component={Terms} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/journey" component={Journey} />
      <Route path="/mentors" component={MentorList} />
      
      {/* Individual Feature Pages */}
      <Route path="/features/gt-ui" component={GTUI} />
      
      {/* Feature Pages */}
      <Route path="/features/:feature" component={FeatureDetail} />
      
      {/* New Pages */}
      <Route path="/test" component={test} />
      <Route path="/incubators" component={Incubators} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/cms-demo" component={ContentManagementDemo} />
      <Route path="/tech-stack" component={TechStack} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/news" component={News} />
      <Route path="/news/:slug" component={NewsArticle} />
      <Route path="/search" component={Search} />
      <Route path="/app-updates" component={AppUpdatesFixed} />
      <Route path="/app-updates/:id" component={AppUpdateDetail} />
      <Route path="/mentor-list" component={MentorList} />
      <Route path="/mentors/:id" component={MentorProfile} />
      
      {/* Team Member Pages */}
      <Route path="/team/core/core-004" component={test4} />
      <Route path="/team/core/core-003" component={test3} />
      <Route path="/team/core/core-001" component={test2} />
      <Route path="/team/core/core-002" component={test} />
      <Route path="/team/core/:id" component={CoreMemberDetail} />
      <Route path="/team/core/hemanth-joseph" component={HemanthJosephProfile} />
      <Route path="/team/joshua-j-kanatt" component={JoshuaProfile} />
      <Route path="/team/:slug" component={TeamMemberDetail} />
      
      {/* Connect Application Forms */}
      <Route path="/connect/contact" component={ContactForm} />
      <Route path="/connect/careers" component={CareersForm} />
      <Route path="/connect/partnership" component={PartnershipForm} />
      <Route path="/connect/mentor" component={MentorForm} />
      <Route path="/connect/invest" component={InvestForm} />
      <Route path="/connect/college" component={CollegeForm} />
      <Route path="/connect/esports" component={EsportsForm} />
      <Route path="/connect/brand" component={BrandForm} />
      <Route path="/connect/ambassador" component={AmbassadorForm} />
      
      {/* Button Showcase */}
      <Route path="/buttons" component={ButtonShowcase} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Initialize global click sounds for all buttons
    initializeGlobalClickSounds();
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrandSettingsProvider>
          <ThemeProvider defaultTheme="theme-dark-blue">
            <TooltipProvider>
              <Toaster />
              <PageWrapper>
                <Router />
              </PageWrapper>
            </TooltipProvider>
          </ThemeProvider>
        </BrandSettingsProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
