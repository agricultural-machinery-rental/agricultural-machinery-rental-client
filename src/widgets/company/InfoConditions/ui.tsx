import { useContext } from 'react';

import { ModalContext } from '@/entities/Modal';

import { modalWindows } from '@/shared/modal/modalWindows';
import { StFlex } from '@/shared/styles/global';

import InfoConditionsLine1 from './assets/infoConditionsLine1.svg';
import InfoConditionsLine2 from './assets/infoConditionsLine2.svg';
import {
  StInfoConditions,
  StInfoConditionsWrap,
  StHeadingInfoConditions,
  StText,
  StParagraph,
  StLink,
  StInfoBlockFlex,
  StRulesLink,
} from './styled';

export const InfoConditions = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <StInfoConditions>
      <StInfoConditionsWrap>
        <StHeadingInfoConditions>
          Взять спецтехнику для сельского хозяйства в аренду стало проще
        </StHeadingInfoConditions>
        <StInfoBlockFlex>
          <StParagraph>
            Выбирайте технику в <StLink href='#'>каталоге</StLink>, позвоните нам или{' '}
            <StLink href='#'>оставьте заявку</StLink> на звонок
          </StParagraph>
          <StParagraph>Получите информацию о наличии спецтехники в указанные даты</StParagraph>
          <StParagraph>Оформите доставку спецтехники или заберите самостоятельно</StParagraph>
        </StInfoBlockFlex>

        <StFlex $justifyContent='center'>
          <InfoConditionsLine1 width={399} height={17} />
          <InfoConditionsLine2 width={416} height={17} />
        </StFlex>

        <StText>
          Перед бронированием, пожалуйста, ознакомьтесь с{' '}
          <StRulesLink onClick={() => openModal(modalWindows.rules)}>Правилами аренды</StRulesLink>{' '}
          сельхозтехники ОАО “Агропарк”
        </StText>
      </StInfoConditionsWrap>
    </StInfoConditions>
  );
};
