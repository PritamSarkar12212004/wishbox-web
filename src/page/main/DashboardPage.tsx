import DashHeroOne from '../../components/main/hero/DashHeroOne'
import { useNavigate } from 'react-router-dom'
import MainProductOne from '../../components/main/products/MainProductOne';
import FullScreenPoster from '../../components/main/banners/FullScreenPoster';
import MainTopSellingProducts from '../../components/main/products/MainTopSellingProducts';
import ScrollReveal from '../../components/ui/animation/ScrollReveal';

function DashboardPage() {
    const navigate = useNavigate();
    return (
        <ScrollReveal>
            <div className='flex-1 flex gap-8 flex-col pb-20'>
                <DashHeroOne navigation={navigate} />
                <MainProductOne navigate={navigate} />
                <FullScreenPoster />
                <MainTopSellingProducts />
            </div>
        </ScrollReveal>
    )
}

export default DashboardPage