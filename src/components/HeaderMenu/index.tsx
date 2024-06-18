import { imajiCoffee } from "../../assets";

const HeaderMenu: React.FC = () => {
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
    <div className="flex w-full items-center justify-between bg-white px-56 py-10">
      <div>
        <img src={imajiCoffee} alt="" className="w-72 sm:w-52" />
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
          <div className="mx-2 flex h-12 w-24 items-center justify-center bg-tawny-brown font-semibold text-white">
            Cart (0)
          </div>
          <div className="mx-2 flex h-12 w-24 items-center justify-center border-[1px] border-tawny-brown bg-white text-tawny-brown">
            Sign In
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
