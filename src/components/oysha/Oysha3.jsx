import mesto_img from "../../assets/mesto_img.png";

const Oysha3 = () => {
  return (
    <div className="container">
      <section>
        <div className="postavok flex px-[192px] justify-between items-center gap-[91px]">
          <div className="postavok_text">
            <h3 className="inter  text-[#212B31] mb-[10px]">
              Возьмите под контроль данные в режиме реального времени{" "}
            </h3>
            <p className="text-[#72787D] inter w-[500px] h-[96px] ">
              Интеллектуальная отчетность дает вам возможность принимать решения
              в зависимости от того, как обстоят дела в данный момент. Больше
              никаких ручных отчетов по заливке бетона или ежемесячной проверки
              10.000 накладных со счетами, все это доступно онлайн без
              каких-либо усилий.
            </p>
          </div>
          <div className="postavok_img">
            <img className="w-[702px] h-[272px]" src={mesto_img} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Oysha3;
