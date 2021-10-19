import { $sidebar, $sidebarHandler } from './selectors.js';

function handleSidebar() {
	const isCollapse = $sidebar.classList.toggle('is-collapse');

	$sidebarHandler.parentElement.ariaLabel = isCollapse
		? 'Expandir menu'
		: 'Colapsar menu';
}

function selectItem() {
	if (!this.classList.contains('is-active')) {
		document.querySelector('.is-active').classList.remove('is-active');
		this.classList.add('is-active');
	}
}

export { handleSidebar, selectItem };
