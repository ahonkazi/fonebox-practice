import Header from '@/components/header/Header'
import LayoutDefault from '@/layout/LayoutDefault'
import React from 'react'
import HeroSection from './_components/HeroSection/HeroSection'
import AboutUsSection from './_components/AboutUsSection/AboutUsSection'
import OurServiceSection from './_components/OurServiceSection/OurServiceSection'
import PortfolioSection from './_components/PortfolioSection/PortfolioSection'
import ExperienceProductSection from './_components/ExperienceProductSection/ExperienceProductSection'
import ProductsSection from './_components/ProductsSection/ProductsSection'
import TestimonialSection from './_components/TestimonialSection/TestimonialSection'

const HomePage = () => {
    return (
        <LayoutDefault>
            <HeroSection />
            <AboutUsSection />
            <OurServiceSection />
            <PortfolioSection />
            <ExperienceProductSection />
            <ProductsSection />
            <TestimonialSection />
        </LayoutDefault>
    )
}

export default HomePage