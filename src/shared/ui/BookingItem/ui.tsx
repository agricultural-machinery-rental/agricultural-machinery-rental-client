import Image from 'next/image';

import Edit from '@/shared/icons/edit.svg';

import photoJPG from './assets/photo.jpg';
import {
  StComment,
  StBookingItem,
  StDates,
  StDescriptionBlock,
  StImage,
  StTitle,
  StEditButton,
} from './styled';

const BookingItem = () => {
  return (
    <StBookingItem>
      <StImage>
        <Image src={photoJPG} layout='fill' alt='Картинка трактора' />
      </StImage>
      <StDescriptionBlock>
        <StTitle>Трактор R-40</StTitle>
        <StDates>Забронирован с 30.07 по 12.08</StDates>
        <StComment>
          Обл. Ростовская, район Зерноградский, поселок Донской. Аренда с экипажем.
        </StComment>
        <StEditButton>
          <Edit width={24} height={24} />
        </StEditButton>
      </StDescriptionBlock>
    </StBookingItem>
  );
};

export { BookingItem };
