import SloganTitle from '@/app/components/landingPage/SloganTitle';
import OurProfessionals from '@/app/components/professional/OurProfessionals';
import OurServices from '@/app/components/service/OurServices';
import ContainerWithBackground from '@/app/components/shared/ContainerWithBackground';
import OurCustomers from '@/app/components/customer/OurCustomers';

export default function LandingPage() {
  return (
    <div>
      <SloganTitle />;
      <ContainerWithBackground image={'/banners/servicos.webp'}>
        <OurServices />
      </ContainerWithBackground>
      <ContainerWithBackground image={'/banners/profissionais.webp'}>
        <OurProfessionals />
      </ContainerWithBackground>
      <ContainerWithBackground image={'/banners/clientes.webp'}>
        <OurCustomers />
      </ContainerWithBackground>
    </div>
  );
}
