import { imajiCoffee } from "../../assets";

const HeaderMenu: React.FC  = () => {
  const menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Story",
      link: "/about",
    },
    {
      name: "Menu",
      link: "/contact",
    },
    {
      name: "Space",
      link: "/",
    },
    {
      name: "Community",
      link: "/about",
    },
    {
      name: "News",
      link: "/contact",
    },
  ];

  return (
    <div className="w-full bg-white py-10 flex justify-between px-56 items-center">
      <div>
        <img src={imajiCoffee} alt="" className="sm:w-52 w-72 " />
      </div>
      <div className="flex">
        <div className="flex items-center justify-center">
          {menu.map((item, index) => {
            return (
              <a
                key={index}
                href={item.link}
                className="mx-5 text-lg tracking-wider text-[#121212]"
              >
                {item.name}
              </a>
            );
          })}
        </div>
        <div className="flex">
          <div className="w-24 h-12 flex justify-center items-center bg-tawny-brown mx-2 text-white font-semibold">
            Cart (0)
          </div>
          <div className="w-24 h-12 flex justify-center items-center bg-white mx-2 text-tawny-brown border-tawny-brown border-[1px]">Sign In</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
