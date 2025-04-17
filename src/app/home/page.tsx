import { Box, Collapse } from '@mui/material';
import React from 'react';
import HeroSection from './components/HeroSection';
import CompanysSection from './components/CompanysSection';
import IntegrationSteps from './components/IntegrationSteps';
import EmpowerSection from './components/EmpowerSection';
import SmartXSection from './components/SmartXSection';
import MarketingSection from './components/MarketingSection';
import CustomerSupport from './components/CustomerSupport';
import ExplorSection from './components/ExplorSection';
import ClientsWords from './components/ClientsWords';
import CollaborateSection from './components/CollaborateSection';
import Footer from '@/components/Footer/Footer';

const HomePage = () => {
  return (
    <Box>
      {/* hero section  */}
      <HeroSection />

      {/* Trusted by great companies */}
      <CompanysSection />

      {/* Easy 3 Steps Integration */}
      <IntegrationSteps />

      {/* Empower your project's success with our agency */}
      <EmpowerSection />

      {/* Smartx has the full types of potential for your startup business */}
      <SmartXSection />

      {/* Comprehensive marketing team strategy and direction */}
      <MarketingSection />

      {/* 24/7 customer support & services */}
      <CustomerSupport />

      {/* Explore our latest resources and updates */}
      <ExplorSection />

      {/* Words from happy clients */}
      <ClientsWords />

      {/* Collaborate on the next big thing together */}
      <CollaborateSection />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default HomePage;
