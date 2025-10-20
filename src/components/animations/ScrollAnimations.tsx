import React from 'react';
import { useScrollAnimation, ScrollAnimationOptions } from '../hooks/useScrollAnimation';

interface AnimationWrapperProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'rotateIn' | 'slideInLeft' | 'slideInRight' | 'bounceIn';
  className?: string;
  options?: ScrollAnimationOptions;
}

export function AnimationWrapper({ 
  children, 
  animation = 'fadeInUp', 
  className = '', 
  options = {} 
}: AnimationWrapperProps) {
  const { elementRef, isVisible } = useScrollAnimation(options);

  const animationClasses = {
    fadeInUp: isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8',
    fadeInDown: isVisible ? 'animate-fade-in-down opacity-100' : 'opacity-0 -translate-y-8',
    fadeInLeft: isVisible ? 'animate-fade-in-left opacity-100' : 'opacity-0 -translate-x-8',
    fadeInRight: isVisible ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-8',
    scaleIn: isVisible ? 'animate-scale-in opacity-100 scale-100' : 'opacity-0 scale-75',
    rotateIn: isVisible ? 'animate-rotate-in opacity-100 rotate-0' : 'opacity-0 rotate-12',
    slideInLeft: isVisible ? 'animate-slide-in-left opacity-100 translate-x-0' : 'opacity-0 -translate-x-full',
    slideInRight: isVisible ? 'animate-slide-in-right opacity-100 translate-x-0' : 'opacity-0 translate-x-full',
    bounceIn: isVisible ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-50',
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  );
}

export function FadeInUp({ children, className = '', options = {} }: Omit<AnimationWrapperProps, 'animation'>) {
  return <AnimationWrapper animation="fadeInUp" className={className} options={options}>{children}</AnimationWrapper>;
}

export function FadeInLeft({ children, className = '', options = {} }: Omit<AnimationWrapperProps, 'animation'>) {
  return <AnimationWrapper animation="fadeInLeft" className={className} options={options}>{children}</AnimationWrapper>;
}

export function FadeInRight({ children, className = '', options = {} }: Omit<AnimationWrapperProps, 'animation'>) {
  return <AnimationWrapper animation="fadeInRight" className={className} options={options}>{children}</AnimationWrapper>;
}

export function ScaleIn({ children, className = '', options = {} }: Omit<AnimationWrapperProps, 'animation'>) {
  return <AnimationWrapper animation="scaleIn" className={className} options={options}>{children}</AnimationWrapper>;
}

export function SlideInLeft({ children, className = '', options = {} }: Omit<AnimationWrapperProps, 'animation'>) {
  return <AnimationWrapper animation="slideInLeft" className={className} options={options}>{children}</AnimationWrapper>;
}

export function SlideInRight({ children, className = '', options = {} }: Omit<AnimationWrapperProps, 'animation'>) {
  return <AnimationWrapper animation="slideInRight" className={className} options={options}>{children}</AnimationWrapper>;
}

export function BounceIn({ children, className = '', options = {} }: Omit<AnimationWrapperProps, 'animation'>) {
  return <AnimationWrapper animation="bounceIn" className={className} options={options}>{children}</AnimationWrapper>;
}