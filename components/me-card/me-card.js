import { animated, useSpring, useTrail } from 'react-spring';
import { Avatar } from '../avatar/avatar';
import React from 'react';
import SocialLinks from '../social-links/social-links';

export const MeCard = () => {
  const animProps = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(50px)' }
  });
  const buttonAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' }
  });

  const infoItems = [
    <div key="name" className="name text-xl sm:text-2xl font-bold">
      Masood Rezazadeh
    </div>,
    <div key="description" className="title text-sm sm:text-lg text-grey-600">
      Web Designer / Developer
    </div>
  ];

  const fadeDownTrail = useTrail(infoItems.length, {
    opacity: 1,
    transform: 'translateY(0px)',
    from: {
      opacity: 0,
      transform: 'translateY(-30px)'
    }
  });

  return (
    <div className="flex flex-col justify-between sm:items-stretch sm:flex-row mb-28 relative top-12 sm:top-0">
      <div className="flex flex-col items-center sm:items-stretch sm:flex-row gap-2">
        <animated.div style={animProps}>
          <div className="w-28 h-28 sm:w-32 sm:h-32">
            <Avatar className="rounded-full sm:rounded-none" />
          </div>
        </animated.div>
        <div className="flex flex-col items-center sm:items-stretch gap-4 sm:gap-0 sm:justify-between">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex flex-col items-center sm:items-start">
              {fadeDownTrail.map((props, index) => {
                return (
                  <animated.div key={index} style={props}>
                    {infoItems[index]}
                  </animated.div>
                );
              })}
            </div>
          </div>
          <animated.div style={buttonAnimation}>
            <button
              disabled
              className="text-sm bg-grey-900 text-white font-bold sm:w-1/2 flex items-center justify-center px-4 py-2 mb-1.5">
              Resume <span className="pl-2 pt-0.5 app-text-xs">▼</span>
            </button>
          </animated.div>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};
