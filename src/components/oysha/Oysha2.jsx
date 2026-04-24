import vremeni_img from "../../assets/vremeni_img.png";

const Oysha2 = () => {
  return (
    <div className="container">
      <section>
        <div className="postavok flex px-[192px] justify-between items-center gap-[91px]">
          <div className="postavok_img">
            <img className="w-[702px] h-[272px]" src={vremeni_img} alt="" />
          </div>

          <div className="postavok_text">
            <h3 className="inter  text-[#212B31] mb-[10px]">
              Оптимизируйте и контролируйте свое прибытие на место
            </h3>
            <p className="text-[#72787D] inter w-[500px] h-[96px] ">
              Транспортные средства доставки прибывают в фиксированные
              промежутки времени в заранее назначенные отсеки, где разгрузочное
              оборудование готово и ждет их.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Oysha2;
