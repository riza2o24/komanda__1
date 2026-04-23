import frame from "../../assets/Frame.png"
import frame2 from "../../assets/Frame (1).png"
import frame3 from "../../assets/Frame (2).png"

function Hero2() {
  return (
    <div className="flex justify-center gap-[45px] container mb-[50px]">
      <div className="text-center mt-[140px]">
        <img src={frame} alt="frame" className="m-auto" />
        <h4 className="text-[#212B31] text-[18px] font-[400] mt-[20px] mb-[10px] ">Повышение эффективности</h4>
        <p className="text-[#72787D] w-[325px] text-[16px] font-[400]  ">Эффективные проекты стоят дешевле и завершаются в срок.</p>
      </div>

      {/* 2 */}
      <div className="text-center mt-[140px]">
        <img src={frame2} alt="frame" className="m-auto" />
        <h4 className="text-[#212B31] text-[18px] font-[400] mt-[20px] mb-[10px] ">Снижение потерь</h4>
        <p className="text-[#72787D] w-[325px] text-[16px] font-[400]  ">Тщательно отслеживайте движение стройматериалов, чтобы избежать краж и повреждений.</p>
      </div>

      {/* 3 */}
      <div className="text-center mt-[140px]">
        <img src={frame3} alt="frame" className="m-auto" />
        <h4 className="text-[#212B31] text-[18px] font-[400] mt-[20px] mb-[10px] ">Повышение безопасности</h4>
        <p className="text-[#72787D] w-[325px] text-[16px] font-[400]  ">Обеспечьте здоровье и благополучие людей, работающих на вашей площадке.</p>
      </div>
    </div>
  )
}

export default Hero2