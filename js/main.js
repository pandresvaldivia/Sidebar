import { $sidebarHandler, $menuItems } from './selectors.js';
import { handleSidebar, selectItem } from './functions.js';

$sidebarHandler.addEventListener('click', handleSidebar);

for (const menuItem of $menuItems) {
	menuItem.addEventListener('click', selectItem);
}
