import styled from "styled-components";
import image1 from "../../assets/drones/아리온스콜피온.png";

import { Outlet, Link, useLocation } from "react-router-dom";

export function Order() {
  const location = useLocation();
  const card = location.state.card;
  return (
    <>
      <div className="container flex flex-row justify-between bg-white w-[1200px] h-[calc(100%-5rem)] p-12 rounded-3xl shadow-custom">
        <div className="flex flex-col">
          <p className="font-normal text-5xl">함께할 준비가 거의 끝났습니다</p>
          <p className="py-6 font-normal text-base text-[#595969]">
            아래 정보를 입력 후 상담 신청이 가능합니다.
            <br />
            상담 신청을 완료하면 1주일 이내로 상담 일정을 잡으실 수 있습니다.
          </p>
          <div className="flex flex-col justify-between grow">
            <p className="font-sans font-bold text-xl">이름</p>
            <input
              type="text"
              className="w-[600px] h-12 px-3 bg-[#F8F8F9] rounded-[10px]"
            />
            <p className="font-sans font-bold text-xl">이메일</p>
            <input
              type="text"
              className="w-[600px] h-12 px-3 bg-[#F8F8F9] rounded-[10px]"
            />
            <p className="font-sans font-bold text-xl">사용 목적</p>
            <input
              type="text"
              className="w-[600px] h-12 px-3 bg-[#F8F8F9] rounded-[10px]"
            />
            <p className="font-sans font-bold text-xl">예상 구매 수량</p>
            <input
              type="number"
              className="w-[600px] h-12 px-3 bg-[#F8F8F9] rounded-[10px]"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="w-full px-12 py-8 bg-[#F8F8F9] rounded-lg border-2 border-stone-400">
            <img src={card.image} />
            <p className="pt-8 pb-2 text-black text-3xl font-bold text-center">
              {card.name}
            </p>
            <p className="text-[#8B8B8B] text-3xl font-bold text-center">
              {card.case}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-sans font-semibold text-xl text-[#808080] leading-9">
              제조사 : 무지개 연구소
            </p>
            <p className="font-sans font-semibold text-xl text-[#808080] leading-9">
              자체중량 : 5.5kg
            </p>
            <p className="font-sans font-semibold text-xl text-[#808080] leading-9">
              최대속도 : 54km/h
            </p>
            <p className="font-sans font-semibold text-xl text-[#808080] leading-9">
              비행시간 : 20분
            </p>
          </div>
          <Link to="/drone/complete">
            <button className="w-full h-12 bg-[#3A3A3A] rounded-lg text-white">
              상담 신청
            </button>
          </Link>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Order;
