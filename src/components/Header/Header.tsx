import { FC } from 'react';

import UserSVG from '@/assets/icons/user.svg';
import NavigationSVG from '@/assets/icons/navigation.svg';
import { Logo } from '@/components/Logo';
import { Nav, HeaderNavItems } from '@/components/Nav';
import { StContainer, StFlex, StNextLink } from '@/styles/global';
import { type THeaderProps, StHeader, StMenu, StLocationLink } from './';

export const Header: FC<THeaderProps> = ({ location }) => {
  return (
    <StHeader>
      <StContainer>
        <StFlex $alignItems={'center'}>
          <Logo width={195} height={104} />
          <StMenu $justifyContent='end' $gap={50}>
            <Nav navItems={HeaderNavItems} />
            <StLocationLink $justifyContent='center' $alignItems='center' $gap={8}>
              <NavigationSVG width={24} height={24} />
              {location}
            </StLocationLink>
            {/* TODO Заменить номер телефона в тексте и в href */}
            <StNextLink href='tel:+74954954949' $justifyContent='center'>
              +7 (495) XXX XX XX
            </StNextLink>
            <StNextLink href='/' $justifyContent='center'>
              <UserSVG width={24} height={24} />
            </StNextLink>
          </StMenu>
        </StFlex>
      </StContainer>
    </StHeader>
  );
};
