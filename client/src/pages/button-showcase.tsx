import React, { useState } from 'react';
import { SEOHead } from '@/components/seo-head';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { SharpButton, DualButtonGroup } from '@/components/ui/sharp-button';
import { HudRectangularButton, DualHudButtonGroup } from '@/components/hud-rectangular-button';
import { GamingRectangularButton, DualGamingButtonGroup } from '@/components/GamingRectangularButton';
import { Download, Play, Target, Shield, Zap, Users } from 'lucide-react';

export default function ButtonShowcase() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  return (
    <>
      <SEOHead 
        title="Gaming Button Showcase - Rectangular HUD Design System"
        description="Showcase of rectangular gaming buttons with HUD borders and interactive animations"
        keywords="gaming buttons, HUD design, rectangular buttons, gaming UI"
      />
      <Navigation />
      
      <main className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-space font-bold text-4xl lg:text-6xl mb-6">
              Gaming Button Showcase
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience our revolutionary rectangular button system with HUD borders, 
              dual-color interactions, and advanced gaming animations.
            </p>
          </div>

          {/* Standard Rectangular Buttons */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Standard Rectangular Buttons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
              <Button size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download App
              </Button>
              <Button variant="outline" size="lg">
                <Play className="mr-2 h-5 w-5" />
                Get Started
              </Button>
              <Button variant="secondary" size="lg">
                <Target className="mr-2 h-5 w-5" />
                Join Tournament
              </Button>
            </div>
          </section>

          {/* Sharp Buttons */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Sharp Gaming Buttons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
              <SharpButton variant="red" size="lg">
                <Shield className="mr-2 h-5 w-5" />
                Pro Gaming
              </SharpButton>
              <SharpButton variant="white" size="lg">
                <Zap className="mr-2 h-5 w-5" />
                Quick Match
              </SharpButton>
              <SharpButton variant="red" size="md">
                <Users className="mr-2 h-4 w-4" />
                Team Up
              </SharpButton>
            </div>
          </section>

          {/* HUD Rectangular Buttons */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">HUD Rectangular Buttons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
              <HudRectangularButton 
                variant="red" 
                size="lg"
                active={activeButton === 'hud1'}
                onClick={() => setActiveButton(activeButton === 'hud1' ? null : 'hud1')}
              >
                <Target className="mr-2 h-5 w-5" />
                PRO GAMING PROFILE
              </HudRectangularButton>
              <HudRectangularButton 
                variant="white" 
                size="lg"
                active={activeButton === 'hud2'}
                onClick={() => setActiveButton(activeButton === 'hud2' ? null : 'hud2')}
              >
                <Shield className="mr-2 h-5 w-5" />
                ELITE TOURNAMENT
              </HudRectangularButton>
              <HudRectangularButton 
                variant="red" 
                size="md"
                active={activeButton === 'hud3'}
                onClick={() => setActiveButton(activeButton === 'hud3' ? null : 'hud3')}
              >
                <Zap className="mr-2 h-4 w-4" />
                QUICK ACTION
              </HudRectangularButton>
            </div>
          </section>

          {/* Gaming Rectangular Buttons with Advanced Effects */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Advanced Gaming Buttons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
              <GamingRectangularButton variant="red" size="lg" withGlow={true} withScan={true}>
                <Download className="mr-2 h-5 w-5" />
                MASTER LEAGUE
              </GamingRectangularButton>
              <GamingRectangularButton variant="white" size="lg" withGlow={true} withScan={true}>
                <Play className="mr-2 h-5 w-5" />
                CHAMPIONSHIP
              </GamingRectangularButton>
              <GamingRectangularButton variant="red" size="md" withGlow={false} withScan={true}>
                <Users className="mr-2 h-4 w-4" />
                SQUAD UP
              </GamingRectangularButton>
            </div>
          </section>

          {/* Dual Button Groups */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Dual Button Groups</h2>
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">Standard Dual Buttons</h3>
                <DualButtonGroup
                  redButton={
                    <SharpButton variant="red" size="lg">
                      <Download className="mr-2 h-5 w-5" />
                      Download Now
                    </SharpButton>
                  }
                  whiteButton={
                    <SharpButton variant="white" size="lg">
                      <Play className="mr-2 h-5 w-5" />
                      Watch Demo
                    </SharpButton>
                  }
                  gap="lg"
                />
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">HUD Dual Buttons</h3>
                <DualHudButtonGroup
                  redButtonText="JOIN TOURNAMENT"
                  whiteButtonText="SPECTATE MODE"
                  size="lg"
                  gap="lg"
                  redActive={activeButton === 'dual-red'}
                  whiteActive={activeButton === 'dual-white'}
                  onRedClick={() => setActiveButton(activeButton === 'dual-red' ? null : 'dual-red')}
                  onWhiteClick={() => setActiveButton(activeButton === 'dual-white' ? null : 'dual-white')}
                />
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">Advanced Gaming Dual Buttons</h3>
                <DualGamingButtonGroup
                  redButtonText="RANKED MATCH"
                  whiteButtonText="CASUAL PLAY"
                  size="lg"
                  gap="lg"
                />
              </div>
            </div>
          </section>

          {/* Interactive Demo */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Interactive Features Demo</h2>
            <div className="bg-card/20 border border-border rounded-lg p-8">
              <div className="text-center mb-8">
                <p className="text-muted-foreground mb-4">
                  Hover over buttons to see HUD brackets animate, click to activate scanning effects.
                </p>
                <p className="text-sm text-muted-foreground">
                  Red buttons transform to white on hover, white buttons transform to red on hover.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
                <HudRectangularButton 
                  variant="red" 
                  size="xl"
                  active={activeButton === 'demo1'}
                  onClick={() => setActiveButton(activeButton === 'demo1' ? null : 'demo1')}
                >
                  <Target className="mr-2 h-6 w-6" />
                  DEMO BUTTON
                </HudRectangularButton>
                
                <GamingRectangularButton 
                  variant="white" 
                  size="xl" 
                  withGlow={true} 
                  withScan={true}
                >
                  <Shield className="mr-2 h-6 w-6" />
                  ADVANCED DEMO
                </GamingRectangularButton>
              </div>
            </div>
          </section>

          {/* Button States */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Button States & Interactions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">Normal State</h3>
                <HudRectangularButton variant="red" size="lg">
                  NORMAL BUTTON
                </HudRectangularButton>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">Active State</h3>
                <HudRectangularButton variant="red" size="lg" active={true}>
                  ACTIVE BUTTON
                </HudRectangularButton>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">Disabled State</h3>
                <HudRectangularButton variant="red" size="lg" disabled={true}>
                  DISABLED BUTTON
                </HudRectangularButton>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
}