import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { Callback } from '@/features/Callback';
import { Signin } from '@/features/Signin';

import { useModalContext } from '@/entities/Modal';

import { PATH } from '@/shared/constants/path';
import { useUserContext } from '@/shared/model/userContext';
import { StContainer, StFlex } from '@/shared/styles/global';
import { Logo } from '@/shared/ui/Logo';

import { Nav, HeaderNavItems } from './Nav';
import { PhoneButton } from './PhoneButton';
import { StHeader, StMenu, StNextLinkStyled, StSpan } from './styled';

export const Header: FC = () => {
  const pathName = usePathname();
  const { user } = useUserContext();

  const { openModal } = useModalContext();

  return (
    <StHeader>
      <StContainer>
        <StFlex $alignItems={'center'}>
          <Logo />
          <StMenu $justifyContent='end' $gap={40}>
            <Nav navItems={HeaderNavItems} curPathName={pathName} />

            {/* TODO Заменить номер телефона в тексте и в href */}
            <StFlex $gap={8} $justifyContent='center'>
              <StNextLinkStyled href='tel:+74954954949' $justifyContent='center'>
                +7 (495) XXX XX XX
              </StNextLinkStyled>
              <PhoneButton onClick={() => openModal(<Callback />)} />
            </StFlex>

            {user ? (
              <StNextLinkStyled
                href={PATH.Profile}
                $justifyContent='center'
                className={`${pathName.includes(PATH.Profile) && 'active'}`}
              >
                {user.firstName}
              </StNextLinkStyled>
            ) : (
              <StSpan $justifyContent='center' onClick={() => openModal(<Signin />)}>
                Войти
              </StSpan>
            )}
          </StMenu>
        </StFlex>
      </StContainer>
    </StHeader>
  );
};
