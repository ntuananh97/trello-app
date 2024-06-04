import HeaderMore from "../../Menus/HeaderMore";
import Recent from "../../Menus/Recent";
import Starred from "../../Menus/Starred";
import Templates from "../../Menus/Templates";
import Workspaces from "../../Menus/Workspaces";

function HeaderMenus() {
  return (
    <>
      <Workspaces sx={{display: {xs: 'none', md: 'block'} }}  />
      <Recent sx={{display: {xs: 'none', lg: 'block'} }} />
      <Starred sx={{display: {xs: 'none', lg: 'block'} }} />
      <Templates sx={{display: {xs: 'none', xl: 'block'} }} />

      <HeaderMore sx={{display: {xs: 'block', xl: 'none'} }} />
    </>
  );
}

export default HeaderMenus;
