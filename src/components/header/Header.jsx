import logo from "../../assets/logo.png"

 function Header() {
  return (
    <header className="flex items-center justify-between container h-[100px]">
      <img src={logo} alt="logo" />

      <ul className="flex items-center gap-[22px] ">
        <li className="text-[#72787D] text-[16px] font-[400] inter">Главная</li>

        <li className="text-[#72787D] text-[16px] font-[400] inter">О нас</li>

        <li className="text-[#72787D] text-[16px] font-[400] inter">Продукция</li>

        <li className="text-[#72787D] text-[16px] font-[400] inter">Процесс</li>

        <li className="text-[#72787D] text-[16px] font-[400] inter">Надёжность</li>

        <li className="text-[#72787D] text-[16px] font-[400] inter">Клиенты</li>

        <li className="text-[#72787D] text-[16px] font-[400] inter">Связаться с нами</li>

        <button className="px-[20px] py-[10px] rounded-[4px] bg-[#212B31] text-[#fff] text-[16px] font-[400] inter ">Заказать демо</button>
      </ul>
    </header>
  )
}

export default Header