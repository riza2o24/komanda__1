import bar from '../../assets/bar.png'
import Gg from '../../assets/Group66.png'
import G from '../../assets/Group69.png'
import A from '../../assets/Group70.png'
import B from '../../assets/Group71.png'
import C from '../../assets/Group72.png'


 function Alisher() {
  return (
    <div className="container flex flex-col items-center justify-center h-[1560px] gap-[127px]">
      <div>
        <h1 className="h1 text-[#212B31] text-[32px] font-['Inter'] text-center font-normal">Почему нужно выбрать нас?</h1><br />
        <p className="p text-[#212B31] text-[20px] font-['Inter'] text-center font-normal">В строительной логистике всегда есть возможности для улучшения.</p> 
        <div className="card mt-[55px] flex gap-[78px]">
          <div className="card-text w-[458px] h-[538px] flex flex-col gap-[30px]">
          <div className="card-txt w-[458px] h-[130px] flex gap-[16px]">
            <img className='w-[48px] h-[48px]' src={bar} alt=""/>
            <div className="t flex flex-col gap-[10px]">
              <h2>Отмеченное наградами ПО</h2>
              <p>Всемирно известное программное обеспечение, признанное государственными учреждениями, инновационными группами и техническими организациями</p>
            </div>

          </div>
          <div className="card-txt w-[458px] h-[130px] flex gap-[16px]">
            <img className='w-[48px] h-[48px]' src={bar} alt=""/>
            <div className="t flex flex-col gap-[10px]">
              <h2>Отмеченное наградами ПО</h2>
              <p>Всемирно известное программное обеспечение, признанное государственными учреждениями, инновационными группами и техническими организациями</p>
            </div>

          </div>
          <div className="card-txt w-[458px] h-[130px] flex gap-[16px]">
            <img className='w-[48px] h-[48px]' src={bar} alt=""/>
            <div className="t flex flex-col gap-[10px]">
              <h2>Отмеченное наградами ПО</h2>
              <p>Всемирно известное программное обеспечение, признанное государственными учреждениями, инновационными группами и техническими организациями</p>
            </div>

          </div>
          <div className="card-txt w-[458px] h-[130px] flex gap-[16px]">
            <img className='w-[48px] h-[48px]' src={bar} alt=""/>
            <div className="t flex flex-col gap-[10px]">
              <h2>Отмеченное наградами ПО</h2>
              <p>Всемирно известное программное обеспечение, признанное государственными учреждениями, инновационными группами и техническими организациями</p>
            </div>

          </div>
          </div>
          <div className="card-img w-[614px] h-[516px] bg-[#F6F8F9] py-[60px] px-[87px] pb-[92px]">
        <h2 className='text-[30px]'>Мы видим огромный потенциал в таких решениях, как СтройКонтроль, и хотим использовать их для улучшения наших строительных процессов.</h2>
        <img className='mt-[28px]' src={Gg} alt="" />
          </div>
        </div>
      </div>

      <div className="img w-[672px] h-[443px]">
        <div className="imgs flex justify-between">
        <img src={G} alt="" />
        <img src={A} alt="" />
        <img src={B} alt="" />
        </div>
        <img className='ml-[230px] mt-[100px]' src={C} alt="" />
      </div>

    </div>
  )
}


export default Alisher