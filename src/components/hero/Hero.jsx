import Rectangle from "../../assets/Rectangle.png"
import Rectangle2 from "../../assets/Rectangle (1).png"

function Hero() {
  return (
    <div className="items-center text-center container">
      <h1 className="text-[#212B31] text-[48px] font-[400] w-[818px]  flex justify-center m-auto  inter mt-[70px]">Умная доставка материалов для сложных строительных площадок</h1>

      <div className="flex items-center justify-center gap-[16px] mt-[30px] mb-[80px]">
        <button className="text-[#FFFFFF] text-[17px] font-[400] px-[25px] py-[13px] bg-[#212B31] inter rounded-[4px]">Заказать демо</button>
        <button className="text-[#000000] text-[17px] font-[400] px-[25px] py-[13px] border-[#DADEDF] inter border-[2px] rounded-[4px]">Подробнее</button>
      </div>

      <img src={Rectangle} alt="Rectangle"  className="mb-[35px] block m-auto"/>

      <img src={Rectangle2} alt="Rectangle" className="m-auto"/>
    </div>
  )
}


export default Hero

