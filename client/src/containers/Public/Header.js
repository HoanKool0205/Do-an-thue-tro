import React, { useCallback} from "react";
import logo from '../../assets/thuetro.png'
import { Button } from "../../components";
import icons from "../../ultils/icons";
import { useNavigate } from "react-router-dom";
import { path } from "../../ultils/constant";


const { FaRegPenToSquare } = icons;

const Header = () => {
    const navigate = useNavigate();
    const goLogin = useCallback(() => {
        navigate(path.LOGIN);
    }, [navigate]);

    return (
        <div className="w-1100">
            <div className="w-full flex items-center justify-between py-1">
                <img 
                    src={logo}
                    alt="logo"
                    className='w-[240px] h-[70px] object-contain' 
                />
                <div className="flex items-center gap-2">
                    <small>Thuetro.com xin chào !</small>
                    <Button 
                        text={'Đăng nhập'} 
                        textColor={'text-white'} 
                        bgColor='bg-[#3961fb]' 
                        onClick={goLogin}
                    />
                    <Button 
                        text={'Đăng ký'} 
                        textColor={'text-white'} 
                        bgColor='bg-[#3961fb]' 
                        onClick={goLogin}
                    />
                    <Button 
                        text={'Đăng tin'} 
                        textColor={'text-white'} 
                        bgColor='bg-[#FF5723]' 
                        IconBefore={FaRegPenToSquare} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Header