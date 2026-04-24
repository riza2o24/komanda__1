import postavok_img from '../../assets/postavok_img.png'

function Oysha() {
  return (
    <div className="container">
      <section>
        <h1 className='text-[32px] ml-[450px] mb-[20px] inter font-[400]'>Что такое СтройКонтроль?</h1>
        <p className='text-[#72787D] w-[587px] h-[96px]   text-center ml-[368px] '>
          СтройКонтроль - это интеллектуальная система управления доставкой,
          предоставляющая информацию и контроль материалов на сложных
          строительных площадках в режиме реального времени.
        </p>
        <div className="postavok flex px-[192px] justify-between items-center gap-[91px]">
          <div className="postavok_text">
            <h3 className='inter  text-[#212B31] mb-[10px]'>Отслеживайте доставку по всей цепочке поставок</h3>
            <p className='text-[#72787D] inter w-[500px] h-[96px] '>
              От поставщика до субподрядчика - вы всегда знаете, где находятся
              ваши материалы, благодаря чему обычные отходы уходят в прошлое и
              сокращаются несчастные случаи на месте.
            </p>
          </div>
          <div className="postavok_img">
            <img className='w-[702px] h-[272px]' src={postavok_img} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Oysha;
