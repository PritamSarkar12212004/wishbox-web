import DashHeroOne from '../../components/main/hero/DashHeroOne'
import { useNavigate } from 'react-router-dom'
import MainProductOne from '../../components/main/products/MainProductOne';
import FullScreenPoster from '../../components/main/banners/FullScreenPoster';
import MainTopSellingProducts from '../../components/main/products/MainTopSellingProducts';
import ScrollReveal from '../../components/ui/animation/ScrollReveal';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApiCallFetchDashBoard from '../../api/dashboard/ApiCallFetchDashBoard';
import ApiCallFetchIdCart from '../../api/cart/ApiCallFetchIdCart';
import ApiCallFetchWatchList from '../../api/watchlist/ApiCallFetchWatchList';

function DashboardPage() {
    const userId = useSelector((state: any) => state.userDataSlice.mainUserID)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            try {
                await Promise.all([
                    ApiCallFetchDashBoard({
                        dispatch,
                    }),
                    ApiCallFetchWatchList({
                        data: userId,
                        dispatch: dispatch
                    }),
                    ApiCallFetchIdCart({
                        dispatch,
                        userId,
                    }),
                ]);
            } catch (error) {
                console.error("Fetch Error:", error);
            }
        };

        if (userId) {
            fetchData();
        }
    }, [userId]);
    return (
        <ScrollReveal>
            <div className='flex-1 flex gap-8 flex-col pb-20'>
                <DashHeroOne navigation={navigate} />
                <MainProductOne navigate={navigate} />
                <FullScreenPoster />
                <MainTopSellingProducts navigation={navigate} dispatch={dispatch} />
            </div>
        </ScrollReveal>
    )
}

export default DashboardPage