import DashHeroOne from '../../components/main/hero/DashHeroOne'
import { useNavigate } from 'react-router-dom'
import MainProductOne from '../../components/main/products/MainProductOne';
import ScrollReveal from '../../components/ui/animation/ScrollReveal';
import FullScreenPoster from '../../components/main/banners/FullScreenPoster';
import MainTopSellingProducts from '../../components/main/products/MainTopSellingProducts';

function DashboardPage() {
    const navigate = useNavigate();
    return (
        <div className='flex-1 flex gap-8 flex-col pb-20'>
            <DashHeroOne navigation={navigate} />
            <MainProductOne navigate={navigate} />
            <FullScreenPoster />
            <MainTopSellingProducts />
        </div>
    )
}

export default DashboardPage