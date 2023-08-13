import { Metadata } from 'next';
import { Catalog } from '@/widgets/Catalog';
import Filters from '@/widgets/Catalog/filters';
import { StFlex, StHeading2 } from '@/shared/styles/global';

export const metadata: Metadata = {
  title: 'Catalog',
};

const PageCatalog = () => {
  return (
    <>
      <StHeading2>Каталог</StHeading2>
      <StFlex $flexDirection={'row'}>
        {/*{TODO Awaiting for Filters module completion}*/}
        <Filters />
        <Catalog />
      </StFlex>
    </>
  );
};

export default PageCatalog;
