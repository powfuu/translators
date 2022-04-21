import React, { useEffect } from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';
import AOS from 'aos'
function Pricing() {
useEffect(()=>{
AOS.init({
duration:800
})
},[])
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading data-aos='zoom-in-up'>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo data-aos='zoom-in-right'>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Paquete Inicial</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>por mes</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Trabajo profesional +5 proyectos</PricingCardFeature>
                  <PricingCardFeature>Soporte 24/5</PricingCardFeature>
                  <PricingCardFeature>Analisis del proyecto</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Escoger Paquete</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo data-aos='zoom-in-up'>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Paquete Premium</PricingCardPlan>
                <PricingCardCost>$299.99</PricingCardCost>
                <PricingCardLength>por mes</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Trabajo profesional +20 proyectos</PricingCardFeature>
                  <PricingCardFeature>Soporte 24/7</PricingCardFeature>
                  <PricingCardFeature>Analisis del proyecto & ideologias e implementaciones</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Escoger Paquete</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo data-aos='zoom-in-left'>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Paquete Experto</PricingCardPlan>
                <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>por mes</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Trabajos ilimitados</PricingCardFeature>
                  <PricingCardFeature>Soporte continuo & Asesorasiones</PricingCardFeature>
                  <PricingCardFeature>Analisis & ideologias e implementaciones & Marketing</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Escoger Paquete</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
